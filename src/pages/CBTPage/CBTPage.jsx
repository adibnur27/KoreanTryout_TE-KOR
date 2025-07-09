import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import Swal from "sweetalert2";

const CBTPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { testAttemptId } = useParams();
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(null);
  const navigate = useNavigate();

  // Fetch soal ujian
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/test-attempts/${testAttemptId}/details`);
        const resData = res.data.data;

        const start = new Date(resData.startTime).getTime();
        const finish = new Date(resData.finishTime).getTime();
        const now = new Date().getTime();
        const remaining = finish - now;

        setData(resData);
        setTimeLeft(remaining > 0 ? Math.floor(remaining / 1000) : 0);
      } catch (error) {
        Swal.fire("Gagal", "Gagal memuat soal ujian.", "error");
        console.error(error);
      }
    };
    fetchData();
  }, [testAttemptId]);

  // Countdown timer dan auto submit
  useEffect(() => {
    if (timeLeft === null || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit(true); // auto submit
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted]);

  const isImageUrl = (text) => /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp)$/i.test(text);

  const handleAnswer = async (questionId, optionId) => {
    const newAnswers = { ...answers, [questionId]: optionId };
    setAnswers(newAnswers);
    localStorage.setItem(`answers_${testAttemptId}`, JSON.stringify(newAnswers));

    try {
      await axiosInstance.post(`/test-attempts/${testAttemptId}/answer`, {
        questionId,
        optionId,
      });
      console.log("Jawaban berhasil dikirim ke server");
    } catch (error) {
      console.error("Gagal mengirim jawaban ke server:", error);
      // Optional: Tampilkan alert ringan atau toast
    }
  };
  useEffect(() => {
    const savedAnswers = localStorage.getItem(`answers_${testAttemptId}`);
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, [testAttemptId]);

  const handleNext = () => {
    if (currentIndex < data.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = async (auto = false) => {
    if (isSubmitted) return;

    try {
      const formattedAnswers = Object.entries(answers).map(([questionId, optionId]) => ({
        questionId,
        selectedOptionId: optionId,
      }));

      await axiosInstance.post(`/test-attempts/${testAttemptId}/submit`, {
        answers: formattedAnswers,
      });

      setIsSubmitted(true);
      Swal.fire({
        title: auto ? "Waktu Habis!" : "Ujian Selesai!",
        text: auto ? "Waktu ujian telah habis dan jawabanmu telah otomatis disubmit." : "Jawaban telah disubmit. Silakan cek riwayat tryout di profil kamu.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/profile");
      });
    } catch (error) {
      Swal.fire("Gagal", "Gagal submit jawaban.", "error");
      console.error(error);
    }
  };

  const formatTime = (seconds) => {
    if (seconds === null || isNaN(seconds)) return "--:--";
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Memuat soal...</p>
      </div>
    );
  }

  const currentQuestion = data.questions[currentIndex];
  const userAnswer = answers[currentQuestion.id];

  return (
    <div className="min-h-screen bg-gradient-to-t from-light-red via-white to-light-blue py-5">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-xl transition duration-300">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{data.testPackageName}</h2>
          <span className="text-red-600 font-bold text-lg">
            🕒 {formatTime(timeLeft)}
          </span>
        </div>

        {/* Navigasi soal */}
        <div className="flex flex-wrap gap-2 mb-6">
          {data.questions.map((q, index) => {
            const isAnswered = answers[q.id];
            const isActive = currentIndex === index;
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(index)}
                className={`w-10 h-10 rounded-full text-sm font-bold
                  ${
                    isAnswered
                      ? "bg-green-500 text-white"
                      : "bg-gray-300 text-black"
                  }
                  ${isActive ? "ring-2 ring-blue-500" : ""}
                `}
              >
                {index + 1}
              </button>
            );
          })}
        </div>

        {/* Soal */}
        <p className="mb-2 font-medium">
          Soal {currentIndex + 1} dari {data.questions.length}
        </p>
        <p className="mb-4">{currentQuestion.questionText}</p>

        {currentQuestion.imageUrl && <img src={currentQuestion.imageUrl} alt="Soal" className="mb-4 rounded" />}

        {currentQuestion.audioUrl && (
          <audio controls className="mb-4">
            <source src={currentQuestion.audioUrl} type="audio/mp3" />
            Browser tidak mendukung audio.
          </audio>
        )}

        {/* Pilihan jawaban */}
        <div className="space-y-2 mb-4">
          {currentQuestion.options.map((opt, i) => (
            <button key={opt.id} onClick={() => handleAnswer(currentQuestion.id, opt.id)} className={`flex w-full border px-4 py-2 rounded text-left ${userAnswer === opt.id ? "bg-blue-200 font-bold" : "hover:bg-gray-100"}`}>
              <span className="block border-black w-7 h-7 text-center me-4 border-2 rounded-full">{i + 1}</span>
              {isImageUrl(opt.optionText) ? <img src={opt.optionText} alt="Option" className="h-24 rounded object-contain" /> : <span>{opt.optionText}</span>}
            </button>
          ))}
        </div>

        {/* Navigasi bawah */}
        <div className="flex justify-between items-center mt-6">
          <button onClick={handlePrevious} disabled={currentIndex === 0} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50">
            Sebelumnya
          </button>

          {currentIndex === data.questions.length - 1 ? (
            <button onClick={() => handleSubmit(false)} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Selesai & Submit
            </button>
          ) : (
            <button onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Selanjutnya
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CBTPage;

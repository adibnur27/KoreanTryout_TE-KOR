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
  const [violationCount, setViolationCount] = useState(0); // 🔐 counter pelanggaran
  const navigate = useNavigate();

  // 🔐 Fungsi untuk menangani pelanggaran
  const registerViolation = (reason) => {
    setViolationCount((prev) => {
      const newCount = prev + 1;

      if (newCount >= 3) {
        Swal.fire({
          title: "Ujian Dihentikan",
          text: `Kamu melanggar aturan sebanyak ${newCount} kali. Ujian akan disubmit otomatis.`,
          icon: "error",
        }).then(() => {
          handleSubmit(true); // auto submit
        });
      } else {
        Swal.fire({
          title: "Peringatan!",
          text: `${reason} (${newCount}/3 pelanggaran)`,
          icon: "warning",
        });
      }

      return newCount;
    });
  };

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

  // 🔐 Aturan anti-cheat setelah data tersedia
  useEffect(() => {
    if (!data) return;


    // Deteksi keluar tab
    const handleBlur = () => {
      registerViolation("Kamu keluar dari tab browser.");
    };

    

    // Blokir klik kanan
    const handleContextMenu = (e) => {
      e.preventDefault();
      Swal.fire("Dilarang", "Klik kanan dinonaktifkan saat ujian!", "info");
    };

    // Blokir kombinasi tombol
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && ["c", "u", "s", "a"].includes(e.key.toLowerCase())) ||
        e.key === "F12"
      ) {
        e.preventDefault();
        Swal.fire("Dilarang", "Shortcut ini dinonaktifkan selama ujian!", "error");
      }
    };

    window.addEventListener("blur", handleBlur);
    window.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [data]);

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
    } catch (error) {
      console.error("Gagal mengirim jawaban ke server:", error);
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
    <div className="min-h-screen flex bg-gradient-to-t from-light-red  to-light-blue py-2 px-5 relative">
      <div className="w-2/3 p-6 pt-0 bg-white shadow rounded-xl transition duration-300 ms-5 relative">
        {/* Navigasi soal */}
        <div className="text-center mt-5 text-lg">
          <p className="mb-2 font-bold">
            Soal {currentIndex + 1} dari {data.questions.length}
          </p>
        </div>

        <p className="mt-8 mb-5">{currentQuestion.questionText}</p>

        {currentQuestion.imageUrl && <img src={currentQuestion.imageUrl} alt="Soal" className="mb-4 rounded" />}

        {currentQuestion.audioUrl && (
          <audio key={currentQuestion.audioUrl} controls className="mb-4">
            <source src={currentQuestion.audioUrl} type="audio/mp3" />
            Browser tidak mendukung audio.
          </audio>
        )}

        <div className="space-y-2">
          {currentQuestion.options.map((opt, i) => (
            <button key={opt.id} onClick={() => handleAnswer(currentQuestion.id, opt.id)} className={`flex w-full border px-4 py-2 rounded text-left ${userAnswer === opt.id ? "bg-blue-200 font-bold" : "hover:bg-gray-100"}`}>
              <span className="block border-black w-7 h-7 text-center me-4 border-2 rounded-full">{i + 1}</span>
              {isImageUrl(opt.optionText) ? <img src={opt.optionText} alt="Option" className="h-24 rounded object-contain" /> : <span>{opt.optionText}</span>}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mt-5">
          <button onClick={handlePrevious} disabled={currentIndex === 0} className="px-4 py-1 flex gap-2 font-semibold rounded bg-light-red">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-[2px]" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
            <p>Sebelumnya</p>
          </button>
          {currentIndex === data.questions.length - 1 ? (
            <button onClick={() => handleSubmit(false)} className="px-4 py-1 font-semibold bg-green-600  text-white rounded hover:bg-green-700">
              Selesai & Submit
            </button>
          ) : (
            <button onClick={handleNext} className="px-4 py-1 flex gap-2  font-semibold rounded bg-light-blue">
              <p>Selanjutnya</p>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="mt-[2px]" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
              </div>
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 max-w-sm  font-opensans fixed right-8 top-1">
        <div className="rounded-xl bg-white px-6 py-2">
          <p className="text-lg font-bold text-kr-blue">Test</p>
          <h2 className="text-xl font-bold ">{data.testPackageName}</h2>
        </div>

        <div className="rounded-xl bg-white px-6 py-2">
          <p className="text-lg font-bold text-kr-blue">Sisa Waktu</p>
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-[2px] me-2" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/></svg>
          <h2 className="text-black text-xl font-bold">00:{formatTime(timeLeft)}</h2>
          </div>
        </div>

        <div className="rounded-xl bg-white px-6 py-4">
          <p className="text-lg font-bold text-red-600">Pelanggaran</p>
          <h2 className="text-black text-xl font-bold ">{violationCount} / 3</h2>
        </div>

        <div className="rounded-xl bg-white px-6 py-4">
          <p className="text-xl font-bold text-kr-blue">Soal</p>
          <div className="flex flex-wrap gap-2 my-4 ">
            {data.questions.map((q, index) => {
              const isAnswered = answers[q.id];
              const isActive = currentIndex === index;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-10 h-10 rounded-full text-sm font-bold
                  ${isAnswered ? "bg-green-500 text-white" : "bg-gray-300 text-black"}
                  ${isActive ? "ring-2 ring-blue-500" : ""}
                `}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CBTPage;

import React, { useEffect, useState } from "react";
import axios from "axios";

// Dummy data
const dummyData = {
  testPackageName: "Simulasi Tes Korea",
  remainingDuration: 3600,
  questions: [
    {
      id: "q1",
      questionText: "Apa arti dari 안녕하세요?",
      imageUrl: "",
      audioUrl: "",
      options: [
        { id: "a", optionText: "Selamat tinggal" },
        { id: "b", optionText: "Halo" },
        { id: "c", optionText: "Terima kasih" },
        { id: "d", optionText: "Maaf" },
      ],
    },
    {
      id: "q2",
      questionText: "Pilih huruf vokal Korea!",
      imageUrl: "",
      audioUrl: "",
      options: [
        { id: "a", optionText: "ㄱ" },
        { id: "b", optionText: "ㅏ" },
        { id: "c", optionText: "ㅁ" },
        { id: "d", optionText: "ㅂ" },
      ],
    },
    {
      id: "q3",
      questionText: "Huruf konsonan berikut ini adalah?",
      imageUrl: "",
      audioUrl: "",
      options: [
        { id: "a", optionText: "ㅏ" },
        { id: "b", optionText: "ㅗ" },
        { id: "c", optionText: "ㅁ" },
        { id: "d", optionText: "ㅣ" },
      ],
    },
  ],
};

// Anti-cheat Hook
function useAntiCheat() {
  const [violationCount, setViolationCount] = useState(0);
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const showAlert = (message) => {
      if (violationCount < 3) {
        alert(message);
        setViolationCount((prev) => prev + 1);
        setIsBlurred(true);
        setTimeout(() => setIsBlurred(false), 3000); // hilangkan blur setelah 3 detik
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        showAlert("🚨 Anda tidak boleh berpindah tab selama ujian berlangsung.");
      }
    };

    const handleWindowBlur = () => {
      showAlert("🚨 Jangan meninggalkan halaman ujian!");
    };

    const prevent = (e) => e.preventDefault();

    const disableKeyShortcuts = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
        (e.ctrlKey && ["u", "c", "v", "x", "s"].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleWindowBlur);
    document.addEventListener("contextmenu", prevent);
    document.addEventListener("keydown", disableKeyShortcuts);
    document.addEventListener("copy", prevent);
    document.addEventListener("paste", prevent);
    document.addEventListener("cut", prevent);
    document.addEventListener("selectstart", prevent);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleWindowBlur);
      document.removeEventListener("contextmenu", prevent);
      document.removeEventListener("keydown", disableKeyShortcuts);
      document.removeEventListener("copy", prevent);
      document.removeEventListener("paste", prevent);
      document.removeEventListener("cut", prevent);
      document.removeEventListener("selectstart", prevent);
    };
  }, [violationCount]);

  return { isBlurred };
}

const CBTPage = ({ testAttemptId }) => {
  const [data, setData] = useState(dummyData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(dummyData.remainingDuration);
  const { isBlurred } = useAntiCheat(); // Panggil anti-cheat hook

  // ⏱ Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          alert("⏱ Waktu habis!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000); // 1 detik interval

    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (questionId, optionId) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

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

  const handleSubmit = async () => {
    try {
      const formattedAnswers = Object.entries(answers).map(([questionId, answer]) => ({
        questionId,
        selectedOptionId: answer,
      }));

      // Simulasi POST
      console.log("Submit:", formattedAnswers);

      alert("✅ Ujian selesai! Jawaban telah disubmit.");
    } catch (error) {
      alert("❌ Gagal submit jawaban.");
      console.error(error);
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const currentQuestion = data.questions[currentIndex];
  const userAnswer = answers[currentQuestion.id];

  return (
    <div className="min-h-screen bg-gradient-to-t from-light-red via-white to-light-blue pt-5">
      <div className={`max-w-3xl mx-auto mt-10 p-6 bg-white shadow rounded-xl transition duration-300 ${isBlurred ? "blur-sm pointer-events-none" : ""}`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{data.testPackageName}</h2>
          <span className="text-red-600 font-bold text-lg">🕒 {formatTime(timeLeft)}</span>
        </div>

        {/* Navigasi nomor soal */}
        <div className="flex flex-wrap gap-2 mb-6">
          {data.questions.map((q, index) => {
            const isAnswered = answers[q.id];
            const isActive = currentIndex === index;
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(index)}
                className={`
                  w-10 h-10 rounded-full text-sm font-bold
                  ${isAnswered ? "bg-green-500 text-white" : "bg-gray-300 text-black"}
                  ${isActive ? "ring-2 ring-blue-500" : ""}
                `}
              >
                {index + 1}
              </button>
            );
          })}
        </div>

        {/* Soal */}
        <p className="mb-2 font-medium">Soal {currentIndex + 1} dari {data.questions.length}</p>
        <p className="mb-4">{currentQuestion.questionText}</p>

        {currentQuestion.imageUrl && (
          <img src={currentQuestion.imageUrl} alt="Soal" className="mb-4 rounded" />
        )}

        {currentQuestion.audioUrl && (
          <audio controls className="mb-4">
            <source src={currentQuestion.audioUrl} type="audio/mp3" />
            Browser tidak mendukung audio.
          </audio>
        )}

        {/* Pilihan jawaban */}
        <div className="space-y-2 mb-4">
          {currentQuestion.options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleAnswer(currentQuestion.id, opt.id)}
              className={`w-full border px-4 py-2 rounded text-left ${
                userAnswer === opt.id ? "bg-blue-200 font-bold" : "hover:bg-gray-100"
              }`}
            >
              {opt.optionText}
            </button>
          ))}
        </div>

        {/* Navigasi bawah */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Sebelumnya
          </button>

          {currentIndex === data.questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Selesai & Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Selanjutnya
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CBTPage;

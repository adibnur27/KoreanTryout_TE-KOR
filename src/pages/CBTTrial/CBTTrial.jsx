import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const dummyData = {
  testPackageName: "Simulasi Tryout Bahasa Korea",
  remainingDuration: 600, // 10 menit
  questions: [
    {
      id: "q1",
      questionText: "Apa arti dari kata '안녕하세요'?",
      options: [
        { id: "a", optionText: "Terima kasih" },
        { id: "b", optionText: "Halo" },
        { id: "c", optionText: "Selamat tinggal" },
        { id: "d", optionText: "Maaf" },
      ],
      correctOptionId: "b",
    },
    {
      id: "q2",
      questionText: "Huruf vokal dalam Hangeul berikut yang benar adalah...",
      options: [
        { id: "a", optionText: "ㄱ" },
        { id: "b", optionText: "ㅏ" },
        { id: "c", optionText: "ㅁ" },
        { id: "d", optionText: "ㄷ" },
      ],
      correctOptionId: "b",
    },
    {
      id: "q3",
      questionText: "Apa arti dari '감사합니다'?",
      options: [
        { id: "a", optionText: "Selamat pagi" },
        { id: "b", optionText: "Selamat malam" },
        { id: "c", optionText: "Terima kasih" },
        { id: "d", optionText: "Maaf" },
      ],
      correctOptionId: "c",
    },
    {
      id: "q4",
      questionText: "Pilih kata yang berarti 'sekolah' dalam Bahasa Korea.",
      options: [
        { id: "a", optionText: "시장" },
        { id: "b", optionText: "병원" },
        { id: "c", optionText: "공원" },
        { id: "d", optionText: "학교" },
      ],
      correctOptionId: "d",
    },
    {
      id: "q5",
      questionText: "Apa huruf konsonan Hangeul untuk bunyi 'n'?",
      options: [
        { id: "a", optionText: "ㄴ" },
        { id: "b", optionText: "ㅂ" },
        { id: "c", optionText: "ㅅ" },
        { id: "d", optionText: "ㅈ" },
      ],
      correctOptionId: "a",
    },
    {
      id: "q6",
      questionText: "Apa arti dari '사람' dalam Bahasa Indonesia?",
      options: [
        { id: "a", optionText: "Tempat" },
        { id: "b", optionText: "Makanan" },
        { id: "c", optionText: "Orang" },
        { id: "d", optionText: "Negara" },
      ],
      correctOptionId: "c",
    },
    {
      id: "q7",
      questionText: "Kata tanya '어디' digunakan untuk menanyakan...",
      options: [
        { id: "a", optionText: "Kapan" },
        { id: "b", optionText: "Bagaimana" },
        { id: "c", optionText: "Mengapa" },
        { id: "d", optionText: "Di mana" },
      ],
      correctOptionId: "d",
    },
    {
      id: "q8",
      questionText: "Bagaimana mengatakan 'maaf' secara sopan dalam Bahasa Korea?",
      options: [
        { id: "a", optionText: "안녕히 계세요" },
        { id: "b", optionText: "미안해요" },
        { id: "c", optionText: "고마워요" },
        { id: "d", optionText: "사랑해요" },
      ],
      correctOptionId: "b",
    },
    {
      id: "q9",
      questionText: "Huruf Hangeul 'ㅎ' dilafalkan sebagai...",
      options: [
        { id: "a", optionText: "g" },
        { id: "b", optionText: "h" },
        { id: "c", optionText: "s" },
        { id: "d", optionText: "m" },
      ],
      correctOptionId: "b",
    },
    {
      id: "q10",
      questionText: "Apa arti dari kalimat '저는 학생입니다'?",
      options: [
        { id: "a", optionText: "Saya seorang guru" },
        { id: "b", optionText: "Saya sedang belajar" },
        { id: "c", optionText: "Saya adalah siswa" },
        { id: "d", optionText: "Saya ke sekolah" },
      ],
      correctOptionId: "c",
    },
  ],
};

const CBTTrial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(dummyData.remainingDuration);
  const navigate = useNavigate();

  const currentQuestion = dummyData.questions[currentIndex];
  const userAnswer = answers[currentQuestion.id];

  const generateResultHTML = () => {
    return dummyData.questions
      .map((q, index) => {
        const userAns = answers[q.id];
        return `
        <div style="text-align:left; margin-bottom: 16px;">
          <p><strong>Soal ${index + 1}:</strong> ${q.questionText}</p>
          <ul style="list-style: none; padding-left: 0;">
            ${q.options
              .map((opt, i) => {
                const isCorrect = opt.id === q.correctOptionId;
                const isUserAnswer = opt.id === userAns;

                let bgColor = "";
                if (isCorrect) {
                  bgColor = "background-color: #bbf7d0;"; // green-200
                } else if (isUserAnswer && !isCorrect) {
                  bgColor = "background-color: #fecaca;"; // red-200
                }

                return `<li style="padding: 4px 8px; margin-bottom: 4px; border-radius: 6px; ${bgColor}">
                <span style="display: inline-block;width: 28px;height: 28px;text-align: center;line-height: 28px;border: 2px solid black;border-radius: 50%;margin-right: 8px;font-weight: bold;">${i + 1}</span>
                  ${opt.optionText} ${isCorrect ? "✅" : isUserAnswer ? "❌" : ""}
                </li>`;
              })
              .join("")}
          </ul>
        </div>
      `;
      })
      .join("");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          Swal.fire("Waktu Habis", "Waktu kamu telah habis.", "warning");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (questionId, optionId) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleNext = () => {
    if (currentIndex < dummyData.questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    const correctCount = dummyData.questions.filter((q) => answers[q.id] === q.correctOptionId).length;

    Swal.fire({
      title: `Selesai - Skor Kamu: ${correctCount}/${dummyData.questions.length}`,
      html: generateResultHTML(),
      width: 800,
      scrollbarPadding: false,
      confirmButtonText: "Tutup",
    }).then(() => {
    navigate("/myTryouts");
  });
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-light-red via-white to-light-blue py-5">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{dummyData.testPackageName}</h2>
          <span className="text-red-600 font-bold text-lg">🕒 {formatTime(timeLeft)}</span>
        </div>

        <p className="mb-2 font-medium">
          Soal {currentIndex + 1} dari {dummyData.questions.length}
        </p>
        <p className="mb-4">{currentQuestion.questionText}</p>

        <div className="space-y-2 mb-4">
          {currentQuestion.options.map((opt, i) => (
            <button key={opt.id} onClick={() => handleAnswer(currentQuestion.id, opt.id)} className={`flex w-full border px-4 py-2 rounded text-left ${userAnswer === opt.id ? "bg-blue-200 font-bold" : "hover:bg-gray-100"}`}>
              <span className="block border-black w-7 h-7 text-center me-4 border-2 rounded-full">{i + 1}</span>
              {opt.optionText}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6">
          <button onClick={handlePrevious} disabled={currentIndex === 0} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50">
            Sebelumnya
          </button>
          {currentIndex === dummyData.questions.length - 1 ? (
            <button onClick={handleSubmit} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
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

export default CBTTrial;

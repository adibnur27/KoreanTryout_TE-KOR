import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { dummyData } from "./dummyData";


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
        <div style="text-align:left; margin-bottom: 24px;">
          <p><strong>Soal ${index + 1}:</strong> ${q.questionText || "(tidak ada teks soal)"}</p>

          ${q.questionImage ? `<img src="${q.questionImage}" alt="Gambar Soal" style="max-width:100%; margin: 12px 0; border-radius: 8px;" />` : ""}
          ${q.questionVoice ? `<audio controls style="margin-bottom: 12px;"><source src="${q.questionVoice}" type="audio/mp3" /></audio>` : ""}

          <ul style="list-style: none; padding-left: 0; border-bottom: 1px solid black; margin-top: 12px;">
            ${q.options
              .map((opt, i) => {
                const isCorrect = opt.id === q.correctOptionId;
                const isUserAnswer = opt.id === userAns;

                let bgColor = "";
                if (isCorrect) {
                  bgColor = "background-color: #bbf7d0;"; // green
                } else if (isUserAnswer && !isCorrect) {
                  bgColor = "background-color: #fecaca;"; // red
                }

                const isImage = /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp)$/i.test(opt.optionText);
                const optionContent = isImage
                  ? `<img src="${opt.optionText}" alt="Opsi Gambar" style="height: 80px; object-fit: contain;" />`
                  : opt.optionText;

                return `<li style="padding: 4px 8px; margin-bottom: 4px; border-radius: 6px; ${bgColor}">
                  <span style="display: inline-block;width: 28px;height: 28px;text-align: center;line-height: 28px;border: 2px solid black;border-radius: 50%;margin-right: 8px;font-weight: bold;">${i + 1}</span>
                  ${optionContent} ${isCorrect ? "✅" : isUserAnswer ? "❌" : ""}
                </li>`;
              })
              .join("")}
          </ul>
        </div>
      `;
    })
    .join("");
};

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          Swal.fire("Waktu Habis", "Waktu kamu telah habis.", "warning");
          handleSubmit();
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

  const isImageUrl = (text) => /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp)$/i.test(text);

  return (
    <div className="min-h-screen flex bg-gradient-to-t from-light-red to-light-blue py-2 px-5 relative">
      <div className="w-2/3 p-6 pt-0 bg-white shadow rounded-xl transition duration-300 ms-5 relative">
        <div className="text-center mt-5 text-lg">
          <p className="mb-2 font-bold">
            Soal {currentIndex + 1} dari {dummyData.questions.length}
          </p>
        </div>

        {currentQuestion.questionText && <p className="mt-4 mb-4">{currentQuestion.questionText}</p>}

        {currentQuestion.questionImage && <img src={currentQuestion.questionImage} alt="Gambar Soal" className="mb-4 rounded" />}

        {currentQuestion.questionVoice && (
          <audio key={currentQuestion.questionVoice} controls className="mb-4">
            <source src={currentQuestion.questionVoice} type="audio/mp3" />
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

        <div className="flex justify-between items-center mt-6">
          <button onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))} disabled={currentIndex === 0} className="px-4 py-1 flex gap-2 font-semibold rounded bg-light-red disabled:opacity-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-[2px]" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
              <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
            </svg>
            <p>Sebelumnya</p>
          </button>
          {currentIndex === dummyData.questions.length - 1 ? (
            <button onClick={handleSubmit} className="px-4 py-1 font-semibold bg-green-600 text-white rounded hover:bg-green-700">
              Selesai & Submit
            </button>
          ) : (
            <button onClick={() => setCurrentIndex((i) => Math.min(i + 1, dummyData.questions.length - 1))} className="px-4 py-1 flex gap-2 font-semibold rounded bg-light-blue">
              <p>Selanjutnya</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="mt-[2px]" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="flex flex-col gap-2 max-w-sm font-opensans fixed right-8 top-1">
        <div className="rounded-xl bg-white px-6 py-2">
          <p className="text-lg font-bold text-kr-blue">Test</p>
          <h2 className="text-xl font-bold">{dummyData.testPackageName}</h2>
        </div>

        <div className="rounded-xl bg-white px-6 py-2">
          <p className="text-lg font-bold text-kr-blue">Sisa Waktu</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="me-2" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000">
              <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z" />
            </svg>
            <h2 className="text-black text-xl font-bold">{formatTime(timeLeft)}</h2>
          </div>
        </div>

        <div className="rounded-xl bg-white px-6 py-4">
          <p className="text-xl font-bold text-kr-blue">Soal</p>
          <div className="flex flex-wrap gap-2 my-4">
            {dummyData.questions.map((q, index) => {
              const isAnswered = answers[q.id];
              const isActive = currentIndex === index;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-10 h-10 rounded-full text-sm font-bold
                    ${isAnswered ? "bg-green-500 text-white" : "bg-gray-300 text-black"}
                    ${isActive ? "ring-2 ring-blue-500" : ""}`}
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

export default CBTTrial;

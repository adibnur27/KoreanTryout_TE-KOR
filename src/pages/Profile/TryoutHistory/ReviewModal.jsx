import React from "react";

const ReviewModal = ({ isOpen, onClose, reviewData }) => {
  if (!isOpen) return null;

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const day = String(date.getDate()).padStart(2, "0");
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`;
  };

  const isImageUrl = (text) => text && /^https?:\/\/.+\.(?:png|jpg|jpeg|gif|webp)$/i.test(text);

  const renderOptionContent = (text, altText) => {
    if (isImageUrl(text)) {
      return <img src={text} alt={altText} className="h-24 rounded object-contain" />;
    }
    return <span>{text}</span>;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 pt-0 rounded-lg shadow-xl w-11/12 max-w-4xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold mt-4">Review Jawaban {reviewData.testPackageName}</h2>
          <button onClick={onClose} className="text-2xl font-bold mt-4">
            &times;
          </button>
        </div>
        <div className="text-lg mb-2">{formatDateTime(reviewData.finishTime)}</div>
        <div>
          {reviewData.questions.map((q, index) => {
            const selectedOption = q.options.find((opt) => opt.id === q.selectedOptionId);

            return (
              <div key={q.questionId} className={`p-4 mb-4 rounded-lg ${q.isCorrect ? "bg-green-100" : "bg-red-100"}`}>
                <p className={`font-bold ${q.isCorrect ? "text-green-700" : "text-red-700"}`}>{q.isCorrect ? "Benar" : "Salah"}</p>
                <p className="font-semibold">
                  {index + 1}. {q.questionText}
                </p>
                {q.questionImage && <img src={q.questionImage} alt="Question" className="my-2 rounded-lg max-w-full h-auto" />}
                {q.questionAudio && <audio controls src={q.questionAudio} className="my-2" />}

                <div className="mt-4 space-y-2">
                  <p className="font-semibold">Pilihan:</p>
                  {q.options.map((option) => {
                    const isCorrectAnswer = option.id === q.correctOptionId;
                    const isSelectedAnswer = option.id === q.selectedOptionId;

                    let optionClass = "p-3 rounded-lg border";
                    let indicator = null;

                    if (isCorrectAnswer) {
                      optionClass += " bg-green-100 border-green-300";
                      indicator = <span className="ml-auto font-semibold text-green-700">Jawaban Benar</span>;
                    } else if (isSelectedAnswer) {
                      optionClass += " bg-red-100 border-red-300";
                      indicator = <span className="ml-auto font-semibold text-red-700">Jawaban Anda</span>;
                    } else if (!q.isCorrect) {
                      optionClass += " bg-red-100 border-red-300";
                    } else {
                      optionClass += " bg-gray-50 border-gray-200";
                    }

                    return (
                      <div key={option.id} className={`flex items-center ${optionClass}`}>
                        {renderOptionContent(option.optionText, `Option ${option.id}`)}
                        {indicator}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;

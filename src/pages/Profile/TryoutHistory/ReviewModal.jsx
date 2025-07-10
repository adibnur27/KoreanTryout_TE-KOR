import React from "react";

const ReviewModal = ({ isOpen, onClose, reviewData }) => {
  if (!isOpen) return null;

  const isImageUrl = (text) =>
    text && /^https?:\/\/.+\.(?:png|jpg|jpeg|gif|webp)$/i.test(text);

  const renderOptionContent = (text, altText) => {
    if (isImageUrl(text)) {
      return (
        <img src={text} alt={altText} className="h-24 rounded object-contain" />
      );
    }
    return <span>{text}</span>;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 pt-0 rounded-lg shadow-xl w-11/12 max-w-4xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center sticky top-0 bg-white pb-4 z-10">
          <h2 className="text-xl font-bold mt-4">
            Review Jawaban{" "}
            {reviewData.testPackageName + " : " + reviewData.testAttemptId}
          </h2>
          <button onClick={onClose} className="text-2xl font-bold mt-4">
            &times;
          </button>
        </div>
        <div>
          {reviewData.questions.map((q, index) => {
            const selectedOption = q.options.find(
              (opt) => opt.id === q.selectedOptionId
            );

            return (
              <div
                key={q.questionId}
                className={`p-4 mb-4 rounded-lg ${
                  q.isCorrect ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <p
                  className={`font-bold ${
                    q.isCorrect ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {q.isCorrect ? "Benar" : "Salah"}
                </p>
                <p className="font-semibold">
                  {index + 1}. {q.questionText}
                </p>
                {q.questionImage && (
                  <img
                    src={q.questionImage}
                    alt="Question"
                    className="my-2 rounded-lg max-w-full h-auto"
                  />
                )}
                {q.questionAudio && (
                  <audio controls src={q.questionAudio} className="my-2" />
                )}

                <div className="mt-2">
                  <p>Jawaban Anda:</p>
                  {selectedOption ? (
                    <div className="p-2 bg-gray-200 rounded">
                      {renderOptionContent(
                        selectedOption.optionText,
                        "Jawaban Anda"
                      )}
                    </div>
                  ) : (
                    <div className="p-2 bg-gray-200 rounded text-gray-500">
                      Tidak dijawab
                    </div>
                  )}
                </div>

                {!q.isCorrect && (
                  <div className="mt-2">
                    <p>Jawaban Benar:</p>
                    <div className="p-2 bg-green-200 rounded">
                      {renderOptionContent(
                        q.correctAnswerText,
                        "Jawaban Benar"
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;

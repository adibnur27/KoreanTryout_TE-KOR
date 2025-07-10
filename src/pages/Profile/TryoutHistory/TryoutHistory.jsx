import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { LoadingCircle } from "../../../components/ui/LoadingCircle";
import { marked } from "marked";
import ReviewModal from "./ReviewModal"; // Impor modal

const TryoutHistory = () => {
  const [tryouts, setTryouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  // State untuk modal review
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviewData, setReviewData] = useState(null);
  const [reviewLoading, setReviewLoading] = useState(false);
  const [reviewError, setReviewError] = useState(null);

  const fetchCompletedTryouts = async () => {
    try {
      const res = await axiosInstance.get("test-attempts/my-tests/completed");
      setTryouts(res.data.data);
      setError(null);
    } catch (err) {
      console.error("Gagal mengambil data riwayat tryout:", err);
      setError("Gagal mengambil data riwayat tryout.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompletedTryouts();
  }, []);

  const handleToggle = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleOpenReviewModal = async (attemptId) => {
    setReviewLoading(true);
    setReviewError(null);
    try {
      const res = await axiosInstance.get(`/test-attempts/${attemptId}/review`);
      console.log(res.data.data);
      setReviewData(res.data.data);
      setReviewModalOpen(true);
    } catch (err) {
      console.error("Gagal mengambil data review:", err);
      setReviewError("Gagal memuat data review. Silakan coba lagi.");
    } finally {
      setReviewLoading(false);
    }
  };

  const handleCloseReviewModal = () => {
    setReviewModalOpen(false);
    setReviewData(null);
  };

  if (loading) return <LoadingCircle />;

  if (error)
    return (
      <div className="text-center text-red-500 mt-5">
        {error}
      </div>
    );

  if (tryouts.length === 0)
    return (
      <div className="text-center text-gray-500 mt-5">
        Belum ada riwayat tryout yang diselesaikan.
      </div>
    );

  return (
    <div className="py-5">
      <h2 className="text-xl font-bold mb-4">Riwayat Tryout</h2>
      <ul className="space-y-4">
        {tryouts.map((attempt) => (
          <li
            key={attempt.id}
            className="border p-4 rounded-lg shadow-sm bg-white"
          >
            <div className="flex justify-between items-center">
              <div>
                <p>
                  <strong>Package ID:</strong> {attempt.packageId}
                </p>
                <p>
                  <strong>Skor:</strong> {attempt.score}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-sm text-gray-500">
                  {new Date(attempt.endTime).toLocaleString("id-ID", {
                    dateStyle: "long",
                    timeStyle: "short",
                  })}
                </p>
              </div>
            </div>
            <div className="mt-2 flex justify-end text-sm gap-2">
              <button
                onClick={() => handleOpenReviewModal(attempt.id)}
                disabled={reviewLoading}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                {reviewLoading ? <LoadingCircle size={5} /> : "Lihat Jawaban"}
              </button>
              <button
                onClick={() => handleToggle(attempt.id)}
                className="bg-kr-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                {expandedId === attempt.id ? "Tutup" : "Lihat Evaluasi"}
              </button>
            </div>
            {expandedId === attempt.id && (
              <div className="mt-4 pt-4 border-t">
                <h3 className="font-semibold">Evaluasi AI:</h3>
                <div
                  className="text-gray-700 whitespace-pre-wrap prose max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: marked.parse(attempt.aiEvaluationResult || ""),
                  }}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
      {reviewError && <p className="text-red-500 text-center">{reviewError}</p>}
      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={handleCloseReviewModal}
        reviewData={reviewData}
      />
    </div>
  );
};

export default TryoutHistory;


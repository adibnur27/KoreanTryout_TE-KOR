import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance"; // pastikan path sesuai
import { LoadingCircle } from "../../../components/ui/LoadingCircle";

const TryoutHistory = () => {
  const [tryouts, setTryouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          <li key={attempt.id} className="border p-4 rounded-lg shadow-sm bg-white">
            <p><strong>ID Attempt:</strong> {attempt.id}</p>
            <p><strong>Package ID:</strong> {attempt.packageId}</p>
            <p><strong>Skor:</strong> {attempt.score}</p>
            <p><strong>Status:</strong> {attempt.status}</p>
            <p><strong>Selesai pada:</strong> {new Date(attempt.endTime).toLocaleString("id-ID", {
              dateStyle: "full",
              timeStyle: "short"
            })}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default TryoutHistory
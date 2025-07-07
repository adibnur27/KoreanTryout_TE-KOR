import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import { LoadingCircle } from "../../../components/ui/LoadingCircle"; // opsional

const TransactionHistory = ({ userId }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    try {
      const res = await axiosInstance.get(`/api/v1/transactions/${userId}`);
      setTransactions(res.data.data);
    } catch (err) {
      console.error("Gagal mengambil riwayat transaksi:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchTransactions();
    }
  }, [userId]);

  if (loading) return <LoadingCircle />;

  return (
    <div className="py-6 px-4">
      <h2 className="text-xl font-semibold mb-4">Riwayat Transaksi</h2>
      {transactions.length === 0 ? (
        <p className="text-gray-500">Belum ada transaksi.</p>
      ) : (
        <ul className="space-y-4">
          {transactions.map((trx) => (
            <li key={trx.id} className="p-4 border rounded shadow-sm bg-white">
              <p><strong>Order ID:</strong> {trx.midtransOrderId}</p>
              <p><strong>Status:</strong> {trx.status}</p>
              <p><strong>Jumlah:</strong> Rp {trx.amount.toLocaleString()}</p>
              <p><strong>Paket:</strong> {trx.testPackage?.name || "-"}</p>
              <p><strong>Bundle:</strong> {trx.bundle?.name || "-"}</p>
              <p><strong>Tanggal:</strong> {new Date(trx.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default TransactionHistory;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get("/users/all");
      setUsers(response.data.data || []);
    } catch (error) {
      console.error("Gagal mengambil data user:", error);
    }
  };

  console.log(users);

  const fetchUserDetail = async (id) => {
    try {
      const response = await axiosInstance.get(`/users/${id}`);
      setSelectedUser(response.data.data);
      setShowModal(true);
    } catch (error) {
      console.error("Gagal mengambil detail user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Daftar Pengguna</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">Username</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="text-center hover:bg-gray-50">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{user.username}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => fetchUserDetail(user.id)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  Tidak ada data pengguna.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Detail Pengguna</h2>
            <p><strong>Nama Lengkap:</strong> {selectedUser.fullName}</p>
            <p><strong>Username:</strong> {selectedUser.username}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Verified:</strong> {selectedUser.isVerified ? "Ya" : "Tidak"}</p>
            <p><strong>Dibuat pada:</strong> {new Date(selectedUser.createdAt).toLocaleString()}</p>

            <h3 className="mt-4 font-semibold">Transaksi:</h3>
            {selectedUser.transactions.length > 0 ? (
              <ul className="list-disc ml-6 mt-1">
                {selectedUser.transactions.map((t, idx) => (
                  <li key={idx}>
                    {t.purchasedItemName} - {t.status} - Rp{t.amount} - {new Date(t.transactionDate).toLocaleString()}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Tidak ada transaksi.</p>
            )}

            <div className="mt-6 text-right">
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;

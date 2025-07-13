import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  const fetchUsers = async (username = "", page = 1) => {
    try {
      const response = await axiosInstance.get("/users/all", {
        params: { username, page },
      });

      const pageData = response.data.data;
      setUsers(pageData.content || []);
      setPagination({
        currentPage: pageData.currentPage,
        totalPages: pageData.totalPages,
      });
    } catch (error) {
      console.error("Gagal mengambil data user:", error);
    }
  };

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

      {/* Search Bar */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Cari username..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded w-64"
        />
        <button
          onClick={() => fetchUsers(searchQuery)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Cari
        </button>
        <button
          onClick={() => {
            setSearchQuery("");
            fetchUsers();
          }}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Reset
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">Full Name</th>
              <th className="px-4 py-2 border">Username</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="text-center hover:bg-gray-50">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{user.fullName}</td>
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
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  Tidak ada data pengguna.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-4 gap-2">
          <button
            onClick={() => fetchUsers(searchQuery, pagination.currentPage - 1)}
            disabled={pagination.currentPage === 1}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            &lt;
          </button>

          {[...Array(pagination.totalPages)].map((_, idx) => {
            const page = idx + 1;
            return (
              <button
                key={page}
                onClick={() => fetchUsers(searchQuery, page)}
                className={`px-3 py-1 rounded ${
                  page === pagination.currentPage
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => fetchUsers(searchQuery, pagination.currentPage + 1)}
            disabled={pagination.currentPage === pagination.totalPages}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Detail Pengguna</h2>
            <p>
              <strong>Nama Lengkap:</strong> {selectedUser.fullName}
            </p>
            <p>
              <strong>Username:</strong> {selectedUser.username}
            </p>
            <p>
              <strong>Email:</strong> {selectedUser.email}
            </p>
            <p>
              <strong>Verified:</strong>{" "}
              {selectedUser.isVerified ? "Ya" : "Tidak"}
            </p>
            <p>
              <strong>Dibuat pada:</strong>{" "}
              {new Date(selectedUser.createdAt).toLocaleString()}
            </p>

            <h3 className="mt-4 font-semibold">Transaksi:</h3>
            {selectedUser.transactions.length > 0 ? (
              <ul className="list-disc ml-6 mt-1">
                {selectedUser.transactions.map((t, idx) => (
                  <li key={idx}>
                    {t.purchasedItemName} - {t.status} - Rp{t.amount} -{" "}
                    {new Date(t.transactionDate).toLocaleString()}
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

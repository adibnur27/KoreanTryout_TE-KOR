import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../services/userService";
import { clearUser, setUser } from "../../../features/auth/authSlice";
import { removeToken } from "../../../utils/token";
import { Navigate, useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import {ChangeFullName} from "./ChangeFullName";
import { ChangePassword } from './ChangePassword';
import ProfilePhotoUploader from "./ProfilePhotoUploader/ProfilePhotoUploader";

const UserDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);

  // Tambahkan setelah useState lainnya
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Tambahkan fungsi modal
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const profileData = await getProfile();
        setProfile(profileData);
        console.log("profile:", profileData); // simpan ke state lokal
        setError(null);
      } catch (err) {
        setError("Gagal memuat profil. Silakan coba lagi.");
        if (err.response?.status === 401 || err.response?.status === 403) {
          removeToken();
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="pt-5">
      <h3 className="text-2xl font-semibold mb-20 font-montserrat text-center">Detail Pengguna</h3>
      <div className="text-xl flex flex-col gap-3 ">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : profile ? (
          <div className="text-xl flex flex-col gap-3">
            <p className="border-gray-400 border-b pb-2">
              <strong>Nama Lengkap:</strong> {profile.fullName}
            </p>
            <p className="border-gray-400 border-b pb-2">
              <strong>Username:</strong> {profile.username}
            </p>
            <p className="border-gray-400 border-b pb-2">
              <strong>Email:</strong> {profile.email}
            </p>
            <p className="border-gray-400 border-b pb-2">
              <strong>Terdaftar Sejak:</strong> {new Date(profile.createdAt).toLocaleString()}
            </p>
          </div>
        ) : (
          <p>Data tidak tersedia</p>
        )}
        <button onClick={openModal} className="mt-6 w-max px-4 py-2 bg-kr-blue text-white rounded hover:bg-blue-700">
          Edit Profile
        </button>
        {isModalOpen && (
          <Dialog open={isModalOpen} onClose={closeModal} className="fixed z-50 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              <div className="fixed inset-0 bg-black opacity-30" />
              <div className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full z-50 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Edit Profil</h3>
                  <button onClick={closeModal} className="text-gray-500 hover:text-gray-800 text-2xl font-bold">
                    &times;
                  </button>
                </div>
                <ProfilePhotoUploader/>
                <ChangeFullName/>
                <ChangePassword/>
              </div>
            </div>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default UserDetails;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../services/userService";
import { clearUser, setUser } from "../../../features/auth/authSlice";
import { removeToken } from "../../../utils/token";
import { Navigate, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState(null);

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
      </div>
    </div>
  );
};

export default UserDetails;

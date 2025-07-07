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

  useEffect(() => {
    console.log("User from Redux:", user);
    const fetchProfile = async () => {
      try {
        console.log("🚀 Memulai ambil profile");
        setLoading(true);
        const profileData = await getProfile();
        console.log("✅ Profil berhasil diambil:", profileData);
        
        const transformedProfile = {
          id: profileData.data.id,
          fullName: profileData.data.fullName,
          username: profileData.data.username,
          email: profileData.data.email,
          imageUrl: profileData.data.imageUrl,
          isVerified: profileData.data.isVerified,
          createdAt: profileData.data.createdAt,
          role: profileData.data.role,
        };
        console.log(profileData);

        dispatch(setUser(transformedProfile));
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Gagal memuat profil. Silakan coba lagi.");
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          removeToken();
          dispatch(clearUser());
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile(); // panggil tanpa syarat
  }, [dispatch, navigate]);

  return (
    <div className="pt-5">
      <h3 className="text-2xl font-semibold mb-20 font-montserrat text-center">Detail Pengguna</h3>
      <div className="text-xl flex flex-col gap-3 ">
        <p className="border-gray-400 border-b pb-2">
          <strong className="me-2">Nama Lengkap:</strong> {user.fullName}
        </p>
        <p className="border-gray-400 border-b pb-2">
          <strong className="me-2">Username:</strong> {user.username}
        </p>
        <p className="border-gray-400 border-b pb-2">
          <strong className="me-2">Email:</strong> {user.email}
        </p>
        <p className="border-gray-400 border-b pb-2">
          <strong className="me-2">Terdaftar Sejak:</strong> {new Date(user.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;

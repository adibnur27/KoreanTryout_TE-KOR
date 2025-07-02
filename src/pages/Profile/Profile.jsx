import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearUser, setUser } from "../../features/auth/authSlice.js";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../utils/token.js";
import { Button } from "../../components/Button";
import { getProfile } from "../../services/userService.js";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  console.log("User from Redux:", user); 
  const fetchProfile = async () => {
    try {
      setLoading(true);
      const profileData = await getProfile();
      console.log(profileData);

      const transformedProfile = {
        id: profileData.id,
        fullName: profileData.fullName,
        username: profileData.username,
        email: profileData.email,
        imageUrl: profileData.imageUrl,
        isVerified: profileData.isVerified,
        createdAt: profileData.createdAt,
        role: profileData.role,
      };

      dispatch(setUser(transformedProfile));
      setError(null);
    } catch (err) {
      setError("Gagal memuat profil. Silakan coba lagi.");
      console.error(err);
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

  const handleLogout = () => {
    removeToken();
    dispatch(clearUser());
    navigate("/");
  };

  const renderProfileIcon = () => {
    if (user?.imageUrl) {
      return (
        <img
          src={user.imageUrl}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
      );
    } else if (user?.username) {
      const initial = user.username.charAt(0).toUpperCase();
      return (
        <div className="w-24 h-24 rounded-full bg-kr-red text-white flex items-center justify-center text-4xl font-bold">
          {initial}
        </div>
      );
    }
    return <div className="w-24 h-24 rounded-full bg-gray-300 animate-pulse" />;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-xl text-red-500">
        <p>{error}</p>
        <Button onClick={() => window.location.reload()} children="Coba Lagi" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Anda tidak login. Silakan <a href="/login" className="text-kr-red underline ml-1">login</a>.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white text-center font-opensans">
      {renderProfileIcon()}
      <h1 className="mt-4 text-2xl font-semibold text-gray-800">
        {user.username}
      </h1>
      <p className="text-sm text-gray-500 mt-1">
        {user.email || "Email tidak tersedia"}
      </p>

      <div className="mt-4 p-4 border rounded-lg bg-gray-50 w-full max-w-md text-left">
        <h3 className="text-lg font-semibold mb-2">Detail Pengguna</h3>
        <p className="text-sm"><strong>ID:</strong> {user.id}</p>
        <p className="text-sm"><strong>Nama Lengkap:</strong> {user.fullName}</p>
        <p className="text-sm"><strong>Username:</strong> {user.username}</p>
        <p className="text-sm"><strong>Email:</strong> {user.email}</p>
        <p className="text-sm"><strong>Role:</strong> {user.role || "Tidak tersedia"}</p>
        <p className="text-sm"><strong>Terdaftar Sejak:</strong> {new Date(user.createdAt).toLocaleString()}</p>
      </div>

      <div className="mt-6">
        <Button onClick={handleLogout} children="Logout" width="150px" />
      </div>
    </div>
  );
};

export default ProfilePage;

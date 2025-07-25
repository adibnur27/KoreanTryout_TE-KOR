import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearUser, setUser } from "../../features/auth/authSlice.js";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../utils/token.js";
import { Button } from "../../components/Button";
import { getProfile } from "../../services/userService.js";

import { Navbar } from "../../components/Navbar";
import { UserDetails } from "./UserDetails";
import { TryoutHistory } from "./TryoutHistory";
import { TransactionHistory } from "./TransactionHistory";
import { LoadingCircle } from "../../components/ui/LoadingCircle";
import { saveUser } from "../../utils/storage.js";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const [activeTab, setActiveTab] = useState("detail");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const profileData = await getProfile();
        

        const transformedProfile = {
          fullName: profileData.fullName,
          username: profileData.username,
          imageUrl: profileData.imageUrl,
        };

        

        dispatch(setUser(transformedProfile));
        saveUser(transformedProfile);
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
      return <img src={user.imageUrl} alt={user.username} className="w-48 h-48 object-cover mx-auto rounded" />;
    } else if (user?.username) {
      const initial = user.username.charAt(0).toUpperCase();
      return <div className="w-48 h-48 bg-kr-red rounded mx-auto text-white flex items-center justify-center text-8xl font-bold">{initial}</div>;
    }

    return <div className="w-48 h-48 rounded mx-auto bg-gray-300 animate-pulse" />;
  };

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
        Anda tidak login. Silakan{" "}
        <a href="/login" className="text-kr-red underline ml-1">
          login
        </a>
        .
      </div>
    );
  }

  return (
    <div className="flex-row md:flex lg:flex min-h-screen pb-5 px-2  lg:px-48 pt-28 lg:pt-24 lg:gap-10 gap-2 bg-gradient-to-br from-light-blue  to-light-red text-center font-opensans">
      <Navbar />
      <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[10%] -rotate-[15deg] text-6xl opacity-10">한</span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-1/2 right-[8%] rotate-[15deg] text-6xl opacity-10">글</span>
      <span className="korean-pattern pointer-events-none absolute z-0 bottom-[8%] left-[10%] -translate-x-1/2 -rotate-[10deg] text-6xl opacity-10">시</span>
      <div className=" lg:fixed top-24 lg:bottom-5 border lg:w-min p-5 py-3 rounded-lg bg-gray-100 w-full shadow-lg">
        {renderProfileIcon()}
        <h1 className="mt-4 text-xl w-min mx-auto font-semibold text-gray-800">{user.username}</h1>
        <div className="text-left mt-10 mx-auto md:mx-0 lg:mx-0 flex flex-col  mb-5">
          <div className="text-left mx-auto md:mx-0 flex flex-col mb-10 font-montserrat font-semibold gap-3">
            <button onClick={() => setActiveTab("detail")} className={activeTab === "detail" ? "font-bold text-blue-600" : ""}>
              Detail Pengguna
            </button>
            <button onClick={() => setActiveTab("riwayat tryout")} className={activeTab === "riwayat tryout" ? "font-bold text-blue-600" : ""}>
              Riwayat Tryout
            </button>
            <button onClick={() => setActiveTab("riwayat")} className={activeTab === "riwayat" ? "font-bold text-blue-600" : ""}>
              Riwayat Transaksi
            </button>
          </div>
        </div>
        <div className="mt-2 w-min mx-auto">
          <Button onClick={handleLogout} children="Keluar" width="150px" />
        </div>
      </div>

      <div className=" flex flex-col lg:ms-52 px-10 border rounded-lg bg-gray-100 w-full text-left me-2 shadow-lg font-opensans">
        {/* Content */}
        <div className="flex-1">
          {activeTab === "detail" && <UserDetails />}
          {activeTab === "riwayat tryout" && <TryoutHistory />}
          {activeTab === "riwayat" && user?.id && <TransactionHistory userId={user.id} />}
        </div>
        <p className="text-center font-opensans font-bold pb-3 text-gray-500">Jika data tidak muncul silahkan reload browser</p>
      </div>
    </div>
  );
};

export default ProfilePage;

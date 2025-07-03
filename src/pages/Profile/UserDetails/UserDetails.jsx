import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../../services/userService';
import { clearUser, setUser } from '../../../features/auth/authSlice';
import { removeToken } from '../../../utils/token';
import { Navigate } from 'react-router-dom';

const UserDetails = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


 useEffect(() => {
     console.log("User from Redux:", user);
     const fetchProfile = async () => {
       try {
         setLoading(true);
         const profileData = await getProfile();
         console.log(profileData.data);
 
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
         console.error(error);
         if (err.response && (err.response.status === 401 || err.response.status === 403)) {
           removeToken();
           dispatch(clearUser());
           Navigate("/login");
         }
       } finally {
         setLoading(false);
       }
     };
 
     fetchProfile(); // panggil tanpa syarat
   }, [dispatch, Navigate]);
   

  return (
    <div className='pt-5'>
      <h3 className="text-2xl font-semibold mb-20 font-montserrat text-center">Detail Pengguna</h3>
      <div className='text-xl flex flex-col gap-3 '>
        <p className="border-gray-400 border-b pb-2"><strong className='me-2'>Nama Lengkap:</strong> {user.fullName}</p>
        <p className="border-gray-400 border-b pb-2"><strong className='me-2'>Username:</strong> {user.username}</p>
        <p className="border-gray-400 border-b pb-2"><strong className='me-2'>Email:</strong> {user.email}</p>
        <p className="border-gray-400 border-b pb-2"><strong className='me-2'>Terdaftar Sejak:</strong> {new Date(user.createdAt).toLocaleString()}</p>
      </div>
    </div>
  );
}

export default UserDetails
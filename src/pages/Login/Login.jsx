import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { NavLink, useNavigate } from 'react-router-dom'; // ✅ tambahkan useNavigate

const Login = () => {
  const navigate = useNavigate(); // ✅ inisialisasi navigate

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Data Login:', formData);

    // ✅ Simulasi login sukses
    // Ganti dengan axios.post('/api/login', formData) sesuai kebutuhanmu
    try {
      // Misalnya login sukses
      // const response = await axios.post('/api/login', formData);
      // localStorage.setItem('token', res.data.token);

      // Ambil token dari response
      // const token = response.data.token;

      // Simpan token ke localStorage
      // localStorage.setItem('token', token);

      // ✅ Arahkan ke halaman /products
      navigate('/products');
    } catch (error) {
      console.error('Login gagal:', error);
      // Tampilkan error kalau mau
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-500">
      <div className="flex w-4/5 md:w-3/4 lg:w-2/3 bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Gambar */}
        <div className="w-1/2 hidden md:block">
          <img
            src="/img/gunung.jpg"
            alt="Login Illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-4xl font-bold mb-8">
            <span className="text-orange-500">TE</span><span className="text-black">-KOR</span>
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border border-orange-400 rounded-md p-3 focus:outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-orange-400 rounded-md p-3 focus:outline-none"
            />
            <Button children={"Login"} />
          </form>

          <p className="mt-6 text-sm text-black text-center">
            Belum punya akun?{' '}
            <NavLink to={'/register'}>
              <span className="font-bold cursor-pointer hover:underline">Daftar</span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

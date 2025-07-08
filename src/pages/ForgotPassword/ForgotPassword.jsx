import React, { useState } from "react";
import { forgotPassword } from "../../services/authService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    try {
      await forgotPassword({ email });
      setMessage("Jika email terdaftar, link reset password telah dikirim.");
    } catch (err) {
      setError(err.message || "Gagal mengirim link reset.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-light-blue via-light-red to-light-red">
      <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[10%] -rotate-[15deg] text-6xl opacity-20">한</span>
      <span className="korean-pattern pointer-events-none absolute z-0 top-1/2 right-[10%] rotate-[15deg] text-6xl opacity-20">글</span>
      <span className="korean-pattern pointer-events-none absolute z-0 bottom-[5%] left-[60%] -translate-x-1/2 -rotate-[10deg] text-6xl opacity-20">시</span>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Lupa Password</h2>
        {message && <p className="text-green-600 mb-4">{message}</p>}
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Masukkan email"
          className="w-full p-3 border rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full font-bold bg-kr-blue text-white py-2 rounded border-2 hover:text-black hover:bg-light-blue hover:border-kr-blue hover:border-2"
        >
          Kirim Link Reset
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;

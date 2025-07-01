import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../../services/authService";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // ambil token dari URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
    token: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setError("");
    if (formData.newPassword !== formData.confirmPassword) {
      setError("Password tidak cocok.");
      return;
    }

    try {
      await resetPassword({ 
        token, 
        newPassword: formData.newPassword,
        confirmPassword: formData.confirmPassword });
      setSuccess("Password berhasil direset.");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.message || "Gagal reset password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <input
          type="password"
          name="newPassword"
          placeholder="Password baru"
          className="w-full p-3 border rounded mb-4"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Konfirmasi password"
          className="w-full p-3 border rounded mb-4"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;

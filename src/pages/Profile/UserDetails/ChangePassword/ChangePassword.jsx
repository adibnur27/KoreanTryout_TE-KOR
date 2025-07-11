import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { changePassword } from "../../../../services/userService";

// ✅ Schema validasi pakai YUP
const schema = Yup.object().shape({
  oldPassword: Yup.string().required("Password lama wajib diisi"),
  newPassword: Yup.string()
    .min(8, "Password baru minimal 8 karakter")
    .required("Password baru wajib diisi"),
  confirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Konfirmasi password tidak cocok")
    .required("Konfirmasi password wajib diisi"),
});

const ChangePassword = () => {
  const [success, setSuccess] = useState(null);
  const [serverError, setServerError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // ✅ Kirim data ke backend dengan field yang sesuai
  const onSubmit = async (values) => {
    setSuccess(null);
    setServerError(null);

    try {
      const data = await changePassword({
        currentPassword: values.oldPassword, // ⬅️ ubah sesuai backend
        newPassword: values.newPassword,
        confirmNewPassword: values.confirmNewPassword, // ⬅️ tambahkan ini
      });

      setSuccess(data.message || "Password berhasil diubah.");
      reset();
    } catch (err) {
      const message =
        err.response?.data?.message || "Gagal mengganti password.";
      setServerError(message);
    }
  };

  return (
    <div className="max-w-sm mt-5 ">
      <h2 className="text-xl font-bold mb-4">Ganti Password</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium" htmlFor="oldPassword">Password Lama</label>
          <input
            id="oldPassword"
            type="password"
            {...register("oldPassword")}
            className="w-full border px-3 py-2 rounded-md"
          />
          {errors.oldPassword && (
            <p className="text-sm text-red-500">{errors.oldPassword.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium" htmlFor="newPassword">Password Baru</label>
          <input
            id="newPassword"
            type="password"
            {...register("newPassword")}
            className="w-full border px-3 py-2 rounded-md"
          />
          {errors.newPassword && (
            <p className="text-sm text-red-500">{errors.newPassword.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium" htmlFor="newPasswordConfirm">Konfirmasi Password Baru</label>
          <input
            id="newPasswordConfirm"
            type="password"
            {...register("confirmNewPassword")}
            className="w-full border px-3 py-2 rounded-md"
          />
          {errors.confirmNewPassword && (
            <p className="text-sm text-red-500">{errors.confirmNewPassword.message}</p>
          )}
        </div>

        {serverError && <p className="text-sm text-red-500">{serverError}</p>}
        {success && <p className="text-sm text-green-600">{success}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-kr-blue text-white py-2 px-4 rounded-md hover:text-black hover:border-kr-blue border-2 hover:bg-light-blue disabled:bg-blue-300"
        >
          {isSubmitting ? "Menyimpan..." : "Simpan"}
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;

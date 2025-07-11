import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFullName } from "../../../../services/userService";
import { setUser } from "../../../../features/auth/authSlice";
import Swal from "sweetalert2";
import { LoadingCircle } from "../../../../components/ui/LoadingCircle";

const ChangeFullName = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setFullName(user.fullName);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedProfile = await updateFullName(fullName);
      dispatch(setUser({ ...user, ...updatedProfile }));

      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Nama lengkap berhasil diperbarui.",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: error?.response?.data?.message || "Gagal memperbarui nama.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5 max-w-full">
      <label htmlFor="fullName" className="text-xl font-bold">
        Ubah Nama Lengkap:
      </label>
      <div className="max-w-full">
      <input type="text" id="fullName" className="border mt-3 border-gray-300 rounded-md px-4 py-2" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      <button type="submit" className="ms-2 md:mt-2 bg-kr-blue text-white p-2 rounded-md hover:bg-blue-600" disabled={loading}>
        {loading ? <LoadingCircle size={20}/> : "Simpan"}
      </button>
      </div>
    </form>
  );
};

export default ChangeFullName;

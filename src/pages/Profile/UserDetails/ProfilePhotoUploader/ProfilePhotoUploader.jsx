import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../../features/auth/authSlice";
import Swal from "sweetalert2";
import axiosInstance from "../../../../utils/axiosInstance";
import { getToken } from "../../../../utils/token";
import { LoadingCircle } from "../../../../components/ui/LoadingCircle";

const ProfilePhotoUploader = () => {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const token = getToken();

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("avatar", file);
    setLoading(true);
    try {
      const res = await axiosInstance.post("/users/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setUser({ ...user, imageUrl: res.data.data.imageUrl }));
      Swal.fire("Berhasil", "Foto berhasil diperbarui!", "success");
    } catch (err) {
      Swal.fire("Gagal", "Gagal mengunggah foto", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full border-2 border-dashed border-blue-300 rounded-md p-6 bg-blue-50 text-center">
      <label className="cursor-pointer inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200">
        📁 Pilih Foto
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {preview && (
        <div className="mt-6 flex flex-col items-center gap-3">
          <img
            src={preview}
            alt="Preview"
            className="w-32 h-32 object-cover shadow z-10"
          />
          <button
            onClick={handleUpload}
            disabled={loading}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? <LoadingCircle size={20} /> : "Upload"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoUploader;

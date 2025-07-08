import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../../features/auth/authSlice";
import Swal from "sweetalert2";
import axiosInstance from "../../../../utils/axiosInstance";
import { LoadingCircle } from "../../../../components/ui/LoadingCircle";
import { getToken } from "../../../../utils/token";

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
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    setLoading(true);
    try {
      const response = await axiosInstance.post(
        "/users/avatar",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newImageUrl = response.data.data.imageUrl;
      dispatch(setUser({ ...user, imageUrl: newImageUrl }));
      Swal.fire("Success", "Foto berhasil diubah", "success");
    } catch (err) {
      console.error("Upload failed:", err);
      Swal.fire("Error", "Foto Gagal diubah", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-start font-opensans h-32">
        <p className="text-xl font-bold">
        Ganti Poto:
        </p>
        <div className="flex gap-5">

        <label className="h-min bg-kr-blue text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700">
        📁 Pilih Foto
        <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
        />
        </label>
      
      {preview && (
        <div className="w-32 h-32 object-cover shadow">

        <img
          src={preview}
          alt="Preview"
          className="w-32 h-32 object-cover shadow"
        />
        <button
            onClick={handleUpload}
            disabled={loading}
            className="bg-kr-blue text-white px-4 mt-2 py-2 rounded hover:bg-light-blue hover:font-bold hover:text-black border-2 border-kr-blue disabled:opacity-50"
        >
            {loading ? <LoadingCircle size={20}/> : "Upload"}
        </button>
        </div>
      )}
        </div>
    </div>
  );
};

export default ProfilePhotoUploader;

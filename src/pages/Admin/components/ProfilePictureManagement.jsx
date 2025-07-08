import React, { useState, useCallback } from 'react';
import { updateProfilePicture } from '../../../services/adminService';


const ProfilePictureUploader = ({ selectedFile, previewUrl, onFileChange, onSubmit, isUploading }) => {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Update Profile Picture</h2>
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="avatar-upload" className="block text-sm font-medium text-gray-700 mb-2">
            Choose a new photo
          </label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/png, image/jpeg, image/gif"
            onChange={onFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {previewUrl && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 mb-2">Image Preview:</p>
            <img
              src={previewUrl}
              alt="Preview"
              className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-gray-200"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={!selectedFile || isUploading} 
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isUploading ? 'Uploading...' : 'Upload Picture'}
        </button>
      </form>
    </div>
  );
};

const ProfilePictureManagement = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleFileChange = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setError(null);
      setSuccessMessage(null);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    if (!selectedFile) {
      setError("Please select a file to upload.");
      return;
    }

    setIsUploading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await updateProfilePicture(selectedFile);
      setSuccessMessage(response.message || "Profile picture updated successfully!");
    } catch (err) {
      console.error("Upload failed:", err);
      setError(err.response?.data?.message || "Failed to update profile picture. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  React.useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="p-4 font-sans">
      {error && (
        <div className="mb-4 max-w-md mx-auto p-3 text-center text-red-800 bg-red-100 border border-red-300 rounded-lg">
          {error}
        </div>
      )}
      {successMessage && (
        <div className="mb-4 max-w-md mx-auto p-3 text-center text-green-800 bg-green-100 border border-green-300 rounded-lg">
          {successMessage}
        </div>
      )}

      <ProfilePictureUploader
        selectedFile={selectedFile}
        previewUrl={previewUrl}
        onFileChange={handleFileChange}
        onSubmit={handleSubmit}
        isUploading={isUploading}
      />
    </div>
  );
};

export default ProfilePictureManagement;
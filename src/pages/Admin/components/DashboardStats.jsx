import React from "react";

const DashboardStats = ({ userCount, bundleCount }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-medium">Total Users</h3>
        <p className="text-2xl font-bold">{userCount}</p>
      </div>
      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-medium">Total Bundles</h3>
        <p className="text-2xl font-bold">{bundleCount}</p>
      </div>
    </div>
  );
};

export default DashboardStats;

import React, { useEffect, useState } from 'react'
import { Button } from '../../../components/Button'
import { removeToken } from '../../../utils/token';
import { useDispatch} from 'react-redux';
import { clearUser } from '../../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import DashboardStats from '../components/DashboardStats';
import UserTable from '../components/UserTable';
import BundleManagement from '../components/BundleManagement';
import TestPackage from '../components/TestPackage';
import { getAllUsers } from '../../../services/adminService';
import VocabularyDashboard from '../components/VocabularyDashboard';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("detail");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchUsers = async () => {
    if (activeTab === "userTable") {
      try {
        setLoading(true);
        const result = await getAllUsers();
        setUsers(result);
      } catch (err) {
        setError("Gagal mengambil data user.");
      } finally {
        setLoading(false);
      }
    }
  };

  fetchUsers();
}, [activeTab]);
  
  const handleLogout = () => {
      removeToken();
      dispatch(clearUser());
      navigate("/admin");
    };

  return (
    <div className="flex-row md:flex lg:flex min-h-screen pb-5 px-2  lg:px-48 pt-28 lg:pt-24 lg:gap-10 gap-2 bg-gradient-to-br from-light-blue  to-light-red text-center font-opensans">
      <span className="korean-pattern pointer-events-none absolute z-0 top-[20%] left-[10%] -rotate-[15deg] text-6xl opacity-10">
              한
            </span>
            <span className="korean-pattern pointer-events-none absolute z-0 top-1/2 right-[8%] rotate-[15deg] text-6xl opacity-10">
              글
            </span>
            <span className="korean-pattern pointer-events-none absolute z-0 bottom-[8%] left-[10%] -translate-x-1/2 -rotate-[10deg] text-6xl opacity-10">
              시
            </span>
      <div className=" lg:fixed lg:bottom-5 border lg:w-min p-5 py-3 rounded-lg bg-gray-100 w-full shadow-lg h-min">
        <div className="text-left mt-10 mx-auto md:mx-0 lg:mx-0 flex flex-col  mb-5">
          <div className="text-left mx-auto md:mx-0 flex flex-col mb-10 font-montserrat font-semibold">
            <button onClick={() => setActiveTab("dashboardStats")} className={activeTab === "dashboardStats" ? "font-bold text-blue-600" : ""}>
              Dashboard Admin
            </button>
            <button onClick={() => setActiveTab("userTable")} className={activeTab === "userTable" ? "font-bold text-blue-600" : ""}>
              Edit User
            </button>
            <button onClick={() => setActiveTab("bundleTable")} className={activeTab === "bundleTable" ? "font-bold text-blue-600" : ""}>
              Edit Bundle
            </button>
            <button onClick={() => setActiveTab("package")} className={activeTab === "package" ? "font-bold text-blue-600" : ""}>
              Edit Test Package
            </button>
            <button onClick={() => setActiveTab("vocabularyDashboard")} className={activeTab === "vocabularyDashboard" ? "font-bold text-blue-600" : ""}>
              Edit Vocabulary
            </button>
          </div>
        </div>
        <div className="mt-2 w-min mx-auto">
          <Button onClick={handleLogout} children="Logout" width="150px" />
        </div>
      </div>

      <div className="lg:ms-52 px-10 border rounded-lg bg-gray-100 w-full text-left me-2 shadow-lg font-opensans">
        <div className="flex-1">
          {activeTab === "dashboardStats" && <DashboardStats />}
          {activeTab === "userTable" && <UserTable />}
          {activeTab === "bundleTable" && <BundleManagement />}
          {activeTab === "package" && <TestPackage />}
          {activeTab === "vocabularyDashboard" && <VocabularyDashboard/>}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
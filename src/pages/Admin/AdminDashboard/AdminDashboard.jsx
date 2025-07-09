import React, { useEffect, useState } from 'react'
import { Button } from '../../../components/Button'
import { removeToken } from '../../../utils/token';
import { useDispatch} from 'react-redux';
import { clearUser } from '../../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import UserTable from '../components/UserTable';
import BundleManagement from '../components/BundleManagement';
import TestPackage from '../components/TestPackage';
import { getAllUsers } from '../../../services/adminService';
import VocabularyDashboard from '../components/VocabularyDashboard';
import ProfilePictureManagement from '../components/ProfilePictureManagement';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchUsers = async () => {
    const adminToken = localStorage.getItem("adminToken");

    if (!adminToken) {
      // Redirect jika tidak ada token admin
      navigate("/admin"); // asumsikan ini halaman login admin
    }

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
    <div className="flex-row flex min-h-screen  relative p-2 font-opensans">
      <span className="korean-pattern pointer-events-none absolute z-10 top-[10%] left-[20%] -rotate-[15deg] text-6xl opacity-5">
        한
      </span>
      <span className="korean-pattern pointer-events-none absolute z-10 top-1/2 right-[8%] rotate-[15deg] text-6xl opacity-5">
        글
      </span>
      <span className="korean-pattern pointer-events-none absolute z-10 bottom-[8%] left-[10%] -translate-x-1/2 -rotate-[10deg] text-6xl opacity-5">
        시
      </span>
      <div className="fixed top-2 bottom-2 rounded-lg w-[18%]  text-white ">
        <div className='bg-blue-950 flex flex-col justify-between h-full py-5  rounded-lg'>

          <div className="flex flex-col gap-3 font-opensans text-lg">
            <svg className="mx-auto my-10 mb-16" width="200" height="40" viewBox="0 0 508 94" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.032 92V22.496H0.512V2.39999H80.768V22.496H53.376V92H28.032ZM113.506 37.088H155.106V56.032H113.506V37.088ZM115.298 72.416H162.146V92H90.21V2.39999H160.482V21.984H115.298V72.416Z" fill="#0047A0" />
            <path
              d="M170.894 64.864V46.176H208.27V64.864H170.894ZM245.991 72.16L244.583 43.744L283.111 2.39999H311.015L272.615 44L258.535 58.72L245.991 72.16ZM223.335 92V2.39999H248.423V92H223.335ZM283.495 92L254.311 55.008L270.823 37.344L312.935 92H283.495ZM361.519 93.792C354.351 93.792 347.738 92.64 341.679 90.336C335.62 88.032 330.33 84.7893 325.807 80.608C321.37 76.3413 317.914 71.392 315.439 65.76C312.964 60.128 311.727 53.9413 311.727 47.2C311.727 40.4587 312.964 34.272 315.439 28.64C317.914 23.008 321.37 18.1013 325.807 13.92C330.33 9.65333 335.62 6.368 341.679 4.064C347.738 1.75999 354.351 0.607994 361.519 0.607994C368.772 0.607994 375.386 1.75999 381.359 4.064C387.418 6.368 392.666 9.65333 397.103 13.92C401.54 18.1013 404.996 23.008 407.471 28.64C410.031 34.272 411.311 40.4587 411.311 47.2C411.311 53.9413 410.031 60.1707 407.471 65.888C404.996 71.52 401.54 76.4267 397.103 80.608C392.666 84.7893 387.418 88.032 381.359 90.336C375.386 92.64 368.772 93.792 361.519 93.792ZM361.519 72.8C364.932 72.8 368.09 72.2027 370.991 71.008C373.978 69.8133 376.538 68.1067 378.671 65.888C380.89 63.584 382.596 60.8533 383.791 57.696C385.071 54.5387 385.711 51.04 385.711 47.2C385.711 43.2747 385.071 39.776 383.791 36.704C382.596 33.5467 380.89 30.8587 378.671 28.64C376.538 26.336 373.978 24.5867 370.991 23.392C368.09 22.1973 364.932 21.6 361.519 21.6C358.106 21.6 354.906 22.1973 351.919 23.392C349.018 24.5867 346.458 26.336 344.239 28.64C342.106 30.8587 340.399 33.5467 339.119 36.704C337.924 39.776 337.327 43.2747 337.327 47.2C337.327 51.04 337.924 54.5387 339.119 57.696C340.399 60.8533 342.106 63.584 344.239 65.888C346.458 68.1067 349.018 69.8133 351.919 71.008C354.906 72.2027 358.106 72.8 361.519 72.8ZM424.585 92V2.39999H465.545C473.737 2.39999 480.777 3.72266 486.665 6.368C492.638 9.01333 497.246 12.8533 500.489 17.888C503.732 22.8373 505.353 28.7253 505.353 35.552C505.353 42.2933 503.732 48.1387 500.489 53.088C497.246 57.952 492.638 61.7067 486.665 64.352C480.777 66.912 473.737 68.192 465.545 68.192H438.665L449.929 57.568V92H424.585ZM480.009 92L457.737 59.36H484.745L507.145 92H480.009ZM449.929 60.256L438.665 48.608H464.009C469.3 48.608 473.225 47.456 475.785 45.152C478.43 42.848 479.753 39.648 479.753 35.552C479.753 31.3707 478.43 28.128 475.785 25.824C473.225 23.52 469.3 22.368 464.009 22.368H438.665L449.929 10.72V60.256Z"
              fill="#CD2E3A"
            />
          </svg>
            {/* <button onClick={() => setActiveTab("profilePictureManagement")} className={activeTab === "profilePictureManagement" ? " text-black bg-gradient-to-r from-light-blue to-light-red  py-2 " : " py-2"}>
              Dashboard Admin
            </button> */}
            <button onClick={() => setActiveTab("userTable")} className={activeTab === "userTable" ? " text-black bg-gradient-to-r from-light-blue to-light-red  py-2 text-left px-10" : "text-left px-10 py-2"}>
              User
            </button>
            <button onClick={() => setActiveTab("bundleTable")} className={activeTab === "bundleTable" ? " text-black bg-gradient-to-r from-light-blue to-light-red text-left px-10 py-2 " : "text-left px-10 py-2"}>
               Bundle
            </button>
            <button onClick={() => setActiveTab("vocabularyDashboard")} className={activeTab === "vocabularyDashboard" ? " text-black bg-gradient-to-r from-light-blue to-light-red text-left px-10 py-2 " : "text-left px-10 py-2"}>
               Vocabulary
            </button>
            <button onClick={() => setActiveTab("package")} className={activeTab === "package" ? " text-black bg-gradient-to-r from-light-blue to-light-red text-left px-10 py-2 " : "text-left px-10 py-2"}>
               Test Package
            </button>
          </div>
          <div className=" w-min mx-auto cursor-pointer">
            <p onClick={handleLogout} className='font-opensans text-xl'>Logout</p>
            {/* <Button onClick={handleLogout} children="Logout" width="150px" borderRadius='0.2rem' /> */}
          </div>
        </div>
        
      </div>

      <div className="ms-64 px-10 rounded-lg w-[90%] text-left shadow-md shadow-blue-950 font-opensans bg-gradient-to-r from-light-blue to-light-red">
        <div className="">
          {activeTab === "profilePictureManagement" && <ProfilePictureManagement />}
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
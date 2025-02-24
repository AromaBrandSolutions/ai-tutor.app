import React from "react";
import { Link, useNavigate } from "react-router-dom";  
import { FaUserCircle, FaComments, FaBook, FaChartBar, FaCog, FaSignOutAlt, FaRobot } from "react-icons/fa";

const Layout = ({ children }) => {
  const navigate = useNavigate(); // Initialize navigation function

  const handleLoginClick = () => {
    console.log("Login icon clicked! Navigating to /login"); // Debugging
    navigate("/login");  // Navigate to login page
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Remove login status
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white border-r border-gray-300 p-5 flex flex-col justify-between">
        <div className="flex items-center gap-3 text-xl font-bold text-gray-800">
          <FaRobot /> AI Tutor
        </div>

        <nav className="mt-6 flex flex-col space-y-3">
          <Link to="/ai-chat" className="flex items-center gap-3 text-gray-700 p-2 rounded-lg hover:bg-gray-200">
            <FaComments /> AI Chat
          </Link>
          <Link to="/study-material" className="flex items-center gap-3 text-gray-700 p-2 rounded-lg hover:bg-gray-200">
            <FaBook /> Study Material
          </Link>
          <Link to="/ai-quiz" className="flex items-center gap-3 text-gray-700 p-2 rounded-lg hover:bg-gray-200">
            <FaBook /> AI Quiz
          </Link>
          <Link to="/progress" className="flex items-center gap-3 text-gray-700 p-2 rounded-lg hover:bg-gray-200">
            <FaChartBar /> Progress
          </Link>
          <Link to="/settings" className="flex items-center gap-3 text-gray-700 p-2 rounded-lg hover:bg-gray-200">
            <FaCog /> Settings
          </Link>
        </nav>

        {/* Log Out Button with Function */}
        <button 
          onClick={handleLogout} 
          className="flex items-center gap-3 text-red-600 font-bold p-2 hover:bg-red-100 rounded-lg"
        >
          <FaSignOutAlt /> Log out
        </button>
      </aside>

      <div className="flex-1 flex flex-col bg-white p-5">
        {/* User Icon (Top Right) */}
        <div className="flex justify-end pr-4">
          <FaUserCircle
            className="text-3xl text-gray-700 cursor-pointer hover:text-gray-900"
            onClick={handleLoginClick}  // Navigate to login
          />
        </div>

        <hr className="border-t-2 border-gray-300 my-3" />

        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;

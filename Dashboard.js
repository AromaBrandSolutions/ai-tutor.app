import React from "react";
import { PaperClipIcon } from '@heroicons/react/solid'; // Correct import for the upload icon
import chatbotIcon from "../assets/chatbot-icon.avif"; // Correct path for chatbot logo
import profileIcon from "../assets/profile.png"; // Correct path for profile icon

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Sidebar with light gray upper part */}
      <aside className="w-64 bg-gray-200 shadow-md flex flex-col p-6">
        {/* Upper Sidebar (Light Gray) */}
        <div className="mb-8"> {/* Increased margin for more space */}
          <h1 className="text-xl font-semibold text-gray-700">AI Tutor</h1>
        </div>
        
        {/* Navigation links with additional margin */}
        <nav className="flex flex-col space-y-6 text-gray-600"> {/* Increased space between links */}
          <a href="#" className="flex items-center space-x-2 hover:text-gray-900">
            <span>💬</span> <span>AI Chat</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-gray-900">
            <span>📚</span> <span>Study Material</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-gray-900">
            <span>📝</span> <span>AI Quiz</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-gray-900">
            <span>📊</span> <span>Progress</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-gray-900">
            <span>⚙️</span> <span>Settings</span>
          </a>
        </nav>

        {/* Lower Sidebar */}
        <div className="mt-auto">
          <button className="text-red-500 flex items-center space-x-2 hover:text-red-700">
            <span>🚪</span> <span>Log out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-8 bg-white">
        <div className="bg-gray-50 rounded-lg shadow-md p-10 w-3/5 flex flex-col items-center">
          {/* Increased chatbot image size */}
          <img
            src={chatbotIcon}
            alt="AI Robot"
            className="w-64 h-64 mb-4"  // Increased size to 64 (16rem)
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            Welcome to AI Tutor
          </h2>

          {/* Search Input */}
          <div className="w-full flex items-center bg-white border border-gray-300 rounded-lg p-3 mb-4">
            <input
              type="text"
              placeholder="Message AiTutor"
              className="flex-1 bg-transparent focus:outline-none text-gray-700"
            />
            <button className="text-gray-500">➤</button>
          </div>

          {/* Upload Button with Icon */}
          <div className="w-full text-sm text-gray-500 flex items-center space-x-2 cursor-pointer">
            <PaperClipIcon className="w-5 h-5 text-gray-500" />
            <span>Upload</span>
          </div>
        </div>
      </main>

      {/* Profile Icon at the top-right corner */}
      <div className="absolute top-4 right-4">
        <img
          src={profileIcon}
          alt="Profile"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      </div>
    </div>
  );
};

export default Dashboard;

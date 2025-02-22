import React, { useState } from "react";
import { FaVideo, FaBook, FaFileAlt } from "react-icons/fa";
import { FiLogOut, FiSearch } from "react-icons/fi";

const StudyMaterial = () => {
  const [activeTab, setActiveTab] = useState("videoLectures");

  // Dummy Data
  const videoLectures = [
    {
      id: 1,
      title: "Deep Learning Fundamentals",
      duration: "4h 45min",
      instructor: "Prof. Dr. Sharma S.M",
      thumbnail: "https://via.placeholder.com/400x200",
    },
    {
      id: 2,
      title: "Neural Networks Explained",
      duration: "3h 30min",
      instructor: "Dr. John Doe",
      thumbnail: "https://via.placeholder.com/400x200",
    },
    {
      id: 3,
      title: "AI & Machine Learning Basics",
      duration: "2h 15min",
      instructor: "Prof. Jane Smith",
      thumbnail: "https://via.placeholder.com/400x200",
    },
  ];

  const notes = [
    { id: 1, title: "Deep Learning Notes", pages: 45, date: "Feb 15, 2025" },
    { id: 2, title: "Neural Networks Summary", pages: 30, date: "Jan 10, 2025" },
    { id: 3, title: "AI Concepts Overview", pages: 50, date: "Dec 5, 2024" },
  ];

  const books = [
    { id: 1, title: "Deep Learning", author: "Ian Goodfellow", pages: 775 },
    { id: 2, title: "Pattern Recognition & ML", author: "Christopher Bishop", pages: 738 },
    { id: 3, title: "AI: A Modern Approach", author: "Stuart Russell", pages: 1132 },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-60 bg-white border-r border-gray-200 p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 text-2xl">🤖</span>
            </div>
            <h1 className="text-xl font-bold">AI Tutor</h1>
          </div>

          <nav className="space-y-2">
            <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg w-full">
              AI Chat
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-900 rounded-lg w-full font-medium">
              Study Material
            </button>
            <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg w-full">
              AI Quiz
            </button>
            <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg w-full">
              Progress
            </button>
            <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg w-full">
              Settings
            </button>
          </nav>
        </div>
        <button className="flex items-center text-red-500 px-4 py-2">
          <FiLogOut className="mr-2" /> Log out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Study Material</h2>
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search Materials..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("videoLectures")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              activeTab === "videoLectures" ? "bg-green-500 text-white" : "bg-white border text-gray-600"
            }`}
          >
            <FaVideo /> Video Lectures
          </button>
          <button
            onClick={() => setActiveTab("notes")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              activeTab === "notes" ? "bg-green-500 text-white" : "bg-white border text-gray-600"
            }`}
          >
            <FaFileAlt /> Notes
          </button>
          <button
            onClick={() => setActiveTab("books")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              activeTab === "books" ? "bg-green-500 text-white" : "bg-white border text-gray-600"
            }`}
          >
            <FaBook /> Books
          </button>
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          {activeTab === "videoLectures" && (
            <div className="grid gap-6">
              {videoLectures.map((lecture) => (
                <div key={lecture.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={lecture.thumbnail} alt={lecture.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-medium text-lg">{lecture.title}</h3>
                    <div className="text-gray-500 text-sm mt-1">
                      <span>{lecture.duration}</span>
                      <span className="mx-2">•</span>
                      <span>{lecture.instructor}</span>
                    </div>
                    <button className="mt-3 text-green-500 font-medium">View →</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "notes" && (
            <div className="grid gap-4">
              {notes.map((note) => (
                <div key={note.id} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-medium">{note.title}</h3>
                  <div className="text-gray-500 text-sm mt-1">
                    {note.pages} pages • {note.date}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "books" && (
            <div className="grid gap-4">
              {books.map((book) => (
                <div key={book.id} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-medium">{book.title}</h3>
                  <div className="text-gray-500 text-sm mt-1">
                    By {book.author} • {book.pages} pages
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyMaterial;

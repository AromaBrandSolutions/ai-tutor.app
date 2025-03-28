import React, { useState } from "react";
import { FaBookOpen, FaFileAlt, FaRegCommentDots } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoIosRefresh } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io"; // Dropdown Arrow

const AIQuizGenerator = () => {
  const [numQuestions, setNumQuestions] = useState("5 Questions");
  const [difficulty, setDifficulty] = useState("Easy");
  const [showNumOptions, setShowNumOptions] = useState(false);
  const [showDiffOptions, setShowDiffOptions] = useState(false);

  const numOptions = ["5 Questions", "10 Questions", "15 Questions"];
  const diffOptions = ["Easy", "Medium", "Hard"];

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <img src="https://via.placeholder.com/40" alt="Logo" className="rounded-full" />
            <h1 className="text-xl font-bold">AI Tutor</h1>
          </div>

          <nav className="space-y-2">
            <button className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              AI Chat
            </button>
            <button className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              Study Material
            </button>
            <button className="block w-full text-left px-4 py-2 bg-gray-100 text-gray-900 rounded-lg font-semibold">
              AI Quiz
            </button>
            <button className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              Progress
            </button>
            <button className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              Settings
            </button>
          </nav>
        </div>

        <button className="flex items-center text-red-500 px-4 py-2">
          <FiLogOut className="mr-2" /> Log out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-8">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-2xl font-bold">AI Quiz</h2>
          <IoIosRefresh className="text-xl text-gray-500 cursor-pointer" />
        </div>

        {/* Buttons */}
        <div className="flex gap-6 mt-8">
          <button className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-lg shadow-md">
            <FaRegCommentDots /> Text input
          </button>
          <button className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-lg shadow-md">
            <FaFileAlt /> Upload pdf
          </button>
          <button className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-lg shadow-md">
            <FaBookOpen /> Topic
          </button>
        </div>

        {/* Text Input */}
        <textarea
          className="w-full mt-10 p-4 border border-gray-300 rounded-md"
          placeholder="Enter your text content here..."
          rows="3"
        ></textarea>

        {/* Dropdowns */}
        <div className="grid grid-cols-2 gap-8 mt-10">
          <div className="relative">
            <label className="block font-medium mb-2">Number of Questions</label>
            <button
              className="w-full flex justify-between items-center border border-gray-300 px-4 py-2 rounded-md"
              onClick={() => setShowNumOptions(!showNumOptions)}
            >
              {numQuestions} <IoMdArrowDropdown className="text-xl" />
            </button>
            {showNumOptions && (
              <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 shadow-md">
                {numOptions.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setNumQuestions(option);
                      setShowNumOptions(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="relative">
            <label className="block font-medium mb-2">Difficulty Level</label>
            <button
              className="w-full flex justify-between items-center border border-gray-300 px-4 py-2 rounded-md"
              onClick={() => setShowDiffOptions(!showDiffOptions)}
            >
              {difficulty} <IoMdArrowDropdown className="text-xl" />
            </button>
            {showDiffOptions && (
              <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 shadow-md">
                {diffOptions.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setDifficulty(option);
                      setShowDiffOptions(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Generate Quiz Button at Bottom */}
        <div className="mt-auto">
          <button className="w-full bg-green-500 text-white px-6 py-4 rounded-lg font-bold text-lg shadow-md">
            Generate Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIQuizGenerator;

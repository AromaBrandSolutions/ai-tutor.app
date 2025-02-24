import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import AIChat from "./AIChat";
import StudyMaterial from "./StudyMaterial";
import Progress from "./Progress";
import Settings from "./Settings";
import AIQuiz from "./AIQuiz";
import Login from "./components/login";
import ForgotPassword from "./components/ForgotPassword";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Main Application Routes (Wrapped in Layout) */}
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/ai-chat" element={<AIChat />} />
                <Route path="/study-material" element={<StudyMaterial />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/ai-quiz" element={<AIQuiz />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

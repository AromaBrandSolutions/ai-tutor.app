import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import ForgotPassword from "./components/ForgotPassword";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

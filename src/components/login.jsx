import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../components/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email !== "user@example.com" || password !== "password123") {
      setError("Wrong password");
    } else {
      setError("");
      alert("Login Successful!");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="forgot-password">
            {error && <p className="error">{error}</p>}
            <Link to="/forgot-password" className="forgot-link">
              Forgot password?
            </Link>
          </div>
          // changed this button just to showcase tailwind is working
          <button
            type="submit"
            class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Login
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

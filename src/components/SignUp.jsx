import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/login.css";


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      alert("Sign Up Successful!");
      navigate("/"); // Redirect to login page
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
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

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {error && <p className="error">{error}</p>}

          <button type="submit" className="btn">Sign Up</button>
        </form>

        {/* Login Link */}
        <p className="login-text">
          Already have an account? <Link to="/" className="login-link">Login</Link>
        </p>
      </div>
    </div>
  );
}

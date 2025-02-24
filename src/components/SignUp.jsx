import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      document.documentElement.style.setProperty(
        "--gradient-color",
        `hsl(${Math.random() * 360}, 70%, 80%)`
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 animate-gradient overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-xl animate-float"
          style={{
            width: `${Math.floor(Math.random() * 50) + 30}px`,
            height: `${Math.floor(Math.random() * 50) + 30}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: `hsl(${Math.random() * 360}, 70%, 85%)`,
            opacity: 0.4,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      <div className="w-full max-w-md p-8 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg border border-white/50 relative z-10">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSignUp} className="mt-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block mt-3 text-gray-700">Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block mt-3 text-gray-700">Confirm Password</label>
          <input
            type="password"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {error && <p className="mt-2 text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full px-6 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

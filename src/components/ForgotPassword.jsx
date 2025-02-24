import { useState, useEffect } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState("email");
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Animated Background Color Changing Effect
  useEffect(() => {
    const interval = setInterval(() => {
      document.documentElement.style.setProperty(
        "--gradient-color",
        `hsl(${Math.random() * 360}, 70%, 80%)`
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 animate-gradient overflow-hidden">
      {/* Animated Floating Bubbles */}
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

      {/* Forgot Password Form */}
      <div className="w-full max-w-md p-8 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg border border-white/50 relative z-10">
        {error && <p className="mb-3 text-sm text-red-500">{error}</p>}
        {success && <p className="mb-3 text-sm text-green-500">{success}</p>}

        {step === "email" && (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800">Forgot Password</h2>
            <p className="mt-2 text-gray-700 text-center">Enter your email to reset your password.</p>
            <form onSubmit={(e) => { e.preventDefault(); setStep("otp"); }} className="mt-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full px-6 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-300"
              >
                Reset Password
              </button>
            </form>
          </>
        )}

        {step === "otp" && (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800">Check Your Email</h2>
            <p className="mt-2 text-gray-700 text-center">
              We sent a reset link to <span className="font-semibold">{email}</span>. Enter the 5-digit code.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); setStep("reset"); }} className="mt-4">
              <div className="flex justify-between space-x-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    className="w-12 h-12 text-center text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => {
                      let newOtp = [...otp];
                      if (/\d/.test(e.target.value) || e.target.value === "") {
                        newOtp[index] = e.target.value;
                        setOtp(newOtp);
                      }
                    }}
                  />
                ))}
              </div>
              <button
                type="submit"
                className="w-full px-6 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-300"
              >
                Verify Code
              </button>
            </form>
          </>
        )}

        {step === "reset" && (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800">Set a New Password</h2>
            <form onSubmit={(e) => { e.preventDefault(); setSuccess("Password reset successful!"); }} className="mt-4">
              <label className="block text-gray-700">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <label className="block mt-3 text-gray-700">Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full px-6 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 transition-all duration-300"
              >
                Confirm
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

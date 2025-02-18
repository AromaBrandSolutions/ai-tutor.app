import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState("email"); // "email", "otp", or "reset"
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSuccess(`Password reset link has been sent to ${email}.`);
    setStep("otp");
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (otp.join("").length !== 5) {
      setError("Please enter a valid 5-digit OTP.");
      return;
    }
    setSuccess("OTP verified successfully.");
    setStep("reset");
  };

  const handleResendEmail = () => {
    setError("");
    setSuccess("A new OTP has been sent to your email.");
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setSuccess("Your password has been successfully reset!");
    setStep("email");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {error && <p className="mb-3 text-sm text-red-500">{error}</p>}
        {success && <p className="mb-3 text-sm text-green-500">{success}</p>}

        {step === "email" && (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-700">Forgot Password</h2>
            <p className="mt-2 text-gray-600 text-center">Please enter your email to reset your password.</p>
            <form onSubmit={handleReset} className="mt-4">
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
                className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Reset Password
              </button>
            </form>
          </>
        )}

        {step === "otp" && (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-700">Check Your Email</h2>
            <p className="mt-2 text-gray-600 text-center">
              We sent a reset link to <span className="font-semibold">{email}</span>. Enter the 5-digit code.
            </p>
            <form onSubmit={handleVerify} className="mt-4">
              <div className="flex justify-between space-x-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    className="w-12 h-12 text-center text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    onChange={(e) => {
                      let newOtp = [...otp];
                      if (/\d/.test(e.target.value) || e.target.value === "") {
                        newOtp[index] = e.target.value;
                        setOtp(newOtp);
                        if (e.target.value !== "" && index < otp.length - 1) {
                          document.getElementById(`otp-${index + 1}`).focus();
                        }
                      }
                    }}
                    onKeyDown={(e) => {
                      if (!/[\d]/.test(e.key) && e.key !== "Backspace") {
                        e.preventDefault();
                      }
                    }}
                  />
                ))}
              </div>
              <button
                type="submit"
                className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Verify Code
              </button>
              <p className="mt-3 text-center text-gray-600">
                Haven’t received the email?{" "}
                <button
                  type="button"
                  onClick={handleResendEmail}
                  className="text-blue-600 hover:underline"
                >
                  Resend email
                </button>
              </p>
            </form>
          </>
        )}

        {step === "reset" && (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-700">Set a New Password</h2>
            <p className="mt-2 text-gray-600 text-center">Ensure it is different from previous ones.</p>
            <form onSubmit={handlePasswordReset} className="mt-4">
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
                className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
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

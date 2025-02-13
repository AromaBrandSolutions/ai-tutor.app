import { useState } from "react";
import "../components/login.css";

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
    <div className="container">
      <div className="box">
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        {step === "email" && (
          <>
            <h2>Forgot Password</h2>
            <p>Please enter your email to reset your password.</p>
            <form onSubmit={handleReset}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn">Reset Password</button>
            </form>
          </>
        )}

        {step === "otp" && (
          <>
            <h2>Check your email</h2>
            <p>We sent a reset link to {email}. Enter the 5-digit code mentioned in the email.</p>
            <form onSubmit={handleVerify}>
              <div className="otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => {
                      let newOtp = [...otp];
                      if (/\d/.test(e.target.value) || e.target.value === '') {
                        newOtp[index] = e.target.value;
                        setOtp(newOtp);
                        if (e.target.value !== '' && index < otp.length - 1) {
                          document.getElementById(`otp-${index + 1}`).focus();
                        }
                      }
                    }}
                    onKeyDown={(e) => {
                      if (!/[\d]/.test(e.key) && e.key !== "Backspace" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
                        e.preventDefault();
                      }
                    }}
                  />
                ))}
              </div>
              <button type="submit" className="btn btn-verify">Verify Code</button>
              <p>
                Haven’t got the email yet? {" "}
                <button type="button" onClick={handleResendEmail} className="link">Resend email</button>
              </p>
            </form>
          </>
        )}

        {step === "reset" && (
          <>
            <h2>Set a new password</h2>
            <p>Create a new password. Ensure it differs from previous ones for security.</p>
            <form onSubmit={handlePasswordReset}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-verify">Confirm</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

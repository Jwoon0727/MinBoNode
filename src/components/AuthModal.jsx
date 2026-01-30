
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AuthModal({ isOpen, onClose, initialMode = "login", onLogin }) {
  const [mode, setMode] = useState(initialMode);
  const [formData, setFormData] = useState({
    userId: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
    uplineCode: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setFormData({
      userId: "",
      email: "",
      password: "",
      confirmPassword: "",
      referralCode: "",
      uplineCode: "",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background with image */}
      <div 
        className="absolute inset-0 bg-[#0a0e17]"
        style={{
          backgroundImage: `
             linear-gradient(rgba(10, 14, 23, 0.65), rgba(10, 14, 23, 0.65)),
    radial-gradient(ellipse at 50% 100%, rgba(30, 58, 138, 0.3) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
    url('/images/loginBG.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-slate-400 hover:text-white z-10"
      >
        <X size={24} />
      </button>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-6">
{/* Logo */}
<div className="text-center mb-8">
  <img
    src="/images/logo.svg"
    alt="MIMBONODE"
    className="mx-auto h-12 w-auto"
  />
</div>

        {/* Form Title */}
        <h2 className="text-white text-lg font-semibold mb-4">
          {mode === "login" ? "Login" : "Sign Up"}
        </h2>

        {/* Form Card */}
        <form onSubmit={handleSubmit} className="bg-white/5
backdrop-blur-xl
rounded-2xl
p-6
space-y-4
border border-white/15
shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
          {/* User ID */}
          <div>
            <label className="block text-slate-300 text-sm mb-1.5">User ID</label>
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              placeholder={mode === "login" ? "ID" : "User ID"}
              className=" w-full
  bg-[#1C232B]/40
  backdrop-blur-xl
  border border-white/15
  rounded-lg
  px-4 py-3
  text-white
  placeholder-white/30
  outline-none

  shadow-[0_6px_24px_rgba(0,0,0,0.35)]
  shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]

  focus:ring-2 focus:ring-blue-500/70
  focus:border-blue-400/60"
            />
            {mode === "signup" && (
              <p className="text-slate-500 text-xs mt-1">User ID must contain only lowercase letters and numbers</p>
            )}
          </div>

          {/* Email - Only for signup */}
          {mode === "signup" && (
            <div>
              <label className="block text-slate-300 text-sm mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-[#1a1f2e] border-0 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <p className="text-slate-500 text-xs mt-1">Please enter a valid email for OTP verification</p>
            </div>
          )}

          {/* Password */}
          <div>
            <label className="block text-slate-300 text-sm mb-1.5">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className=" w-full
  bg-[#1C232B]/40
  backdrop-blur-xl
  border border-white/15
  rounded-lg
  px-4 py-3
  text-white
  placeholder-white/30
  outline-none

  shadow-[0_6px_24px_rgba(0,0,0,0.35)]
  shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]

  focus:ring-2 focus:ring-blue-500/70
  focus:border-blue-400/60"
            />
          </div>

          {/* Confirm Password - Only for signup */}
          {mode === "signup" && (
            <div>
              <label className="block text-slate-300 text-sm mb-1.5">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-[#1a1f2e] border-0 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          )}

          {/* Referral Code - Only for signup */}
          {mode === "signup" && (
            <div>
              <label className="block text-slate-300 text-sm mb-1.5">Referral Code</label>
              <input
                type="text"
                name="referralCode"
                value={formData.referralCode}
                onChange={handleChange}
                placeholder="Number 6 digits"
                className="w-full bg-[#1a1f2e] border-0 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          )}

          {/* Upline Code - Only for signup */}
          {mode === "signup" && (
            <div>
              <label className="block text-slate-300 text-sm mb-1.5">Upline Code</label>
              <input
                type="text"
                name="uplineCode"
                value={formData.uplineCode}
                onChange={handleChange}
                placeholder="Number 6 digits"
                className="w-full bg-[#1a1f2e] border-0 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          )}

          {/* Captcha placeholder - Only for login */}
          {mode === "login" && (
            <div className="flex justify-center py-2">
              <div className="bg-[#1a1f2e] rounded-lg px-6 py-3 flex items-center gap-3">
                <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-400 text-sm">인증</span>
                <div className="border-l border-slate-600 pl-3">
                  <span className="text-slate-500 text-xs">CLOUDFLARE</span>
                </div>
              </div>
            </div>
          )}
        </form>

        {/* Submit Button */}
        <Button
          type="submit"
          onClick={handleSubmit}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-medium"
        >
          {mode === "login" ? "Login" : "Sign Up"}
        </Button>

        {/* Switch mode links */}
        <div className="text-center mt-4 space-y-2">
          {mode === "login" ? (
            <>
              <p className="text-slate-400 text-sm">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => switchMode("signup")}
                  className="text-white font-semibold hover:underline"
                >
                  Sign Up
                </button>
              </p>
              <p className="text-slate-400 text-sm">
                Forgot Password?{" "}
                <button type="button" className="text-white font-semibold hover:underline">
                  Reset password
                </button>
              </p>
            </>
          ) : (
            <p className="text-slate-400 text-sm">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => switchMode("login")}
                className="text-white font-semibold hover:underline"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AuthModal({ isOpen, onClose, initialMode = 'login', onLogin }) {
  const [mode, setMode] = useState(initialMode);
  const [formData, setFormData] = useState({
    userId: '',
    email: '',
    password: '',
    confirmPassword: '',
    referralCode: '',
    uplineCode: '',
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
      userId: '',
      email: '',
      password: '',
      confirmPassword: '',
      referralCode: '',
      uplineCode: '',
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
    url('/images/loginbg.png')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-2 sm:top-4 right-2 sm:right-4 text-slate-400 hover:text-white z-10"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-md lg:max-w-4xl px-3 sm:px-6 max-h-[95vh] overflow-y-auto py-2 sm:py-0 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Logo */}
        <div className={`text-center ${mode === 'signup' ? 'mb-3 sm:mb-4' : 'mb-6 sm:mb-10'}`}>
          <img
            src="/images/logo.svg"
            alt="MIMBONODE"
            className={`mx-auto ${mode === 'signup' ? 'h-12 sm:h-14' : 'h-14 sm:h-16'} w-auto`}
          />
        </div>

        {/* Form Title */}
        <h2
          className={`text-white ${
            mode === 'signup' ? 'text-base sm:text-lg' : 'text-lg'
          } font-semibold ${mode === 'signup' ? 'mb-2 sm:mb-3' : 'mb-3 sm:mb-4'}`}
        >
          {mode === 'login' ? 'Login' : 'Sign Up'}
        </h2>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className={`w-full
bg-white/10
backdrop-blur-md
border-t border-l border-r border-white/5
rounded-xl
${mode === 'signup' ? 'p-3 sm:p-4 lg:p-5' : 'p-4 sm:p-6'}
${mode === 'signup' ? 'mb-3 sm:mb-4' : 'mb-4 sm:mb-6'}
shadow-lg
shadow-black/20`}
        >
          {/* User ID */}
          <div>
            <label
              className={`block text-white ${
                mode === 'signup' ? 'text-xs sm:text-sm' : 'text-sm'
              } font-extralight ${mode === 'signup' ? 'mb-0.5 sm:mb-1' : 'mb-1.5'}`}
            >
              User ID
            </label>
            <input
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              placeholder={mode === 'login' ? 'ID' : 'User ID'}
              className={`w-full bg-transparent backdrop-blur-xl backdrop-saturate-150 border-t border-l border-r border-white/20 rounded-lg ${
                mode === 'signup' ? 'px-3 sm:px-4 py-1.5 sm:py-2' : 'px-4 py-3'
              } ${
                mode === 'signup' ? 'text-sm' : 'text-base'
              } text-white placeholder-white/50 placeholder:font-extralight focus:outline-none mb-0.5 sm:mb-1 shadow-[0_4px_16px_0_rgba(0,0,0,0.3)]`}
            />
            {mode === 'signup' && (
              <p className="text-white/50 text-[10px] sm:text-xs font-extralight mb-1.5 sm:mb-2">
                User ID must contain only lowercase letters and numbers
              </p>
            )}
          </div>

          {/* Email - Only for signup */}
          {mode === 'signup' && (
            <div>
              <label className="block text-white text-xs sm:text-sm font-extralight mb-0.5 sm:mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-transparent backdrop-blur-xl backdrop-saturate-150 border-t border-l border-r border-white/20 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-sm text-white placeholder-white/50 placeholder:font-extralight focus:outline-none mb-0.5 sm:mb-1 shadow-[0_4px_16px_0_rgba(0,0,0,0.3)]"
              />
              <p className="text-white/50 text-[10px] sm:text-xs font-extralight mb-1.5 sm:mb-2">
                Please enter a valid email for OTP verification
              </p>
            </div>
          )}

          {/* Password */}
          <div>
            <label
              className={`block text-white ${
                mode === 'signup' ? 'text-xs sm:text-sm' : 'text-sm'
              } font-extralight ${mode === 'signup' ? 'mb-0.5 sm:mb-1' : 'mb-3 sm:mb-5'}`}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className={`w-full bg-transparent backdrop-blur-xl backdrop-saturate-150 border-t border-l border-r border-white/20 rounded-lg ${
                mode === 'signup' ? 'px-3 sm:px-4 py-1.5 sm:py-2 mb-2.5 sm:mb-2' : 'px-4 py-3 mb-3'
              } ${
                mode === 'signup' ? 'text-sm' : 'text-base'
              } text-white placeholder-white/50 placeholder:font-extralight focus:outline-none shadow-[0_4px_16px_0_rgba(0,0,0,0.3)]`}
            />
          </div>

          {/* Confirm Password - Only for signup */}
          {mode === 'signup' && (
            <div>
              <label className="block text-white text-xs sm:text-sm font-extralight mb-0.5 sm:mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-transparent backdrop-blur-xl backdrop-saturate-150 border-t border-l border-r border-white/20 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-sm text-white placeholder-white/50 placeholder:font-extralight focus:outline-none mb-2.5 sm:mb-2 shadow-[0_4px_16px_0_rgba(0,0,0,0.3)]"
              />
            </div>
          )}

          {/* Referral Code - Only for signup */}
          {mode === 'signup' && (
            <div>
              <label className="block text-white text-xs sm:text-sm font-extralight mb-0.5 sm:mb-1">
                Referral Code
              </label>
              <input
                type="text"
                name="referralCode"
                value={formData.referralCode}
                onChange={handleChange}
                placeholder="Number 6 digits"
                className="w-full bg-transparent backdrop-blur-xl backdrop-saturate-150 border-t border-l border-r border-white/20 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-sm text-white placeholder-white/50 placeholder:font-extralight focus:outline-none mb-2.5 sm:mb-2 shadow-[0_4px_16px_0_rgba(0,0,0,0.3)]"
              />
            </div>
          )}

          {/* Upline Code - Only for signup */}
          {mode === 'signup' && (
            <div>
              <label className="block text-white text-xs sm:text-sm font-extralight mb-0.5 sm:mb-1">
                Upline Code
              </label>
              <input
                type="text"
                name="uplineCode"
                value={formData.uplineCode}
                onChange={handleChange}
                placeholder="Number 6 digits"
                className="w-full bg-transparent backdrop-blur-xl backdrop-saturate-150 border-t border-l border-r border-white/20 rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-sm text-white placeholder-white/50 placeholder:font-extralight focus:outline-none mb-2.5 sm:mb-2 shadow-[0_4px_16px_0_rgba(0,0,0,0.3)]"
              />
            </div>
          )}
        </form>

        {/* Captcha - Only for login */}
        {mode === 'login' && (
          <div className="flex justify-center mb-2 sm:mb-4">
            <div className="bg-[#151515] border border-white/10 px-4 sm:px-8 py-2 sm:py-3 flex justify-between items-center max-w-md w-1/2">
              {/* 체크 아이콘 + 텍스트 */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/10 flex items-center justify-center bg-white">
                  <svg
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-white/50 text-xs sm:text-sm">성공!</span>
              </div>

              {/* 이미지 오른쪽 */}
              <img
                src="https://www.cloudflare.com/img/logo-cloudflare-dark.svg"
                alt="Cloudflare"
                className="h-6 sm:h-8"
              />
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          onClick={handleSubmit}
          className={`w-full ${
            mode === 'signup' ? 'mt-0 sm:mt-1' : 'mt-1'
          } bg-blue-600 hover:bg-blue-700 text-white ${
            mode === 'signup' ? 'py-2 sm:py-2.5' : 'py-3'
          } rounded-full font-medium transition-colors
border-t border-l border-r border-white/20 backdrop-blur-md
shadow-lg shadow-black/20 ${mode === 'signup' ? 'text-sm sm:text-base' : 'text-base'}`}
        >
          {mode === 'login' ? 'Login' : 'Sign Up'}
        </Button>

        {/* Switch mode links */}
        <div
          className={`text-center ${
            mode === 'signup' ? 'mt-2 sm:mt-3 space-y-1 sm:space-y-2' : 'mt-3 space-y-2'
          }`}
        >
          {mode === 'login' ? (
            <>
              <p className="text-slate-400 text-xs sm:text-sm">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => switchMode('signup')}
                  className="text-white font-semibold hover:underline"
                >
                  Sign Up
                </button>
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                Forgot Password?{' '}
                <button type="button" className="text-white font-semibold hover:underline">
                  Reset password
                </button>
              </p>
            </>
          ) : (
            <p className="text-slate-400 text-xs sm:text-sm">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => switchMode('login')}
                className="text-white font-medium hover:underline"
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

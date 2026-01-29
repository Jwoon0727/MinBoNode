import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export default function CardRegistrationContent({ onBack }) {
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    proxyNumber: "",
    verificationCode: "",
  });
  const [verificationSent, setVerificationSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [timer, setTimer] = useState(0);

  // Timer countdown effect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSendVerification = () => {
    // TODO: Implement verification code sending
    console.log("Sending verification code to:", formData.email);
    setVerificationSent(true);
    setTimer(30); // Set timer to 60 seconds
  };

  const handleVerifyCode = () => {
    // TODO: Implement verification code verification
    console.log("Verifying code:", formData.verificationCode);
    // Simulate successful verification
    setEmailVerified(true);
  };

  const handleRegister = () => {
    // TODO: Implement card registration
    console.log("Registering card with data:", formData);
  };

  const handleCancel = () => {
    onBack();
  };

  return (
    <div className="text-white">
      {/* Back Button and Title */}
      <div className="flex items-center gap-3 mb-2">
        <button
          onClick={onBack}
          className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
        >
          <ArrowLeft size={20} className="text-slate-400" />
        </button>
        <h3 className="text-white text-lg font-semibold">Card Registration</h3>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-6 ml-14">
      Registration is only possible with email registered on the Fellas Card site.
      </p>

      {/* Card Display */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-64 h-80 flex items-center justify-center">
          <img
            src="/images/crypto-card.jpg"
            alt="Crypto Card"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-2xl mx-auto bg-[#24282D] border border-slate-800 rounded-xl p-6 mb-6">
        {/* Email Section */}
        <div className="mb-6">
          <label className="block text-sm text-white mb-2">
            Email - Mastercard.com registered account
          </label>
          <input
            type="email"
            placeholder="yashini@gmail.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="w-full bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors mb-3"
          />
          {!emailVerified && (
            <button
              onClick={handleSendVerification}
              disabled={verificationSent && timer > 0}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {verificationSent
                ? `Resend Code ${timer > 0 ? `(0:${timer.toString().padStart(2, '0')})` : ''}`
                : "Send Verification Code"}
            </button>
          )}

          {/* Verification Code Input - Shows after sending verification */}
          {verificationSent && !emailVerified && (
            <div className="mt-3">
              <input
                type="text"
                placeholder="Enter 6-digit verification code"
                value={formData.verificationCode}
                onChange={(e) => handleInputChange("verificationCode", e.target.value)}
                maxLength={6}
                className="w-full bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors mb-3"
              />
              <button
                onClick={handleVerifyCode}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
              >
                Verify Code
              </button>
            </div>
          )}

          {/* Email Verified Success Message */}
          {emailVerified && (
            <div className="mt-3 flex items-center gap-2 text-cyan-400">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Email verified successfully</span>
            </div>
          )}
        </div>

        {/* Card Number */}
        <div className="mb-6">
          <label className="block text-sm text-white mb-2">Card Number</label>
          <input
            type="text"
            placeholder="0000-0000-0000-0000"
            value={formData.cardNumber}
            onChange={(e) => handleInputChange("cardNumber", e.target.value)}
            maxLength={19}
            className="w-full bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Proxy Number */}
        <div className="mb-6">
          <label className="block text-sm text-white mb-2">Proxy Number</label>
          <input
            type="text"
            placeholder="Enter 16-digit number"
            value={formData.proxyNumber}
            onChange={(e) => handleInputChange("proxyNumber", e.target.value)}
            maxLength={16}
            className="w-full bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors mb-3"
          />
          <div className="flex items-start gap-2 text-cyan-400 text-xs">
            <svg
              className="w-4 h-4 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span>12-digit number located at the bottom right on the back of your card</span>
          </div>
        </div>

        {/* Guidelines */}
        <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
          <h4 className="text-[#F2FE79] text-xs font-medium mb-3">
            Card Registration Guidelines
          </h4>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="text-white/50 text-xs leading-none mt-0.5">•</span>
              <span className="text-sm text-white/50">
              You must sign up with the email registered on fellascard.com and complete KYC to register.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white/50 text-xs leading-none mt-0.5">•</span>
              <span className="text-sm text-white/50">
              Please enter the card number and proxy number accurately.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white/50 text-xs leading-none mt-0.5">•</span>
              <span className="text-sm text-white/50">
              Expired or duplicate cards cannot be registered.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-white/50 text-xs leading-none mt-0.5">•</span>
              <span className="text-sm text-white/50">
              Your card information is securely encrypted and stored.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="max-w-2xl mx-auto flex gap-4">
        <button
          onClick={handleCancel}
          className="flex-1 py-2 bg-[#222325] border border-white/10 hover:bg-slate-700 text-white rounded-full font-medium text-base transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleRegister}
          className="flex-1 py-2 bg-gradient-to-r from-blue-700 to-blue-800 hover:bg-blue-700 text-white rounded-full font-medium text-base transition-colors"
        >
          Register
        </button>
      </div>
    </div>
  );
}

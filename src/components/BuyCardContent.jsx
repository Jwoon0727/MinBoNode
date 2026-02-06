import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function BuyCardContent({ onBack }) {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    country: "",
    state: "",
    city: "",
    streetAddress: "",
    apartment: "",
    zipCode: "",
    agreements: {
      terms: false,
      addressCorrect: false,
      emailCorrect: false,
      nonRefundable: false,
    },
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAgreementChange = (field) => {
    setFormData((prev) => ({
      ...prev,
      agreements: {
        ...prev.agreements,
        [field]: !prev.agreements[field],
      },
    }));
  };

  const handleSendVerification = () => {
    // TODO: Implement verification code sending
    console.log("Sending verification code to:", formData.email);
  };

  const handlePayNow = () => {
    // TODO: Implement payment processing
    console.log("Processing payment with data:", formData);
  };

  return (
    <div className="text-white">
      {/* Back Button and Title */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
        >
          <ArrowLeft size={20} className="text-slate-400" />
        </button>
        <h3 className="text-white text-lg font-semibold">Buy Card</h3>
      </div>

      {/* Card Display */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-72 sm:w-80 lg:w-96 h-[360px] sm:h-[400px] lg:h-[440px] mb-4 flex items-center justify-center">
          <img
            src="/images/crypto_card.svg"
            alt="Crypto Card"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Price Card */}
        <div className="bg-[#24282D] border border-white/10 rounded-2xl px-16 py-4 text-center">
          <h2 className="text-white text-lg mb-2">
            CRYPTO FELLAS MEMBERSHIP CARD
          </h2>
          <p className="text-cyan-400 text-2xl font-bold mb-1">240 USDT</p>
          <p className="text-white/50 text-xs">Available Balance: 1 USDT</p>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-2xl mx-auto bg-[#24282D] border border-slate-800 rounded-xl p-6 mb-6">
        {/* Email Section */}
        <div className="mb-6">
        <label className="block text-sm text-white mb-2">Email</label>
        <input
          type="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="w-full bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors mb-3"
        />
        <button
          onClick={handleSendVerification}
          className="w-full bg-[#4F66D7] hover:bg-blue-700 text-white py-3 rounded-lg font-normal transition-colors flex items-center justify-center gap-2"
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
          Send Verification Code
        </button>
      </div>

      {/* Card Recipient Information */}
      <div className="mb-6">
        <h3 className="text-white text-base font-semibold mb-4">
          Card Recipient Information
        </h3>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="w-full bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <input
            type="text"
            placeholder="Middle Name (Optional)"
            value={formData.middleName}
            onChange={(e) => handleInputChange("middleName", e.target.value)}
            className="w-full bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="w-full bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
          />
             <select
            value={formData.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
            className="w-full bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
          >
            <option value="">Select Nationality</option>
            <option value="US">United States</option>
            <option value="KR">South Korea</option>
            <option value="JP">Japan</option>
            <option value="CN">China</option>
            <option value="UK">United Kingdom</option>
            {/* Add more countries as needed */}
          </select>
        <input
          type="tel"
          placeholder="Phone Number (e.g. +86 138 1234 5678)"
          value={formData.phoneNumber}
          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          className="w-full bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
        />
        </div>
      </div>

 
   


      {/* Billing Address */}
      <div className="mb-6">
        <h3 className="text-white text-base font-semibold mb-4">
          Billing Address
        </h3>
        <div className="space-y-3">
          <select
            value={formData.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
            className="w-full bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
          >
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="KR">South Korea</option>
            <option value="JP">Japan</option>
            <option value="CN">China</option>
            <option value="UK">United Kingdom</option>
            {/* Add more countries as needed */}
          </select>
          <input
            type="text"
            placeholder="State / Province"
            value={formData.state}
            onChange={(e) => handleInputChange("state", e.target.value)}
            className="w-full bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <input
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={(e) => handleInputChange("city", e.target.value)}
            className="w-full bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <input
            type="text"
            placeholder="Street Address"
            value={formData.streetAddress}
            onChange={(e) => handleInputChange("streetAddress", e.target.value)}
            className="w-full bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <input
            type="text"
            placeholder="Apartment, Suite, Unit, etc. (Optional)"
            value={formData.apartment}
            onChange={(e) => handleInputChange("apartment", e.target.value)}
            className="w-full bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <input
            type="text"
            placeholder="ZIP / Postal Code"
            value={formData.zipCode}
            onChange={(e) => handleInputChange("zipCode", e.target.value)}
            className="w-full bg-[#151515] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* Terms and Conditions Container */}
      <div className="bg-[#2A2F35] border border-slate-700/50 rounded-lg p-5 mb-6">
        {/* Agreements */}
        <div className="mb-6 space-y-3">
        <div className="flex items-start gap-3">
          <span className="text-white/50 text-lg leading-none mt-0.5">•</span>
          <span className="text-sm text-white/50">
            The information you provide is securely transmitted to the card
            company (Relams=Latam) and is not stored by us.
          </span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-white/50 text-lg leading-none mt-0.5">•</span>
          <span className="text-sm text-white/50">
            Please ensure your address information is correct for shipping
            purposes.
          </span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-white/50 text-lg leading-none mt-0.5">•</span>
          <span className="text-sm text-white/50">
            93.5% of the card purchases should be used as a commission.
          </span>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-white/50 text-lg leading-none mt-0.5">•</span>
          <span className="text-sm text-white/50">
            Please note: your address and contact information must be accurate.
            Transactions are non-refundable. Once you send your cryptocurrency,
            there is no way to undo it or request a chargeback, so only transact
            with people or businesses you know and trust according to their
            policies.
          </span>
        </div>
      </div>

      {/* Warning Box */}
      <div className="bg-[#F2FE79]/10 border  rounded-lg p-4 mb-6 flex flex-col items-center gap-3 text-center">
        <svg
          className="w-6 h-6 text-[#F2FE79] flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <div>
          <p className="text-[#F2FE79] text-sm font-medium mb-1">
            This product is non-refundable after purchase.
          </p>
          <p className="text-[#F2FE79] text-xs">
            Please make sure your purchase decision carefully before proceeding.
          </p>
        </div>
      </div>
      </div>
      </div>

      {/* Pay Now Button */}
      <div className="max-w-2xl mx-auto">
        <button
          onClick={handlePayNow}
          className="w-full py-2 bg-[#222325] border border-white/10 text-white rounded-full font-semibold text-sm transition-colors"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

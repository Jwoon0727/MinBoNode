import { useState } from "react";
import { Camera, Copy, Check } from "lucide-react";
import PageHeader from "./PageHeader";

const userInfo = [
  { label: "My Referral Code", value: "828674" },
  { label: "Username", value: "ablecity" },
  { label: "Email", value: "bluewrath20@gmail.com" },
  { label: "Full Name", value: "bluewrath0" },
  { label: "Feeding", value: "Active", isActive: true },
  { label: "Level", value: "0" },
  { label: "Invited Friends", value: "0" },
];

const statsRow1 = [
  { label: "MAX OUT RECEIVE", value: "9,510.32 MGG" },
  { label: "TOTAL MAX OUT", value: "28,650,000.00 MGG" },
  { label: "SYSTEM INVEST", value: "$0.00" },
];

const statsRow2 = [
  { label: "YOUR MGG", value: "9,505.32 MGG" },
  { label: "YOUR USDT", value: "1.00 USDT" },
  { label: "TOKEN PRICE", value: "$0.0027" },
];

const statsRow3 = [
  { label: "INTEREST", value: "9,510.32 MGG" },
  { label: "DIRECT BONUS", value: "$0.00" },
  { label: "MATCHING BONUS", value: "0.00 MGG" },
];

export default function ProfilePage({ onMenuClick }) {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <PageHeader title="Profile" onMenuClick={onMenuClick} />

        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-4">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-4xl">
              😎
            </div>
            <button className="absolute bottom-0 right-0 w-7 h-7 bg-slate-700 rounded-full flex items-center justify-center border-2 border-slate-900">
              <Camera size={14} className="text-slate-300" />
            </button>
          </div>
          <button className="w-full max-w-xs bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-medium transition-colors mb-3">
            Edit Profile
          </button>
          <button
  className="
    w-full max-w-xs
    bg-gradient-to-b from-slate-700 to-black
    hover:from-slate-500 hover:to-black
    text-white
    py-3
    rounded-full
    font-normal
    transition-all
  "
>
  Change Password
</button>
        </div>

        {/* User Info Card */}
        <div className="bg-[#222325] border border-white/10 rounded-xl p-4 mb-6">
          <div className="space-y-1">
            {userInfo.map((item, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-slate-400">{item.label}</span>
                <span className={item.isActive ? "text-cyan-400" : "text-white"}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

     {/* Total Reward */}
<div className="mb-6">
  <div className="flex justify-between items-center mb-2">
    <h3 className="text-white font-semibold">Total Reward</h3>
    <span className="text-white font-semibold">30.50%</span>
  </div>

  {/* Progress Bar Container */}
  <div className="w-full h-3 rounded-full overflow-hidden border-t border-r border-white/20">
    <div
      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
      style={{ width: "30.50%" }}
    />
  </div>
</div>

{/* Stats Grid - All Rows Combined */}
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
  {[...statsRow1, ...statsRow2, ...statsRow3].map((stat, index) => (
    <div
      key={index}
      className="bg-[#222325] border border-white/10 rounded-xl p-4 text-center"
    >
      <div className="text-white/80 text-xs mb-2">{stat.label}</div>
      <div className="text-white font-semibold text-sm">{stat.value}</div>
    </div>
  ))}
</div>

        {/* Invite Friends */}
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4">Invite Friends</h3>
          <div className="bg-[#222325] border border-white/10 rounded-xl p-4 space-y-4">
            {/* Referral Code */}
            <div>
              <label className="text-white text-sm mb-2 block">Referral Code</label>
              <div className="flex items-center justify-between
  bg-black/20
  border-t border-l border-r border-white/20
  rounded-lg
  px-4 py-3">
                <span className="text-white">828674</span>
                <button
                  onClick={() => handleCopy("828674", "referral")}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  {copiedField === "referral" ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            {/* Invite Link */}
            <div>
              <label className="text-white text-sm mb-2 block">Invite Link</label>
              <div className="flex items-center justify-between
  bg-black/20
  border-t border-l border-r border-white/20
  rounded-lg
  px-4 py-3">
                <span className="text-white text-sm truncate mr-2">https://preview.mimbon...</span>
                <button
                  onClick={() => handleCopy("https://preview.mimbonode.com/ref/828674", "link")}
                  className="text-white/50 hover:text-white transition-colors flex-shrink-0"
                >
                  {copiedField === "link" ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

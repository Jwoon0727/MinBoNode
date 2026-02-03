
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const historyTabs = ["Purchase History", "Topup History"];

export default function MyCardContent({ onBuyCard, onRegister }) {
  const [activeHistoryTab, setActiveHistoryTab] = useState("Purchase History");

  return (
    <>
      <h3 className="text-white text-lg font-semibold mb-6">My Card</h3>

      {/* Card Carousel */}
      <div className="flex items-center justify-center gap-4 mb-6">
        {/* Left Arrow */}
        <button className="w-10 h-10 bg-slate-800/50 border border-slate-700 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors">
          <ChevronLeft size={20} className="text-slate-400" />
        </button>

     {/* Card Display */}
<div className="relative flex flex-col items-center">
  <div className="w-72 h-[340px] relative">
    <img
      src="/images/black_card.svg"
      alt="My Card"
      className="w-full h-full object-contain"
    />

    {/* Buy Now Button Overlay */}
    <button 
      onClick={onBuyCard}
      className="
        absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        bg-[#4F66D7] hover:bg-blue-700
        text-white px-8 py-2
        rounded-full text-xs font-light 
        transition-colors
        border-t border-l border-r border-white/20
      "
    >
      Buy Now
    </button>
  </div>
</div>

        {/* Right Arrow */}
        <button className="w-10 h-10 bg-slate-800/50 border border-slate-700 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors">
          <ChevronRight size={20} className="text-slate-400" />
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-3 mb-8">
      <button className="px-6 py-2 backdrop-blur-md shadow-lg shadow-black/20 bg-[#24282D] border-t border-l border-r border-white/10 text-white/70 rounded-full text-sm hover:bg-slate-700 transition-colors text-xs font-light ">
  Top-up
</button>
        <button 
          onClick={onRegister}
          className="px-6 py-2 bg-[#2623A9] hover:bg-blue-700 text-white text-xs font-light rounded-full border-t border-l border-r border-white/15 text-sm font-medium transition-colors"
        >
          Register
        </button>
        <button className="px-6 py-2 backdrop-blur-md text-xs font-light shadow-lg shadow-black/20 bg-[#24282D] border-t border-l border-r border-white/10 text-white/70 rounded-full text-sm hover:bg-slate-700 transition-colors">
          Remove
        </button>
      </div>

      {/* My Card Section */}
      <h3 className="text-white text-lg font-semibold mb-4">My Card</h3>

      {/* History Tabs */}
      <div className="flex gap-2 mb-4">
        {historyTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveHistoryTab(tab)}
            className={`px-4 py-1.5 rounded-full text-xs font-light transition-colors ${
              activeHistoryTab === tab
                ? "bg-[#2623A9] text-white border-t border-l border-r border-white/20"
                : "bg-[#24282D] border-t border-l border-r border-white/10 text-slate-300 rounded-full text-sm hover:bg-slate-700 transition-colors"
            }`}
          >
            {tab} 
          </button>
        ))}
      </div>

      {/* History Content */}
      <div className="bg-[#24282D] border  rounded-xl p-8">
        <p className="text-white/50 text-center text-xs font-light ">No data</p>
      </div>
    </>
  );
}

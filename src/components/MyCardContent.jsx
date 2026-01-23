
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const historyTabs = ["Purchase History", "Topup History"];

export default function MyCardContent() {
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
          <div className="w-64 h-80 relative">
            <img
              src="/images/crypto-card.jpg"
              alt="My Card"
              className="w-full h-full object-contain transform -rotate-12"
            />
            {/* Buy Now Button Overlay */}
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full text-sm font-medium transition-colors">
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
        <button className="px-6 py-2 bg-transparent border border-slate-600 text-slate-300 rounded-full text-sm hover:bg-slate-700 transition-colors">
          Top-up
        </button>
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors">
          Register
        </button>
        <button className="px-6 py-2 bg-transparent border border-slate-600 text-slate-300 rounded-full text-sm hover:bg-slate-700 transition-colors">
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
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeHistoryTab === tab
                ? "bg-blue-600 text-white"
                : "bg-slate-700/50 text-slate-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* History Content */}
      <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8">
        <p className="text-slate-500 text-center text-sm">No data</p>
      </div>
    </>
  );
}

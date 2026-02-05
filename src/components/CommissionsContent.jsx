
import { useState } from "react";

const bonusTabs = ["All", "Direct Bonus", "Matching Bonus", "Special Bonus", "Card Bonus"];

export default function CommissionsContent() {
  const [activeSubTab, setActiveSubTab] = useState("All");

  return (
    <>
      <h3 className="text-white text-lg font-semibold mb-4">Commissions</h3>
      
      {/* Sub Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {bonusTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={`
              px-2 py-1.5 rounded-full text-xs font-extralight transition-colors
              ${
                activeSubTab === tab
                   ? "bg-[#1E1A8F] backdrop-blur-md text-white shadow-lg shadow-black/30 border-l border-t border-r border-white/15"
                    : "bg-white/10 backdrop-blur-sm text-white hover:text-white hover:bg-white/15 border-l border-t border-r border-white/15"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content based on active tab */}
      {activeSubTab === "All" && (
        <>
          {/* Total Bonus Card */}
          <div className="bg-[#24282D] border-l border-t border-r border-white/15 rounded-xl overflow-hidden mb-4">
  {/* Header */}
  <div className="flex items-center gap-3 px-4 py-3">
    {/* Vertical Bar */}
    <div className="w-1 h-7 bg-cyan-400 rounded-full" />

    <span className="text-cyan-400">
      Total Bonus
    </span>
  </div>
            
{/* Bonus Summary */}
<div className="px-4 py-3">
  <div
    className="
      grid
      grid-cols-4
      gap-y-4
      gap-x-6
      sm:grid-cols-4
    "
  >
    {/* Direct */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
      <span className="text-white text-sm">Direct:</span>
      <span className="text-white text-sm font-medium">0.00</span>
    </div>

    {/* Matching */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
      <span className="text-white text-sm">Matching:</span>
      <span className="text-white text-sm font-medium">0.00</span>
    </div>

    {/* Special */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
      <span className="text-white text-sm">Special:</span>
      <span className="text-white text-sm font-medium">0.00</span>
    </div>

    {/* Card */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
      <span className="text-white text-sm">Card:</span>
      <span className="text-white text-sm font-medium">0.00</span>
    </div>
    </div>
    </div>
    </div>

          {/* Data Area */}
          <div className="bg-[#24282D] rounded-xl p-8 min-h-[200px] flex items-center justify-center">
            <p className="text-white/50 text-sm">No data</p>
          </div>
        </>
      )}

      {activeSubTab === "Direct Bonus" && (
        <>
      {/* Direct Bonus Header */}
<div className="bg-[#24282D]  rounded-lg px-4 py-3 mb-4">
  <div className="flex items-center gap-3">
    {/* Vertical Bar */}
    <div className="w-1 h-7 bg-cyan-400 rounded-full" />

    <span className="text-cyan-400 font-medium">
      Direct Bonus: 0.00
    </span>
  </div>
</div>

          {/* Data Area */}
          <div className="bg-[#24282D] rounded-xl p-8 min-h-[200px] flex items-center justify-center">
            <p className="text-white/50 text-sm">No data</p>
          </div>
        </>
      )}

      {activeSubTab === "Matching Bonus" && (
        <>
      {/* Direct Bonus Header */}
      <div className="bg-[#24282D]  rounded-lg px-4 py-3 mb-4">
  <div className="flex items-center gap-3">
    {/* Vertical Bar */}
    <div className="w-1 h-7 bg-cyan-400 rounded-full" />

    <span className="text-cyan-400 font-medium">
      Matching Bonus: 0.00
    </span>
  </div>
</div>
        

          {/* Data Area */}
          <div className="bg-[#24282D] rounded-xl p-8 min-h-[200px] flex items-center justify-center">
            <p className="text-white/50 text-sm">No data</p>
          </div>
        </>
      )}

      {activeSubTab === "Special Bonus" && (
        <>
          {/* Special Bonus Header */}
          <div className="bg-[#24282D]  rounded-lg px-4 py-3 mb-4">
  <div className="flex items-center gap-3">
    {/* Vertical Bar */}
    <div className="w-1 h-7 bg-cyan-400 rounded-full" />

    <span className="text-cyan-400 font-medium">Special Bonus: 0.00</span>
  </div>
</div>

          {/* Data Area */}
          <div className="bg-[#24282D] rounded-xl p-8 min-h-[200px] flex items-center justify-center">
            <p className="text-white/50 text-sm">No data</p>
          </div>
        </>
      )}

      {activeSubTab === "Card Bonus" && (
        <>
          {/* Card Bonus Header */}
          <div className="bg-[#24282D]  rounded-lg px-4 py-3 mb-4">
  <div className="flex items-center gap-3">
    {/* Vertical Bar */}
    <div className="w-1 h-7 bg-cyan-400 rounded-full" />

    <span className="text-cyan-400 font-medium">Card Bonus: 0.00</span>
  </div>
</div>

          {/* Data Area */}
          <div className="bg-[#24282D] rounded-xl p-8 min-h-[200px] flex items-center justify-center">
            <p className="text-white/50 text-sm">No data</p>
          </div>
        </>
      )}
    </>
  );
}

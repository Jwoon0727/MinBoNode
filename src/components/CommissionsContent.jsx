
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
              px-4 py-1.5 rounded-full text-xs font-medium transition-colors
              ${
                activeSubTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-slate-700/50 text-slate-400 hover:text-white"
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
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden mb-4">
            {/* Header */}
            <div className="px-4 py-3 border-b border-slate-700">
              <span className="text-red-500 font-semibold">Total Bonus</span>
            </div>
            
            {/* Bonus Summary */}
            <div className="px-4 py-3 flex flex-wrap gap-x-8 gap-y-2">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm">Direct:</span>
                <span className="text-white text-sm">0.00</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm">Matching:</span>
                <span className="text-white text-sm">0.00</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm">Special:</span>
                <span className="text-white text-sm">0.00</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-sm">Card:</span>
                <span className="text-white text-sm">0.00</span>
              </div>
            </div>
          </div>

          {/* Data Area */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 min-h-[200px] flex items-center justify-center">
            <p className="text-slate-500 text-sm">No data</p>
          </div>
        </>
      )}

      {activeSubTab === "Direct Bonus" && (
        <>
          {/* Direct Bonus Header */}
          <div className="bg-slate-800/50 border-l-4 border-l-orange-500 border-y border-r border-slate-700 rounded-r-lg px-4 py-3 mb-4">
            <span className="text-cyan-400 font-medium">Direct Bonus: 0.00</span>
          </div>

          {/* Data Area */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 min-h-[200px] flex items-center justify-center">
            <p className="text-slate-500 text-sm">No data</p>
          </div>
        </>
      )}

      {activeSubTab === "Matching Bonus" && (
        <>
          {/* Matching Bonus Header */}
          <div className="bg-slate-800/50 border-l-4 border-l-orange-500 border-y border-r border-slate-700 rounded-r-lg px-4 py-3 mb-4">
            <span className="text-cyan-400 font-medium">Matching Bonus: 0.00</span>
          </div>

          {/* Data Area */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 min-h-[200px] flex items-center justify-center">
            <p className="text-slate-500 text-sm">No data</p>
          </div>
        </>
      )}

      {activeSubTab === "Special Bonus" && (
        <>
          {/* Special Bonus Header */}
          <div className="bg-slate-800/50 border-l-4 border-l-orange-500 border-y border-r border-slate-700 rounded-r-lg px-4 py-3 mb-4">
            <span className="text-cyan-400 font-medium">Special Bonus: 0.00</span>
          </div>

          {/* Data Area */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 min-h-[200px] flex items-center justify-center">
            <p className="text-slate-500 text-sm">No data</p>
          </div>
        </>
      )}

      {activeSubTab === "Card Bonus" && (
        <>
          {/* Card Bonus Header */}
          <div className="bg-slate-800/50 border-l-4 border-l-orange-500 border-y border-r border-slate-700 rounded-r-lg px-4 py-3 mb-4">
            <span className="text-cyan-400 font-medium">Card Bonus: 0.00</span>
          </div>

          {/* Data Area */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 min-h-[200px] flex items-center justify-center">
            <p className="text-slate-500 text-sm">No data</p>
          </div>
        </>
      )}
    </>
  );
}

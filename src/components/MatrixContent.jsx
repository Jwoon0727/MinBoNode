
import { useState } from "react";
import { ChevronUp, ChevronDown, Download, Search, Plus, Minus, Maximize2 } from "lucide-react";

export default function MatrixContent() {
  const [colorMode, setColorMode] = useState("orange"); // "orange" or "blue"

  return (
    <>
      <h3 className="text-white text-lg font-semibold mb-4">Matrix</h3>
      
      {/* Matrix Controls */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setColorMode("orange")}
            className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs transition-colors ${
              colorMode === "orange" 
                ? "bg-yellow-500 text-white" 
                : "bg-[#151515] text-white/50 hover:bg-slate-600"
            }`}
          >
            U
          </button>
          <button 
            onClick={() => setColorMode("blue")}
            className={`w-8 h-8 rounded-lg flex items-center justify-center  text-xs transition-colors ${
              colorMode === "blue" 
                ? "bg-blue-600 text-white" 
                : "bg-[#151515] text-white/50 hover:bg-slate-600"
            }`}
          >
            R
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 bg-[#151515] rounded-lg flex items-center justify-center hover:bg-slate-600">
            <ChevronUp size={14} className="text-white/50" />
          </button>
          <button className="w-8 h-8 bg-[#151515] rounded-lg flex items-center justify-center hover:bg-slate-600">
            <ChevronDown size={14} className="text-white/50" />
          </button>
          <button className="w-14 h-8 bg-[#151515] rounded-lg flex items-center justify-center hover:bg-slate-600">
            <Download size={14} className="text-white/50" />
            <span className="text-white/50 text-xs ml-1">PDF</span>
          </button>
        
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by ID"
          className="flex-1 bg-[#151515] border border-white/10 rounded-lg px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:border-blue-500"
        />
        <button className="bg-[#2623A9] hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
          <Search size={18} className="text-white" />
        </button>
      </div>

      {/* Matrix View */}
      <div className="bg-[#24282D] border border-white/10 rounded-xl p-4 min-h-[400px] relative">
        {/* Zoom Controls */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-white text-sm bg-[#151515] border border-white/10 px-3 py-1 rounded">100%</span>
          <button className="w-7 h-7 bg-[#151515] border border-white/10 rounded flex items-center justify-center hover:bg-slate-600">
            <Plus size={14} className="text-white" />
          </button>
          <button className="w-7 h-7 bg-[#151515] border border-white/10 rounded flex items-center justify-center hover:bg-slate-600">
            <Minus size={14} className="text-white" />
          </button>
          <button className="w-7 h-7 bg-[#151515] border border-white/10 rounded flex items-center justify-center hover:bg-slate-600 ml-auto">
            <Maximize2 size={14} className="text-white" />
          </button>
        </div>

{/* Tree Node */}
<div className="flex items-center justify-center h-[300px]">
  <div
    className={`rounded-lg shadow-lg min-w-[200px] overflow-hidden ${
      colorMode === "orange" ? "bg-orange-50" : "bg-slate-800"
    }`}
  >
<div className="rounded-lg shadow-lg min-w-[200px] overflow-hidden">
  {/* Header */}
  <div
    className={`flex items-center justify-between px-4 py-2 ${
      colorMode === "orange" ? "bg-yellow-400" : "bg-blue-600"
    }`}
  >
    <span
      className={`text-sm font-medium ${
        colorMode === "orange" ? "text-black" : "text-white"
      }`}
    >
      ID
    </span>
    <span
      className={`text-sm font-semibold ${
        colorMode === "orange" ? "text-black" : "text-white"
      }`}
    >
      ablecity
    </span>
  </div>

  {/* Content */}
  <div className="p-4 space-y-2 text-xs bg-white text-black">
    <div>828674</div>

    <div className="flex justify-between">
      <span>Direct System:</span>
      <span>0</span>
    </div>

    <div className="flex justify-between">
      <span>Personal Invest:</span>
      <span>38,200</span>
    </div>

    <div className="flex justify-between">
      <span>System Invest:</span>
      <span>0</span>
    </div>
  </div>

  {/* ✅ Level – 부모 박스 하단 전체 덮기 */}
  <div
    className={`
      px-4 py-3
      text-sm font-medium
      ${colorMode === "orange" ? "bg-slate-100 text-black" : "bg-slate-100 text-black"}
    `}
  >
    Level: 0
  </div>
</div>
  </div>
</div>
</div>
    </>
  );
}

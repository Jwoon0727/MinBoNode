
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
            className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${
              colorMode === "orange" 
                ? "bg-orange-500 text-white" 
                : "bg-slate-700 text-slate-400 hover:bg-slate-600"
            }`}
          >
            U
          </button>
          <button 
            onClick={() => setColorMode("blue")}
            className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${
              colorMode === "blue" 
                ? "bg-blue-600 text-white" 
                : "bg-slate-700 text-slate-400 hover:bg-slate-600"
            }`}
          >
            R
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600">
            <ChevronUp size={14} className="text-slate-400" />
          </button>
          <button className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600">
            <ChevronDown size={14} className="text-slate-400" />
          </button>
          <button className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600">
            <Download size={14} className="text-slate-400" />
          </button>
          <span className="text-slate-400 text-xs ml-1">PDF</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by ID"
          className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500"
        />
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
          <Search size={18} className="text-white" />
        </button>
      </div>

      {/* Matrix View */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 min-h-[400px] relative">
        {/* Zoom Controls */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-white text-sm bg-slate-700 px-3 py-1 rounded">100%</span>
          <button className="w-7 h-7 bg-slate-700 rounded flex items-center justify-center hover:bg-slate-600">
            <Plus size={14} className="text-white" />
          </button>
          <button className="w-7 h-7 bg-slate-700 rounded flex items-center justify-center hover:bg-slate-600">
            <Minus size={14} className="text-white" />
          </button>
          <button className="w-7 h-7 bg-slate-700 rounded flex items-center justify-center hover:bg-slate-600 ml-auto">
            <Maximize2 size={14} className="text-white" />
          </button>
        </div>

        {/* Tree Node */}
        <div className="flex items-center justify-center h-[300px]">
          <div className={`rounded-lg shadow-lg min-w-[200px] border-2 overflow-hidden ${
            colorMode === "orange" 
              ? "border-orange-400 bg-orange-50" 
              : "border-blue-500 bg-slate-800"
          }`}>
            {/* Header */}
            <div className={`flex items-center justify-between px-4 py-2 ${
              colorMode === "orange" 
                ? "bg-orange-400" 
                : "bg-blue-600"
            }`}>
              <span className="text-white text-sm font-medium">ID</span>
              <span className="text-white font-semibold text-sm">ablecity</span>
            </div>
            
            {/* Content */}
            <div className={`p-4 space-y-2 text-xs ${
              colorMode === "orange" ? "text-slate-700" : "text-slate-300"
            }`}>
              <div>
                <span className={colorMode === "orange" ? "text-slate-600" : "text-slate-400"}>828674</span>
              </div>
              <div className="flex justify-between">
                <span className={colorMode === "orange" ? "text-slate-500" : "text-slate-400"}>Direct System:</span>
                <span>0</span>
              </div>
              <div className="flex justify-between">
                <span className={colorMode === "orange" ? "text-slate-500" : "text-slate-400"}>Personal Invest:</span>
                <span>38,200</span>
              </div>
              <div className="flex justify-between">
                <span className={colorMode === "orange" ? "text-slate-500" : "text-slate-400"}>System Invest:</span>
                <span>0</span>
              </div>
              <div className={`mt-2 pt-2 border-t ${
                colorMode === "orange" ? "border-orange-200" : "border-slate-600"
              }`}>
                <span className={colorMode === "orange" ? "text-slate-500" : "text-slate-400"}>Level: 0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

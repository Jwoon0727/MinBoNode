
import { useState, useRef } from "react";
import { ChevronUp, ChevronDown, Download, Search, Plus, Minus, Maximize2 } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function MatrixContent() {
  const [colorMode, setColorMode] = useState("orange"); // "orange" or "blue"
  const [zoom, setZoom] = useState(100); // Zoom percentage
  const treeNodeRef = useRef(null);

  // Zoom handlers
  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 10, 200)); // Max 200%
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 10, 50)); // Min 50%
  };

  const handleResetZoom = () => {
    setZoom(100); // Reset to 100%
  };

  const handleDownloadPDF = async () => {
    if (!treeNodeRef.current) return;

    try {
      // Tree Node Capture
      const canvas = await html2canvas(treeNodeRef.current, {
        backgroundColor: null, 
        scale: 2, 
      });

      // PDF 생성
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 80; 
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      

      const pageWidth = pdf.internal.pageSize.getWidth();
      const xOffset = (pageWidth - imgWidth) / 2;

      pdf.addImage(imgData, "PNG", xOffset, 20, imgWidth, imgHeight);
      pdf.save("matrix-view.pdf");
    } catch (error) {
      console.error("PDF download failed:", error);
    }
  };

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
            <ChevronUp size={14} className="text-white" />
          </button>
          <button className="w-8 h-8 bg-[#151515] rounded-lg flex items-center justify-center hover:bg-slate-600">
            <ChevronDown size={14} className="text-white" />
          </button>
          <button 
            onClick={handleDownloadPDF}
            className="w-14 h-8 bg-[#151515] rounded-lg flex items-center justify-center hover:bg-slate-600"
          >
            <Download size={14} className="text-white" />
            <span className="text-white text-xs ml-1">PDF</span>
          </button>
        
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by ID"
          className="flex-1 bg-[#24282D] border border-white/10 rounded-lg px-4 py-2 text-white text-sm placeholder-white/50 focus:outline-none focus:border-blue-500"
        />
        <button className="bg-[#2623A9] hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
          <Search size={18} className="text-white" />
        </button>
      </div>

      {/* Matrix View */}
      <div className="bg-[#24282D] border border-white/10 rounded-xl p-4 min-h-[400px] relative">
        {/* Zoom Controls */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-white text-sm bg-[#151515] border border-white/10 px-3 py-1 rounded">{zoom}%</span>
          <button 
            onClick={handleZoomIn}
            className="w-7 h-7 bg-[#151515] border border-white/10 rounded flex items-center justify-center hover:bg-slate-600 transition-colors"
          >
            <Plus size={14} className="text-white" />
          </button>
          <button 
            onClick={handleZoomOut}
            className="w-7 h-7 bg-[#151515] border border-white/10 rounded flex items-center justify-center hover:bg-slate-600 transition-colors"
          >
            <Minus size={14} className="text-white" />
          </button>
          <button 
            onClick={handleResetZoom}
            className="w-7 h-7 bg-[#151515] border border-white/10 rounded flex items-center justify-center hover:bg-slate-600 ml-auto transition-colors"
          >
            <Maximize2 size={14} className="text-white" />
          </button>
        </div>

{/* Tree Node */}
<div className="flex items-center justify-center h-[300px] overflow-auto">
  <div
    ref={treeNodeRef}
    style={{ 
      transform: `scale(${zoom / 100})`,
      transition: 'transform 0.3s ease'
    }}
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

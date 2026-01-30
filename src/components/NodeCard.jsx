
export default function NodeCard({ node }) {
  const isDone = node.status === "done";

  return (
    <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-4 relative overflow-hidden group">
      {/* Done Overlay - Always visible on hover */}
      <div className="absolute inset-0 bg-slate-900/60 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-500 hover:to-blue-900 text-white px-12 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg active:scale-[0.97]">
          Done
        </button>
      </div>

      {/* Top Section: Image + Info */}
      <div className="flex items-start gap-4 mb-4">
        {/* Node Car Image */}
        <div className="w-32 h-28 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent relative">
          <img
            src="/images/car6.png"
            alt="Node Car"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Node Info */}
        <div className="flex-1 min-w-0">
          {/* Header Row */}
          <div className="flex items-start mb-2 gap-4">
            <div>
              <div className="text-[#F2FE79] text-xs font-medium mb-1">{node.nodeNumber} Node</div>
              
              {/* PC: Elite Node + MINING on same line */}
              <div className="hidden lg:flex items-center gap-2 whitespace-nowrap">
  <span className="text-white font-bold text-xl">Elite Node</span>
  {!isDone && (
    <span className="flex items-center gap-1 text-cyan-400 text-sm font-medium tracking-wide">
    <span className="w-2 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
    MINING
  </span>
  )}
</div>

              {/* Mobile: Elite Node and MINING on separate lines */}
              <div className="lg:hidden mb-2">
  <div className="text-white font-bold text-3xl mb-1">Elite Node</div>
  {!isDone && (
    <span className="flex items-center gap-1 text-cyan-400 text-sm font-medium tracking-wide">
    <span className="w-2 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
    MINING
  </span>
  )}
</div>

              {/* Mobile: Rate and Date below */}
              <div className="lg:hidden ">
                <div className="text-[#F2FE79] text-sm font-semibold">{node.rate}MGG/Sec</div>
                <div className="text-slate-400 text-[11px] mt-1">Node Start Date: {node.startDate}</div>
              </div>
            </div>
            {/* PC: Rate and Date on the right */}
            <div className="hidden lg:block basis-[30%] text-right flex-shrink-0">
              <div className="text-[#F2FE79] text-sm font-semibold whitespace-nowrap">{node.rate}MGG/Sec</div>
              <div className="text-slate-400 text-[11px] mt-1 whitespace-nowrap">Node Start Date: {node.startDate}</div>
            </div>
          </div>

          {/* PC: Progress Bar inside Node Info */}
          <div className="hidden lg:block mt-7">
            <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${node.progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-slate-400 text-xs">{node.current} / {node.total}</span>
              <span className="text-white font-bold text-sm">{node.progress.toFixed(2)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Progress Bar full width at bottom */}
      <div className="lg:hidden ">
        <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${node.progress}%` }}
          />
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-slate-400 text-xs">{node.current} / {node.total}</span>
          <span className="text-white font-bold text-sm">{node.progress.toFixed(2)}%</span>
        </div>
      </div>
    </div>
  );
}

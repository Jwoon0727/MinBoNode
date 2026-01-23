
export default function NodeCard({ node }) {
  const isDone = node.status === "done";

  return (
    <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-4 relative overflow-hidden">
      {/* Done Overlay */}
      {isDone && (
        <div className="absolute inset-0 bg-slate-900/60 z-10 flex items-center justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 rounded-full font-semibold transition-colors">
            Done
          </button>
        </div>
      )}

      <div className="flex items-start gap-4">
        {/* Node Car Image */}
        <div className="w-28 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-cyan-900/30 to-blue-900/30">
          <img
            src="/images/node-car.jpg"
            alt="Node Car"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Node Info */}
        <div className="flex-1 min-w-0">
          {/* Top Row - Node Number and Rate */}
          <div className="flex items-start justify-between mb-1">
            <div>
              <span className="text-yellow-500 text-sm font-medium">{node.nodeNumber} Node</span>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-lg">Elite Node</span>
                {!isDone && (
                  <span className="flex items-center gap-1 text-cyan-400 text-xs">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    MINING
                  </span>
                )}
              </div>
            </div>
            <div className="text-right">
              <div className="text-cyan-400 text-sm font-medium">{node.rate}MGG/Sec</div>
              <div className="text-slate-500 text-xs">Node Start Date: {node.startDate}</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-3">
            <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full transition-all duration-500"
                style={{ width: `${node.progress}%` }}
              />
            </div>
          </div>

          {/* Progress Stats */}
          <div className="flex justify-between items-center mt-2 text-xs">
            <span className="text-slate-500">{node.current} / {node.total}</span>
            <span className="text-white font-semibold">{node.progress.toFixed(2)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

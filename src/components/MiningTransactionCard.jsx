
import { ExternalLink } from "lucide-react";

export default function MiningTransactionCard({
  name = "Supreme Node",
  amount = "9,510.3285",
  time = "2025. 10. 14. 14:15",
  code = "CCKx2rZpIRdYmAQcWdgIXh",
  wallet = "MGG",
}) {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 relative overflow-hidden">
      {/* Orange left border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500" />

      {/* Content */}
      <div className="pl-4">
        {/* Node Name */}
        <h4 className="text-cyan-400 font-semibold mb-3">{name}</h4>

        {/* Details Grid */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Amount</span>
            <span className="text-white">{amount}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Time</span>
            <span className="text-white">{time}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Code</span>
            <span className="text-white">{code}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Wallet</span>
            <a 
              href="#" 
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
            >
              {wallet}
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

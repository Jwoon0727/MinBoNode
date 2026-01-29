
import { ExternalLink } from "lucide-react";

export default function MiningTransactionCard({
  name = "Supreme Node",
  amount = "9,510.3285",
  time = "2025. 10. 14. 14:15",
  code = "CCKx2rZpIRdYmAQcWdgIXh",
  wallet = "MGG",
}) {
  return (
    <div className="bg-[#24282D] border border-white/10 rounded-xl p-4 relative overflow-hidden">
      {/* Content */}
      <div className="pl-4">
{/* Node Name */}
<div className="flex items-center gap-3 mb-4">
  <div className="w-1 h-7 bg-cyan-400 rounded-full" />
  <h3 className="text-cyan-400 font-semibold text-base">
    {name}
  </h3>
</div>

        {/* Details Grid */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Amount</span>
            <span className="text-white/70">{amount}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Time</span>
            <span className="text-white/70">{time}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Code</span>
            <span className="text-white/70">{code}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Wallet</span>
            <a
  href="#"
  className="flex items-center gap-1 transition-colors"
>
  <span className="text-white/70">
    {wallet}
  </span>
  <ExternalLink size={14} className="text-cyan-400" />
</a>
          </div>
        </div>
      </div>
    </div>
  );
}

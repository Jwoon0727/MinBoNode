
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const transferHistory = [
  { id: 1, from: "ablecity", to: "blue1234", date: "2025. 10. 14. 14:20", rate: "38,999.00" },
  { id: 2, from: "ablecity", to: "blue1234", date: "2025. 10. 14. 14:20", rate: "38,999.00" },
  { id: 3, from: "ablecity", to: "blue1234", date: "2025. 10. 14. 14:20", rate: "38,999.00" },
  { id: 4, from: "ablecity", to: "blue1234", date: "2025. 10. 14. 14:20", rate: "38,999.00" },
];

export default function TransferContent() {
  const [selectedToken] = useState("MGG (9,505.32)");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <>
      <h3 className="text-white text-lg font-semibold mb-4">Transfer</h3>

      {/* Transfer Form */}
      <div className="bg-[#151515] border  rounded-xl p-6 mb-6">
        {/* Select Token */}
        <div className="mb-4">
          <label className="text-white/50 text-sm mb-2 block">Select Token</label>
          <button className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 flex items-center justify-between text-white">
            <span>{selectedToken}</span>
            <ChevronDown size={18} className="text-white/50" />
          </button>
        </div>

        {/* Recipient */}
        <div className="mb-4">
          <label className="text-white/50 text-sm mb-2 block">Recipient</label>
          <input
            type="text"
            placeholder="Search by username or email"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full bg-black/20 border border-white/10  rounded-lg px-4 py-3 text-white/50 placeholder-white/50 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label className="text-white/50 text-sm mb-2 block">Amount</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white/50 placeholder-white/50 focus:outline-none focus:border-blue-500 pr-16"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 text-sm">MGG</span>
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-2 pt-4 border-t border-slate-700">
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">Request Amount</span>
            <span className="text-white/50 text-sm">0 MGG</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-cyan-400 text-sm">Fee (1%)</span>
            <span className="text-cyan-400 text-sm">0 MGG</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-slate-700">
            <span className="text-white text-sm font-medium">Actual Withdrawal Amount</span>
            <span className="text-white text-sm font-medium">0 MGG</span>
          </div>
        </div>

        {/* Min Transfer Note */}
        <div className="text-right mt-2">
          <span className="text-slate-500 text-xs">Min Transfer: 3,055.00 MGG</span>
        </div>
      </div>

      {/* Captcha */}
      <div className="flex justify-center mb-6">
        <div className="bg-slate-800 border border-slate-700 rounded-lg px-6 py-3 flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-slate-500 rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-green-500 rounded-sm hidden" />
          </div>
          <span className="text-slate-400 text-sm">I&apos;m human</span>
          <div className="ml-4 flex items-center gap-1">
            <div className="w-6 h-6 bg-orange-500/20 rounded flex items-center justify-center">
              <span className="text-orange-500 text-xs font-bold">cf</span>
            </div>
            <span className="text-slate-500 text-xs">CLOUDFLARE</span>
          </div>
        </div>
      </div>

{/* Transfer History Container */}
<h3 className="text-white text-lg font-semibold mb-4">
    Transfer History
  </h3>
<div className="bg-gray-900 border rounded-2xl p-4">
  
 

  <div className="space-y-3">
    {transferHistory.map((tx) => (
      <div
        key={tx.id}
        className="bg-gray-800 border border-slate-700 rounded-xl p-4"
      >
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-white/50 text-xs">From</span>
            <div className="text-white font-medium">{tx.from}</div>
            <div className="text-slate-500 text-xs">{tx.date}</div>
          </div>

          <span className="text-white/70">→</span>

          <div className="text-right">
            <span className="text-slate-500 text-xs">To</span>
            <div className="text-cyan-400 font-medium">{tx.to}</div>
            <div className="text-white/80 text-sm">
              Rate: {tx.rate}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

</div>
    </>
  );
}


import { useState } from "react";
import { ArrowUpDown, ChevronDown } from "lucide-react";

const swapHistory = [
  { id: 1, from: "ablecity", to: "blue234", wallet: "USDT", amount: "38,999.00", time: "2025. 10. 14. 14:20" },
  { id: 2, from: "ablecity", to: "blue234", wallet: "USDT", amount: "38,999.00", time: "2025. 10. 14. 14:20" },
  { id: 3, from: "ablecity", to: "blue234", wallet: "USDT", amount: "38,999.00", time: "2025. 10. 14. 14:20" },
  { id: 4, from: "ablecity", to: "blue234", wallet: "USDT", amount: "38,999.00", time: "2025. 10. 14. 14:20" },
];

export default function SwapContent() {
  const [fromAmount, setFromAmount] = useState("0.02613600");
  const [toAmount, setToAmount] = useState("0.02613600");
  const [fromToken, setFromToken] = useState("MGG");
  const [toToken, setToToken] = useState("USDT");

  return (
    <>
      <h3 className="text-white text-lg font-semibold mb-4">Swap</h3>

      {/* Swap Form */}
      <div className="space-y-2 mb-4">
        {/* From Input */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-xs">Fq</span>
            <span className="text-slate-500 text-xs">Fee: 0.1 MGG</span>
          </div>
          <div className="flex items-center justify-between">
            <input
              type="text"
              value={fromAmount}
              onChange={(e) => setFromAmount(e.target.value)}
              className="bg-transparent text-white text-2xl font-medium w-full outline-none"
            />
            <button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-lg transition-colors">
              <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">M</span>
              </div>
              <span className="text-white text-sm">{fromToken}</span>
              <ChevronDown size={14} className="text-slate-400" />
            </button>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-1 relative z-10">
          <button className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center transition-colors border-4 border-slate-900">
            <ArrowUpDown size={14} className="text-slate-400" />
          </button>
        </div>

        {/* To Input */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-xs">To</span>
          </div>
          <div className="flex items-center justify-between">
            <input
              type="text"
              value={toAmount}
              onChange={(e) => setToAmount(e.target.value)}
              className="bg-transparent text-white text-2xl font-medium w-full outline-none"
            />
            <button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded-lg transition-colors">
              <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">T</span>
              </div>
              <span className="text-white text-sm">{toToken}</span>
              <ChevronDown size={14} className="text-slate-400" />
            </button>
          </div>
          <div className="mt-3 space-y-1 text-right">
            <p className="text-slate-500 text-xs">Current Rate : 1 MGG = 0.0024 USDT</p>
            <p className="text-slate-500 text-xs">Fee Rate : 1%</p>
            <p className="text-slate-500 text-xs">Minimum Swap : 5,000 MGG</p>
            <p className="text-slate-500 text-xs">*Rates follow Binance live time market prices.</p>
          </div>
        </div>
      </div>

      {/* Captcha */}
      <div className="flex justify-center mb-4">
        <div className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-slate-500 rounded flex items-center justify-center bg-white">
            <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-slate-400 text-sm">인증</span>
          <div className="flex items-center gap-1 ml-4">
            <img src="https://www.cloudflare.com/img/logo-cloudflare-dark.svg" alt="Cloudflare" className="h-4 opacity-50" />
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors mb-8">
        Swap Now
      </button>

      {/* Swap History */}
      <h3 className="text-white text-lg font-semibold mb-4">Swap History</h3>
      <div className="space-y-3">
        {swapHistory.map((item) => (
          <div key={item.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-slate-500 text-xs">From</span>
                <span className="text-white font-medium">{item.from}</span>
              </div>
              <span className="text-slate-500">→</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-500 text-xs">To</span>
                <span className="text-cyan-400 font-medium">{item.to}</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-slate-500 text-xs block">Wallet</span>
                <span className="text-white">{item.wallet}</span>
              </div>
              <div>
                <span className="text-slate-500 text-xs block">Amount</span>
                <span className="text-white">{item.amount}</span>
              </div>
              <div>
                <span className="text-slate-500 text-xs block">Time</span>
                <span className="text-white">{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

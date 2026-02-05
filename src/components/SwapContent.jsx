
import { useState } from "react";
import { ArrowDown, ChevronDown } from "lucide-react";

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
      <div className="mb-4">
        {/* From Input */}
        <div className="bg-[#151515] backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-lg shadow-black/20 mb-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-xs">To</span>
         
          </div>
          <div className="flex items-center gap-4">
  {/* 입력창 */}
  <input
    type="text"
    value={fromAmount}
    onChange={(e) => setFromAmount(e.target.value)}
    className="bg-transparent text-white text-2xl font-medium w-full outline-none"
  />

  {/* 버튼 + Fee */}
  <div className="flex flex-col items-end gap-1">
    <button className="flex items-center gap-2 bg-[#3F3F3F] hover:bg-slate-600 px-3 py-1.5 rounded-2xl transition-colors">
      <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center">
        <span className="text-white text-[10px] font-bold">M</span>
      </div>
      <span className="text-white text-sm">{fromToken}</span>
     
    </button>
    <span className="text-white/50 font-extralight text-xs">Fee: 0.1 MGG</span>
  </div>
  </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-7 relative z-10">
          <button className="w-14 h-14 bg-[#404040] hover:bg-[#3F3F3F] rounded-full flex items-center justify-center transition-colors border-4 border-[#292929]">
            <ArrowDown size={18} className="text-white" />
          </button>
        </div>

        {/* To Input */}
        <div className="bg-[#151515] backdrop-blur-xl border border-white/10 rounded-xl p-4 mb-6 shadow-lg shadow-black/20 mt-2">
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
            <button className="flex items-center gap-2 bg-[#3F3F3F] hover:bg-slate-600 px-3 py-1.5 rounded-2xl transition-colors">
              <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">T</span>
              </div>
              <span className="text-white text-sm">{toToken}</span>
            </button>
          </div>
          <div className="mt-3 space-y-1 text-right">
            <p className="text-white/50 font-extralight text-xs">Current Rate : 1 MGG = 0.0024 USDT</p>
            <p className="text-white/50 font-extralight text-xs">Fee Rate : 1%</p>
            <p className="text-white/50 font-extralight text-xs">Minimum Swap : 5,000 MGG</p>
            <p className="text-white/50 font-extralight text-xs">*Rates follow Binance live time market prices.</p>
          </div>
        </div>
      </div>

{/* Captcha */}
<div className="flex justify-center mb-4">
  <div className="bg-[#151515] border border-white/10 px-8 py-3 flex justify-between items-center  max-w-md">
    {/* 체크 아이콘 + 텍스트 */}
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 border-2 border-white/10 flex items-center justify-center bg-white">
        <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="text-white/50 text-sm">성공!</span>
    </div>

    {/* 이미지 오른쪽 */}
    <img src="https://www.cloudflare.com/img/logo-cloudflare-dark.svg" alt="Cloudflare" className="h-8" />
  </div>
</div>

      {/* Swap Button */}
<button className="w-full border-l border-t border-r border-white/20 bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-500 hover:to-blue-800 text-white text-xs py-3 rounded-full font-medium transition-all mb-8">
  Swap Now
</button>

{/* Swap History Container */}
<h3 className="text-white text-lg font-semibold mb-3">Swap History</h3>
<div className="bg-[#24282D] p-2 rounded-2xl border  mb-6">
  <div className="space-y-2">
    {swapHistory.map((item) => (
      <div key={item.id} className="bg-white/10 border border-white/20 rounded-xl p-3">
        <div className="flex items-center justify-between mb-2">
        <div>
    <span className="text-white/50 text-xs block">From</span>
    <span className="text-white font-medium">{item.from}</span>
  </div>
          <span className="text-white/70">→</span>
          <div>
    <span className="text-white/50 text-xs block text-right">to</span>
    <span className="text-cyan-400 font-medium">{item.to}</span>
  </div>
        </div>
      
        <div className="space-y-1 text-sm mt-5">
  {/* Wallet */}
  <div className="flex justify-between">
    <span className="text-white/50 font-extralight text-xs">Wallet</span>
    <span className="text-white/70">{item.wallet}</span>
  </div>

  {/* Amount */}
  <div className="flex justify-between">
    <span className="text-white/50 font-extralight text-xs">Amount</span>
    <span className="text-white/70">{item.amount}</span>
  </div>

  {/* Time */}
  <div className="flex justify-between">
    <span className="text-white/50 font-extralight text-xs">Time</span>
    <span className="text-white/70">{item.time}</span>
  </div>
</div>
      </div>
    ))}
  </div>
</div>
    </>
  );
}

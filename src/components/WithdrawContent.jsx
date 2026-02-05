
import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

const withdrawHistory = [
  { id: 1, status: "Completed", amount: "50.00", time: "USDT", wallet: "38,999.00", address: "84,610" },
  { id: 2, status: "Completed", amount: "50.00", time: "USDT", wallet: "38,999.00", address: "84,610" },
  { id: 3, status: "Completed", amount: "50.00", time: "USDT", wallet: "38,999.00", address: "84,610" },
];

export default function WithdrawContent() {
  const [selectedWallet, setSelectedWallet] = useState("MGG");
  const [amount, setAmount] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <>
      <h3 className="text-white text-lg font-semibold mb-4">Withdraw</h3>

      {/* Withdraw Form */}
      <div className="bg-white/10 backdrop-blur-md  rounded-xl p-5 mb-6">
        {/* Select Wallet */}
        <div className="mb-4">
          <label className="text-white/50 text-sm mb-2 block">Select Wallet</label>
          <button className="w-full bg-black/20 border-l border-t border-r border-white/15 rounded-lg px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🪙</span>
              <span className="text-white font-medium">MGG (9,505.32)</span>
            </div>
            <ChevronDown size={18} className="text-white/50" />
          </button>
          <p className="text-white/50 text-xs mt-2">Available amount within 24 hours: 20,000000 USDT</p>
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label className="text-white/50 text-sm mb-2 block">Amount</label>
          <input
            type="text"
            placeholder="Enter the amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-black/20 border-l border-t border-r border-white/15 rounded-lg px-4 py-3 text-white/50 placeholder-white/50 focus:outline-none focus:border-blue-500"
          />
        </div>

    {/* Fee Summary */}
<div className="bg-black/30 border-l border-t border-r border-white/15 rounded-xl p-4 mb-4">
  <div className="space-y-2 text-sm">
    <div className="flex justify-between">
      <span className="text-white/50">Request Amount</span>
      <span className="text-white/70">0 MGG</span>
    </div>

    <div className="flex justify-between">
      <span className="text-cyan-400">Fee (3%)</span>
      <span className="text-cyan-400">0 MGG</span>
    </div>

    {/* Divider */}
    <div className="h-px bg-white/10 my-2" />

    <div className="flex justify-between">
      <span className="text-white font-medium">
        Actual Withdrawal Amount
      </span>
      <span className="text-white">0 MGG</span>
    </div>
  </div>
</div>

        <p className="text-white/50 text-xs text-right mb-4">Minimum withdraw amount: 50,000.00 MGG</p>

        {/* Wallet Address */}
        <div className="mb-4">
          <label className="text-cyan-400 text-sm mb-2 block">Wallet Address BEP 20</label>
          <input
            type="text"
            placeholder="0x..."
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="w-full bg-black/20 border-l border-t border-r border-white/15 rounded-lg px-4 py-3 text-white/50 placeholder-white/50 focus:outline-none focus:border-blue-500"
          />
          <p className="text-white/50 text-xs text-right mt-2">Withdraw fee: 3%</p>
        </div>

        {/* Warning */}
        <div className="bg-white/10 border rounded-lg p-4 mb-4">
          <p className="text-white/50 text-xs">
            <span className="text-white/50 font-medium">Warning:</span>{" "}
            <br />
            Wallet address for USDT/BNB/MGG withdrawal <span className="text-[#F2FE79] font-medium">MUST BE BEP 20 Network</span>. We do not guarantee any recovery for the issues caused by false address or wrong network, and any violation caused due to such actions.
          </p>
        </div>

    
      </div>
  {/* Cloudflare Captcha */}
  <div className="flex justify-center mb-4">
          <div className="bg-[#151515] border border-white/10  px-6 py-3 flex items-center gap-3">
            <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-slate-400 text-sm">성공!</span>
            <div className="flex items-center gap-1">
              <img src="https://www.cloudflare.com/favicon.ico" alt="Cloudflare" className="w-5 h-5" />
              <span className="text-slate-500 text-xs">CLOUDFLARE</span>
            </div>
          </div>
        </div>

{/* Withdraw Button */}
<button className="w-full bg-white/10 border-t border-t-white/20 hover:bg-slate-600 text-white/50 py-4 rounded-full font-medium transition-colors mb-8">
  Withdraw
</button>

     {/* Withdraw History Container */}
     <h3 className="text-white text-lg font-semibold mb-4">
    Withdraw History
  </h3>


<div className="bg-[#24282D] border rounded-2xl p-2">

  <div className="space-y-2">
    {withdrawHistory.map((tx) => (
      <div
        key={tx.id}
        className="bg-white/5 backdrop-blur-lg border border-white/10  rounded-xl p-4"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
  {/* Vertical Bar */}
  <div className="w-[2px] h-4 bg-cyan-400 rounded-full" />

  <span className="text-cyan-400 font-medium">{tx.status}</span>
  <ExternalLink size={14} className="text-cyan-400" />
</div>
          <span className="text-white/70 font-semibold">{tx.amount}</span>
        </div>

        {/* Details */}
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-white/50 text-xs">Time</span>
            <span className="text-white/50">{tx.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/50 text-xs">Wallet</span>
            <span className="text-white/50">{tx.wallet}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/50 text-xs">Address</span>
            <span className="text-white/50 truncate max-w-[160px]">
              {tx.address}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  );
}

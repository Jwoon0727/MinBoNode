
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
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 mb-6">
        {/* Select Wallet */}
        <div className="mb-4">
          <label className="text-slate-400 text-sm mb-2 block">Select Wallet</label>
          <button className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg">🪙</span>
              <span className="text-white font-medium">MGG (9,505.32)</span>
            </div>
            <ChevronDown size={18} className="text-slate-400" />
          </button>
          <p className="text-slate-500 text-xs mt-2">Available amount within 24 hours: 20,000000 USDT</p>
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label className="text-slate-400 text-sm mb-2 block">Amount</label>
          <input
            type="text"
            placeholder="Enter the amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-slate-600"
          />
        </div>

        {/* Fee Summary */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-400">Request Amount</span>
            <span className="text-white">0 MGG</span>
          </div>
          <div className="flex justify-between">
            <span className="text-cyan-400">Fee (3%)</span>
            <span className="text-cyan-400">0 MGG</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white font-medium">Actual Withdrawal Amount</span>
            <span className="text-white">0 MGG</span>
          </div>
        </div>

        <p className="text-slate-500 text-xs text-right mb-4">Minimum withdraw amount: 50,000.00 MGG</p>

        {/* Wallet Address */}
        <div className="mb-4">
          <label className="text-cyan-400 text-sm mb-2 block">Wallet Address BEP 20</label>
          <input
            type="text"
            placeholder="0x..."
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-slate-600"
          />
          <p className="text-slate-500 text-xs text-right mt-2">Withdraw fee: 3%</p>
        </div>

        {/* Warning */}
        <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 mb-4">
          <p className="text-slate-400 text-xs">
            <span className="text-yellow-500 font-medium">Warning:</span>{" "}
            Wallet address for USDT/BNB/MGG withdrawal <span className="text-cyan-400 font-medium">MUST BE BEP 20 Network</span>. We do not guarantee any recovery for the issues caused by false address or wrong network, and any violation caused due to such actions.
          </p>
        </div>

        {/* Cloudflare Captcha */}
        <div className="flex justify-center mb-4">
          <div className="bg-slate-900 border border-slate-700 rounded-lg px-6 py-3 flex items-center gap-3">
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
      </div>

      {/* Withdraw Button */}
      <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-4 rounded-full font-medium transition-colors mb-8">
        Withdraw
      </button>

      {/* Withdraw History */}
      <h3 className="text-white text-lg font-semibold mb-4">Withdraw History</h3>
      <div className="space-y-4">
        {withdrawHistory.map((tx) => (
          <div
            key={tx.id}
            className="bg-slate-800/50 border border-slate-700 border-l-4 border-l-orange-500 rounded-r-xl p-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-1">
                <span className="text-cyan-400 font-medium">{tx.status}</span>
                <ExternalLink size={14} className="text-cyan-400" />
              </div>
              <span className="text-white font-semibold">{tx.amount}</span>
            </div>

            {/* Details */}
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-400">Time</span>
                <span className="text-white">{tx.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Wallet</span>
                <span className="text-white">{tx.wallet}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Adress</span>
                <span className="text-white">{tx.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


import { useState } from "react";
import { RefreshCw, Copy, ChevronDown, AlertTriangle } from "lucide-react";

const depositHistory = [
  { id: 1, from: "ablecity", to: "blue1234", wallet: "USDT", amount: "38,999.00", hash: "84,610" },
  { id: 2, from: "ablecity", to: "blue1234", wallet: "USDT", amount: "38,999.00", hash: "84,610" },
  { id: 3, from: "ablecity", to: "blue1234", wallet: "USDT", amount: "38,999.00", hash: "84,610" },
];

export default function DepositContent() {
  const [selectedWallet, setSelectedWallet] = useState("USDT");
  const walletAddress = "0xb31ea17ebeBD55acE60A7...";

  const copyAddress = () => {
    navigator.clipboard.writeText("0xb31ea17ebeBD55acE60A7890123456789");
  };

  return (
    <>
      <h3 className="text-white text-lg font-semibold mb-4">Deposit</h3>

      {/* Check Deposit Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-medium flex items-center justify-center gap-2 mb-6 transition-colors">
        <RefreshCw size={18} />
        Check Deposit
      </button>

      {/* Deposit Form */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 mb-6">
        {/* Select Wallet */}
        <div className="mb-4">
          <label className="text-slate-400 text-sm mb-2 block">Select Wallet</label>
          <div className="relative">
            <select
              value={selectedWallet}
              onChange={(e) => setSelectedWallet(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-blue-500"
            >
              <option value="USDT">USDT</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="BNB">BNB</option>
            </select>
            <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Wallet Address */}
        <div className="mb-6">
          <label className="text-cyan-400 text-sm mb-2 block">Wallet Address BEP 20</label>
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3">
            <span className="text-white flex-1 text-sm truncate">{walletAddress}</span>
            <button onClick={copyAddress} className="text-slate-400 hover:text-white transition-colors">
              <Copy size={18} />
            </button>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <div className="bg-white p-4 rounded-lg">
            <div className="w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IiNmZmYiLz48ZyBmaWxsPSIjMDAwIj48cmVjdCB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIvPjxyZWN0IHg9IjgwIiB5PSIxNiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIi8+PHJlY3QgeD0iMTYiIHk9IjgwIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiLz48cmVjdCB4PSI1NiIgeT0iNTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIvPjxyZWN0IHg9IjI0IiB5PSIyNCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iODgiIHk9IjI0IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIyNCIgeT0iODgiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iI2ZmZiIvPjxyZWN0IHg9IjU2IiB5PSIxNiIgd2lkdGg9IjgiIGhlaWdodD0iOCIvPjxyZWN0IHg9IjU2IiB5PSIzMiIgd2lkdGg9IjgiIGhlaWdodD0iOCIvPjxyZWN0IHg9IjE2IiB5PSI1NiIgd2lkdGg9IjgiIGhlaWdodD0iOCIvPjxyZWN0IHg9IjMyIiB5PSI1NiIgd2lkdGg9IjgiIGhlaWdodD0iOCIvPjxyZWN0IHg9Ijg4IiB5PSI1NiIgd2lkdGg9IjgiIGhlaWdodD0iOCIvPjxyZWN0IHg9IjEwNCIgeT0iNTYiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiLz48cmVjdCB4PSI1NiIgeT0iODAiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiLz48cmVjdCB4PSI3MiIgeT0iODAiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiLz48cmVjdCB4PSI4OCIgeT0iODAiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiLz48cmVjdCB4PSIxMDQiIHk9IjgwIiB3aWR0aD0iOCIgaGVpZ2h0PSI4Ii8+PHJlY3QgeD0iNTYiIHk9Ijk2IiB3aWR0aD0iOCIgaGVpZ2h0PSI4Ii8+PHJlY3QgeD0iODgiIHk9Ijk2IiB3aWR0aD0iOCIgaGVpZ2h0PSI4Ii8+PHJlY3QgeD0iMTA0IiB5PSI5NiIgd2lkdGg9IjgiIGhlaWdodD0iOCIvPjwvZz48L3N2Zz4=')]" />
          </div>
        </div>

        {/* Warning */}
        <div className="bg-slate-900/80 border border-slate-700 rounded-lg p-4">
          <div className="flex items-start gap-2">
            <span className="text-yellow-500 font-semibold text-sm">Warning</span>
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Wallet address for USDT deposit <span className="text-cyan-400 font-semibold">MUST BE BEP 20 Network.</span> We do not guarantee any recovery for the issues caused by false address or wrong network, and any violation caused due to such actions.
          </p>
        </div>
      </div>

      {/* Deposit History */}
      <h4 className="text-white text-lg font-semibold mb-4">Deposit History</h4>
      <div className="space-y-3">
        {depositHistory.map((tx) => (
          <div key={tx.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-slate-500 text-xs">From</span>
                <p className="text-white font-medium">{tx.from}</p>
              </div>
              <span className="text-slate-500">→</span>
              <div className="text-right">
                <span className="text-slate-500 text-xs">To</span>
                <p className="text-cyan-400 font-medium">{tx.to}</p>
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-500">Wallet</span>
                <span className="text-white">{tx.wallet}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-400">Amount</span>
                <span className="text-white">{tx.amount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cyan-400">Hash</span>
                <span className="text-white">{tx.hash}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

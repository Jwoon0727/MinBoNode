import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Copy, Lock, RefreshCw } from "lucide-react";
import StakingContent from "./StakingContent";
import SwapContent from "./SwapContent";
import TransferContent from "./TransferContent";
import DepositContent from "./DepositContent";
import WithdrawContent from "./WithdrawContent";
import PageHeader from "./PageHeader";

const tabs = ["Balance", "Staking", "Swap", "Transfer", "Deposit", "Withdraw"];

const cryptoBalances = [
  { id: 1, name: "MimboGameGroup", symbol: "MGG", amount: "89,347.9992", icon: "M", color: "bg-yellow-500" },
  { id: 2, name: "Tether", symbol: "", amount: "72,502.000", icon: "T", color: "bg-teal-500" },
  { id: 3, name: "BNB", symbol: "BNB", amount: "0.03578105", rate: "1 BNB = $ 585.28", icon: "B", color: "bg-yellow-500" },
  { id: 4, name: "XRP", symbol: "XRP", amount: "0.00000000", rate: "1 XRP = $ 0.00", icon: "X", color: "bg-slate-600" },
  { id: 5, name: "Solana", symbol: "SOL", amount: "0.000000", rate: "1 SOL = $ 0.00", icon: "S", color: "bg-slate-700" },
  { id: 6, name: "MF", symbol: "MF", amount: "2,000.0000", icon: "M", color: "bg-green-500" },
];

const transactions = [
  {
    id: 1,
    type: "Receive",
    date: "14 July 2020",
    amount: "+ 38,999.00 USDT",
    status: "Success",
    fullAmount: "+38,899.00 USDT",
    time: "2025. 10. 14. 14:20",
    fee: "$0.49 %",
    code: "8Wlmy0Bo.hI4ro3pC38H2warx82p3yWe6",
  },
  {
    id: 2,
    type: "Receive",
    date: "14 July 2020",
    amount: "+ 38,999.00 USDT",
    status: "Success",
    fullAmount: "+38,899.00 USDT",
    time: "2025. 10. 14. 14:20",
    fee: "$0.49 %",
    code: "8Wlmy0Bo.hI4ro3pC38H2warx82p3yWe6",
  },
  {
    id: 3,
    type: "Send",
    date: "14 July 2020",
    amount: "- 789.00 USDT",
    status: "Success",
    fullAmount: "-789.00 USDT",
    time: "2025. 10. 14. 14:20",
    fee: "$0.49 %",
    code: "8Wlmy0Bo.hI4ro3pC38H2warx82p3yWe6",
  },
];

export default function WalletPage({ activeTab = "Balance", onTabChange, onMenuClick }) {
  const [expandedTx, setExpandedTx] = useState(2);

  const handleTabChange = (tab) => {
    onTabChange?.(tab);
  };

  const toggleExpand = (id) => {
    setExpandedTx(expandedTx === id ? null : id);
  };

  return (
    <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <PageHeader title="Wallet" onMenuClick={onMenuClick} />

      {/* Balance Card */}
      <div className="bg-gradient-to-br from-black via-slate-950 to-blue-900 border border-slate-700/50 rounded-2xl p-4 sm:p-6 mb-6">
          {/* Balance */}
          <div className="mt-2 sm:mt-4 mb-4 sm:mb-5">
            <div className="text-white text-xs sm:text-sm mb-1">Total Balance</div>
            <div className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              $123.456
            </div>
            <div className="text-white/50 text-xs mt-2">
              Current Rate : 1 MGG = 0.0024 USDT
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 sm:gap-3 mb-2 sm:mb-3">
          <button className="
  flex items-center justify-center gap-1 sm:gap-2
  bg-blue-600 hover:bg-blue-700
  text-white
  px-4 sm:px-8 py-2
  rounded-full
  font-medium text-sm sm:text-base
  transition-colors
  flex-1
">
  Harvest →
</button>

<button className="
  flex items-center justify-center gap-1 sm:gap-2
  bg-slate-700/80 hover:bg-slate-600
  text-white
  px-4 sm:px-8 py-2
  rounded-full
  font-medium text-sm sm:text-base
  transition-colors
  flex-1
">
  Package →
</button>
          </div>
        </div>


        <div className="mb-6 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent -mx-4 px-4 lg:mx-0 lg:px-0">
  {/* Tabs Container */}
  <div
    className="
      inline-flex lg:flex items-center
      w-full lg:w-[85%] mx-auto
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      rounded-2xl
      p-[2px]
      shadow-[0_8px_30px_rgba(0,0,0,0.35)]
    "
  >
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => handleTabChange(tab)}
        className={`
          flex-1 min-w-0
          h-8 sm:h-9
          px-2 sm:px-4
          rounded-xl
          text-[10px] sm:text-sm
          font-medium
          transition-all
          whitespace-nowrap
          overflow-hidden text-ellipsis
          ${
            activeTab === tab
              ? "bg-[#2623A9] text-white shadow-sm"
              : "text-white/50 hover:text-white"
          }
        `}
      >
        {tab}
      </button>
    ))}
  </div>
</div>
        {/* Balance Tab Content */}
        {activeTab === "Balance" && (
          <>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Balance</h3>
            
            {/* Crypto Balance Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-[92%] sm:max-w-full mx-auto">
              {cryptoBalances.map((crypto) => (
                <div key={crypto.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4">
                  <div className={`w-9 h-9 sm:w-10 sm:h-10 ${crypto.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-xs sm:text-sm">{crypto.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-medium text-xs sm:text-sm truncate">{crypto.name}</div>
                    {crypto.symbol && <div className="text-white/50 text-xs truncate">{crypto.symbol}</div>}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-white font-semibold text-xs sm:text-base">{crypto.amount}</div>
                    {crypto.rate && <div className="text-white/50 text-[10px] sm:text-xs">{crypto.rate}</div>}
                  </div>
                </div>
              ))}
            </div>

            {/* Transaction History */}
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Transaction History</h3>
            <div
  className="
    w-full
    max-w-[92%]
    sm:max-w-[90%]
    md:max-w-[100%]
    mx-auto
    bg-[#24282D] 
    backdrop-blur-xl
    
    rounded-2xl
    p-3 sm:p-4 md:p-2
    shadow-[0_10px_40px_rgba(0,0,0,0.35)]
  "
>
  <div className="space-y-2 sm:space-y-3">
    {transactions.map((tx) => (
      <div
        key={tx.id}
        className="
          bg-white/10
          border border-white/10
          rounded-xl
          overflow-hidden
          transition-all
        "
      >
       {/* Transaction Header */}
<button
  onClick={() => toggleExpand(tx.id)}
  className="relative w-full px-3 sm:px-4 py-2.5 sm:py-3 pl-5 sm:pl-6 flex items-center justify-between gap-2"
>
  {/* Inner vertical bar */}
  <span
    className={`absolute left-1.5 sm:left-2 top-2.5 sm:top-3 bottom-2.5 sm:bottom-3 w-[2px] sm:w-[3px] rounded-full ${
      tx.type === "Receive"
        ? "bg-cyan-400"
        : "bg-red-400"
    }`}
  />

<div className="flex-1 min-w-0 text-left">
  <span
    className={`font-medium text-xs sm:text-sm ${
      tx.type === "Receive" ? "text-cyan-400" : "text-red-400"
    }`}
  >
    {tx.type}
  </span>
  <div className="text-slate-500 text-[10px] sm:text-xs">
    {tx.date}
  </div>
</div>

  <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
    <span className="font-medium text-white text-xs sm:text-sm">
      {tx.amount}
    </span>
    {expandedTx === tx.id ? (
      <ChevronUp size={16} className="text-slate-400 sm:w-[18px] sm:h-[18px]" />
    ) : (
      <ChevronDown size={16} className="text-slate-400 sm:w-[18px] sm:h-[18px]" />
    )}
  </div>
</button>

                  {/* Expanded Content */}
                  {expandedTx === tx.id && (
                    <div className="px-3 sm:px-4 pb-3 sm:pb-4 border-t border-slate-700">
                      <div className="pt-2.5 sm:pt-3 space-y-1.5 sm:space-y-2">
                        <div className="flex justify-between">
                          <span className="text-slate-400 text-xs sm:text-sm">Status</span>
                          <span className="text-green-400 text-xs sm:text-sm">{tx.status}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400 text-xs sm:text-sm">Amount</span>
                          <span className="text-white text-xs sm:text-sm">{tx.fullAmount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400 text-xs sm:text-sm">Time</span>
                          <span className="text-white text-xs sm:text-sm">{tx.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400 text-xs sm:text-sm">Fee</span>
                          <span className="text-white text-xs sm:text-sm">{tx.fee}</span>
                        </div>
                        <div
  className="mt-2 border-b border-dashed border-white/30"
  style={{
    borderBottomWidth: '0.5px',  
    borderBottomStyle: 'dashed',
    borderBottomColor: 'rgba(255,255,255,0.3)',
    borderImage: 'repeating-linear-gradient(to right, rgba(255,255,255,0.3) 0, rgba(255,255,255,0.3) 10px, transparent 10px, transparent 20px) 1',
  }}
/>
                      </div>
                    

                      {/* Code Section */}
                      <div className="mt-3 sm:mt-4 rounded-lg p-2.5 sm:p-3 flex items-center justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <span className="text-white/50 text-[10px] sm:text-xs">Code</span>
                        </div>
                        <div className="text-white/70 text-xs sm:text-sm truncate">{tx.code}</div>
                        <button className="text-white/50 hover:text-white flex-shrink-0">
                          <Copy size={14} className="sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          </>
        )}

        {/* Staking Tab Content */}
        {activeTab === "Staking" && (
          <StakingContent />
        )}

        {/* Swap Tab Content */}
        {activeTab === "Swap" && (
          <SwapContent />
        )}

        {/* Transfer Tab Content */}
        {activeTab === "Transfer" && (
          <TransferContent />
        )}

        {/* Deposit Tab Content */}
        {activeTab === "Deposit" && (
          <DepositContent />
        )}

        {/* Withdraw Tab Content */}
        {activeTab === "Withdraw" && (
          <WithdrawContent />
        )}
      </div>
    </main>
  );
}

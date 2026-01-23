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
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 mb-6">
          <div className="mb-5">
            <div className="text-slate-400 text-sm mb-1">Total Balance</div>
            <div className="text-white text-4xl lg:text-5xl font-bold">$123.456</div>
            <div className="text-slate-500 text-xs mt-2">Current Rate : 1 MGG = 0.0024 USDT</div>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex-1">
              Harvest
              <ArrowRight size={18} />
            </button>
            <button className="flex items-center justify-center gap-2 bg-slate-700/80 hover:bg-slate-600 text-white px-8 py-3 rounded-full font-medium transition-colors flex-1">
              Package
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800/50 text-slate-400 hover:text-white border border-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Balance Tab Content */}
        {activeTab === "Balance" && (
          <>
            <h3 className="text-white text-lg font-semibold mb-4">Balance</h3>
            
            {/* Crypto Balance Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {cryptoBalances.map((crypto) => (
                <div key={crypto.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 flex items-center gap-4">
                  <div className={`w-10 h-10 ${crypto.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{crypto.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium text-sm">{crypto.name}</div>
                    {crypto.symbol && <div className="text-slate-500 text-xs">{crypto.symbol}</div>}
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold">{crypto.amount}</div>
                    {crypto.rate && <div className="text-slate-500 text-xs">{crypto.rate}</div>}
                  </div>
                </div>
              ))}
            </div>

            {/* Transaction History */}
            <h3 className="text-white text-lg font-semibold mb-4">Transaction History</h3>
            <div className="space-y-3">
              {transactions.map((tx) => (
                <div key={tx.id} className="bg-slate-800/50 border-l-4 border-l-orange-500 border-y border-r border-slate-700 rounded-r-xl overflow-hidden">
                  {/* Transaction Header */}
                  <button
                    onClick={() => toggleExpand(tx.id)}
                    className="w-full px-4 py-3 flex items-center justify-between"
                  >
                    <div>
                      <span className={`font-medium ${tx.type === "Receive" ? "text-orange-400" : "text-red-400"}`}>
                        {tx.type}
                      </span>
                      <div className="text-slate-500 text-xs">{tx.date}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`font-medium ${tx.type === "Receive" ? "text-white" : "text-white"}`}>
                        {tx.amount}
                      </span>
                      {expandedTx === tx.id ? (
                        <ChevronUp size={18} className="text-slate-400" />
                      ) : (
                        <ChevronDown size={18} className="text-slate-400" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {expandedTx === tx.id && (
                    <div className="px-4 pb-4 border-t border-slate-700">
                      <div className="pt-3 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-slate-400 text-sm">Status</span>
                          <span className="text-green-400 text-sm">{tx.status}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400 text-sm">Amount</span>
                          <span className="text-white text-sm">{tx.fullAmount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400 text-sm">Time</span>
                          <span className="text-white text-sm">{tx.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400 text-sm">Fee</span>
                          <span className="text-white text-sm">{tx.fee}</span>
                        </div>
                      </div>

                      {/* Code Section */}
                      <div className="mt-4 bg-slate-900/50 rounded-lg p-3 flex items-center justify-between">
                        <div>
                          <span className="text-slate-500 text-xs">Code</span>
                          <div className="text-slate-400 text-sm truncate max-w-[250px]">{tx.code}</div>
                        </div>
                        <button className="text-slate-400 hover:text-white">
                          <Copy size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
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


import { useState } from "react";
import { Lock, Copy, RefreshCw } from "lucide-react";

const stakingStats = [
  { label: "Total Value Locked (TVL)", value: "33,352,800.00" },
  { label: "Active Stakers", value: "54" },
  { label: "Total Rewards Pool", value: "3,228.99 MGG" },
];

const stakingPools = [
  {
    id: 1,
    name: "7days pools",
    amount: "30,051,800.00 MGG",
    apy: "10%",
    status: "ACTIVE",
    buttonText: "STAKING",
    buttonActive: true,
  },
  {
    id: 2,
    name: "360days pools",
    amount: "370,000.00 MGG",
    apy: "18%",
    status: "SUSPENDED",
    buttonText: "CURRENT",
    buttonActive: false,
  },
  {
    id: 3,
    name: "270days pools",
    amount: "700,000.00 MGG",
    apy: "14%",
    status: "ACTIVE",
    buttonText: "STAKING",
    buttonActive: true,
  },
];

export default function StakingContent() {
  const [stakingSubTab, setStakingSubTab] = useState("My Staking");
  const [historyFilter, setHistoryFilter] = useState("All");

  return (
    <>
      <h3 className="text-white text-lg font-semibold mb-4">Staking</h3>

      <div className="bg-[#151515] border border-black-700 rounded-xl p-4 mb-6">
  <div className="space-y-3">
    {stakingStats.map((stat, index) => (
      <div
        key={index}
        className={`flex justify-between items-center py-2
          ${index !== stakingStats.length - 1 && index !== 0 ? 'border-b border-white/10' : ''}`}
      >
        <span className="text-white/50 text-sm">{stat.label}</span>
        <span className="text-white font-medium">{stat.value}</span>
      </div>
    ))}
  </div>
</div>

      {/* Bitcoin Wallet */}
      <div className="bg-[#151515] border border-black-700 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">B</span>
          </div>
          <div>
            <div className="text-slate-400 text-xs">Stesny's Balance</div>
            <div className="text-orange-400 font-semibold">1.43428914 BTC</div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
  {/* 주소 + 카피 */}
  <div className="flex items-center justify-between bg-black-900/50 rounded-lg px-3 py-2 flex-1 min-w-[150px] sm:min-w-0 w-full">
    <span className="text-white/50 text-xs sm:text-sm truncate">
      bc1qp005c06b6l00ljip6s6by17o3dek6iondrmjnE
    </span>
    <button className="text-white/50 hover:text-white ml-2">
      <Copy size={14} />
    </button>
  </div>

{/* Verify 버튼 */}
{/* Verify 버튼 */}
<button className="bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-400 hover:to-orange-700 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium transition-all flex-shrink-0 w-full sm:w-[200px] justify-center">
  <RefreshCw size={14} />
  Verify
</button>
</div>
      </div>

      {/* Available Staking Pools */}
      <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
        <Lock size={18} />
        Available Staking Pools
      </h3>

      <div className="space-y-4 mb-8">
        {stakingPools.map((pool) => (
          <div key={pool.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Lock size={16} className="text-slate-400" />
                <span className="text-white font-medium">{pool.name}</span>
              </div>
              <div className="flex flex-col items-start gap-1">
  <div className="flex items-center justify-end w-full">
    <span className={`text-xs px-2 py-1 rounded ${
      pool.status === "ACTIVE" 
        ? "bg-green-500/20 text-green-400" 
        : "bg-slate-600/50 text-slate-400"
    }`}>
      {pool.status}
    </span>
  </div>
  <div className="text-slate-400 text-sm">{pool.amount}</div>
</div>
            </div>
<hr className="border-white/10 my-2"/>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-slate-500 text-xs mb-1">APY</div>
                <div className="text-cyan-400 text-xl font-bold">{pool.apy}</div>
              </div>
              <div className="text-right">
               
              <button
  className={`w-full sm:w-[150px] h-8 text-[10px] px-4 rounded-full font-medium transition-colors ${
    pool.buttonActive
      ? "bg-[#1E1A8F] hover:bg-[#1E1A8F] text-white"
      : "bg-slate-600 text-slate-400 cursor-not-allowed"
  }`}
>
  {pool.buttonText}
</button>
              </div>
            </div>
          </div>
        ))}
      </div>

     {/* My Staking / History Tabs */}
<div className="bg-slate-900/50 rounded-xl p-1 mb-4 flex gap-2">
  <button
    onClick={() => setStakingSubTab("My Staking")}
    className={`flex-1 py-3 rounded-lg text-sm font-medium transition-colors ${
      stakingSubTab === "My Staking"
        ? "bg-[#1E1A8F] text-white"
        : "bg-transparent text-slate-400 hover:text-white"
    }`}
  >
    My Staking
  </button>
  <button
    onClick={() => setStakingSubTab("History")}
    className={`flex-1 py-3 rounded-lg text-sm font-medium transition-colors ${
      stakingSubTab === "History"
        ? "bg-[#1E1A8F] text-white"
        : "bg-transparent text-slate-400 hover:text-white"
    }`}
  >
    History
  </button>
</div>

      {/* Conditional Content */}
      {stakingSubTab === "My Staking" ? (
        <>
          {/* My Staking List */}
          <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
            <Lock size={18} />
            My Staking List
          </h3>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 min-h-[150px] flex items-center justify-center">
            <p className="text-slate-500 text-sm">No active stakes found.</p>
          </div>
        </>
      ) : (
        <>
          {/* Staking History */}
          <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
            <Lock size={18} />
            Staking History
          </h3>

          {/* Filter Buttons */}
          <div className="flex gap-2 mb-4">
            {["All", "STAKE", "UNSTAKE", "CLAIM"].map((filter) => (
              <button
                key={filter}
                onClick={() => setHistoryFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  historyFilter === filter
                    ? "bg-[#1E1A8F] text-white"
                    : "bg-slate-800/50 text-white hover:text-white border border-slate-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* No History Found */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 min-h-[200px] flex items-center justify-center">
            <p className="text-slate-500 text-sm">No history found.</p>
          </div>
        </>
      )}
    </>
  );
}

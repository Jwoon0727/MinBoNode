
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

  return (
    <>
      <h3 className="text-white text-lg font-semibold mb-4">Staking</h3>

      {/* Stats Card */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 mb-6">
        <div className="space-y-3">
          {stakingStats.map((stat, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-slate-400 text-sm">{stat.label}</span>
              <span className="text-white font-medium">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bitcoin Wallet */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">B</span>
          </div>
          <div>
            <div className="text-slate-400 text-xs">Stesny's Balance</div>
            <div className="text-orange-400 font-semibold">1.43428914 BTC</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-slate-900/50 rounded-lg px-3 py-2 flex items-center justify-between">
            <span className="text-slate-400 text-xs truncate">bc1qp005c06b6l00ljip6s6by17o3dek6iondrmjnE</span>
            <button className="text-slate-400 hover:text-white ml-2">
              <Copy size={14} />
            </button>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors">
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
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded ${
                  pool.status === "ACTIVE" 
                    ? "bg-green-500/20 text-green-400" 
                    : "bg-slate-600/50 text-slate-400"
                }`}>
                  {pool.status}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-slate-500 text-xs mb-1">APY</div>
                <div className="text-cyan-400 text-xl font-bold">{pool.apy}</div>
              </div>
              <div className="text-right">
                <div className="text-slate-400 text-sm mb-2">{pool.amount}</div>
                <button className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pool.buttonActive
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-slate-600 text-slate-400 cursor-not-allowed"
                }`}>
                  {pool.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* My Staking / History Tabs */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setStakingSubTab("My Staking")}
          className={`flex-1 py-3 rounded-lg text-sm font-medium transition-colors ${
            stakingSubTab === "My Staking"
              ? "bg-slate-700 text-white"
              : "bg-slate-800/50 text-slate-400 hover:text-white"
          }`}
        >
          My Staking
        </button>
        <button
          onClick={() => setStakingSubTab("History")}
          className={`flex-1 py-3 rounded-lg text-sm font-medium transition-colors ${
            stakingSubTab === "History"
              ? "bg-slate-700 text-white"
              : "bg-slate-800/50 text-slate-400 hover:text-white"
          }`}
        >
          History
        </button>
      </div>

      {/* My Staking List */}
      <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
        <Lock size={18} />
        My Staking List
      </h3>

      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 min-h-[150px] flex items-center justify-center">
        <p className="text-slate-500 text-sm">No active stakes found.</p>
      </div>
    </>
  );
}

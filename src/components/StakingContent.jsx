
import { useState, useEffect } from "react";
import { Lock, Copy, RefreshCw, X, Check } from "lucide-react";

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
  const [showStakingModal, setShowStakingModal] = useState(false);
  const [numberOfAccounts, setNumberOfAccounts] = useState(1);
  const [agreedTerms, setAgreedTerms] = useState(false);

  // Show modal when component mounts
  useEffect(() => {
    setShowStakingModal(true);
  }, []);

  const handleAccountsChange = (value) => {
    const newValue = Math.max(0, Math.min(100, value));
    setNumberOfAccounts(newValue);
  };

  const handleSliderClick = (percentage) => {
    setNumberOfAccounts(Math.round(percentage));
  };

  const handleStake = () => {
    // TODO: Implement staking logic
    console.log("Staking with accounts:", numberOfAccounts);
    setShowStakingModal(false);
  };

  const totalAmount = numberOfAccounts * 1000000;
  const availableBalance = 9505.32;

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
          <div key={pool.id} className="bg-[#24282D] border border-white/10 rounded-xl p-4">
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
        : "bg-white/10 text-white/70"
    }`}>
      {pool.status}
    </span>
  </div>
  <div className="text-white/50 text-sm">{pool.amount}</div>
</div>
            </div>
<hr className="border-white/10 my-2"/>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white/50 text-xs mb-1">APY</div>
                <div className="text-cyan-400 text-xl font-bold">{pool.apy}</div>
              </div>
              <div className="text-right">
               
              <button
  className={`w-full sm:w-[150px] h-8 text-[10px] px-4 rounded-full font-medium transition-colors ${
    pool.buttonActive
      ? "bg-[#1E1A8F] hover:bg-[#1E1A8F] text-white"
      : "bg-white/10 text-white/50 cursor-not-allowed"
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

          <div className="bg-[#24282D]  border  rounded-xl p-8 min-h-[150px] flex items-center justify-center">
            <p className="text-white/50 text-sm">No active stakes found.</p>
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
          <div className="bg-[#24282D]  border  rounded-xl p-8 min-h-[200px] flex items-center justify-center">
            <p className="text-white/50 text-sm">No history found.</p>
          </div>
        </>
      )}

      {/* Staking Modal */}
      {showStakingModal && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setShowStakingModal(false)}
        >
          <div 
            className="bg-[#1F2123] rounded-2xl p-6 w-full max-w-lg border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
  <span className="text-cyan-400">207</span>
  <span className="text-white"> DAYS POOL</span>
</h2>
              <button
                onClick={() => setShowStakingModal(false)}
                className="    w-5 h-5
    flex items-center justify-center
    rounded-full
    border border-white/30
    text-white/60
    hover:text-white
    hover:border-white/50
    hover:bg-white/10
    transition-all"
              >
                <X size={14} />
              </button>
            </div>

            {/* Stats Grid */}
            <div className="space-y-3 mb-6">
  <div className="flex justify-between items-center">
    <span className="text-gray-400 text-sm">Account Unit</span>
    <span className="text-cyan-400 font-semibold text-sm">
      10,000.00 MGG
    </span>
  </div>

  <div className="flex justify-between items-center">
    <span className="text-gray-400 text-sm">Available Accounts</span>
    <span className="text-cyan-400 font-semibold text-sm">
      922 / 1,000
    </span>
  </div>

  <div className="flex justify-between items-center pb-2 border-b border-white/10">
  <span className="text-gray-400 text-sm">APY</span>
  <span className="text-cyan-400 font-semibold text-sm">
    14%
  </span>
</div>
</div>

  {/* Pool Progress */}
<div className="mb-6">
  <div className="flex justify-between items-center mb-2">
    <span className="text-white font-semibold text-sm">
      POOL PROGRESS
    </span>
  </div>

  {/* Progress Bar */}
  <div className="w-full rounded-full h-2.5 overflow-hidden mb-1 border-t border-r border-white/20">
    <div
      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
      style={{ width: "7.9%" }}
    />
  </div>

  <div className="flex justify-between items-center">
  <span className="text-white/50 text-xs">
    790,000.00 / 10,000,000.00 MGG filled
  </span>

  <span className="text-white/70 text-sm">
    7.9%
  </span>
</div>
</div>

            {/* Number of Accounts */}
            <div className="mb-6">
              <div className="text-white font-semibold text-sm mb-4">Number of Accounts</div>
              
            {/* Controls Container */}
<div className="
  backdrop-blur-md
  border border-white/10
  rounded-xl
  p-8
  mb-6
">
  {/* Controls */}
  <div className="flex items-center justify-center gap-4">
    <button
      onClick={() => handleAccountsChange(numberOfAccounts - 1)}
      className="w-10 h-10 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
    >
      −
    </button>

    <div className="text-center min-w-[80px]">
      <div className="text-cyan-400 text-3xl font-bold">
        {numberOfAccounts}
      </div>
      <div className="text-gray-400 text-xs">
        Accounts
      </div>
    </div>

    <button
      onClick={() => handleAccountsChange(numberOfAccounts + 1)}
      className="w-10 h-10 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
    >
      +
    </button>
  </div>
</div>

              {/* Slider */}
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={numberOfAccounts}
                  onChange={(e) => handleAccountsChange(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-4
                    [&::-webkit-slider-thumb]:h-4
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-cyan-400
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-moz-range-thumb]:w-4
                    [&::-moz-range-thumb]:h-4
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-cyan-400
                    [&::-moz-range-thumb]:border-0
                    [&::-moz-range-thumb]:cursor-pointer"
                />
                
                {/* Percentage Markers */}
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  {[0, 25, 50, 75, 100].map((percent) => (
                    <button
                      key={percent}
                      onClick={() => handleSliderClick(percent)}
                      className="hover:text-cyan-400 transition-colors"
                    >
                      {percent}%
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Total Amount */}
            <div className="bg-white/10 border border-white/10 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/50 text-sm">TOTAL AMOUNT</span>
                <span className="text-white font-semibold">
                  {totalAmount.toLocaleString()} MGG
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/50 text-xs">Available Balance</span>
                <span className="text-cyan-400 text-sm font-medium">
                  {availableBalance.toLocaleString()} MGG
                </span>
              </div>
            </div>

            {/* Terms Checkbox */}
<div className="
  mx-auto
  w-fit
  flex items-center justify-center gap-4
  mb-6
  px-4 py-2
  border border-slate-700
  rounded-lg
">
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      checked={agreedTerms}
      onChange={(e) => setAgreedTerms(e.target.checked)}
      className="
        w-12 h-4
        border-white/10
        bg-white/10
        text-green-500
        focus:ring-green-500
      "
    />
    <span className="text-green-500 text-sm font-medium">
      성공
    </span>
  </label>

  <img 
    src="https://www.cloudflare.com/img/logo-web-badges/cf-logo-on-white-bg.svg"
    alt="Cloudflare"
    className="h-8 w-auto"
  />
</div>

            {/* Stake Button */}
            <button
              onClick={handleStake}
              disabled={!agreedTerms || numberOfAccounts === 0}
              className="w-full bg-blue-600 bg-gradient-to-r from-blue-700 to-blue-800 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white py-3 rounded-full font-semibold text-base transition-colors"
            >
              Stake Fixed ({numberOfAccounts} Account{numberOfAccounts !== 1 ? 's' : ''})
            </button>
          </div>
        </div>
      )}
    </>
  );
}

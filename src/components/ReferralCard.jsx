
export default function ReferralCard({
  username = "kang0622",
  level = 0,
  id = "Q4AvRz7rqpofj43lpod...",
  email = "test@gmail.com",
  feeding = "Inactive",
  referralCode = "481036",
  systemInvest = "0",
}) {
  return (
 
    <div className="bg-white/10 border border-white/10 rounded-xl overflow-hidden">
      <div className="flex">
        <div className="flex-1 p-3 sm:p-4 min-w-0">
 {/* Header */}
<div className="flex items-center justify-between mb-2 sm:mb-3">
  {/* Left group */}
  <div className="flex items-center gap-2 min-w-0">
    {/* Vertical Bar */}
    <div className="w-[2px] h-4 bg-cyan-400 rounded-full" />

    <span className="text-cyan-400 font-semibold text-sm sm:text-base truncate">
      {username}
    </span>
  </div>

  {/* Level */}
  <span className="text-white text-xs sm:text-sm flex-shrink-0">
    Lv. {level}
  </span>
</div>
          
          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-1.5 sm:gap-y-2 text-xs sm:text-sm">
            <div>
              <span className="text-white/50">ID</span>
            </div>
            <div className="text-right overflow-hidden">
              <span className="text-white truncate block">{id}</span>
            </div>
            
            <div>
              <span className="text-white/50">Email</span>
            </div>
            <div className="text-right overflow-hidden">
              <span className="text-white truncate block">{email}</span>
            </div>
            
            <div>
              <span className="text-white/50">Feeding</span>
            </div>
            <div className="text-right">
              <span className="text-white">{feeding}</span>
            </div>
            
            <div>
              <span className="text-white/50 truncate">Referral Code</span>
            </div>
            <div className="text-right">
              <span className="text-white">{referralCode}</span>
            </div>
            
            <div>
              <span className="text-white/50 truncate">System Invest</span>
            </div>
            <div className="text-right">
              <span className="text-white">{systemInvest}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

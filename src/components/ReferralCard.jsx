
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
 
    <div className="bg-white/10 backdrop-blur-xl
backdrop-saturate-150
border border-white/10
rounded-xl
overflow-hidden
shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
      <div className="flex">
        <div className="flex-1 p-3 sm:p-4 min-w-0">
 {/* Header */}
<div className="flex items-center justify-between mb-2 sm:mb-3">
  {/* Left group */}
  <div className="flex items-center gap-2 min-w-0">
    {/* Vertical Bar */}
    <div className="w-[2px] h-4 bg-cyan-400 rounded-full" />

    <span className="text-cyan-400 font-semibold text-sm sm:text-medium truncate">
      {username}
    </span>
  </div>

  {/* Level */}
  <span className="text-white font-semibold text-sm sm:text-medium flex-shrink-0">
    Lv. {level}
  </span>
</div>
          
          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-1 text-xs sm:text-sm">
            <div>
              <span className="text-white/50 font-extralight text-xs sm:text-sm">ID</span>
            </div>
            <div className="text-right overflow-hidden">
              <span className="text-white font-extralight text-xs sm:text-sm truncate block">{id}</span>
            </div>
            
            <div>
              <span className="text-white/50 font-extralight text-xs sm:text-sm">Email</span>
            </div>
            <div className="text-right overflow-hidden">
              <span className="text-white font-extralight text-xs sm:text-sm truncate block">{email}</span>
            </div>
            
            <div>
              <span className="text-white/50 font-extralight text-xs sm:text-sm">Feeding</span>
            </div>
            <div className="text-right">
              <span className="text-white font-extralight text-xs sm:text-sm">{feeding}</span>
            </div>
            
            <div>
              <span className="text-white/50 font-extralight text-xs sm:text-sm truncate">Referral Code</span>
            </div>
            <div className="text-right">
              <span className="text-white font-extralight text-xs sm:text-sm">{referralCode}</span>
            </div>
            
            <div>
              <span className="text-white/50 font-extralight text-xs sm:text-sm truncate">System Invest</span>
            </div>
            <div className="text-right">
              <span className="text-white font-extralight text-xs sm:text-sm ">{systemInvest}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

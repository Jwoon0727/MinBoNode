
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
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
      <div className="flex">
        {/* Left Blue Border */}
        <div className="w-1 bg-blue-500" />
        
        <div className="flex-1 p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-cyan-400 font-semibold">{username}</span>
            <span className="text-slate-400 text-sm">Lv. {level}</span>
          </div>
          
          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-y-2 text-sm">
            <div>
              <span className="text-slate-500">ID</span>
            </div>
            <div className="text-right">
              <span className="text-slate-300 truncate">{id}</span>
            </div>
            
            <div>
              <span className="text-slate-500">Email</span>
            </div>
            <div className="text-right">
              <span className="text-slate-300">{email}</span>
            </div>
            
            <div>
              <span className="text-slate-500">Feeding</span>
            </div>
            <div className="text-right">
              <span className="text-slate-300">{feeding}</span>
            </div>
            
            <div>
              <span className="text-slate-500">Referral Code</span>
            </div>
            <div className="text-right">
              <span className="text-slate-300">{referralCode}</span>
            </div>
            
            <div>
              <span className="text-slate-500">System Invest</span>
            </div>
            <div className="text-right">
              <span className="text-slate-300">{systemInvest}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

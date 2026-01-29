
export default function MyPackageCard({ 
  name = "Supreme Node",
  price = "$20,000",
  miningPower = "0.2755",
  time = "2025. 10. 14. 14:15",
  code = "CCKx2rZpIRdYmAQcWdgIYh",
  received = "9510.3285172"
}) {
  return (
    <div className="bg-[#24282D] border border-white/10 rounded-xl overflow-hidden">
      <div className="flex">
        {/* Content */}
        <div className="flex-1 p-5">
      {/* Node Name */}
<div className="flex items-center gap-3 mb-4">
  <div className="w-1 h-7 bg-cyan-400 rounded-full" />
  <h3 className="text-cyan-400 font-semibold text-base">
    {name}
  </h3>
</div>
          {/* Info Grid */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Price</span>
              <span className="text-white/70">{price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Mining Power</span>
              <span className="text-white/70">{miningPower}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Time</span>
              <span className="text-white/70">{time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Code</span>
              <span className="text-white/70">{code}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Received</span>
              <span className="text-white/70">{received}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

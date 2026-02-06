
export default function MyPackageCard({ 
  name = "Supreme Node",
  price = "$20,000",
  miningPower = "0.2755",
  time = "2025. 10. 14. 14:15",
  code = "CCKx2rZpIRdYmAQcWdgIYh",
  received = "9510.3285172"
}) {
  return (
    <div className="bg-white/10 backdrop-blur-xl
backdrop-saturate-150
border border-white/10
rounded-xl
overflow-hidden
shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
      <div className="flex">
        {/* Content */}
        <div className="flex-1 p-3">
      {/* Node Name */}
<div className="flex items-center gap-3 mb-4">
  <div className="w-1 h-7 bg-cyan-400 rounded-full" />
  <h3 className="text-cyan-400 font-normal text-base">
    {name}
  </h3>
</div>
          {/* Info Grid */}
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-white/50 text-xs">Price</span>
              <span className="text-white/70">{price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50 text-xs">Mining Power</span>
              <span className="text-white/70">{miningPower}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50 text-xs">Time</span>
              <span className="text-white/70">{time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50 text-xs">Code</span>
              <span className="text-white/70">{code}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/50 text-xs">Received</span>
              <span className="text-white/70">{received}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

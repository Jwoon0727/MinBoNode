
export default function MyPackageCard({ 
  name = "Supreme Node",
  price = "$20,000",
  miningPower = "0.2755",
  time = "2025. 10. 14. 14:15",
  code = "CCKx2rZpIRdYmAQcWdgIYh",
  received = "9510.3285172"
}) {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
      <div className="flex">
        {/* Left Orange Border */}
        <div className="w-1 bg-orange-500" />
        
        {/* Content */}
        <div className="flex-1 p-5">
          {/* Node Name */}
          <h3 className="text-orange-400 font-semibold text-base mb-4">{name}</h3>
          
          {/* Info Grid */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Price</span>
              <span className="text-white">{price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Mining Power</span>
              <span className="text-white">{miningPower}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Time</span>
              <span className="text-white">{time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Code</span>
              <span className="text-white">{code}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Received</span>
              <span className="text-white">{received}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




export default function PackageCard({ name, image, daily, maxOut, miningPower, price }) {
  return (
    <div className="bg-[#24282D] border border-white/10 rounded-2xl p-4 flex flex-col">
      {/* Title */}
      <h3 className="text-white font-bold text-2xl mb-3">{name}</h3>
      
      {/* Car Image */}
      <div className="relative h-50 mb-4 rounded-xl overflow-hidden bg-slate-900">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Stats */}
   {/* Stats */}
<div className="space-y-4 mb-4">

{/* Daily */}
<div>
  <div className="flex justify-between items-center mb-1">
    <div className="flex items-center gap-2">
      <span className="text-slate-400 text-xs text-left">Daily</span>
    </div>
    <span className="text-white text-xs font-medium">
      {daily} MGG
    </span>
  </div>

  {/* Progress Bar */}
  <div className="w-full h-3 rounded-full overflow-hidden border-t border-r border-white/20">
    <div
      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
      style={{ width: "40.5%" }} // dailyProgress
    />
  </div>
</div>

{/* Max Out */}
<div>
  <div className="flex justify-between items-center mb-1">
    <div className="flex items-center gap-2">
      
      <span className="text-slate-400 text-xs text-left">Max Out</span>
    </div>
    <span className="text-white text-xs font-medium">
      {maxOut} MGG
    </span>
  </div>

  {/* Progress Bar */}
  <div className="w-full h-3 rounded-full overflow-hidden border-t border-r border-white/20">
    <div
      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
      style={{ width: "72%" }} // maxOutProgress
    />
  </div>
</div>

{/* Mining Power */}
<div>
  <div className="flex justify-between items-center mb-1">
      <div className="flex items-center gap-2">
      
      <span className="text-slate-400 text-xs text-left">Mining Power</span>
    </div>
    <span className="text-white text-xs font-medium">
      {miningPower} MGG/sec
    </span>
  </div>

  {/* Progress Bar */}
  <div className="w-full h-3 rounded-full overflow-hidden border-t border-r border-white/20">
    <div
      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
      style={{ width: "55%" }} // miningPowerProgress
    />
  </div>
</div>

</div>
      
      {/* Price and Button */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-700">
        <div>
          <span className="text-white text-2xl font-bold">{price}</span>
          <span className="text-white/70 text-sm ml-1">USDT</span>
        </div>
        <button className="
  bg-gradient-to-r from-blue-700 to-blue-800
  hover:from-blue-600 hover:to-blue-700
  text-white
  px-10 py-3
  rounded-full
  text-xs
  font-medium 
  border-t border-l border-r border-white/20
  tracking-wider
  transition-colors
">
          BUY NOW
        </button>
      </div>
    </div>
  );
}

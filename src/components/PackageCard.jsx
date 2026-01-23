
import { Star } from "lucide-react";

export default function PackageCard({ name, image, stars, daily, maxOut, miningPower, price }) {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-4 flex flex-col">
      {/* Title */}
      <h3 className="text-white font-semibold text-lg mb-3">{name}</h3>
      
      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      
      {/* Car Image */}
      <div className="relative h-40 mb-4 rounded-xl overflow-hidden bg-slate-900">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Stats */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-slate-400 text-sm">Daily</span>
          </div>
          <span className="text-white text-sm font-medium">{daily} MGG</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-slate-400 text-sm">Max Out</span>
          </div>
          <span className="text-white text-sm font-medium">{maxOut} MGG</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-slate-400 text-sm">Mining Power</span>
          </div>
          <span className="text-white text-sm font-medium">{miningPower} Mgg/sec</span>
        </div>
      </div>
      
      {/* Price and Button */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-700">
        <div>
          <span className="text-white text-2xl font-bold">{price}</span>
          <span className="text-slate-400 text-sm ml-1">USDT</span>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors">
          BUY NOW
        </button>
      </div>
    </div>
  );
}

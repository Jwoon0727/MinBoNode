import { useState } from 'react';
import { Star, X } from 'lucide-react';

export default function PackageCard({ name, image, daily, maxOut, miningPower, price, stars = 0 }) {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const currentBalance = 1; // Mock balance - 실제로는 props나 context에서 가져와야 합니다

  const totalPrice = price * quantity;
  const afterBuying = currentBalance - totalPrice;
  const isInsufficientBalance = afterBuying < 0;

  return (
    <>
      <div className="bg-[#24282D] bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl backdrop-saturate-150 rounded-2xl p-4 relative overflow-hidden group shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        {/* Title */}
        <h3 className="text-white font-bold text-2xl mb-3">{name}</h3>

        {/* Car Image */}
        <div className="relative h-50 mb-4 rounded-xl overflow-hidden bg-slate-900">
          <img
            src={image || '/placeholder.svg'}
            alt={name}
            className="w-full h-full object-cover"
          />

          {/* Stars - Top center of image */}
          {stars > 0 && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-1 ">
              {[...Array(stars)].map((_, index) => (
                <Star key={index} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          )}
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
              <span className="text-white text-xs font-medium">{daily} MGG</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 rounded-full overflow-hidden border-t border-r border-white/20">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                style={{ width: '40.5%' }} // dailyProgress
              />
            </div>
          </div>

          {/* Max Out */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-xs text-left">Max Out</span>
              </div>
              <span className="text-white text-xs font-medium">{maxOut} MGG</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 rounded-full overflow-hidden border-t border-r border-white/20">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                style={{ width: '72%' }} // maxOutProgress
              />
            </div>
          </div>

          {/* Mining Power */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-xs text-left">Mining Power</span>
              </div>
              <span className="text-white text-xs font-medium">{miningPower} MGG/sec</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 rounded-full overflow-hidden border-t border-r border-white/20">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                style={{ width: '55%' }} // miningPowerProgress
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
          <button
            onClick={() => setShowModal(true)}
            className="
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
"
          >
            BUY NOW
          </button>
        </div>
      </div>

      {/* Purchase Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          {/* Modal */}
          <div className="relative w-full max-w-lg bg-[#1a1d23] rounded-2xl p-6 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="ml-auto w-5 h-5 flex items-center justify-center
      rounded-full border border-white/30
      text-white/60 hover:text-white
      hover:border-white/50 hover:bg-white/10
      transition-all"
            >
              <X size={14} />
            </button>

            {/* Header */}
            <h2 className="text-white text-2xl font-medium">Confirmation</h2>
            <p className="text-cyan-500 text-sm mb-6">Please confirm your purchase details</p>

            {/* Quantity Input */}
            <div className="mb-2">
              <label className="text-white text-sm mb-2 block">Enter quantity</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full bg-[#2a2f35] border border-white/10 rounded-lg px-4 py-3 text-white text-lg focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Price Details */}
            <div className="space-y-0.1 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Total Price:</span>
                <span className="text-white text-base font-light">$ 300</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Current balance:</span>
                <span className="text-white text-base font-light">$ 1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">After buying:</span>
                <span className="text-white text-base font-light">$ -299</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1  border-t border-t-white/20 bg-[#2a2f35] hover:bg-[#353a42] text-white/50 py-3 rounded-full font-medium text-sm transition-colors"
              >
                Cancel
              </button>
              <button
                disabled={isInsufficientBalance}
                className={`font-medium text-sm flex-1 py-3 border-t border-l border-r border-white/30 border-b-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-normal transition-colors  ${
                  isInsufficientBalance
                    ? 'bg-blue-600 text-white '
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isInsufficientBalance ? 'Insufficient Balance' : 'Confirm Purchase'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

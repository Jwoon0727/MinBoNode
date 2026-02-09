import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const historyTabs = ['Purchase History', 'Topup History'];

export default function MyCardContent({ onBuyCard, onRegister }) {
  const [activeHistoryTab, setActiveHistoryTab] = useState('Purchase History');

  return (
    <>
      <h3 className="text-white text-base sm:text-lg font-semibold mb-4 sm:mb-6">My Card</h3>

      {/* Card Carousel */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
        {/* Left Arrow */}
        <button className="w-8 h-8 sm:w-10 sm:h-10  rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors flex-shrink-0">
          <ChevronLeft size={22} className="text-white sm:w-5 sm:h-5" />
        </button>

        {/* Card Display */}
        <div className="relative flex flex-col items-center flex-1 max-w-[280px] sm:max-w-xs lg:max-w-sm">
          <div className="w-full aspect-[3/3.5] relative">
            <img
              src="/images/crypto_card.svg"
              alt="My Card"
              className="w-full h-full object-contain ml-5 sm:ml-6"
            />

            {/* Buttons Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 w-[90%]">
              <button
                onClick={onBuyCard}
                className="
          bg-[#4F66D7] hover:bg-blue-700
          text-white 
          px-3 sm:px-4 lg:px-6 
          py-1.5 sm:py-2
          rounded-full 
          text-[10px] sm:text-xs lg:text-sm
          font-normal
          transition-colors
          border-t border-l border-r border-white/20
          whitespace-nowrap
          flex-1
        "
              >
                Buy Now
              </button>

              <a
                href="https://www.fellascard.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="
    bg-white/10
    backdrop-blur-md
    border-t border-l border-r border-white/20
    hover:bg-white/20
    text-white
    px-3 sm:px-4 lg:px-6 
    py-1.5 sm:py-2
    rounded-full
    text-[10px] sm:text-xs lg:text-sm
    font-normal
    transition-all
    shadow-lg
    shadow-black/20
    whitespace-nowrap
    flex-1
    inline-flex items-center justify-center
  "
              >
                Visit Fellas Card
              </a>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors flex-shrink-0">
          <ChevronRight size={22} className="text-white sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
        <button className="px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 backdrop-blur-md shadow-lg shadow-black/20 bg-[#24282D] border-t border-l border-r border-white/10 text-white/70 rounded-full hover:bg-slate-700 transition-colors text-xs sm:text-sm font-light whitespace-nowrap">
          Top-up
        </button>
        <button
          onClick={onRegister}
          className="px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 bg-[#2623A9] hover:bg-blue-700 text-white rounded-full border-t border-l border-r border-white/15 transition-colors text-xs sm:text-sm font-light whitespace-nowrap"
        >
          Register
        </button>
        <button className="px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 backdrop-blur-md shadow-lg shadow-black/20 bg-[#24282D] border-t border-l border-r border-white/10 text-white/70 rounded-full hover:bg-slate-700 transition-colors text-xs sm:text-sm font-light whitespace-nowrap">
          Remove
        </button>
      </div>

      {/* My Card Section */}
      <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">My Card</h3>

      {/* History Tabs */}
      <div className="flex gap-2 mb-3 sm:mb-4">
        {historyTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveHistoryTab(tab)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-light transition-colors whitespace-nowrap ${
              activeHistoryTab === tab
                ? 'bg-[#2623A9] text-white border-t border-l border-r border-white/20'
                : 'bg-[#24282D] border-t border-l border-r border-white/10 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* History Content */}
      <div className="bg-[#24282D] border rounded-xl p-4 sm:p-6 lg:p-8">
        <p className="text-white/50 text-center text-xs sm:text-sm font-light">No data</p>
      </div>
    </>
  );
}

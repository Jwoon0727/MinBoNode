import { useState } from "react";
import { Globe, Menu, Gamepad2 } from "lucide-react";

export default function PageHeader({ title, onMenuClick }) {
  const [showGames, setShowGames] = useState(false);

  return (
    <div className="flex items-center justify-between mb-4 px-2 relative">
      {/* Desktop: Page Title */}
      <h1 className="hidden lg:block text-white text-xl font-semibold">{title}</h1>
      
      {/* Mobile: User Profile */}
      <div className="lg:hidden flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-xl">😎</span>
        </div>
        <div>
          <div className="text-white font-semibold text-sm">ALBECITY</div>
          <div className="text-slate-500 text-xs">M0#828674</div>
        </div>
      </div>
      
      <div className="flex items-center gap-2 relative">
        <div className="w-10 h-10 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800">
          <Globe size={18} className="text-white" />
        </div>
        <div className="w-10 h-10 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800">
          <span className="text-[7px] text-white font-bold leading-tight text-center">FELLAS<br/>CARD</span>
        </div>
        
        {/* Desktop: Show both games */}
        <div className="hidden lg:flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800">
            <span className="text-[7px] text-white font-bold leading-tight text-center">2048<br/>SMILE</span>
          </div>
          <div className="w-10 h-10 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800">
            <span className="text-[7px] text-white font-bold leading-tight text-center">HYPER<br/>RACING</span>
          </div>
        </div>
        
        {/* Mobile: Games toggle button */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setShowGames(!showGames)}
            className="w-10 h-10 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800 hover:bg-slate-800 transition-colors"
          >
            <Gamepad2 size={18} className="text-white" />
          </button>
          
          {/* Dropdown menu */}
          {showGames && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowGames(false)}
              />

              {/* Capsule wrapper */}
              <div
                className="
                  absolute right-[-13px] top-full mt-3 z-20
                  px-3 py-3
                  rounded-full
                  bg-[#0b0f14]
                  border border-slate-700
                  shadow-xl shadow-black/50
                "
              >
                <div className="flex flex-col gap-3">
                  {/* 2048 */}
                  <button
                    className="
                      w-10 h-10
                      rounded-full
                      bg-slate-700/40
                      flex items-center justify-center
                      border border-slate-800
                      hover:bg-slate-600
                      transition
                      active:scale-95
                    "
                  >
                    <span className="text-[7px] text-white font-bold leading-tight text-center">
                      2048<br />SMILE
                    </span>
                  </button>

                  {/* HYPER RACING */}
                  <button
                    className="
                      w-10 h-10
                      rounded-full
                      bg-slate-700/40
                      flex items-center justify-center
                      border border-slate-800
                      hover:bg-slate-600
                      transition
                      active:scale-95
                    "
                  >
                    <span className="text-[7px] text-white font-bold leading-tight text-center">
                      HYPER<br />RACING
                    </span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        
        <div className="w-10 h-10 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800">
          <Globe size={18} className="text-white" />
        </div>
        {/* Mobile: Hamburger Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden w-10 h-10 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800 hover:bg-slate-800 transition-colors active:scale-95"
        >
          <Menu size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
}

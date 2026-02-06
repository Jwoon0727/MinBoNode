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
      
      <div className="flex items-center gap-1 relative">
        <div className="w-9 h-9 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800">
        <img
  src="/images/Union.svg"
  alt="Globe"
  className="w-5 h-5"
 />
        </div>
        <a href="https://www.fellascard.com/login">
  <div className="w-9 h-9 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800 cursor-pointer hover:bg-slate-600 transition">
    <span className="text-[7px] text-white font-bold leading-tight text-center">
      FELLAS<br />CARD
    </span>
  </div>
</a>
        
        {/* Desktop: Show both games */}
        <div className="hidden lg:flex items-center gap-2">
          <a href="https://2048slimedev.mimbonode.io/">
          <div className="w-9 h-9 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800">
            <span className="text-[7px] text-white font-bold leading-tight text-center">2048<br/>SMILE</span>
          </div>
          </a>
          <a href="https://hyperracingdev.mimbonode.io/">
          <div className="w-9 h-9 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800">
            <span className="text-[7px] text-white font-bold leading-tight text-center">HYPER<br/>RACING</span>
          </div>
          </a>
        </div>
        
        {/* Mobile: Games toggle button */}
        <div className="lg:hidden relative">
          <button
            onClick={() => setShowGames(!showGames)}
            className="w-9 h-9 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800 hover:bg-slate-800 transition-colors"
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
                  absolute right-[-8px] top-full mt-3 z-20
                  px-1.5 py-1.5
                  rounded-full
                  bg-[#0b0f14]
                  border border-slate-700
                  shadow-xl shadow-black/50
                "
              >
                <div className="flex flex-col gap-3">
                  {/* 2048 */}
                  
                  <a
  href="https://2048slimedev.mimbonode.io/"
  className="
    w-9 h-9
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
</a>

                  {/* HYPER RACING */}
                  <a
  href="https://hyperracingdev.mimbonode.io/"
  className="
    w-9 h-9
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
</a>
                </div>
              </div>
            </>
          )}
        </div>
        
        <div className="w-9 h-9 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800">
          <Globe size={20} className="text-white" />
        </div>
        {/* Mobile: Hamburger Menu Button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden w-9 h-9 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800 hover:bg-slate-800 transition-colors active:scale-95"
        >
          <Menu size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
}

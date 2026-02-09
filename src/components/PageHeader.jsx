import { useState } from 'react';
import { Globe, Menu, Gamepad2 } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
];

export default function PageHeader({ title, onMenuClick }) {
  const [showGames, setShowGames] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className="flex items-center justify-between mb-4 px-2 relative">
      {/* Desktop: Page Title */}
      <h1 className="hidden lg:block text-white text-xl font-semibold">{title}</h1>

      {/* Mobile: User Profile */}
      <div className="lg:hidden flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#304D9C] rounded-full flex items-center justify-center overflow-hidden">
            <img src="/images/userface.svg" alt="Profile Avatar" className="w-8 h-8 object-cover" />
          </div>
          <div>
            <div className="text-white font-light text-xs">ALBECITY</div>
            <div className="text-white/60 text-[12px]">M0#828674</div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 relative">
        <div className="w-9 h-9 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800">
          <img src="/images/Union.svg" alt="Globe" className="w-5 h-5" />
        </div>
        <a href="https://www.fellascard.com/login">
          <div className="w-9 h-9 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800 cursor-pointer hover:bg-slate-600 transition">
            <span className="text-[7px] text-white font-bold leading-tight text-center">
              FELLAS
              <br />
              CARD
            </span>
          </div>
        </a>

        {/* Desktop: Show both games */}
        <div className="hidden lg:flex items-center gap-2">
          <a href="https://2048slimedev.mimbonode.io/">
            <div className="w-9 h-9 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800">
              <span className="text-[7px] text-white font-bold leading-tight text-center">
                2048
                <br />
                SMILE
              </span>
            </div>
          </a>
          <a href="https://hyperracingdev.mimbonode.io/">
            <div className="w-9 h-9 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800">
              <span className="text-[7px] text-white font-bold leading-tight text-center">
                HYPER
                <br />
                RACING
              </span>
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
              <div className="fixed inset-0 z-10" onClick={() => setShowGames(false)} />

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
                      2048
                      <br />
                      SMILE
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
                      HYPER
                      <br />
                      RACING
                    </span>
                  </a>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="w-9 h-9 bg-slate-700/40 rounded-full flex items-center justify-center border border-slate-800 hover:bg-slate-600 transition-colors"
          >
            <Globe size={20} className="text-white" />
          </button>

          {/* Language Dropdown */}
          {showLanguageDropdown && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setShowLanguageDropdown(false)} />
              <div
                className="absolute right-0 top-full mt-2 w-40
                  bg-black/50
                  backdrop-blur-xl
                  border border-white/15
                  backdrop-saturate-150
                  rounded-xl
                  overflow-hidden
                  shadow-[0_8px_32px_0_rgba(0,0,0,0.45)]
                  z-20"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setShowLanguageDropdown(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm
                      transition-colors
                      font-light
                      ${
                        selectedLanguage.code === lang.code
                          ? 'bg-cyan-400/10 text-cyan-400'
                          : 'text-white/60 hover:bg-white/5 hover:text-white'
                      }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-light">{lang.name}</span>
                  </button>
                ))}
              </div>
            </>
          )}
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

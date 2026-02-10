import { useState } from 'react';
import { Globe, Power, Lock, X, AlertTriangle, Shield } from 'lucide-react';
import PageHeader from './PageHeader';
import { ArrowDown, ArrowRight } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export default function SettingsPage({ onMenuClick }) {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('ko');
  const [show2FAModal, setShow2FAModal] = useState(false);

  const handleEnable2FA = () => {
    setShow2FAModal(true);
  };

  const handleConfirm2FA = () => {
    setIs2FAEnabled(true);
    setShow2FAModal(false);
  };

  const handleCancel2FA = () => {
    setShow2FAModal(false);
  };

  return (
    <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        {/* Page Header */}
        <PageHeader title="Settings" onMenuClick={onMenuClick} />

        {/* Balance Card */}
        <div className="bg-gradient-to-br from-black via-slate-950 to-blue-900 border border-slate-700/50 rounded-2xl p-4 sm:p-6 mb-6">
          {/* Balance */}
          <div className="mt-2 sm:mt-4 mb-4 sm:mb-5">
            <div className="text-white font-extralight text-xs sm:text-sm lg:text-lg mb-1">
              Total Balance
            </div>
            <div className="text-white text-4xl sm:text-4xl lg:text-6xl font-bold">≈$123.456</div>
            <div className="text-white/50 text-xs font-extralight lg:text-xl mt-1">
              Current Rate : 1 MGG = 0.0024 USDT
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 sm:gap-3 mb-2 sm:mb-3">
            <button
              className="
  flex items-center justify-center gap-1 sm:gap-2
  bg-blue-600 hover:bg-blue-700
  text-white
  px-4 sm:px-8 py-2
  rounded-full
  font-light text-sm sm:text-base
  transition-colors
  flex-1
"
            >
              Harvest
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/10 flex items-center justify-center">
                <ArrowRight size={13} className="sm:w-4 sm:h-4" />
              </span>
            </button>

            <button
              className="
  flex items-center justify-center gap-1 sm:gap-2

  bg-white/10 hover:bg-slate-600
  backdrop-blur-md
  border-t border-l border-r border-white/20

  text-white
  px-4 sm:px-8 py-2
  rounded-full
  font-light text-sm sm:text-base
  transition-colors
  flex-1
"
            >
              Package
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/10 flex items-center justify-center">
                <ArrowRight size={13} className="sm:w-4 sm:h-4" />
              </span>
            </button>
          </div>
        </div>

        {/* Two-Factor Authentication */}
        <div className="bg-[#222325] border border-white/10 rounded-2xl p-6 mb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 border-l border-t border-r border-white/20 bg-blue-600 rounded-full flex items-center justify-center">
              <Shield size={20} className="text-white" />
            </div>
          </div>
          <h2 className="text-white text-lg font-semibold mb-1">Two-Factor Authentication</h2>
          <p className="text-cyan-400 text-sm mb-4">Set up 2FA to enhance your account security</p>

          <div className="flex gap-3">
            <button
              onClick={() => setIs2FAEnabled(false)}
              className={`
      flex-1 flex items-center justify-center gap-2
      py-3 rounded-full font-medium transition-colors
      border-t border-l border-r border-white/30 border-b-0
      ${!is2FAEnabled ? 'bg-white/10 text-white' : 'bg-white/10 text-white/50 hover:bg-white/20'}
    `}
            >
              <Power size={16} />
              OFF
            </button>
            <button
              onClick={handleEnable2FA}
              className={`flex-1 py-3 border-t border-l border-r border-white/30 border-b-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full font-normal transition-colors ${
                is2FAEnabled ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Enable
            </button>
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-[#222325] border border-white/10 rounded-2xl p-6 mb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 border-l border-t border-r border-white/20 bg-blue-600 rounded-full flex items-center justify-center">
              <Lock size={20} className="text-white" />
            </div>
          </div>
          <h2 className="text-white text-lg font-semibold mb-4">Change Password</h2>

          <button className="w-full border-t border-l border-r border-white/30 border-b-0 bg-gradient-to-r from-blue-700 to-blue-800 hover:bg-blue-700 text-white py-3 rounded-full font-medium transition-colors">
            Change Password
          </button>
        </div>

        {/* Language Options */}
        <div className="bg-[#222325] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 border-l border-t border-r border-white/20 bg-blue-600 rounded-full flex items-center justify-center">
              <Globe size={20} className="text-white" />
            </div>
          </div>
          <h2 className="text-white text-lg font-semibold mb-4">Language</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLanguage(lang.code)}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-full font-medium transition-colors ${
                  selectedLanguage === lang.code
                    ? 'border-t border-l border-r border-white/30 border-b-0 bg-blue-600 text-white'
                    : 'border-t border-l border-r border-white/30 border-b-0 bg-white/10 text-slate-300 hover:bg-slate-600'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Two-Factor Authentication Modal */}
      {show2FAModal && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={handleCancel2FA}
        >
          <div
            className="bg-[#1F2123] rounded-2xl p-6 w-full max-w-md border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl font-semibold">Two-Factor Authentication</h2>
              <button
                onClick={handleCancel2FA}
                className="    w-5 h-5
    flex items-center justify-center
    rounded-full
    border border-white/30
    text-white/60
    hover:text-white
    hover:border-white/50
    hover:bg-white/10
    transition-all"
              >
                <X size={14} />
              </button>
            </div>

            {/* 2FA Question & Warning */}
            <div className="flex flex-col items-center p-6 rounded-lg space-y-4">
              {/* Question */}
              <p className="text-white text-center text-lg">Do you want to enable 2FA?</p>

              {/* Warning */}
              <div className="flex items-start space-x-2">
                <AlertTriangle className="w-3 h-3 text-[#F2FE79] flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <p className="text-[#F2FE79] font-semibold text-sm text-center">
                    Warning: OTP cannot be recovered if lost.
                  </p>
                  <p className="text-white/50 text-sm text-center mt-2">
                    Please make sure to store it safely.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleCancel2FA}
                className="bg-white/10 flex-1 flex items-center justify-center gap-2
      py-3 rounded-full font-medium transition-colors
      border-t border-l border-r border-white/30 border-b-0"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm2FA}
                className="border border-white/25 bg-blue-600 flex-1 py-3 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full font-normal transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

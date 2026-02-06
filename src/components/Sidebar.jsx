import { useState, useEffect } from 'react';
import {
  User,
  Gamepad2,
  Package,
  Wallet,
  Users,
  TicketIcon,
  Settings,
  Menu,
  X,
  ChevronUp,
  ChevronDown,
  LogOut,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import AuthModal from '@/components/AuthModal';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
];

const menuSections = [
  {
    items: [
      { icon: User, label: 'Profile' },
      { icon: Gamepad2, label: 'Race', active: true },
    ],
  },
  {
    id: 'packages',
    title: 'Packages',
    collapsible: true,
    items: [
      { label: 'Packages' },
      { label: 'My Package' },
      { label: 'Mining Transaction' },
      { label: 'My card' },
    ],
  },
  {
    id: 'wallet',
    title: 'Wallet',
    icon: Wallet,
    collapsible: true,
    items: [
      { label: 'Balance' },
      { label: 'Staking' },
      { label: 'Swap' },
      { label: 'Transfer' },
      { label: 'Deposit' },
      { label: 'Withdraw' },
    ],
  },
  {
    id: 'partner',
    title: 'Partner',
    icon: Users,
    collapsible: true,
    items: [
      { label: 'Referral' },
      { label: 'Downline' },
      { label: 'Matrix' },
      { label: 'Commissions' },
    ],
  },
  {
    items: [
      { icon: TicketIcon, label: 'Support Tickets' },
      { icon: Settings, label: 'Settings' },
    ],
  },
];

export default function Sidebar({
  currentPage = 'race',
  onPageChange,
  currentTab = 'Packages',
  onTabChange,
  partnerTab = 'Referral',
  onPartnerTabChange,
  walletTab = 'Balance',
  onWalletTabChange,
  isOpen = false,
  onToggle,
  showAuthModal,
  setShowAuthModal,
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [authMode, setAuthMode] = useState('login');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[2]); // 한국어 기본값
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  // 모바일 여부에 따라 초기 상태 설정
  const [expandedSections, setExpandedSections] = useState(() => {
    const initialMobile = window.innerWidth < 1024;
    return {
      packages: !initialMobile, // PC에서는 true, 모바일에서는 false
      wallet: !initialMobile,
      partner: !initialMobile,
    };
  });

  // 모바일 감지 및 화면 크기 변경 시 섹션 상태 업데이트
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      if (!mobile) {
        // PC로 전환 시 모든 섹션 열기
        setExpandedSections({
          packages: true,
          wallet: true,
          partner: true,
        });
      } else {
        // 모바일로 전환 시 모든 섹션 닫기
        setExpandedSections({
          packages: false,
          wallet: false,
          partner: false,
        });
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 외부 클릭 시 언어 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showLanguageDropdown && !event.target.closest('.language-selector')) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showLanguageDropdown]);

  // 모바일 사이드바 열릴 때 배경 스크롤 방지
  useEffect(() => {
    if (isOpen && isMobile) {
      // 사이드바가 열리면 body 스크롤 막기
      document.body.style.overflow = 'hidden';
    } else {
      // 사이드바가 닫히면 body 스크롤 복원
      document.body.style.overflow = '';
    }

    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, isMobile]);

  const setIsOpen = (value) => {
    if (onToggle) {
      onToggle(value);
    }
  };

  const handleMenuClick = (label, sectionId) => {
    if (label === 'Profile') {
      onPageChange?.('profile');
    } else if (label === 'Race') {
      onPageChange?.('race');
    } else if (label === 'Settings') {
      onPageChange?.('settings');
    } else if (label === 'Support Tickets') {
      onPageChange?.('support');
    } else if (sectionId === 'packages') {
      onPageChange?.('packages');
      // 탭 매핑
      const tabMapping = {
        Packages: 'Packages',
        'My Package': 'My Package',
        'Mining Transaction': 'Mining Transaction',
        'My card': 'My Card',
      };
      if (tabMapping[label]) {
        onTabChange?.(tabMapping[label]);
      }
    } else if (sectionId === 'partner') {
      onPageChange?.('partner');
      // Partner 탭 매핑
      const partnerTabMapping = {
        Referral: 'Referral',
        Downline: 'Downline',
        Matrix: 'Matrix',
        Commissions: 'Commissions',
      };
      if (partnerTabMapping[label]) {
        onPartnerTabChange?.(partnerTabMapping[label]);
      }
    } else if (sectionId === 'wallet') {
      onPageChange?.('wallet');
      // Wallet 탭 매핑
      const walletTabMapping = {
        Balance: 'Balance',
        Staking: 'Staking',
        Swap: 'Swap',
        Transfer: 'Transfer',
        Deposit: 'Deposit',
        Withdraw: 'Withdraw',
      };
      if (walletTabMapping[label]) {
        onWalletTabChange?.(walletTabMapping[label]);
      }
    }
    setIsOpen(false);
  };

  const handleOpenAuth = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowAuthModal(false);
  };

  const toggleSection = (sectionId) => {
    // 모바일에서만 토글 가능
    if (isMobile) {
      setExpandedSections((prev) => ({
        ...prev,
        [sectionId]: !prev[sectionId],
      }));
    }
  };

  return (
    <>
      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
        onLogin={handleLogin}
      />

      {/* Mobile Header */}

      {/* Overlay */}
      {isOpen && (
        <button
          type="button"
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-md z-40 transition-all duration-300"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
    fixed inset-y-0 left-0 z-40
    w-64
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    flex flex-col h-screen
  `}
      >
        {/* Logo */}
        <div className="px-4 pt-4 pb-4">
          <a href="/" className="inline-block">
            <img src="/images/logo.svg" alt="MIMBONODE" className="h-6 w-auto cursor-pointer" />
          </a>
        </div>

        {/* User Profile / Auth Buttons */}
        <div className="px-4 pb-3 flex-shrink-0">
          {isLoggedIn ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-[#304D9C] rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/userface.svg"
                    alt="Profile Avatar"
                    className="w-8 h-8 object-cover"
                  />
                </div>
                <div>
                  <div className="text-white font-light text-xs">ALBECITY</div>
                  <div className="text-white/60 text-[12px]">M0#828674</div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsLoggedIn(false)}
                className="border-slate-600 text-slate-500 hover:bg-slate-700 hover:text-white text-[10px] px-2 py-1 h-auto"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button
                onClick={() => handleOpenAuth('login')}
                className="
                flex-1
                py-1
                bg-gradient-to-r from-blue-700 to-blue-800
                rounded-full
                text-xs font-normal
                transition-colors
              "
              >
                Login
              </Button>

              <Button
                variant="outline"
                onClick={() => handleOpenAuth('signup')}
                className="
                flex-1
                py-1
                text-xs font-normal
                bg-white/10
                rounded-full
                transition-colors
                border-t border-l border-r border-white/30 border-b-0
              "
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 pb-4 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <div
            className={`sticky top-0 
bg-gradient-to-br from-[#151515] via-white/5 to-white/10
backdrop-blur-md
backdrop-saturate-110
border-t border-l border-r border-white/20
rounded-2xl
p-3
shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
space-y-0.5
transition-all duration-200
${showLanguageDropdown ? 'pb-52' : ''}`}
          >
            {menuSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {section.title && section.collapsible ? (
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between px-3 py-1.5 text-white/60 text-sm transition-colors font-light"
                  >
                    <div className="flex items-center gap-2">
                      {section.icon && (
                        <section.icon
                          size={16}
                          className={
                            (section.id === 'packages' && currentPage === 'packages') ||
                            (section.id === 'wallet' && currentPage === 'wallet') ||
                            (section.id === 'partner' && currentPage === 'partner')
                              ? 'text-cyan-400'
                              : ''
                          }
                        />
                      )}
                      {!section.icon && section.title === 'Packages' && (
                        <Package
                          size={16}
                          className={currentPage === 'packages' ? 'text-cyan-400' : ''}
                        />
                      )}
                      <span
                        className={
                          (section.id === 'packages' && currentPage === 'packages') ||
                          (section.id === 'wallet' && currentPage === 'wallet') ||
                          (section.id === 'partner' && currentPage === 'partner')
                            ? 'text-cyan-400 font-light'
                            : 'font-light'
                        }
                      >
                        {section.title}
                      </span>
                    </div>
                    {/* 모바일에서만 chevron 표시 */}
                    {isMobile &&
                      (expandedSections[section.id] ? (
                        <ChevronUp size={16} className="text-cyan-400" />
                      ) : (
                        <ChevronDown size={16} className="text-white/60" />
                      ))}
                  </button>
                ) : section.title ? (
                  <div className="flex items-center gap-2 px-3 py-1.5 text-white/60 text-sm font-light">
                    {section.icon && <section.icon size={16} />}
                    {!section.icon && section.title === 'Packages' && <Package size={16} />}
                    <span className="font-light">{section.title}</span>
                  </div>
                ) : null}
                {/* PC에서는 항상 열림, 모바일에서는 expandedSections에 따라 열림 */}
                {(!section.collapsible || !isMobile || expandedSections[section.id]) &&
                  section.items.map((item, itemIndex) => {
                    // 탭 매핑 (nav 메뉴 label과 PackagesPage 탭 이름 매핑)
                    const tabMapping = {
                      Packages: 'Packages',
                      'My Package': 'My Package',
                      'Mining Transaction': 'Mining Transaction',
                      'My card': 'My Card',
                    };

                    // Partner 탭 매핑
                    const partnerTabMapping = {
                      Referral: 'Referral',
                      Downline: 'Downline',
                      Matrix: 'Matrix',
                      Commissions: 'Commissions',
                    };

                    // Wallet 탭 매핑
                    const walletTabMapping = {
                      Balance: 'Balance',
                      Staking: 'Staking',
                      Swap: 'Swap',
                      Transfer: 'Transfer',
                      Deposit: 'Deposit',
                      Withdraw: 'Withdraw',
                    };

                    const isActive =
                      (item.label === 'Profile' && currentPage === 'profile') ||
                      (item.label === 'Race' && currentPage === 'race') ||
                      (item.label === 'Settings' && currentPage === 'settings') ||
                      (item.label === 'Support Tickets' && currentPage === 'support') ||
                      (section.id === 'packages' &&
                        currentPage === 'packages' &&
                        currentTab === tabMapping[item.label]) ||
                      (section.id === 'partner' &&
                        currentPage === 'partner' &&
                        partnerTab === partnerTabMapping[item.label]) ||
                      (section.id === 'wallet' &&
                        currentPage === 'wallet' &&
                        walletTab === walletTabMapping[item.label]);

                    // 하위 메뉴가 없는 탭인지 확인 (section.title이 없는 경우)
                    const isTopLevelItem = !section.title;

                    return (
                      <button
                        key={itemIndex}
                        type="button"
                        onClick={() => handleMenuClick(item.label, section.id)}
                        className={`
                          w-full flex items-center gap-3 px-3 py-1.5 rounded-2xl text-sm
                          transition-colors duration-200
                          font-light
                          ${
                            isTopLevelItem
                              ? isActive
                                ? ''
                                : 'hover:bg-white/5'
                              : isActive
                              ? 'bg-white/20 backdrop-blur-lg shadow-xl shadow-black/30 border border-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]'
                              : 'hover:bg-white/15 hover:backdrop-blur-md hover:border hover:border-white/20'
                          }
                          ${!item.icon && section.title ? 'pl-8' : ''}
                        `}
                      >
                        {item.icon && (
                          <item.icon
                            size={16}
                            className={
                              isActive
                                ? isTopLevelItem
                                  ? 'text-cyan-400'
                                  : 'text-white'
                                : 'text-white/60'
                            }
                          />
                        )}
                        <span
                          className={`font-light ${
                            isActive
                              ? isTopLevelItem
                                ? 'text-cyan-400'
                                : 'text-white'
                              : 'text-white/60'
                          }`}
                        >
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
              </div>
            ))}

            {/* Language Selector */}
            <div className="relative language-selector mt-1">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="w-full flex items-center gap-3 px-3 py-1.5 rounded-2xl text-sm
                  transition-colors duration-200
                  hover:bg-white/5
                  font-light"
              >
                <span className="text-2xl">{selectedLanguage.flag}</span>
                <span className="text-white/60 font-light">{selectedLanguage.name}</span>
              </button>

              {/* Language Dropdown */}
              {showLanguageDropdown && (
                <div
                  className="absolute top-full left-0 right-0 mt-2
bg-black/50
backdrop-blur-xl
border-white/15
backdrop-saturate-150
rounded-xl
overflow-hidden
shadow-[0_8px_32px_0_rgba(0,0,0,0.45)]
z-50"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setShowLanguageDropdown(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-1.5 text-sm
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
              )}
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

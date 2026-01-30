import { useState, useEffect } from "react";
import {
  User,
  Gamepad2,
  Package,
  Wallet,
  Users,
  TicketIcon,
  Settings,
  Globe,
  Menu,
  X,
  ChevronUp,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AuthModal from "@/components/AuthModal";

const menuSections = [
  {
    items: [
      { icon: User, label: "Profile" },
      { icon: Gamepad2, label: "Race", active: true },
    ],
  },
  {
    id: "packages",
    title: "Packages",
    collapsible: true,
    items: [
      { label: "Packages" },
      { label: "My Package" },
      { label: "Mining Transaction" },
      { label: "My card" },
    ],
  },
  {
    id: "wallet",
    title: "Wallet",
    icon: Wallet,
    collapsible: true,
    items: [
      { label: "Balance" },
      { label: "Staking" },
      { label: "Swap" },
      { label: "Transfer" },
      { label: "Deposit" },
      { label: "Withdraw" },
    ],
  },
  {
    id: "partner",
    title: "Partner",
    icon: Users,
    collapsible: true,
    items: [
      { label: "Referral" },
      { label: "Downline" },
      { label: "Matrix" },
      { label: "Commissions" },
    ],
  },
  {
    items: [
      { icon: TicketIcon, label: "Support Tickets" },
      { icon: Settings, label: "Settings" },
      { icon: Globe, label: "한국어" },
    ],
  },
];

export default function Sidebar({ currentPage = "race", onPageChange, currentTab = "Packages", onTabChange, partnerTab = "Referral", onPartnerTabChange, walletTab = "Balance", onWalletTabChange, isOpen = false, onToggle, showAuthModal, setShowAuthModal }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [authMode, setAuthMode] = useState("login");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  
  // 모바일 여부에 따라 초기 상태 설정
  const [expandedSections, setExpandedSections] = useState(() => {
    const initialMobile = window.innerWidth < 1024;
    return {
      packages: !initialMobile, // PC에서는 true, 모바일에서는 false
      wallet: !initialMobile,
      partner: !initialMobile
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
          partner: true
        });
      } else {
        // 모바일로 전환 시 모든 섹션 닫기
        setExpandedSections({
          packages: false,
          wallet: false,
          partner: false
        });
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const setIsOpen = (value) => {
    if (onToggle) {
      onToggle(value);
    }
  };

  const handleMenuClick = (label, sectionId) => {
    if (label === "Profile") {
      onPageChange?.("profile");
    } else if (label === "Race") {
      onPageChange?.("race");
    } else if (label === "Settings") {
      onPageChange?.("settings");
    } else if (label === "Support Tickets") {
      onPageChange?.("support");
    } else if (sectionId === "packages") {
      onPageChange?.("packages");
      // 탭 매핑
      const tabMapping = {
        "Packages": "Packages",
        "My Package": "My Package",
        "Mining Transaction": "Mining Transaction",
        "My card": "My Card",
      };
      if (tabMapping[label]) {
        onTabChange?.(tabMapping[label]);
      }
    } else if (sectionId === "partner") {
      onPageChange?.("partner");
      // Partner 탭 매핑
      const partnerTabMapping = {
        "Referral": "Referral",
        "Downline": "Downline",
        "Matrix": "Matrix",
        "Commissions": "Commissions",
      };
      if (partnerTabMapping[label]) {
        onPartnerTabChange?.(partnerTabMapping[label]);
      }
    } else if (sectionId === "wallet") {
      onPageChange?.("wallet");
      // Wallet 탭 매핑
      const walletTabMapping = {
        "Balance": "Balance",
        "Staking": "Staking",
        "Swap": "Swap",
        "Transfer": "Transfer",
        "Deposit": "Deposit",
        "Withdraw": "Withdraw",
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
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        />
      )}

      {/* Sidebar */}
      <aside
  className={`
    fixed lg:static inset-y-0 left-0 z-40
    w-64
    bg-gradient-to-b from-[#020617] to-[#020617]
    transform transition-transform duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
    flex flex-col h-screen
  `}
>
     {/* Logo */}
<div className="px-4 pt-4 pb-4">
  <img
    src="/images/logo.svg"
    alt="MIMBONODE"
    className="h-6 w-auto"
  />
</div>

        {/* User Profile / Auth Buttons */}
        <div className="px-4 pb-3 flex-shrink-0">
          {isLoggedIn ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center overflow-hidden">
                  <span className="text-white text-base font-semibold">A</span>
                </div>
                <div>
                  <div className="text-white font-semibold text-xs">ALBECITY</div>
                  <div className="text-slate-500 text-[10px]">M0#828674</div>
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
              onClick={() => handleOpenAuth("login")}
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
              onClick={() => handleOpenAuth("signup")}
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
          <div className="bg-[#151515]
backdrop-blur-lg
border border-white/10
rounded-2xl
p-3
shadow-xl shadow-black/10">
            {menuSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {section.title && section.collapsible ? (
                  <button
                    type="button"
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between px-3 py-2 text-white/30 text-sm transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {section.icon && (
                        <section.icon 
                          size={16} 
                          className={
                            (section.id === "packages" && currentPage === "packages") ||
                            (section.id === "wallet" && currentPage === "wallet") ||
                            (section.id === "partner" && currentPage === "partner")
                            ? "text-cyan-400" 
                            : ""
                          }
                        />
                      )}
                      {!section.icon && section.title === "Packages" && (
                        <Package 
                          size={16} 
                          className={currentPage === "packages" ? "text-cyan-400" : ""}
                        />
                      )}
                      <span className={
                        (section.id === "packages" && currentPage === "packages") ||
                        (section.id === "wallet" && currentPage === "wallet") ||
                        (section.id === "partner" && currentPage === "partner")
                        ? "text-cyan-400 font-semibold" 
                        : ""
                      }>{section.title}</span>
                    </div>
                    {/* 모바일에서만 chevron 표시 */}
                    {isMobile && (
                      expandedSections[section.id] ? (
                        <ChevronUp size={16} className="text-cyan-400" />
                      ) : (
                        <ChevronDown size={16} className="text-white/30" />
                      )
                    )}
                  </button>
                ) : section.title ? (
                  <div className="flex items-center gap-2 px-3 py-2 text-white/30 text-sm">
                    {section.icon && <section.icon size={16} />}
                    {!section.icon && section.title === "Packages" && <Package size={16} />}
                    <span>{section.title}</span>
                  </div>
                ) : null}
                {/* PC에서는 항상 열림, 모바일에서는 expandedSections에 따라 열림 */}
                {(!section.collapsible || !isMobile || expandedSections[section.id]) &&
                  section.items.map((item, itemIndex) => {
                    // 탭 매핑 (nav 메뉴 label과 PackagesPage 탭 이름 매핑)
                    const tabMapping = {
                      "Packages": "Packages",
                      "My Package": "My Package",
                      "Mining Transaction": "Mining Transaction",
                      "My card": "My Card",
                    };
                    
                    // Partner 탭 매핑
                    const partnerTabMapping = {
                      "Referral": "Referral",
                      "Downline": "Downline",
                      "Matrix": "Matrix",
                      "Commissions": "Commissions",
                    };

                    // Wallet 탭 매핑
                    const walletTabMapping = {
                      "Balance": "Balance",
                      "Staking": "Staking",
                      "Swap": "Swap",
                      "Transfer": "Transfer",
                      "Deposit": "Deposit",
                      "Withdraw": "Withdraw",
                    };
                    
                    const isActive = 
                      (item.label === "Profile" && currentPage === "profile") ||
                      (item.label === "Race" && currentPage === "race") ||
                      (item.label === "Settings" && currentPage === "settings") ||
                      (item.label === "Support Tickets" && currentPage === "support") ||
                      (section.id === "packages" && currentPage === "packages" && currentTab === tabMapping[item.label]) ||
                      (section.id === "partner" && currentPage === "partner" && partnerTab === partnerTabMapping[item.label]) ||
                      (section.id === "wallet" && currentPage === "wallet" && walletTab === walletTabMapping[item.label]);
                    
                    return (
                      <button
                        key={itemIndex}
                        type="button"
                        onClick={() => handleMenuClick(item.label, section.id)}
                        className={`
                          w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                          transition-colors duration-200
                          ${
                            isActive
  ? "bg-white/10 shadow-inner"
  : "hover:bg-white/5"
                          }
                          ${!item.icon && section.title ? "pl-8" : ""}
                        `}
                      >
                        {item.icon && (
                          <item.icon 
                            size={16} 
                            className={isActive ? "text-cyan-400" : "text-white/30"}
                          />
                        )}
                        <span className={isActive ? "text-cyan-400" : "text-white/30"}>
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
              </div>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
}

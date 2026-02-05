import { Package, Wallet, Flag, Users, Settings } from "lucide-react";

export default function BottomNavigation({ currentPage, onPageChange, isAuthModalOpen = false }) {
  const navItems = [
    { icon: Package, label: "Packages", page: "packages" },
    { icon: Wallet, label: "Wallet", page: "wallet" },
    { icon: Flag, label: "Race", page: "race", center: true },
    { icon: Users, label: "Partner", page: "partner" },
    { icon: Settings, label: "Settings", page: "settings" },
  ];

  if (isAuthModalOpen) {
    return null;
  }

  return (
    <div className="lg:hidden fixed bottom-4 left-0 right-0 z-40 flex justify-center">
      <nav className="flex items-center gap-6 px-6 py-3 bg-[#0b0f14] border border-white/10 rounded-full shadow-xl">
        {navItems.map((item) => {
          const isActive = currentPage === item.page;

          if (item.center) {
            return (
              <button
                key={item.page}
                onClick={() => onPageChange(item.page)}
                className="relative -mt-14"
              >
                <div
                  className="
                    w-20 h-20 rounded-full
                    flex items-center justify-center
                    bg-blue-600 shadow-lg shadow-blue-500/40
                    transition-transform active:scale-95
                  "
                >
                  <img
                    src="/images/NavButton.svg"
                    alt={item.label}
                    className="w-12 h-12 object-contain"
                  />
                </div>
        
              </button>
            );
          }

          return (
            <button
              key={item.page}
              onClick={() => onPageChange(item.page)}
              className="flex flex-col items-center gap-1 transition-colors"
            >
              <item.icon
                size={20}
                className={isActive ? "text-white" : "text-white/50"}
              />
              <span
                className={`text-[11px] ${
                  isActive ? "text-white" : "text-white/50"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
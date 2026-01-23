import { Package, Wallet, Flag, Users, Settings } from "lucide-react";

export default function BottomNavigation({ currentPage, onPageChange }) {
  const navItems = [
    { icon: Package, label: "Packages", page: "packages" },
    { icon: Wallet, label: "Wallet", page: "wallet" },
    { icon: Flag, label: "Race", page: "race", center: true },
    { icon: Users, label: "Partner", page: "partner" },
    { icon: Settings, label: "Settings", page: "settings" },
  ];

  return (
    <div className="lg:hidden fixed bottom-4 left-0 right-0 z-50 flex justify-center">
      <nav className="flex items-center gap-6 px-6 py-3 bg-[#0b0f14] border border-slate-800 rounded-full shadow-xl">
        {navItems.map((item) => {
          const isActive = currentPage === item.page;

          if (item.center) {
            return (
              <button
                key={item.page}
                onClick={() => onPageChange(item.page)}
                className="relative -mt-8"
              >
                <div
                  className={`
                    w-14 h-14 rounded-full flex items-center justify-center
                    bg-blue-600 shadow-lg shadow-blue-500/40
                    transition-transform active:scale-95
                  `}
                >
                  <item.icon size={22} className="text-white" />
                </div>
                <p className="mt-1 text-[11px] text-center text-white">
                  {item.label}
                </p>
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
                className={isActive ? "text-white" : "text-slate-500"}
              />
              <span
                className={`text-[11px] ${
                  isActive ? "text-white" : "text-slate-500"
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
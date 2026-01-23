import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import PackagesPage from "@/components/PackagesPage";
import PartnerPage from "@/components/PartnerPage";
import WalletPage from "@/components/WalletPage";
import ProfilePage from "@/components/ProfilePage";
import SettingsPage from "@/components/SettingsPage";
import SupportTicketsPage from "@/components/SupportTicketsPage";
import BottomNavigation from "@/components/BottomNavigation";

function App() {
  const [currentPage, setCurrentPage] = useState("race");
  const [currentTab, setCurrentTab] = useState("Packages");
  const [partnerTab, setPartnerTab] = useState("Referral");
  const [walletTab, setWalletTab] = useState("Balance");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <Sidebar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        partnerTab={partnerTab}
        onPartnerTabChange={setPartnerTab}
        walletTab={walletTab}
        onWalletTabChange={setWalletTab}
        isOpen={sidebarOpen}
        onToggle={setSidebarOpen}
      />
      <div className="flex-1 pb-20 lg:pb-0">
        {currentPage === "race" && <Dashboard onMenuClick={() => setSidebarOpen(true)} />}
        {currentPage === "packages" && <PackagesPage activeTab={currentTab} onTabChange={setCurrentTab} onMenuClick={() => setSidebarOpen(true)} />}
        {currentPage === "partner" && <PartnerPage activeTab={partnerTab} onTabChange={setPartnerTab} onMenuClick={() => setSidebarOpen(true)} />}
        {currentPage === "wallet" && <WalletPage activeTab={walletTab} onTabChange={setWalletTab} onMenuClick={() => setSidebarOpen(true)} />}
        {currentPage === "profile" && <ProfilePage onMenuClick={() => setSidebarOpen(true)} />}
        {currentPage === "settings" && <SettingsPage onMenuClick={() => setSidebarOpen(true)} />}
        {currentPage === "support" && <SupportTicketsPage onMenuClick={() => setSidebarOpen(true)} />}
      </div>
      <BottomNavigation currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
}

export default App;

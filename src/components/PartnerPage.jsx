import { useState } from "react";
import { ArrowRight, Star, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Download, Search, Plus, Minus, Maximize2 } from "lucide-react";
import ReferralCard from "./ReferralCard";
import MatrixContent from "./MatrixContent";
import CommissionsContent from "./CommissionsContent";
import PageHeader from "./PageHeader";

const tabs = ["Referral", "Downline", "Matrix", "Commissions"];

const referrals = [
  {
    id: 1,
    username: "kang0622",
    level: 0,
    oderId: "Q4AvRz7rqpofj43lpod...",
    email: "test@gmail.com",
    feeding: "Inactive",
    referralCode: "481036",
    systemInvest: "0",
  },
  {
    id: 2,
    username: "kang0622",
    level: 0,
    oderId: "Q4AvRz7rqpofj43lpod...",
    email: "test@gmail.com",
    feeding: "Inactive",
    referralCode: "481036",
    systemInvest: "0",
  },
  {
    id: 3,
    username: "kang0622",
    level: 0,
    oderId: "Q4AvRz7rqpofj43lpod...",
    email: "test@gmail.com",
    feeding: "Inactive",
    referralCode: "481036",
    systemInvest: "0",
  },
  {
    id: 4,
    username: "kang0622",
    level: 0,
    oderId: "Q4AvRz7rqpofj43lpod...",
    email: "test@gmail.com",
    feeding: "Inactive",
    referralCode: "481036",
    systemInvest: "0",
  },
];

const downlines = [
  {
    id: 1,
    username: "kang0622",
    level: 0,
    oderId: "Q4AvRz7rqpofj43lpod...",
    email: "test@gmail.com",
    feeding: "Inactive",
    referralCode: "481036",
    systemInvest: "0",
  },
  {
    id: 2,
    username: "kang0622",
    level: 0,
    oderId: "Q4AvRz7rqpofj43lpod...",
    email: "test@gmail.com",
    feeding: "Inactive",
    referralCode: "481036",
    systemInvest: "0",
  },
  {
    id: 3,
    username: "kang0622",
    level: 0,
    oderId: "Q4AvRz7rqpofj43lpod...",
    email: "test@gmail.com",
    feeding: "Inactive",
    referralCode: "481036",
    systemInvest: "0",
  },
  {
    id: 4,
    username: "kang0622",
    level: 0,
    oderId: "Q4AvRz7rqpofj43lpod...",
    email: "test@gmail.com",
    feeding: "Inactive",
    referralCode: "481036",
    systemInvest: "0",
  },
];

export default function PartnerPage({ activeTab = "Referral", onTabChange, onMenuClick }) {
  const handleTabChange = (tab) => {
    onTabChange?.(tab);
  };

  return (
    <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <PageHeader title="Partner" onMenuClick={onMenuClick} />

        {/* Balance Card */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 mb-6">
          <div className="mb-5">
            <div className="text-slate-400 text-sm mb-1">Total Balance</div>
            <div className="text-white text-4xl lg:text-5xl font-bold">
              $123.456
            </div>
            <div className="text-slate-500 text-xs mt-2">
              Current Rate : 1 MGG = 0.0024 USDT
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors flex-1">
              Harvest
              <ArrowRight size={18} />
            </button>
            <button className="flex items-center justify-center gap-2 bg-slate-700/80 hover:bg-slate-600 text-white px-8 py-3 rounded-full font-medium transition-colors flex-1">
              Package
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800/50 text-slate-400 hover:text-white"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === "Referral" && (
          <>
            <h3 className="text-white text-lg font-semibold mb-4">Referral</h3>
            <div className="space-y-4">
              {referrals.map((ref) => (
                <ReferralCard
                  key={ref.id}
                  username={ref.username}
                  level={ref.level}
                  id={ref.oderId}
                  email={ref.email}
                  feeding={ref.feeding}
                  referralCode={ref.referralCode}
                  systemInvest={ref.systemInvest}
                />
              ))}
            </div>
          </>
        )}

        {activeTab === "Downline" && (
          <>
            <h3 className="text-white text-lg font-semibold mb-4">Downline</h3>
            <div className="space-y-4">
              {downlines.map((ref) => (
                <ReferralCard
                  key={ref.id}
                  username={ref.username}
                  level={ref.level}
                  id={ref.oderId}
                  email={ref.email}
                  feeding={ref.feeding}
                  referralCode={ref.referralCode}
                  systemInvest={ref.systemInvest}
                />
              ))}
            </div>
          </>
        )}

        {activeTab === "Matrix" && (
          <MatrixContent />
        )}

        {activeTab === "Commissions" && (
          <CommissionsContent />
        )}
      </div>
    </main>
  );
}

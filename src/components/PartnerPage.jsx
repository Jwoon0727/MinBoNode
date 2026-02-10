import { useState } from 'react';
import {
  ArrowRight,
  Star,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  Search,
  Plus,
  Minus,
  Maximize2,
} from 'lucide-react';
import ReferralCard from './ReferralCard';
import MatrixContent from './MatrixContent';
import CommissionsContent from './CommissionsContent';
import PageHeader from './PageHeader';

const tabs = ['Referral', 'Downline', 'Matrix', 'Commissions'];

const referrals = [
  {
    id: 1,
    username: 'kang0622',
    level: 0,
    oderId: 'Q4AvRz7rqpofj43lpod...',
    email: 'test@gmail.com',
    feeding: 'Inactive',
    referralCode: '481036',
    systemInvest: '0',
  },
  {
    id: 2,
    username: 'kang0622',
    level: 0,
    oderId: 'Q4AvRz7rqpofj43lpod...',
    email: 'test@gmail.com',
    feeding: 'Inactive',
    referralCode: '481036',
    systemInvest: '0',
  },
  {
    id: 3,
    username: 'kang0622',
    level: 0,
    oderId: 'Q4AvRz7rqpofj43lpod...',
    email: 'test@gmail.com',
    feeding: 'Inactive',
    referralCode: '481036',
    systemInvest: '0',
  },
  {
    id: 4,
    username: 'kang0622',
    level: 0,
    oderId: 'Q4AvRz7rqpofj43lpod...',
    email: 'test@gmail.com',
    feeding: 'Inactive',
    referralCode: '481036',
    systemInvest: '0',
  },
];

const downlines = [
  {
    id: 1,
    username: 'kang0622',
    level: 0,
    oderId: 'Q4AvRz7rqpofj43lpod...',
    email: 'test@gmail.com',
    feeding: 'Inactive',
    referralCode: '481036',
    systemInvest: '0',
  },
  {
    id: 2,
    username: 'kang0622',
    level: 0,
    oderId: 'Q4AvRz7rqpofj43lpod...',
    email: 'test@gmail.com',
    feeding: 'Inactive',
    referralCode: '481036',
    systemInvest: '0',
  },
  {
    id: 3,
    username: 'kang0622',
    level: 0,
    oderId: 'Q4AvRz7rqpofj43lpod...',
    email: 'test@gmail.com',
    feeding: 'Inactive',
    referralCode: '481036',
    systemInvest: '0',
  },
  {
    id: 4,
    username: 'kang0622',
    level: 0,
    oderId: 'Q4AvRz7rqpofj43lpod...',
    email: 'test@gmail.com',
    feeding: 'Inactive',
    referralCode: '481036',
    systemInvest: '0',
  },
];

export default function PartnerPage({ activeTab = 'Referral', onTabChange, onMenuClick }) {
  const handleTabChange = (tab) => {
    onTabChange?.(tab);
  };

  return (
    <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        {/* Page Header */}
        <PageHeader title="Partner" onMenuClick={onMenuClick} />

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

        <div className="mb-6 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent -mx-4 px-4 lg:mx-0 lg:px-0">
          {/* Tabs Container */}
          <div
            className="
    inline-flex lg:flex items-center
    w-full lg:w-[90%] mx-auto
    bg-white/10
    backdrop-blur-xl

    border-l border-t border-r
    border-white/10

    rounded-2xl
    p-[2px]
    shadow-[0_8px_30px_rgba(0,0,0,0.35)]
  "
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`
          flex-1 min-w-0
          h-7 sm:h-8
          px-2 sm:px-4
          rounded-xl
          text-[10px] sm:text-sm
          font-extralight
          transition-all
          whitespace-nowrap
          overflow-hidden text-ellipsis
          ${
            activeTab === tab
              ? 'bg-[#2623A9] text-white shadow-sm border-l border-t border-r border-white/15 mb-0.5'
              : 'text-white/50 hover:text-white'
          }
        `}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'Referral' && (
          <>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Referral</h3>

            {/* PARENT CONTAINER */}
            <div
              className="
        bg-[#24282D]
        border 
        rounded-2xl
        p-2
      "
            >
              <div className="space-y-3 sm:space-y-4">
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
            </div>
          </>
        )}

        {activeTab === 'Downline' && (
          <>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">Downline</h3>
            <div
              className="
        bg-[#24282D]
        border 
        rounded-2xl
        p-2
      "
            >
              <div className="space-y-3 sm:space-y-4">
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
            </div>
          </>
        )}

        {activeTab === 'Matrix' && <MatrixContent />}

        {activeTab === 'Commissions' && <CommissionsContent />}
      </div>
    </main>
  );
}

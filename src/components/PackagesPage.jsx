import { useState } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import PackageCard from './PackageCard';
import MyPackageCard from './MyPackageCard';
import MiningTransactionCard from './MiningTransactionCard';
import MyCardContent from './MyCardContent';
import BuyCardContent from './BuyCardContent';
import CardRegistrationContent from './CardRegistrationContent';
import PageHeader from './PageHeader';

const miningTransactions = [
  {
    id: 1,
    name: 'Supreme Node',
    amount: '9,510.3285',
    time: '2025. 10. 14. 14:15',
    code: 'CCKx2rZpIRdYmAQcWdgIXh',
    wallet: 'MGG',
  },
  {
    id: 2,
    name: 'Supreme Node',
    amount: '9,510.3285',
    time: '2025. 10. 14. 14:15',
    code: 'CCKx2rZpIRdYmAQcWdgIXh',
    wallet: 'MGG',
  },
  {
    id: 3,
    name: 'Supreme Node',
    amount: '9,510.3285',
    time: '2025. 10. 14. 14:15',
    code: 'CCKx2rZpIRdYmAQcWdgIXh',
    wallet: 'MGG',
  },
];

const tabs = ['Packages', 'My Package', 'Mining Transaction', 'My Card'];

const myPackages = [
  {
    id: 1,
    name: 'Supreme Node',
    price: '$20,000',
    miningPower: '0.2755',
    time: '2025. 10. 14. 14:15',
    code: 'CCKx2rZpIRdYmAQcWdgIYh',
    received: '9510.3285172',
  },
  {
    id: 2,
    name: 'Supreme Node',
    price: '$20,000',
    miningPower: '0.2755',
    time: '2025. 10. 14. 14:15',
    code: 'CCKx2rZpIRdYmAQcWdgIYh',
    received: '9510.3285172',
  },
  {
    id: 3,
    name: 'Supreme Node',
    price: '$20,000',
    miningPower: '0.2755',
    time: '2025. 10. 14. 14:15',
    code: 'CCKx2rZpIRdYmAQcWdgIYh',
    received: '9510.3285172',
  },
  {
    id: 4,
    name: 'Supreme Node',
    price: '$20,000',
    miningPower: '0.2755',
    time: '2025. 10. 14. 14:15',
    code: 'CCKx2rZpIRdYmAQcWdgIYh',
    received: '9510.3285172',
  },
];

const packages = [
  {
    id: 1,
    name: 'Event Node',
    image: '/images/Ecar.png',
    daily: '198.72',
    maxOut: '150,000',
    miningPower: '0.0023',
    price: '260',
    stars: 1,
  },
  {
    id: 2,
    name: 'Starter Node ',
    image: '/images/Scar.png',
    daily: '198.72',
    maxOut: '150,000',
    miningPower: '0.0023',
    price: '260',
    stars: 2,
  },
  {
    id: 3,
    name: 'Advance Node',
    image: '/images/car3.png',
    daily: '198.72',
    maxOut: '150,000',
    miningPower: '0.0023',
    price: '260',
    stars: 3,
  },
  {
    id: 4,
    name: 'Premium Node',
    image: '/images/car4.png',
    daily: '198.72',
    maxOut: '150,000',
    miningPower: '0.0023',
    price: '260',
    stars: 4,
  },
  {
    id: 5,
    name: 'Elite Node',
    image: '/images/Elcar.png',
    daily: '198.72',
    maxOut: '150,000',
    miningPower: '0.0023',
    price: '260',
    stars: 5,
  },
  {
    id: 6,
    name: 'Supreme Node',
    image: '/images/car6.png',
    daily: '198.72',
    maxOut: '150,000',
    miningPower: '0.0023',
    price: '260',
    stars: 6,
  },
];

export default function PackagesPage({ activeTab = 'Packages', onTabChange, onMenuClick }) {
  const [currentTab, setCurrentTab] = useState(activeTab);
  const [showBuyCard, setShowBuyCard] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setShowBuyCard(false);
    setShowRegistration(false);
    onTabChange?.(tab);
  };

  const handleBuyCard = () => {
    setShowBuyCard(true);
    setShowRegistration(false);
  };

  const handleRegister = () => {
    setShowRegistration(true);
    setShowBuyCard(false);
  };

  const handleBackFromBuyCard = () => {
    setShowBuyCard(false);
  };

  const handleBackFromRegistration = () => {
    setShowRegistration(false);
  };

  return (
    <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        {/* Page Header */}
        <PageHeader title="Packages" onMenuClick={onMenuClick} />

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

        <div className="mb-4 sm:mb-6 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent -mx-4 px-4 lg:mx-0 lg:px-0">
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
        {activeTab === 'Packages' && (
          <>
            <h3 className="text-white text-base sm:text-lg font-normal mb-3 sm:mb-4">Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {packages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  name={pkg.name}
                  image={pkg.image}
                  daily={pkg.daily}
                  maxOut={pkg.maxOut}
                  miningPower={pkg.miningPower}
                  price={pkg.price}
                  stars={pkg.stars}
                />
              ))}
            </div>
          </>
        )}

        {activeTab === 'My Package' && (
          <>
            {/* My Package Section */}
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              My Package
            </h3>
            <div
              className="
  bg-[#2A2F35]
  rounded-2xl
  p-2 sm:p-2
  mb-4 sm:mb-6
"
            >
              <div className="space-y-4">
                {myPackages.map((pkg) => (
                  <MyPackageCard
                    key={pkg.id}
                    name={pkg.name}
                    price={pkg.price}
                    miningPower={pkg.miningPower}
                    time={pkg.time}
                    code={pkg.code}
                    received={pkg.received}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'Mining Transaction' && (
          <>
            {/* Mining Transaction Section */}
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Mining Transaction
            </h3>
            <div
              className="
    bg-[#2A2F35]
    border
    rounded-2xl
    p-2 sm:p-2
    mb-4 sm:mb-6
  "
            >
              <div className="space-y-4">
                {miningTransactions.map((tx) => (
                  <MiningTransactionCard
                    key={tx.id}
                    name={tx.name}
                    amount={tx.amount}
                    time={tx.time}
                    code={tx.code}
                    wallet={tx.wallet}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'My Card' && !showBuyCard && !showRegistration && (
          <MyCardContent onBuyCard={handleBuyCard} onRegister={handleRegister} />
        )}

        {activeTab === 'My Card' && showBuyCard && (
          <BuyCardContent onBack={handleBackFromBuyCard} />
        )}

        {activeTab === 'My Card' && showRegistration && (
          <CardRegistrationContent onBack={handleBackFromRegistration} />
        )}
      </div>
    </main>
  );
}

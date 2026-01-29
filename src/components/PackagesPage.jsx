import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import PackageCard from "./PackageCard";
import MyPackageCard from "./MyPackageCard";
import MiningTransactionCard from "./MiningTransactionCard";
import MyCardContent from "./MyCardContent";
import BuyCardContent from "./BuyCardContent";
import CardRegistrationContent from "./CardRegistrationContent";
import PageHeader from "./PageHeader";

const miningTransactions = [
  {
    id: 1,
    name: "Supreme Node",
    amount: "9,510.3285",
    time: "2025. 10. 14. 14:15",
    code: "CCKx2rZpIRdYmAQcWdgIXh",
    wallet: "MGG",
  },
  {
    id: 2,
    name: "Supreme Node",
    amount: "9,510.3285",
    time: "2025. 10. 14. 14:15",
    code: "CCKx2rZpIRdYmAQcWdgIXh",
    wallet: "MGG",
  },
  {
    id: 3,
    name: "Supreme Node",
    amount: "9,510.3285",
    time: "2025. 10. 14. 14:15",
    code: "CCKx2rZpIRdYmAQcWdgIXh",
    wallet: "MGG",
  },
];

const tabs = ["Packages", "My Package", "Mining Transaction", "My Card"];

const myPackages = [
  {
    id: 1,
    name: "Supreme Node",
    price: "$20,000",
    miningPower: "0.2755",
    time: "2025. 10. 14. 14:15",
    code: "CCKx2rZpIRdYmAQcWdgIYh",
    received: "9510.3285172",
  },
  {
    id: 2,
    name: "Supreme Node",
    price: "$20,000",
    miningPower: "0.2755",
    time: "2025. 10. 14. 14:15",
    code: "CCKx2rZpIRdYmAQcWdgIYh",
    received: "9510.3285172",
  },
  {
    id: 3,
    name: "Supreme Node",
    price: "$20,000",
    miningPower: "0.2755",
    time: "2025. 10. 14. 14:15",
    code: "CCKx2rZpIRdYmAQcWdgIYh",
    received: "9510.3285172",
  },
  {
    id: 4,
    name: "Supreme Node",
    price: "$20,000",
    miningPower: "0.2755",
    time: "2025. 10. 14. 14:15",
    code: "CCKx2rZpIRdYmAQcWdgIYh",
    received: "9510.3285172",
  },
];

const packages = [
  {
    id: 1,
    name: "Starter Node",
    image: "/images/car-yellow.jpg",
    daily: "198.72",
    maxOut: "150,000",
    miningPower: "0.0023",
    price: "260",
  },
  {
    id: 2,
    name: "Event Node",
    image: "/images/car-white.jpg",
    daily: "198.72",
    maxOut: "150,000",
    miningPower: "0.0023",
    price: "260",
  },
  {
    id: 3,
    name: "Advance Node",
    image: "/images/car-orange.jpg",
    daily: "198.72",
    maxOut: "150,000",
    miningPower: "0.0023",
    price: "260",
  },
  {
    id: 4,
    name: "Premium Node",
    image: "/images/car-red.jpg",
    daily: "198.72",
    maxOut: "150,000",
    miningPower: "0.0023",
    price: "260",
  },
];

export default function PackagesPage({ activeTab = "Packages", onTabChange, onMenuClick }) {
  const [currentTab, setCurrentTab] = useState(activeTab);
  const [showBuyCard, setShowBuyCard] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setShowBuyCard(false); // Reset buy card view when switching tabs
    setShowRegistration(false); // Reset registration view when switching tabs
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
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <PageHeader title="Packages" onMenuClick={onMenuClick} />

{/* Crypto Fellas Card Banner */}
<div className="bg-gradient-to-br from-black via-slate-950 to-blue-900 border border-slate-700/50 rounded-2xl p-4 sm:p-6 mb-6">

  {/* Top Row : Text + Image */}
  <div className="flex items-center justify-between gap-4 mb-4">

    {/* Text */}
    <div className="flex-1">
      <h2 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold tracking-wide mb-1">
        CRYPTO
      </h2>
      <h2 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold tracking-wide mb-2">
        FELLAS CARD
      </h2>

      <p className="text-white/50 text-xs sm:text-sm">
        Get the Best Card for Your Collection!
      </p>
    </div>

    {/* Image (PC & Mobile 공통 옆 배치) */}
    <div className="flex-shrink-0">
      <div className="w-28 sm:w-36 lg:w-48 h-20 sm:h-24 lg:h-32 relative">
        <img
          src="/images/crypto-card.jpg"
          alt="Crypto Fellas Card"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>

  {/* Action Buttons */}
  <div className="flex gap-2 sm:gap-3">
    <button
      className="
        flex-1 flex items-center justify-center gap-2
        bg-transparent border border-white/10
        text-white/80
        px-4 sm:px-6 py-2
        rounded-full
        text-sm sm:text-base
        hover:bg-slate-700
        transition-colors
      "
    >
      <ExternalLink size={16} />
      Visit Fellas Card
    </button>

    <button
      className="
        flex-1 flex items-center justify-center
        bg-blue-600 hover:bg-blue-700
        text-white
        px-4 sm:px-6 py-2
        rounded-full
        font-medium
        text-sm sm:text-base
        transition-colors
      "
    >
      Buy Now
    </button>
  </div>

</div>

<div className="mb-6 overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent -mx-4 px-4 lg:mx-0 lg:px-0">
  {/* Tabs Container */}
  <div
    className="
      inline-flex lg:flex items-center
      w-full lg:w-[90%] mx-auto
      bg-white/5
      backdrop-blur-xl
      border border-white/10
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
          h-8 sm:h-9
          px-2 sm:px-4
          rounded-xl
          text-[10px] sm:text-sm
          font-medium
          transition-all
          whitespace-nowrap
          overflow-hidden text-ellipsis
          ${
            activeTab === tab
              ? "bg-[#2623A9] text-white shadow-sm"
              : "text-white/50 hover:text-white"
          }
        `}
      >
        {tab}
      </button>
    ))}
  </div>
</div>

        {/* Tab Content */}
        {activeTab === "Packages" && (
          <>
            <h3 className="text-white text-lg font-semibold mb-4">Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {packages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  name={pkg.name}
                  image={pkg.image}
                  daily={pkg.daily}
                  maxOut={pkg.maxOut}
                  miningPower={pkg.miningPower}
                  price={pkg.price}
                />
              ))}
            </div>
          </>
        )}

        {activeTab === "My Package" && (
          <>
{/* My Package Section */}
<h3 className="text-white text-lg font-semibold mb-4">
    My Package
  </h3>
<div className="
  bg-[#2A2F35]
  rounded-2xl
  p-2 sm:p-2
  mb-6
">
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

        {activeTab === "Mining Transaction" && (
          <>
{/* Mining Transaction Section */}
<h3 className="text-white text-lg font-semibold mb-4">
    Mining Transaction
  </h3>
<div
  className="
    bg-[#2A2F35]
    border
    rounded-2xl
    p-2 sm:p-2
    mb-6
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

        {activeTab === "My Card" && !showBuyCard && !showRegistration && (
          <MyCardContent onBuyCard={handleBuyCard} onRegister={handleRegister} />
        )}

        {activeTab === "My Card" && showBuyCard && (
          <BuyCardContent onBack={handleBackFromBuyCard} />
        )}

        {activeTab === "My Card" && showRegistration && (
          <CardRegistrationContent onBack={handleBackFromRegistration} />
        )}
      </div>
    </main>
  );
}

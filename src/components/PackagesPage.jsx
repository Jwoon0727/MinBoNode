import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import PackageCard from "./PackageCard";
import MyPackageCard from "./MyPackageCard";
import MiningTransactionCard from "./MiningTransactionCard";
import MyCardContent from "./MyCardContent";
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
    stars: 2,
    daily: "198.72",
    maxOut: "150,000",
    miningPower: "0.0023",
    price: "260",
  },
  {
    id: 2,
    name: "Event Node",
    image: "/images/car-white.jpg",
    stars: 2,
    daily: "198.72",
    maxOut: "150,000",
    miningPower: "0.0023",
    price: "260",
  },
  {
    id: 3,
    name: "Advance Node",
    image: "/images/car-orange.jpg",
    stars: 3,
    daily: "198.72",
    maxOut: "150,000",
    miningPower: "0.0023",
    price: "260",
  },
  {
    id: 4,
    name: "Premium Node",
    image: "/images/car-red.jpg",
    stars: 4,
    daily: "198.72",
    maxOut: "150,000",
    miningPower: "0.0023",
    price: "260",
  },
];

export default function PackagesPage({ activeTab = "Packages", onTabChange, onMenuClick }) {
  const [currentTab, setCurrentTab] = useState(activeTab);
  
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    onTabChange?.(tab);
  };

  return (
    <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <PageHeader title="Packages" onMenuClick={onMenuClick} />

        {/* Crypto Fellas Card Banner */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-white text-3xl lg:text-4xl font-bold mb-1">
                <span className="text-blue-400">CRYPTO</span>
              </h2>
              <h2 className="text-white text-3xl lg:text-4xl font-bold mb-3">
                FELLAS CARD
              </h2>
              <p className="text-slate-400 text-sm mb-4">
                Get the Best Card for Your Collection!
              </p>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 bg-transparent border border-slate-500 text-white px-4 py-2 rounded-full text-sm hover:bg-slate-700 transition-colors">
                  <ExternalLink size={14} />
                  Visit Fellas Card
                </button>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="w-48 h-32 relative">
              <img
                src="/images/crypto-card.jpg"
                alt="Crypto Fellas Card"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-transparent border border-slate-600 text-slate-400 hover:text-white hover:border-slate-500"
              }`}
            >
              {tab}
            </button>
          ))}
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
                  stars={pkg.stars}
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
            <h3 className="text-white text-lg font-semibold mb-4">My Package</h3>
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
          </>
        )}

        {activeTab === "Mining Transaction" && (
          <>
            <h3 className="text-white text-lg font-semibold mb-4">Mining Transaction</h3>
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
          </>
        )}

        {activeTab === "My Card" && (
          <MyCardContent />
        )}
      </div>
    </main>
  );
}

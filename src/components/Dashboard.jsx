import { ArrowDown, ArrowRight } from 'lucide-react';
import NodeCard from './NodeCard';
import PageHeader from './PageHeader';

const nodes = [
  {
    id: 1,
    nodeNumber: '02',
    progress: 80.5,
    current: '9,510.32',
    total: '28,650,000',
    rate: '0.2755',
    startDate: '2025. 10. 14',
    status: 'mining',
  },
  {
    id: 2,
    nodeNumber: '02',
    progress: 80.5,
    current: '9,510.32',
    total: '28,650,000',
    rate: '0.2755',
    startDate: '2025. 10. 14',
    status: 'mining',
  },
  {
    id: 3,
    nodeNumber: '02',
    progress: 65.3,
    current: '7,210.45',
    total: '28,650,000',
    rate: '0.2755',
    startDate: '2025. 10. 14',
    status: 'mining',
  },
  {
    id: 4,
    nodeNumber: '02',
    progress: 45.2,
    current: '5,120.80',
    total: '28,650,000',
    rate: '0.2755',
    startDate: '2025. 10. 14',
    status: 'mining',
  },
];

export default function Dashboard({ onMenuClick }) {
  return (
    <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        {/* Page Header */}
        <PageHeader title="Race" onMenuClick={onMenuClick} />

        {/* Balance Card */}
        <div className="bg-gradient-to-br from-black via-slate-950 to-blue-900 border border-slate-700/50 rounded-2xl p-4 sm:p-6 mb-6">
          {/* Balance */}
          <div className="mt-2 sm:mt-4 mb-4 sm:mb-5">
            <div className="text-white font-extralight text-xs sm:text-sm lg:text-lg mb-1">
              Total Balance
            </div>
            <div className="text-white text-3xl sm:text-4xl lg:text-6xl font-medium">$123.456</div>
            <div className="text-white/50 text-xs font-extralight lg:text-xl mt-3">
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
              Harvest →
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
              Package ↓
            </button>
          </div>
        </div>

        {/* Racing Track Image Card */}
        <div className="relative overflow-hidden mb-2 -mx-4 lg:mx-0 ">
          <img
            src="/images/race_img.png"
            alt="Racing Track"
            className="
    w-full
  h-56
  sm:h-72
  md:h-80
    lg:h-[380px]
    object-cover
  "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Max Out Status */}
        <div className="py-4 sm:py-8">
          {/* Checkered Flags Icon */}
          <div className="flex justify-center mb-1">
            <img
              src="/images/race_flag.svg"
              alt="Upload"
              className="w-20 sm:w-30 lg:w-40 h-auto opacity-70"
            />
          </div>

          <h2 className="text-white text-lg sm:text-3xl font-medium text-center mb-6 tracking-wider">
            MAX OUT STATUS
          </h2>

          {/* Progress Bar */}
          <div className="mb-2">
            <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                style={{ width: '40.50%' }}
              />
            </div>
          </div>

          {/* Progress Stats */}
          <div className="flex justify-between items-center mb-6 text-xs">
            <span className="text-slate-400 font-extralight">9,510.32 / 28,650,000</span>
            <span className="text-white font-light">40.50%</span>
          </div>

          {/* Stats Grid */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-white text-sm">INTEREST</span>
              <span className="text-white font-normal">3,285,378.4273</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white text-sm">MATCHING BONUS</span>
              <span className="text-white font-normal">689,181.5104</span>
            </div>
            <div className="border-t border-slate-700 pt-3 flex justify-between items-center">
              <span className="text-cyan-400 font-normal">TOTAL</span>
              <div className="text-right">
                <span className="text-cyan-400 text-3xl font-normal">3,965,378.</span>
                <span className="text-cyan-400 text-lg">4971</span>
              </div>
            </div>
          </div>

          {/* Harvest Button */}
          <button
            className="
    w-full
    bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800
    border border-white/20
    hover:from-blue-500 hover:via-blue-700 hover:to-blue-900
    text-white
    py-3 sm:py-4
    rounded-full
    font-medium
    text-sm sm:text-base
    transition-all tracking-wide
  "
          >
            HARVEST
          </button>
        </div>

        {/* Node List */}
        <div className="mb-8">
          <h2 className="text-white text-xl font-bold mb-4">NODE LIST</h2>
          <div className="space-y-4">
            {nodes.map((node) => (
              <NodeCard key={node.id} node={node} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

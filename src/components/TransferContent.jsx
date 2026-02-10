import { useState, useEffect } from 'react';
import { ChevronDown, Send, X } from 'lucide-react';

const transferHistory = [
  { id: 1, from: 'ablecity', to: 'blue1234', date: '2025. 10. 14. 14:20', rate: '38,999.00' },
  { id: 2, from: 'ablecity', to: 'blue1234', date: '2025. 10. 14. 14:20', rate: '38,999.00' },
  { id: 3, from: 'ablecity', to: 'blue1234', date: '2025. 10. 14. 14:20', rate: '38,999.00' },
  { id: 4, from: 'ablecity', to: 'blue1234', date: '2025. 10. 14. 14:20', rate: '38,999.00' },
];

export default function TransferContent() {
  const [selectedToken] = useState('MGG (9,505.32)');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [showEmailModal, setShowEmailModal] = useState(false);

  // Show modal when component mounts
  useEffect(() => {
    setShowEmailModal(true);
  }, []);

  return (
    <>
      <h3 className="text-white text-lg font-semibold mb-4">Transfer</h3>

      {/* Transfer Form */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-6 shadow-lg shadow-black/20">
        {/* Select Token */}
        <div className="mb-4">
          <label className="text-white/50 text-sm mb-2 block">Select Token</label>
          <button className="w-full bg-black/20 border-l border-t border-r border-white/15 rounded-lg px-4 py-3 flex items-center justify-between text-white">
            <span>{selectedToken}</span>
            <ChevronDown size={18} className="text-white/50" />
          </button>
        </div>

        {/* Recipient */}
        <div className="mb-4">
          <label className="text-white/50 text-sm mb-2 block">Recipient</label>
          <input
            type="text"
            placeholder="Search by username or email"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="w-full bg-black/20 border-l border-t border-r border-white/15  rounded-lg px-4 py-3 text-white/50 placeholder-white/50 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label className="text-white/50 text-sm mb-2 block">Amount</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-black/20 border-l border-t border-r border-white/15 rounded-lg px-4 py-3 text-white/50 placeholder-white/50 focus:outline-none focus:border-blue-500 pr-16"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 text-sm">
              MGG
            </span>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-black/20  border-l border-t border-r border-white/15 rounded-xl p-4 shadow-lg shadow-black/20">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-slate-400 text-sm">Request Amount</span>
              <span className="text-white/50 text-sm">0 MGG</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-cyan-400 text-sm">Fee (1%)</span>
              <span className="text-cyan-400 text-sm">0 MGG</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-white/10">
              <span className="text-white text-sm font-medium">Actual Withdrawal Amount</span>
              <span className="text-white text-sm font-medium">0 MGG</span>
            </div>
          </div>
        </div>

        {/* Min Transfer Note */}
        <div className="text-right mt-2">
          <span className="text-white/50 font-extralight text-xs">Min Transfer: 3,055.00 MGG</span>
        </div>
      </div>

      {/* Captcha */}
      <div className="flex justify-center mb-4">
        <div className="bg-[#151515] border border-white/10 px-8 py-3 flex justify-between items-center  max-w-md">
          {/* 체크 아이콘 + 텍스트 */}
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 border-2 border-white/10 flex items-center justify-center bg-white">
              <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-white/50 text-sm">성공!</span>
          </div>

          {/* 이미지 오른쪽 */}
          <img
            src="https://www.cloudflare.com/img/logo-cloudflare-dark.svg"
            alt="Cloudflare"
            className="h-8"
          />
        </div>
      </div>

      {/* Transfer History Container */}
      <h3 className="text-white text-lg font-semibold mb-4">Transfer History</h3>

      <div className="bg-[#24282D] border rounded-2xl p-2">
        <div className="space-y-3">
          {transferHistory.map((tx) => (
            <div
              key={tx.id}
              className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-black/20  rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-white/50 text-xs">From</span>
                  <div className="text-white font-medium">{tx.from}</div>
                  <div className="text-white/50 text-xs">{tx.date}</div>
                </div>

                <span className="text-white/70">→</span>

                <div className="text-right">
                  <span className="text-white/50 text-xs">To</span>
                  <div className="text-cyan-400 font-medium">{tx.to}</div>
                  <div className="text-white/80 text-sm">Rate: {tx.rate}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Email Confirmation Modal */}
      {showEmailModal && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setShowEmailModal(false)}
        >
          <div
            className="relative bg-[#1F2123] rounded-2xl p-8 w-full max-w-md border border-white/10 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowEmailModal(false)}
              className="absolute top-4 right-4 w-5 h-5 flex items-center justify-center rounded-full border border-white/30 text-white/60 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all"
            >
              <X size={14} />
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center">
                <Send size={22} className="text-white" />
              </div>
            </div>

            {/* Message */}
            <p className="text-white text-sm mb-8 leading-relaxed">
              A confirmation email has been sent to your registered address.
              <br />
              Please check your inbox.
            </p>

            {/* OK Button */}
            <button
              onClick={() => setShowEmailModal(false)}
              className="w-full
    border border-white/15
    bg-gradient-to-br from-blue-600 to-blue-700
    hover:from-blue-700 hover:to-blue-800
    text-white
    py-2.5 sm:py-3
    rounded-full
    font-semibold
    text-sm sm:text-base
    transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}

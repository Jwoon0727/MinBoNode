import { useState } from 'react';
import { Camera, Copy, Check, X } from 'lucide-react';
import PageHeader from './PageHeader';

const userInfo = [
  { label: 'My Referral Code', value: '828674' },
  { label: 'Username', value: 'ablecity' },
  { label: 'Email', value: 'bluewrath20@gmail.com' },
  { label: 'Full Name', value: 'bluewrath0' },
  { label: 'Feeding', value: 'Active', isActive: true },
  { label: 'Level', value: '0' },
  { label: 'Invited Friends', value: '0' },
];

const statsRow1 = [
  { label: 'MAX OUT RECEIVE', value: '9,510.32 MGG' },
  { label: 'TOTAL MAX OUT', value: '28,650,000.00 MGG' },
  { label: 'SYSTEM INVEST', value: '$0.00' },
];

const statsRow2 = [
  { label: 'YOUR MGG', value: '9,505.32 MGG' },
  { label: 'YOUR USDT', value: '1.00 USDT' },
  { label: 'TOKEN PRICE', value: '$0.0027' },
];

const statsRow3 = [
  { label: 'INTEREST', value: '9,510.32 MGG' },
  { label: 'DIRECT BONUS', value: '$0.00' },
  { label: 'MATCHING BONUS', value: '0.00 MGG' },
];

export default function ProfilePage({ onMenuClick }) {
  const [copiedField, setCopiedField] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    yourId: '4984961',
    id: 'test',
    email: 'test@gmail.com',
    fullName: '',
  });
  const [passwordFormData, setPasswordFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleEditInputChange = (field, value) => {
    setEditFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUpdate = () => {
    // TODO: Implement profile update
    console.log('Updating profile with data:', editFormData);
    setShowEditModal(false);
  };

  const handleCancel = () => {
    setShowEditModal(false);
  };

  const handlePasswordInputChange = (field, value) => {
    setPasswordFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePasswordUpdate = () => {
    // TODO: Implement password change
    console.log('Changing password with data:', passwordFormData);
    setShowChangePasswordModal(false);
    // Reset form
    setPasswordFormData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  const handlePasswordCancel = () => {
    setShowChangePasswordModal(false);
    // Reset form
    setPasswordFormData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  return (
    <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        {/* Page Header */}
        <PageHeader title="Profile" onMenuClick={onMenuClick} />

        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-4">
            <div className="w-24 h-24 bg-[#304D9C] rounded-full flex items-center justify-center overflow-hidden ">
              <img
                src="/images/userface.svg"
                alt="Profile Avatar"
                className="w-20 h-20 object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-7 h-7 bg-slate-800 rounded-full flex items-center justify-center border-2 border-slate-900 overflow-hidden">
              <img src="/images/M1.png" alt="class" className="w-3.5 h-3.5 object-contain" />
            </div>
          </div>
          <button
            onClick={() => setShowEditModal(true)}
            className="w-full max-w-xs border-l border-t border-r border-white/20 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-medium transition-colors mb-3"
          >
            Edit Profile
          </button>
          <button
            onClick={() => setShowChangePasswordModal(true)}
            className="
              w-full max-w-xs
              bg-gradient-to-b from-slate-700 to-black
              border-l border-t border-r border-white/20
              hover:from-slate-500 hover:to-black
              text-white
              py-3
              rounded-full
              font-normal
              transition-all
            "
          >
            Change Password
          </button>
        </div>

        {/* User Info Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20  rounded-xl p-4 mb-6 shadow-lg shadow-black/20">
          <div className="space-y-1">
            {userInfo.map((item, index) => (
              <div key={index} className="flex justify-between items-center text-sm">
                <span className="text-slate-400">{item.label}</span>
                <span className={item.isActive ? 'text-cyan-400' : 'text-white'}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Total Reward */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-white font-semibold">Total Reward</h3>
            <span className="text-white font-semibold">30.50%</span>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full h-3 rounded-full overflow-hidden border-t border-r border-white/20">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              style={{ width: '30.50%' }}
            />
          </div>
        </div>

        {/* Stats Grid - All Rows Combined */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {[...statsRow1, ...statsRow2, ...statsRow3].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center shadow-lg shadow-black/20"
            >
              <div className="text-white/80 text-xs mb-2">{stat.label}</div>
              <div className="text-white font-semibold text-sm">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Invite Friends */}
        <div className="mb-8">
          <h3 className="text-white font-semibold mb-4">Invite Friends</h3>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 space-y-4 shadow-lg shadow-black/20">
            {/* Referral Code */}
            <div>
              <label className="text-white text-sm mb-2 block">Referral Code</label>
              <div
                className="flex items-center justify-between
  bg-black/20
  border-t border-l border-r border-white/20
  rounded-lg
  px-4 py-3"
              >
                <span className="text-white">828674</span>
                <button
                  onClick={() => handleCopy('828674', 'referral')}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  {copiedField === 'referral' ? (
                    <Check size={18} className="text-green-400" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Invite Link */}
            <div>
              <label className="text-white text-sm mb-2 block">Invite Link</label>
              <div
                className="flex items-center justify-between
  bg-black/20
  border-t border-l border-r border-white/20
  rounded-lg
  px-4 py-3"
              >
                <span className="text-white text-sm truncate mr-2">https://preview.mimbon...</span>
                <button
                  onClick={() => handleCopy('https://preview.mimbonode.com/ref/828674', 'link')}
                  className="text-white/50 hover:text-white transition-colors flex-shrink-0"
                >
                  {copiedField === 'link' ? (
                    <Check size={18} className="text-green-400" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={handleCancel}
        >
          <div
            className="bg-[#1F2123] rounded-2xl p-6 w-full max-w-md border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl font-semibold">Edit Profile</h2>
              <button
                onClick={handleCancel}
                className="    w-5 h-5
      flex items-center justify-center
      rounded-full
      border border-white/30
      text-white/60
      hover:text-white
      hover:border-white/50
      hover:bg-white/10
      transition-all"
              >
                <X size={14} />
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Your ID */}
              <div>
                <label className="block text-white text-sm mb-2">Your ID</label>
                <input
                  type="text"
                  value={editFormData.yourId}
                  onChange={(e) => handleEditInputChange('yourId', e.target.value)}
                  className="  w-full
  bg-[#353638]
  border-t border-l border-r
  border-white/20
  rounded-lg
  px-4 py-3
  text-white
  focus:outline-none
  focus:border-blue-500
  transition-colors"
                />
              </div>

              {/* ID */}
              <div>
                <label className="block text-white text-sm mb-2">ID</label>
                <input
                  type="text"
                  value={editFormData.id}
                  onChange={(e) => handleEditInputChange('id', e.target.value)}
                  className="  w-full
  bg-[#353638]
  border-t border-l border-r
  border-white/20
  rounded-lg
  px-4 py-3
  text-white
  focus:outline-none
  focus:border-blue-500
  transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={editFormData.email}
                  onChange={(e) => handleEditInputChange('email', e.target.value)}
                  className="  w-full
  bg-[#353638]
  border-t border-l border-r
  border-white/20
  rounded-lg
  px-4 py-3
  text-white
  focus:outline-none
  focus:border-blue-500
  transition-colors"
                />
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-white text-sm mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={editFormData.fullName}
                  onChange={(e) => handleEditInputChange('fullName', e.target.value)}
                  className="  w-full
  bg-[#353638]
  border-t border-l border-r
  border-white/20
  rounded-lg
  px-4 py-3
  text-white
  placeholder-white/40
  focus:outline-none
  focus:border-blue-500
  transition-colors"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleCancel}
                className="bg-white/10 flex-1 flex items-center justify-center gap-2
      py-3 rounded-full font-medium transition-colors
      border-t border-l border-r border-white/30 border-b-0"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="flex-1
    border border-white/25
    bg-gradient-to-br from-blue-600 to-blue-700
    hover:from-blue-700 hover:to-blue-800
    text-white
    py-2.5 sm:py-3
    rounded-full
    font-semibold
    text-sm sm:text-base
    transition-colors"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Change Password Modal */}
      {showChangePasswordModal && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={handlePasswordCancel}
        >
          <div
            className="bg-[#1F2123] rounded-2xl p-6 w-full max-w-md border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-xl font-semibold">Change Password</h2>
              <button
                onClick={handlePasswordCancel}
                className="    w-5 h-5
      flex items-center justify-center
      rounded-full
      border border-white/30
      text-white/60
      hover:text-white
      hover:border-white/50
      hover:bg-white/10
      transition-all"
              >
                <X size={14} />
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Current Password */}
              <div>
                <label className="block text-white text-sm mb-2">Current Password</label>
                <input
                  type="password"
                  placeholder="4984961"
                  value={passwordFormData.currentPassword}
                  onChange={(e) => handlePasswordInputChange('currentPassword', e.target.value)}
                  className="w-full bg-[#353638] border-t border-l border-r
  border-white/20
  rounded-lg
  px-4 py-3
  text-white
  placeholder-white/40
  focus:outline-none
  focus:border-blue-500
  transition-colors"
                />
              </div>

              {/* New Password */}
              <div>
                <label className="block text-white text-sm mb-2">New Password</label>
                <input
                  type="password"
                  placeholder="test"
                  value={passwordFormData.newPassword}
                  onChange={(e) => handlePasswordInputChange('newPassword', e.target.value)}
                  className="w-full bg-[#353638] border-t border-l border-r
  border-white/20
  rounded-lg
  px-4 py-3
  text-white
  placeholder-white/40
  focus:outline-none
  focus:border-blue-500
  transition-colors"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-white text-sm mb-2">Confirm Password</label>
                <input
                  type="password"
                  placeholder="test@gmail.com"
                  value={passwordFormData.confirmPassword}
                  onChange={(e) => handlePasswordInputChange('confirmPassword', e.target.value)}
                  className="w-full bg-[#353638] border-t border-l border-r
  border-white/20
  rounded-lg
  px-4 py-3
  text-white
  placeholder-white/40
  focus:outline-none
  focus:border-blue-500
  transition-colors"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={handlePasswordCancel}
                className="bg-white/10 flex-1 flex items-center justify-center gap-2
      py-3 rounded-full font-medium transition-colors
      border-t border-l border-r border-white/30 border-b-0"
              >
                Cancel
              </button>
              <button
                onClick={handlePasswordUpdate}
                className="bg-blue-600 flex-1 py-3 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full font-normal transition-colors"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

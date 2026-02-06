import { useState } from "react";
import { Mail, PlusCircle, X, Upload } from "lucide-react";
import PageHeader from "./PageHeader";

const tickets = [
  {
    id: 1,
    ticketId: "Tickets ID",
    supportTickets: "text",
    status: "text",
    createdAt: "text",
    responseAt: "text",
  },
  {
    id: 2,
    ticketId: "Tickets ID",
    supportTickets: "text",
    status: "text",
    createdAt: "text",
    responseAt: "text",
  },
  {
    id: 3,
    ticketId: "Tickets ID",
    supportTickets: "text",
    status: "text",
    createdAt: "text",
    responseAt: "text",
  },
  {
    id: 4,
    ticketId: "Tickets ID",
    supportTickets: "text",
    status: "text",
    createdAt: "text",
    responseAt: "text",
  },
];

export default function SupportTicketsPage({ onMenuClick }) {
  const [showChangeEmailModal, setShowChangeEmailModal] = useState(false);
  const [showAddTicketModal, setShowAddTicketModal] = useState(false);
  const [emailFormData, setEmailFormData] = useState({
    newEmail: "",
    content: "",
  });
  const [ticketFormData, setTicketFormData] = useState({
    title: "",
    confirmEmail: "",
    images: [],
  });

  const handleEmailInputChange = (field, value) => {
    setEmailFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleConfirm = () => {
    // TODO: Implement email change request
    console.log("Requesting email change with data:", emailFormData);
    setShowChangeEmailModal(false);
    // Reset form
    setEmailFormData({
      newEmail: "",
      content: "",
    });
  };

  const handleCancel = () => {
    setShowChangeEmailModal(false);
    // Reset form
    setEmailFormData({
      newEmail: "",
      content: "",
    });
  };

  const handleTicketInputChange = (field, value) => {
    setTicketFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setTicketFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const handleTicketSubmit = () => {
    // TODO: Implement ticket submission
    console.log("Submitting ticket with data:", ticketFormData);
    setShowAddTicketModal(false);
    // Reset form
    setTicketFormData({
      title: "",
      confirmEmail: "",
      images: [],
    });
  };

  const handleTicketCancel = () => {
    setShowAddTicketModal(false);
    // Reset form
    setTicketFormData({
      title: "",
      confirmEmail: "",
      images: [],
    });
  };

  return (
    <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        {/* Page Header */}
        <PageHeader title="Support Tickets" onMenuClick={onMenuClick} />
<br/>
<br/>
     {/* Action Buttons */}
<div className="flex gap-4 mb-4">
  <button 
    onClick={() => setShowChangeEmailModal(true)}
    className="
      flex items-center justify-center gap-2
      bg-white/10 border-l border-t border-r border-white/15
      hover:bg-white/20 text-white
      px-5 py-2.5
      rounded-lg
      transition-colors
      text-xs
    "
  >
    <Mail size={16} />
    <span>Request Change Email</span>
  </button>

  <button 
    onClick={() => setShowAddTicketModal(true)}
    className="
      flex items-center justify-center gap-2
      bg-white/10 border-l border-t border-r border-white/15
      hover:bg-white/20 text-white
      px-5 py-2.5
      rounded-lg
      transition-colors
      text-xs
    "
  >
    <PlusCircle size={16} />
    <span>Add Ticket</span>
  </button>
</div>

        {/* Tickets List */}
        <div className="bg-[#2A2F35] border rounded-2xl p-2 sm:p-2">
  
  {/* Tickets List */}
  <div className="space-y-2">
    {tickets.map((ticket) => (
      <div
        key={ticket.id}
        className="bg-white/10 border border-white/10 rounded-lg p-4"
      >
        {/* Ticket Header */}
        <div className="flex items-center gap-3 mb-3">
          {/* Vertical Bar */}
          <div className="w-[3px] h-6 bg-cyan-400 rounded-full" />

          <h3 className="text-cyan-400 font-semibold">
            {ticket.ticketId}
          </h3>
        </div>

        {/* Ticket Details */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-white/50 text-sm">Support Tickets</span>
            <span className="text-white text-sm">
              {ticket.supportTickets}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-white/50 text-sm">Status</span>
            <span className="text-white text-sm">
              {ticket.status}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-white/50 text-sm">Created At</span>
            <span className="text-white text-sm">
              {ticket.createdAt}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-white/50 text-sm">Response At</span>
            <span className="text-white text-sm">
              {ticket.responseAt}
            </span>
          </div>
          </div>    
          </div>
        ))}
      </div>
    </div>
  </div>

      {/* Request Change Email Modal */}
      {showChangeEmailModal && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={handleCancel}
        >
          <div 
            className="bg-[#1F2123] rounded-2xl p-6 w-full max-w-md border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-white text-xl font-semibold">Request Change Email</h2>
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

            {/* Subtitle */}
            <p className="text-white/50 text-sm mb-6">Enter new email address</p>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* New Email Address */}
              <div>
                <label className="block text-white text-sm mb-2">New Email Address</label>
                <input
                  type="email"
                  placeholder="Enter Title"
                  value={emailFormData.newEmail}
                  onChange={(e) => handleEmailInputChange("newEmail", e.target.value)}
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

              {/* Content */}
              <div>
                <label className="block text-white text-sm mb-2">Content</label>
                <input
                  type="email"
                  placeholder="Enter Content"
                  value={emailFormData.newEmail}
                  onChange={(e) => handleEmailInputChange("newEmail", e.target.value)}
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
                onClick={handleCancel}
                className="bg-white/10 flex-1 flex items-center justify-center gap-2
      py-3 rounded-full font-medium transition-colors
      border-t border-l border-r border-white/30 border-b-0"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="bg-blue-600 flex-1 py-3 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full font-normal transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Ticket Modal */}
      {showAddTicketModal && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={handleTicketCancel}
        >
          <div 
            className="bg-[#1F2123] rounded-2xl p-6 w-full max-w-md border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
{/* Modal Header */}
<div className="flex items-center justify-between mb-6">
  <h2 className="text-white text-xl font-semibold">Add Ticket</h2>

  <button
  onClick={handleTicketCancel}
  className="
    w-5 h-5
    flex items-center justify-center
    rounded-full
    text-white/60
    hover:text-white
    hover:border-white/50
    hover:bg-white/10
    transition-all
  "
>
  <X size={14} />
</button>
</div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-white text-sm mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  value={ticketFormData.title}
                  onChange={(e) => handleTicketInputChange("title", e.target.value)}
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

              {/* Confirm Email */}
              <div>
                <label className="block text-white text-sm mb-2">Confirm Email</label>
                <input
                  type="email"
                  placeholder="Re-enter Email"
                  value={ticketFormData.confirmEmail}
                  onChange={(e) => handleTicketInputChange("confirmEmail", e.target.value)}
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

              {/* Attach Images */}
              <div>
                <label className="block text-white text-sm mb-2">Attach Images</label>
                <div 
                  className="relative rounded-t-lg p-8 text-center overflow-hidden"
                  style={{
                    borderTop: '2px dashed rgba(255, 255, 255, 1)',
                    borderBottom: '2px solid rgba(255, 255, 255, 0.46)'
                  }}
                >
                  {/* Left gradient border */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-[2px]"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.2))',
                      backgroundSize: '2px 10px',
                      backgroundRepeat: 'repeat-y',
                      maskImage: 'repeating-linear-gradient(to bottom, black 0px, black 5px, transparent 5px, transparent 10px)',
                      WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0px, black 5px, transparent 5px, transparent 10px)'
                    }}
                  />
                  {/* Right gradient border */}
                  <div 
                    className="absolute right-0 top-0 bottom-0 w-[2px]"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.2))',
                      backgroundSize: '2px 10px',
                      backgroundRepeat: 'repeat-y',
                      maskImage: 'repeating-linear-gradient(to bottom, black 0px, black 5px, transparent 5px, transparent 10px)',
                      WebkitMaskImage: 'repeating-linear-gradient(to bottom, black 0px, black 5px, transparent 5px, transparent 10px)'
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  
                  <div className="flex flex-col items-center gap-3">
                    <Upload size={20} className="text-white" />
                    <div className="text-white/50 text-sm">
                      Support.dragAndDrop
                    </div>
                    <div className="text-white/70 text-xs">
                      Support.imageLimit
                    </div>
                    <label
                      htmlFor="file-upload"
                      className="bg-[#4F66D7] hover:bg-blue-700 text-white px-6 py-2 rounded-sm font-medium transition-colors cursor-pointer"
                    >
                      Support.browseFiles
                    </label>
                  </div>

                  {/* Display selected images */}
                  {ticketFormData.images.length > 0 && (
                    <div className="mt-4 text-left">
                      <div className="text-gray-400 text-xs mb-2">
                        Selected files: {ticketFormData.images.length}
                      </div>
                      <div className="space-y-1">
                        {ticketFormData.images.map((file, index) => (
                          <div key={index} className="text-gray-500 text-xs truncate">
                            {file.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleTicketCancel}
                className="bg-white/10 flex-1 flex items-center justify-center gap-2
      py-3 rounded-full font-medium transition-colors
      border-t border-l border-r border-white/30 border-b-0"
              >
                Cancel
              </button>
              <button
                onClick={handleTicketSubmit}
                className="bg-blue-600 flex-1 py-3 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full font-normal transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
</main>
);
}

import { Mail, PlusCircle } from "lucide-react";
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
  return (
    <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <PageHeader title="Support Tickets" onMenuClick={onMenuClick} />
<br/>
<br/>
     {/* Action Buttons */}
<div className="flex gap-4 mb-4">
  <button className="
    flex items-center justify-center gap-2
    bg-white/10 border border-white/10
    hover:bg-white/20 text-white/70
    px-5 py-2.5
    rounded-lg
    transition-colors
    text-xs
  ">
    <Mail size={16} />
    <span>Request Change Email</span>
  </button>

  <button className="
    flex items-center justify-center gap-2
    bg-white/10 border border-white/10
    hover:bg-white/20 text-white/70
    px-5 py-2.5
    rounded-lg
    transition-colors
    text-xs
  ">
    <PlusCircle size={16} />
    <span>Add Ticket</span>
  </button>
</div>

        {/* Tickets List */}
        <div className="bg-[#2A2F35] border rounded-2xl p-2 sm:p-2">
  
  {/* Tickets List */}
  <div className="space-y-4">
    {tickets.map((ticket) => (
      <div
        key={ticket.id}
        className="bg-[#24282D] border border-white/10 rounded-lg p-4"
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
        <div className="space-y-2">
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
</main>
);
}

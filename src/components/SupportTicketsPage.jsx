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

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <button className="flex-1 flex items-center justify-center gap-2 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white py-3 rounded-lg transition-colors">
            <Mail size={18} />
            <span>Request Change Email</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white py-3 rounded-lg transition-colors">
            <PlusCircle size={18} />
            <span>Add Ticket</span>
          </button>
        </div>

        {/* Tickets List */}
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-slate-800/50 border border-slate-700 border-l-4 border-l-orange-500 rounded-lg p-4"
            >
              {/* Ticket Header */}
              <h3 className="text-cyan-400 font-semibold mb-3">{ticket.ticketId}</h3>

              {/* Ticket Details */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Support Tickets</span>
                  <span className="text-white text-sm">{ticket.supportTickets}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Status</span>
                  <span className="text-white text-sm">{ticket.status}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Created At</span>
                  <span className="text-white text-sm">{ticket.createdAt}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Response At</span>
                  <span className="text-white text-sm">{ticket.responseAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

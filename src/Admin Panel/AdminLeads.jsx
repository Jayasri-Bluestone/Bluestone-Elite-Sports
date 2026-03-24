import React from 'react';
import { Mail, Phone, Calendar, Download, Trash2, UserCheck } from 'lucide-react';

export const ApprovedLeads = ({ leads, refreshData }) => {
  
  // Export to CSV logic
  const downloadCSV = () => {
    const headers = "Name,Email,Phone,Program,Date\n";
    const data = leads.map(l => 
      `${l.full_name},${l.email},${l.phone},${l.program},${new Date(l.created_at).toLocaleDateString()}`
    ).join("\n");
    
    const blob = new Blob([headers + data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Approved_Leads_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this lead from the database?")) {
      await fetch(`http://localhost:8013/api/admin/enquiries/${id}`, { method: 'DELETE' });
      refreshData();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">
          Total Qualified: <span className="text-gray-900">{leads.length}</span>
        </p>
        <button 
          onClick={downloadCSV}
          className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl font-bold text-xs hover:bg-orange-600 transition-all"
        >
          <Download size={16} /> Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {leads.map((lead) => (
          <div key={lead.id} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-start justify-between group">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
                <UserCheck size={24} />
              </div>
              <div>
                <h4 className="font-black text-gray-900 uppercase italic">{lead.full_name}</h4>
                <p className="text-orange-600 text-[10px] font-black uppercase mb-3">{lead.program}</p>
                <div className="space-y-1 text-xs text-gray-500 font-medium">
                  <div className="flex items-center gap-2"><Mail size={12}/> {lead.email}</div>
                  <div className="flex items-center gap-2"><Phone size={12}/> {lead.phone}</div>
                </div>
              </div>
            </div>
            <button onClick={() => handleDelete(lead.id)} className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all">
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
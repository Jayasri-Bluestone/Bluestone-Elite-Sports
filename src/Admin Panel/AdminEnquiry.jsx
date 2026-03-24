import React, { useState } from 'react';
import { Mail, Phone, Calendar, CheckCircle, Trash2, Eye, UserCheck, X } from 'lucide-react';

export const EnquiryList = ({ enquiries, refreshData }) => {
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  // Function to Move to Leads (Approve)
  const moveToLeads = async (id) => {
    if (window.confirm("Move this enquiry to Approved Leads?")) {
      try {
        const res = await fetch(`http://localhost:8013/api/admin/enquiries/approve/${id}`, { method: 'PUT' });
        if (res.ok) refreshData();
      } catch (err) { console.error("Error moving lead:", err); }
    }
  };

  // Function to Delete
  const deleteEnquiry = async (id) => {
    if (window.confirm("Are you sure you want to permanently delete this enquiry?")) {
      try {
        const res = await fetch(`http://localhost:8013/api/admin/enquiries/${id}`, { method: 'DELETE' });
        if (res.ok) refreshData();
      } catch (err) { console.error("Error deleting enquiry:", err); }
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-950 text-white">
            <tr className="text-[10px] uppercase tracking-[0.2em] font-black">
              <th className="p-6">Date</th>
              <th className="p-6">Applicant</th>
              <th className="p-6">Program</th>
              <th className="p-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {enquiries.map((enq) => (
              <tr key={enq.id} className="hover:bg-gray-50 transition-colors group">
                <td className="p-6 text-xs font-bold text-gray-400">
                  {new Date(enq.created_at).toLocaleDateString()}
                </td>
                <td className="p-6">
                  <div className="font-black text-gray-900">{enq.full_name}</div>
                  <div className="text-xs text-gray-500">{enq.phone}</div>
                </td>
                <td className="p-6">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-[10px] font-black uppercase">
                    {enq.program}
                  </span>
                </td>
                <td className="p-6 text-right">
                  <div className="flex justify-end gap-2">
                    {/* View Button */}
                    <button 
                      onClick={() => setSelectedEnquiry(enq)}
                      className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>

                    {/* Move to Leads Button */}
                    {enq.status !== 'Approved' && (
                      <button 
                        onClick={() => moveToLeads(enq.id)}
                        className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-xl text-xs font-black uppercase hover:bg-green-600 hover:text-white transition-all"
                      >
                        <UserCheck size={16} /> Move to Leads
                      </button>
                    )}

                    {/* Delete Button */}
                    <button 
                      onClick={() => deleteEnquiry(enq.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                      title="Delete Permanently"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- MODAL FOR VIEWING DETAILS --- */}
      {selectedEnquiry && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] w-full max-w-lg p-8 shadow-2xl relative">
            <button onClick={() => setSelectedEnquiry(null)} className="absolute top-6 right-6 text-gray-400 hover:text-black">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-black italic uppercase mb-6">Enquiry <span className="text-orange-600">Info</span></h2>
            
            <div className="space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <p className="text-[10px] uppercase font-bold text-gray-400">Email</p>
                  <p className="font-bold">{selectedEnquiry.email}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl">
                  <p className="text-[10px] uppercase font-bold text-gray-400">Age</p>
                  <p className="font-bold">{selectedEnquiry.age} Years</p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">Message</p>
                <p className="text-gray-700 italic leading-relaxed">"{selectedEnquiry.message}"</p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button 
                onClick={() => { moveToLeads(selectedEnquiry.id); setSelectedEnquiry(null); }}
                className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-green-700 transition-all"
              >
                Approve & Move
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
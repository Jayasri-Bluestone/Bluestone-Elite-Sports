import React from 'react';
import { LayoutDashboard, Users, CheckCircle, PlusCircle, LogOut, Settings, ChevronRight } from 'lucide-react';

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20}/> },
  { id: 'enquiry', label: 'New Enquiries', icon: <Users size={20}/> },
  { id: 'approved', label: 'Approved Leads', icon: <CheckCircle size={20}/> },
  { id: 'programs', label: 'Manage Programs', icon: <PlusCircle size={20}/> },
];

export default function Sidebar({ activeTab, setActiveTab, onLogout, enquiries = [] }) {
  return (
    <aside className="w-72 bg-gray-950 text-white flex flex-col h-screen sticky top-0 border-r border-white/5">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center font-black italic">B</div>
          <h1 className="text-xl font-black italic tracking-tighter uppercase">Bluestone</h1>
        </div>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">Management Portal</p>
      </div>

      <nav className="flex-grow px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group ${
              activeTab === item.id ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/20' : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            <div className="relative">
              <span className={activeTab === item.id ? 'text-white' : 'text-gray-500 group-hover:text-orange-500'}>
                {item.icon}
              </span>
              {/* Notification Dot: Only if it's the enquiry tab and there are items */}
              {item.id === 'enquiry' && enquiries.length > 0 && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-gray-950 animate-pulse" />
              )}
            </div>
            <span className="font-bold text-sm tracking-wide">{item.label}</span>
            {activeTab === item.id && <ChevronRight size={16} className="ml-auto opacity-50" />}
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-white/5 space-y-4">
        <button onClick={onLogout} className="w-full flex items-center gap-3 bg-red-500/10 text-red-500 hover:bg-red-50 hover:text-white p-4 rounded-2xl transition-all font-bold text-sm">
          <LogOut size={18}/> Logout
        </button>
      </div>
    </aside>
  );
}
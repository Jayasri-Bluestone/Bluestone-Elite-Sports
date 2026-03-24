import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'; // Ensure this path is correct
import { Dashboard } from './Pages/Dashboard';
import { EnquiryList } from './Pages/EnquiryList';
import { ApprovedLeads } from './Pages/ApprovedLeads';
import { ProgramManager } from './Pages/ProgramManager';

export default function AdminPanel({ onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [enquiries, setEnquiries] = useState([]); // Initialized as empty array
  const [leads, setLeads] = useState([]);

  // Unified fetch function
  const fetchAllData = async () => {
    try {
      const [enqRes, leadRes] = await Promise.all([
        fetch('http://localhost:8013/api/admin/enquiries'),
        fetch('http://localhost:8013/api/admin/leads')
      ]);
      
      const enqData = await enqRes.json();
      const leadData = await leadRes.json();

      setEnquiries(Array.isArray(enqData) ? enqData : []);
      setLeads(Array.isArray(leadData) ? leadData : []);
    } catch (err) {
      console.error("Data fetch failed:", err);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard enquiries={enquiries} leads={leads} />;
      case 'enquiry':   return <EnquiryList enquiries={enquiries} refreshData={fetchAllData} />;
      case 'approved':  return <ApprovedLeads leads={leads} refreshData={fetchAllData} />;
      case 'programs':  return <ProgramManager />;
      default:          return <Dashboard enquiries={enquiries} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* PASS enquiries TO SIDEBAR HERE */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onLogout={onLogout} 
        enquiries={enquiries} 
      />
      <main className="flex-grow p-10 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}
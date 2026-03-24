import React, { useState } from 'react';

export const ProgramManager = () => {
  const [newProg, setNewProg] = useState({ name: '', duration: '', price: '', description: '' });

  const addProgram = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8013/api/programs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProg)
    });
    if(res.ok) alert("Program Added Successfully!");
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
        <h3 className="text-xl font-black mb-6 uppercase tracking-tight">Add New Program</h3>
        <form onSubmit={addProgram} className="space-y-4">
          <input className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-orange-500" placeholder="Program Name (e.g. Pro Kabaddi)" onChange={e => setNewProg({...newProg, name: e.target.value})} />
          <div className="flex gap-4">
            <input className="w-1/2 p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-orange-500" placeholder="Duration (e.g. 3 Months)" onChange={e => setNewProg({...newProg, duration: e.target.value})} />
            <input className="w-1/2 p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-orange-500" placeholder="Price (e.g. ₹5000)" onChange={e => setNewProg({...newProg, price: e.target.value})} />
          </div>
          <textarea className="w-full p-4 bg-gray-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-orange-500" rows="4" placeholder="Description" onChange={e => setNewProg({...newProg, description: e.target.value})} />
          <button className="w-full bg-orange-600 text-white p-4 rounded-2xl font-black uppercase tracking-widest hover:bg-gray-900 transition-all">Publish Program</button>
        </form>
      </div>
      
      <div className="bg-gray-900 p-8 rounded-[2rem] text-white">
        <h3 className="text-xl font-black mb-6 uppercase tracking-tight text-orange-500">Preview Mode</h3>
        <div className="border border-white/10 p-6 rounded-3xl">
          <h4 className="text-2xl font-black italic">{newProg.name || "Program Title"}</h4>
          <p className="text-gray-400 mt-2 text-sm">{newProg.description || "Program description will appear here..."}</p>
          <div className="mt-6 flex justify-between items-center">
            <span className="text-orange-500 font-bold">{newProg.duration}</span>
            <span className="text-2xl font-black">{newProg.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
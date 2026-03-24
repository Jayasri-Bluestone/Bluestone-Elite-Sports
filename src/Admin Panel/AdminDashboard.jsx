export const Dashboard = ({ enquiries =[] }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Total leads</p>
        <h3 className="text-4xl font-black mt-2 text-gray-900">{enquiries.length}</h3>
      </div>
      <div className="bg-orange-600 p-6 rounded-3xl shadow-lg text-white">
        <p className="text-orange-200 text-xs font-bold uppercase tracking-widest">Conversion</p>
        <h3 className="text-4xl font-black mt-2">18.5%</h3>
      </div>
      {/* Add more stat cards as needed */}
    </div>
    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 h-64 flex items-center justify-center text-gray-300 italic">
      Chart visualization placeholder (Revenue vs Enquiries)
    </div>
  </div>
);
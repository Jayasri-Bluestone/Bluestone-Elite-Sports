import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, ShieldCheck, Calendar, Activity } from 'lucide-react';

export default function StudentPortal() {
  const schedule = [
    { group: "Junior (U-14)", days: "Mon, Wed, Fri", time: "4:00 PM - 6:00 PM", sport: "Cricket" },
    { group: "Senior (U-19)", days: "Tue, Thu, Sat", time: "5:30 PM - 8:00 PM", sport: "Cricket" },
    { group: "Pro Team", days: "Mon - Sat", time: "5:00 AM - 8:00 AM", sport: "Kabaddi" },
    { group: "Beginners", days: "Sat, Sun", time: "9:00 AM - 11:00 AM", sport: "Multi-Sport" },
  ];

  return (
    <div className="bg-white min-h-screen mb-10">
        
           {/* --- HERO SECTION: Parallax Effect --- */}
           <div className="relative h-[60vh] mb-16 flex items-center justify-center bg-gray-900 overflow-hidden">
             <motion.div 
               initial={{ scale: 1.1, opacity: 0 }}
               animate={{ scale: 1, opacity: 0.3 }}
               transition={{ duration: 1.5 }}
               className="absolute inset-0"
             >
               <img 
                 src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2000" 
                 className="w-full h-full object-cover" 
                 alt="Sports background"
               />
             </motion.div>
             
             <div className="relative z-10 text-center md:px-16 px-4">
               <motion.span 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="text-orange-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
               >
                 Since 2024
               </motion.span>
               <motion.h1 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="text-5xl md:text-7xl font-black text-white mb-6 italic tracking-tighter"
               >
                 STUDENT <span className="text-orange-600">HUB</span>
               </motion.h1>
             </div>
             </div>
           

        <div className="grid grid-cols-1 lg:grid-cols-3 px-4 md:px-16 gap-8">
          
          {/* 1. TRAINING SCHEDULE */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gray-50 rounded-[2.5rem] p-8 sm:p-12 border border-gray-100 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-orange-600 text-white rounded-2xl">
                <Calendar size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Weekly Schedule</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-orange-600 text-xs font-black uppercase tracking-widest border-b border-gray-200">
                    <th className="pb-4">Age Group</th>
                    <th className="pb-4">Days</th>
                    <th className="pb-4">Time</th>
                    <th className="pb-4">Sport</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {schedule.map((item, i) => (
                    <tr key={i} className="group hover:bg-white transition-colors">
                      <td className="py-5 font-bold text-gray-800">{item.group}</td>
                      <td className="py-5 text-gray-500">{item.days}</td>
                      <td className="py-5 text-gray-600 font-medium">{item.time}</td>
                      <td className="py-5">
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-[10px] font-black uppercase">
                          {item.sport}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* 2. ACADEMY CODE & ACTION IMAGE */}
          <div className="space-y-8">
            <div className="bg-gray-950 rounded-[2.5rem] p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <ShieldCheck className="text-orange-500" /> Academy Code
              </h3>
              <ul className="space-y-5 text-sm">
                {[
                  "Punctuality is mandatory. 10 mins early is on time.",
                  "Full academy kit required for every session.",
                  "Zero tolerance for unsportsmanlike conduct.",
                  "Equipment must be cleaned and returned after use."
                ].map((rule, idx) => (
                  <li key={idx} className="flex gap-4 items-start group">
                    <span className="text-orange-500 font-black">0{idx + 1}</span>
                    <span className="text-gray-400 group-hover:text-gray-200 transition-colors">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Side Action Image */}
            <div className="rounded-[2.5rem] overflow-hidden h-64 shadow-lg">
               <img 
                 src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=800" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                 alt="Training focus" 
               />
            </div>
          </div>

          {/* 3. NUTRITION SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white border border-gray-100 rounded-[2.5rem] p-8 sm:p-12 shadow-sm relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
              <div className="lg:w-1/3">
                <div className="bg-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-orange-200">
                  <Utensils size={32} />
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Elite <br/>Nutrition</h2>
                <p className="text-gray-500 leading-relaxed">Champions are made in the kitchen. Follow these guidelines to maintain peak performance levels.</p>
              </div>
              
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {[
                  { label: "Pre-Training", content: "Complex carbs: Oats, Bananas, or Whole grain toast.", icon: <Activity size={16}/> },
                  { label: "Post-Training", content: "High protein: Lean meats, Eggs, Paneer, or Protein shakes.", icon: <Activity size={16}/> },
                  { label: "Daily Hydration", content: "Minimum 4L water + salt/electrolyte balance.", icon: <Activity size={16}/> },
                  { label: "Recovery Sleep", content: "8-9 hours of deep sleep is non-negotiable.", icon: <Activity size={16}/> }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 hover:border-orange-200 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-orange-600">
                      {item.icon}
                      <h4 className="font-black uppercase text-[10px] tracking-widest">{item.label}</h4>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    
  );
}
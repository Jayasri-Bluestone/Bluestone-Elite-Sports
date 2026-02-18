import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, TrendingUp, Quote, CheckCircle2, Trophy, Zap, Users } from 'lucide-react';
import MD from '../assets/MD.jpeg';

// Animation variants for re-use
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* --- HERO SECTION: Parallax Effect --- */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 overflow-hidden">
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
            BEYOND THE <span className="text-orange-600">GAME</span>
          </motion.h1>
        </div>
      </section>

      {/* --- MD SECTION: Clean & Executive --- */}
      <section className="py-24 container mx-auto md:px-16 px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full lg:w-5/12 relative"
          >
            <div className="absolute inset-0 bg-orange-600 rounded-[2rem] rotate-3 scale-105 opacity-10"></div>
            <img 
              src={MD}
              alt="Mr Kumaresan Thangavel"
              className="relative z-10 rounded-[2rem] shadow-2xl border-b-8 border-orange-600"
            />
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl z-20 shadow-2xl border-t-4 border-orange-600 max-w-[280px] hidden md:block"
            >
              <Quote size={24} className="text-orange-600 mb-3" />
              <p className="text-gray-800 font-bold italic leading-tight text-lg">
                "Excellence is not an act, but a habit."
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="w-full lg:w-7/12"
          >
            <motion.h2 variants={fadeInUp} className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-3">Visionary Leadership</motion.h2>
            <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Mr Kumaresan Thangavel</motion.h3>
            <motion.p variants={fadeInUp} className="text-orange-600 font-bold mb-8 text-xl">Managing Director</motion.p>
            
            <motion.div variants={fadeInUp} className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                With over 15 years of experience in professional management and a passion for 
                athletic development, Mr Kumaresan Thangavel founded Bluestone Elite Sports to bridge the gap 
                between raw talent and professional mastery.
              </p>
              <p className="bg-gray-50 p-6 rounded-xl border-l-4 border-orange-500 italic">
                "Our goal isn't just to build better athletes, but to build better leaders. 
                The discipline learned on the field translates to every victory in life."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- NEW CORE VALUES UI: Staggered Cards --- */}
      <section className="bg-gray-900 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-[150px] opacity-10"></div>
        
        <div className="container mx-auto md:px-16 px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-white text-4xl md:text-5xl font-black mb-4 tracking-tight">OUR FOUNDATION</h2>
            <div className="w-24 h-2 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              { Icon: Target, title: "The Mission", desc: "Providing world-class infrastructure and mentorship to aspiring athletes from all backgrounds." },
              { Icon: Award, title: "The Vision", desc: "Setting the global gold standard for multi-sport training by 2030." },
              { Icon: TrendingUp, title: "The Strategy", desc: "Blending data-driven sports science with traditional athletic discipline." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group p-10 rounded-[2.5rem] bg-gray-800/50 border border-gray-700 backdrop-blur-sm hover:bg-gray-800 transition-all duration-300"
              >
                <div className="bg-orange-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-[0_10px_30px_-10px_rgba(234,88,12,0.5)]">
                  <item.Icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     {/* --- UPGRADED "WHY TRAIN" UI --- */}
<section className="py-24 bg-white overflow-hidden">
  <div className="container mx-auto px-6 lg:px-16">
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
      
      {/* Text Content Area */}
      <motion.div 
        initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-5/12 order-2 lg:order-1"
      >
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-orange-50 border border-orange-100">
          <span className="text-orange-600 text-xs font-black uppercase tracking-widest">The Elite Edge</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-10 tracking-tighter leading-[0.9]">
          WHY TRAIN <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">WITH US?</span>
        </h2>

        <div className="grid gap-6">
          {[
            { 
              title: "Expert Coaches", 
              desc: "Certified professionals and former national players dedicated to your growth.",
              icon: <Trophy size={20} /> 
            },
            { 
              title: "Modern Facilities", 
              desc: "International standard equipment and high-performance courts for all ages.",
              icon: <Zap size={20} /> 
            },
            { 
              title: "Holistic Growth", 
              desc: "Beyond the field: focus on mental toughness, discipline, and character.",
              icon: <Users size={20} /> 
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group flex gap-5 p-6 rounded-3xl transition-all duration-300 hover:bg-orange-50/50 border border-transparent hover:border-orange-100"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-white shadow-md rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm sm:text-base">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modern Image Composition Area */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-7/12 order-1 lg:order-2 relative"
      >
        <div className="relative">
          {/* Main Large Image */}
          <div className="relative z-10 w-full sm:w-11/12 ml-auto aspect-[4/5] sm:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200" 
              className="w-full h-full object-cover" 
              alt="Elite Training" 
            />
            {/* Dark overlay for better depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Floating Image Overlay */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-4 sm:left-0 z-20 w-1/2 aspect-square rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl hidden sm:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=800" 
              className="w-full h-full object-cover" 
              alt="Coaching session" 
            />
          </motion.div>

          {/* Accent Element (Orange Box) */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-1/2 -right-12 w-24 h-48 bg-orange-600 rounded-l-full opacity-10 hidden lg:block"></div>
        </div>
        
        {/* Floating Stat Card */}
        <div className="absolute top-10 right-0 z-30 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
          <div className="text-orange-600 font-black text-3xl">100%</div>
          <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">Safety Record</div>
        </div>
      </motion.div>

    </div>
  </div>
</section>
    </div>
  );
}
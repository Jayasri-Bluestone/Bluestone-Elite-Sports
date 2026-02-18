import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X } from 'lucide-react';

const galleryData = [
  { id: 1, category: 'Cricket', title: 'Power Hitting', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200' },
//   { id: 2, category: 'Kabaddi', title: 'Defense Wall', image: 'http://googleusercontent.com/image_collection/image_retrieval/2453936050619512473_0' },
  { id: 3, category: 'Training', title: 'Morning Drills', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200' },
  { id: 4, category: 'Cricket', title: 'Net Practice', image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=800' },
//   { id: 5, category: 'Tennis', title: 'Ace Serve', image: 'https://images.unsplash.com/photo-1595435064214-07963209d067?q=80&w=1200' },
//   { id: 6, category: 'Events', title: 'Award Ceremony', image: 'https://images.unsplash.com/photo-1531058022387-39327354283b?q=80&w=1200' },
//   { id: 7, category: 'Kabaddi', title: 'Raid Action', image: 'http://googleusercontent.com/image_collection/image_retrieval/1069725800608930530_0' },
//   { id: 8, category: 'Training', title: 'Agility Work', image: 'https://images.unsplash.com/photo-1544919396-1033aa639591?q=80&w=800' },
];

const categories = ['All', 'Cricket', 'Kabaddi', 'Training', 'Events'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredItems = filter === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="bg-white min-h-screen pt-20 pb-24">
      {/* Header Section */}
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-4"
        >
          ELITE <span className="text-orange-600">MOMENTS</span>
        </motion.h1>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">
          A visual journey of sweat, discipline, and the pursuit of excellence at Bluestone Elite.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              filter === cat 
                ? 'bg-orange-600 text-white shadow-lg shadow-orange-200 scale-105' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-6">
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group break-inside-avoid rounded-3xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImg(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <p className="text-orange-500 text-xs font-black uppercase tracking-widest mb-1">{item.category}</p>
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <div className="absolute top-6 right-6 p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-orange-500 transition-colors">
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImg.image} 
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-10 text-center">
              <h4 className="text-white text-2xl font-bold">{selectedImg.title}</h4>
              <p className="text-orange-500 font-bold uppercase tracking-widest">{selectedImg.category}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
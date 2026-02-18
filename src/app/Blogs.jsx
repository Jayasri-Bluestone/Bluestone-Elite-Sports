import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, Clock, User } from 'lucide-react';

const posts = [
  {
    id: 1,
    category: "Training",
    title: "Top 5 Dynamic Stretches for Young Cricketers",
    excerpt: "Avoid injuries and increase bowling speed with these essential warm-up routines...",
    author: "Coach Sharma",
    date: "Oct 12, 2024",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800",
    featured: true
  },
  {
    id: 2,
    category: "Mindset",
    title: "How to Balance Board Exams and Pro Training",
    excerpt: "Success on the field shouldn't mean failure in the classroom. Here is our blueprint.",
    author: "Dr. Ananya (Sports Psych)",
    date: "Oct 10, 2024",
    image: "https://images.unsplash.com/photo-1529761430580-006c97be2302?q=80&w=800",
    featured: false
  },
  {
    id: 3,
    category: "Kabaddi",
    title: "Mastering the Toe Touch: A Raider’s Guide",
    excerpt: "The subtle art of the toe touch can be the difference between a point and an out.",
    author: "Pro-Kabaddi Expert",
    date: "Oct 08, 2024",
    image: "http://googleusercontent.com/image_collection/image_retrieval/2453936050619512473_0",
    featured: false
  },
  {
    id: 4,
    category: "Nutrition",
    title: "The Ultimate Recovery Meal: Protein vs Carbs",
    excerpt: "What you eat in the first 45 minutes after training determines your muscle recovery.",
    author: "Dietitian Rahul",
    date: "Oct 05, 2024",
    image: "https://images.unsplash.com/photo-1544919396-1033aa639591?q=80&w=800",
    featured: false
  }
];

export default function Blog() {
  const [activeCat, setActiveCat] = useState('All');
  const categories = ['All', 'Training', 'Mindset', 'Kabaddi', 'Nutrition'];

  const filteredPosts = activeCat === 'All' ? posts : posts.filter(p => p.category === activeCat);

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 leading-none"
            >
              ELITE <span className="text-orange-600">INSIGHTS</span>
            </motion.h1>
            <p className="mt-4 text-gray-500 text-lg border-l-4 border-orange-600 pl-4">
              Expert advice, training tips, and stories from the frontline of Indian sports.
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCat === cat 
                  ? 'bg-gray-900 text-white' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- FEATURED POST --- */}
        {activeCat === 'All' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative w-full h-[500px] rounded-[3rem] overflow-hidden mb-12 cursor-pointer"
          >
            <img 
              src={posts[0].image} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Featured" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3 text-white">
              <span className="bg-orange-600 px-4 py-1 rounded-full text-[10px] font-black uppercase mb-4 inline-block">
                Featured Article
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                {posts[0].title}
              </h2>
              <p className="text-gray-300 text-lg mb-6 line-clamp-2">{posts[0].excerpt}</p>
              <div className="flex items-center gap-6 text-sm font-medium">
                <span className="flex items-center gap-2"><User size={16} className="text-orange-500"/> {posts[0].author}</span>
                <span className="flex items-center gap-2"><Clock size={16} className="text-orange-500"/> {posts[0].date}</span>
              </div>
            </div>
            <div className="absolute top-10 right-10 bg-white p-4 rounded-full text-black transform group-hover:rotate-45 transition-transform">
              <ArrowUpRight size={32} />
            </div>
          </motion.div>
        )}

        {/* --- POST GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(p => activeCat !== 'All' || !p.featured).map((post) => (
            <motion.div 
              layout
              key={post.id}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  alt={post.title} 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black uppercase text-gray-900">
                  {post.category}
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-orange-600 transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{post.author}</span>
                <ArrowUpRight size={18} className="text-gray-300 group-hover:text-orange-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- NEWSLETTER CTA --- */}
        <div className="mt-24 bg-gray-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-4 tracking-tighter">NEVER MISS A TRAINING TIP</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto italic">Join 5,000+ athletes receiving weekly drills and nutritional guides directly in their inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow bg-white/10 border border-white/20 px-6 py-3 rounded-2xl focus:outline-none focus:border-orange-500 transition-colors"
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-black px-8 py-3 rounded-2xl transition-colors uppercase text-sm tracking-widest">
                Subscribe
              </button>
            </div>
          </div>
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
        </div>
      </div>
    </div>
  );
}
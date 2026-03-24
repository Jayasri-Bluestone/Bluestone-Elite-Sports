import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';
import Captcha from '../app/components/Captcha';

export default function AdminLogin({ onLogin }) {
  const [credentials, setCredentials] = useState({ username: '', password: '', captchaInput: '' });
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate Captcha
    if (credentials.captchaInput.toLowerCase() !== generatedCaptcha.toLowerCase()) {
      setError('Invalid CAPTCHA code');
      return;
    }

    setLoading(true);
    
    // Simulating API Auth (Replace with your actual auth logic)
    setTimeout(() => {
      if (credentials.username === 'admin' && credentials.password === 'bluestone2024') {
        onLogin(true);
      } else {
        setError('Invalid Credentials');
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-white font-sans">
      {/* --- LEFT SIDE: BRANDING & IMAGE --- */}
      <div className="hidden lg:flex lg:w-1/2 bg-gray-950 relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200" 
            alt="Sports Training" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent" />
        
        <div className="relative z-10 p-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl font-black italic tracking-tighter leading-none mb-4">
              BLUESTONE <br />
              <span className="text-orange-500">CONTROL</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md font-medium">
              Internal management portal for Bluestone Elite Sports Academy. Authorized access only.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- RIGHT SIDE: LOGIN FORM --- */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md"
        >
          <div className="mb-10">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-4">
              <ShieldCheck size={28} />
            </div>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Admin Login</h2>
            <p className="text-gray-500 mt-2">Enter your credentials to manage the academy.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-bold animate-shake">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Username</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={20} />
                <input 
                  required
                  type="text" 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                  placeholder="admin_username"
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={20} />
                <input 
                  required
                  type="password" 
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all"
                  placeholder="••••••••"
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                />
              </div>
            </div>

            {/* CAPTCHA SECTION */}
            <div className="space-y-3 pt-4 border-t border-gray-100">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Human Verification</label>
              <Captcha onCodeChange={setGeneratedCaptcha} />
              <input 
                required 
                type="text" 
                className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" 
                placeholder="Enter code" 
                onChange={(e) => setCredentials({...credentials, captchaInput: e.target.value})}
              />
            </div>

            <button 
              disabled={loading}
              type="submit"
              className="w-full bg-gray-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-xl shadow-orange-100 disabled:bg-gray-400"
            >
              {loading ? "Verifying..." : <>Login to Portal <ArrowRight size={18} /></>}
            </button>
          </form>

          <footer className="mt-12 text-center">
            <p className="text-xs text-gray-400 font-medium">
              &copy; 2026 Bluestone Elite Sports Academy. <br />
              Secure encrypted connection active.
            </p>
          </footer>
        </motion.div>
      </div>
    </div>
  );
}

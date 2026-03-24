import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw } from 'lucide-react';

export default function Captcha({ onCodeChange }) {
  const [code, setCode] = useState('');

  const generateCode = useCallback(() => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCode(result);
    if (onCodeChange) {
      onCodeChange(result);
    }
  }, [onCodeChange]);

  useEffect(() => {
    generateCode();
  }, []); // Generate once on mount

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg px-6 py-3 select-none relative overflow-hidden group">
        {/* Decorative noise/lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%">
            <line x1="0" y1="20" x2="100%" y2="40" stroke="black" strokeWidth="1" />
            <line x1="20%" y1="0" x2="80%" y2="100%" stroke="black" strokeWidth="1" />
            <line x1="0" y1="80%" x2="100%" y2="10" stroke="black" strokeWidth="1" />
          </svg>
        </div>
        
        <span className="text-2xl font-black italic tracking-[0.4em] text-gray-800 drop-shadow-sm font-mono">
          {code}
        </span>
      </div>
      
      <button
        type="button"
        onClick={generateCode}
        className="p-3 text-orange-600 hover:bg-orange-50 rounded-full transition-all active:rotate-180 duration-500"
        title="Refresh CAPTCHA"
      >
        <RefreshCw size={20} />
      </button>
    </div>
  );
}

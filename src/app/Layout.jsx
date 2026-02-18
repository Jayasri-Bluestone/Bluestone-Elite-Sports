import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Twitter, ChevronDown, Youtube, Linkedin } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { sportsData } from '../data/sports';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Constants for reusability
  const phoneNumber = "+919876543210";
  const emailAddress = "info@bluestoneelitesport.com";
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Bluestone+Elite+Sports+Vettukadu+Erumaipatti+Idappadi";

  useEffect(() => {
    closeMenu();
  }, [location]);



  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const mainSports = sportsData.filter(s => s.category === 'Main');
  const secondarySports = sportsData.filter(s => s.category === 'Secondary');
  const summerSports = sportsData.filter(s => s.category === 'Summer');

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      
      {/* --- TOP BAR (Hidden on Mobile) --- */}
      <div className="bg-orange-700 text-white py-2 px-4 md:px-10 text-xs sm:text-sm hidden sm:flex justify-between items-center z-50 relative">
        <div className="flex space-x-4 md:space-x-6">
          <span className="flex items-center gap-2"><Phone size={14} /> <span className="hidden lg:inline">+91 98765 43210</span></span>
          <span className="flex items-center gap-2"><Mail size={14} /> <span className="hidden lg:inline">info@bluestoneelitesport.com</span></span>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/bluestoneelitesports" target="_blank" className="hover:text-orange-200 transition-colors"><Facebook size={16} /></a>
          <a href="https://www.instagram.com/bluestone_elitesports?igsh=MWZ4NXpqZG80bDdwaw==" target='_blank' className="hover:text-orange-200 transition-colors"><Instagram size={16} /></a>
          <a href="https://www.youtube.com/@bluestoneelitesports" target='_blank' className="hover:text-orange-200 transition-colors"><Youtube size={16} /></a>
         <a href="https://www.linkedin.com/company/bluestone-elite-sports" target='_blank' className="hover:text-orange-200 transition-colors"><Linkedin size={16} /></a>
 </div>
      </div>

      {/* --- NAVBAR --- */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-10 py-3 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl">
              B
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-orange-600 tracking-tight leading-none">BLUESTONE</span>
              <span className="text-[10px] font-semibold text-gray-500 tracking-widest uppercase">Elite Sports</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className={cn("text-sm font-bold uppercase tracking-wide hover:text-orange-600 transition-colors", location.pathname === "/" ? "text-orange-600" : "text-gray-700")}>Home</Link>
            <Link to="/about" className={cn("text-sm font-bold uppercase tracking-wide hover:text-orange-600 transition-colors", location.pathname === "/about" ? "text-orange-600" : "text-gray-700")}>About</Link>

            {/* Sports Dropdown */}
            <div className="group relative">
              <button className={cn("flex items-center gap-1 text-sm font-bold uppercase tracking-wide hover:text-orange-600 transition-colors py-4", location.pathname.includes("/sports") ? "text-orange-600" : "text-gray-700")}>
                Sports <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                <div className="py-2 bg-orange-600 text-[10px] font-black text-white px-4 uppercase tracking-widest">Core Programs</div>
                <div className="py-1">
                  {[...mainSports, ...secondarySports.slice(0, 4)].map(sport => (
                    <Link key={sport.id} to={`/sports/${sport.id}`} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">{sport.title}</Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className={cn("flex items-center gap-1 text-sm font-bold uppercase tracking-wide hover:text-orange-600 transition-colors py-4", location.pathname.includes("/sports") ? "text-orange-600" : "text-gray-700")}>
                Summer Sports <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                <div className="py-2 bg-orange-600 text-[10px] font-black text-white px-4 uppercase tracking-widest">Summer Programs</div>
                <div className="py-1">
                  {summerSports.map(s => (
                    <Link key={s.id} to={`/sports/${s.id}`} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors">{s.title}</Link>
                  ))}
                </div>
              </div>
              </div>
            <Link to="/portal" className={cn("text-sm font-bold uppercase tracking-wide hover:text-orange-600 transition-colors", location.pathname === "/portal" ? "text-orange-600" : "text-gray-700")}>Student Hub</Link>

            <Link to="/gallery" className={cn("text-sm font-bold uppercase tracking-wide hover:text-orange-600 transition-colors", location.pathname === "/gallery" ? "text-orange-600" : "text-gray-700")}>Gallery</Link>

{/* <Link to="/blogs" className={cn("text-sm font-bold uppercase tracking-wide hover:text-orange-600 transition-colors", location.pathname === "/blogs" ? "text-orange-600" : "text-gray-700")}>Blogs</Link> */}
            <Link to="/contact" className="bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-orange-700 transition-all shadow-md active:scale-95">
              Join Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-lg transition-colors z-50" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* --- MOBILE MENU OVERLAY --- */}
        <div className={cn(
          "fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col h-full pt-24 pb-10 px-6 overflow-y-auto">
            <nav className="flex flex-col space-y-6">
              <Link to="/" className="text-2xl font-black text-gray-900 border-b pb-2">Home</Link>
              <Link to="/about" className="text-2xl font-black text-gray-900 border-b pb-2">About Us</Link>
              
              <div className="space-y-4">
                <p className="text-orange-600 font-black uppercase text-xs tracking-widest">Our Programs</p>
                <div className="grid grid-cols-2 gap-4">
                  {[...mainSports, ...secondarySports].map(s => (
                    <Link key={s.id} to={`/sports/${s.id}`} className="text-gray-700 font-medium hover:text-orange-600">{s.title}</Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-orange-600 font-black uppercase text-xs tracking-widest">Summer Specials</p>
                <div className="flex flex-wrap gap-4">
                  {summerSports.map(s => (
                    <Link key={s.id} to={`/sports/${s.id}`} className="text-gray-700 font-medium">{s.title}</Link>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="bg-orange-600 text-center text-white py-4 rounded-xl font-black text-lg shadow-lg shadow-orange-100">
                JOIN THE CLUB
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-950 text-white pt-16 pb-8">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white font-bold">B</div>
                <span className="text-lg font-black tracking-tighter uppercase">Bluestone Elite</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering athletes to reach their full potential through world-class training and modern facilities. Join the elite community today.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-6 border-l-2 border-orange-600 pl-3">Quick Links</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-6 border-l-2 border-orange-600 pl-3">Top Programs</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                {mainSports.map(sport => (
                  <li key={sport.id}><Link to={`/sports/${sport.id}`} className="hover:text-orange-500 transition-colors">{sport.title}</Link></li>
                ))}
              </ul>
            </div>

         <div>
              <h3 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-6 border-l-2 border-orange-600 pl-3">Find Us</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                {/* Location Link */}
                <li className="flex gap-3">
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-orange-500 transition-colors group">
                    <MapPin size={18} className="text-orange-600 shrink-0 group-hover:scale-110 transition-transform" />
                    <span>No. 9/179/1, Vettukadu, Erumaipatti PO, Idappadi TK, Salem - 637102</span>
                  </a>
                </li>
                {/* Phone Link */}
                <li className="flex items-center gap-3">
                  <a href={`tel:${phoneNumber}`} className="flex items-center gap-3 hover:text-orange-500 transition-colors group">
                    <Phone size={18} className="text-orange-600 shrink-0 group-hover:scale-110 transition-transform" />
                    <span>+91 98765 43210</span>
                  </a>
                </li>
                {/* Email Link */}
                <li className="flex items-center gap-3">
                  <a href={`mailto:${emailAddress}`} className="flex items-center gap-3 hover:text-orange-500 transition-colors group">
                    <Mail size={18} className="text-orange-600 shrink-0 group-hover:scale-110 transition-transform" />
                    <span>{emailAddress}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-xs text-center md:text-left">
              © {new Date().getFullYear()} BLUESTONE ELITE SPORTS. <br className="sm:hidden"/> CRAFTED FOR CHAMPIONS. v1.0.0
            </p>
            <div className="flex gap-6">
              <Facebook size={18} href='https://www.facebook.com/bluestoneelitesports' target='_blank' className="text-gray-500 hover:text-orange-500 cursor-pointer transition-colors" />
              <Instagram size={18} href='https://www.instagram.com/bluestone_elitesports?igsh=MWZ4NXpqZG80bDdwaw==' target='_blank' className="text-gray-500 hover:text-orange-500 cursor-pointer transition-colors" />
              <Youtube size={18} href='https://www.youtube.com/@bluestoneelitesports' target='_blank' className="text-gray-500 hover:text-orange-500 cursor-pointer transition-colors" />
             <Linkedin size={18} href='https://www.linkedin.com/company/bluestone-elite-sports' target='_blank' className="text-gray-500 hover:text-orange-500 cursor-pointer transition-colors" />
</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
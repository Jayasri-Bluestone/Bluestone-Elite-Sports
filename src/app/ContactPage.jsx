import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import Captcha from './components/Captcha';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '', age: '', email: '', phone: '', program: '', message: '', captchaInput: ''
  });
  const [generatedCaptcha, setGeneratedCaptcha] = useState('');
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate Captcha
    if (formData.captchaInput.toLowerCase() !== generatedCaptcha.toLowerCase()) {
      setStatus({ type: 'error', msg: 'Invalid CAPTCHA. Please try again.' });
      return;
    }

    setLoading(true);
    setStatus({ type: '', msg: '' });

    try {
      // Point to Central Portal API
      const response = await fetch(`https://bluestoneinternationalpreschool.com/bgoi_portal/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: `Age: ${formData.age}\n${formData.message}`,
          domain: 'Elite Sports',
          category: 'Website Enquiry',
          interested_in: formData.program
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', msg: 'Message sent! Check your email for confirmation.' });
        setFormData({ fullName: '', age: '', email: '', phone: '', program: '', message: '', captchaInput: '' });
      } else {
        setStatus({ type: 'error', msg: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ type: 'error', msg: 'Server connection failed.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto md:px-16 px-4">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2">Get In Touch</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our programs or want to book a facility? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -mr-8 -mt-8"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {status.msg && (
                <div className={`p-4 rounded-lg text-sm font-bold ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {status.msg}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input required type="text" id="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                  <input required type="number" id="age" value={formData.age} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="10" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input required type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input required type="tel" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="+91 98765 43210" />
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Interested Program</label>
                <select required id="program" value={formData.program} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-white">
                  <option value="">Select a program...</option>
                  <option value="Cricket">Cricket</option>
                  <option value="Yoga">Yoga</option>
                  <option value="Tennis">Tennis</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea required id="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="Tell us about your requirements..."></textarea>
              </div>

              {/* CAPTCHA SECTION */}
              <div className="space-y-4 pt-2 border-t border-gray-100">
                <label className="block text-sm font-black uppercase tracking-widest text-gray-400">Human Verification</label>
                <Captcha onCodeChange={setGeneratedCaptcha} />
                <input 
                  required 
                  type="text" 
                  id="captchaInput" 
                  value={formData.captchaInput} 
                  onChange={handleChange} 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none transition-all bg-gray-50 focus:bg-white" 
                  placeholder="Enter the 6-character code above" 
                />
              </div>

              <button 
                disabled={loading}
                type="submit" 
                className="w-full bg-orange-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-700 disabled:bg-gray-400 transition-colors shadow-lg shadow-orange-200 flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin" /> : <>Send Message <Send size={20} /></>}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-orange-600 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                    <p className="text-gray-600">No. 9/179/1, Vettukadu, Erumaipatti PO, Idappadi TK,<br/>Salem, Tamil Nadu  637102</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-orange-600 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone Number</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-500 text-sm">Mon-Sat 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-full text-orange-600 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                    <p className="text-gray-600">info@bluestoneelitesports.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-100 md:h-120 bg-gray-200 rounded-2xl overflow-hidden relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.3123456789!2d77.8485!3d11.5835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM1JzAwLjYiTiA3N8KwNTAnNTQuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps"
                className="transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
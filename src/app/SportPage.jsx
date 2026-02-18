import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, User, Calendar, CheckCircle } from 'lucide-react';
import { sportsData } from '../data/sports';

export default function SportPage() {
  const { sportId } = useParams();
  
  // Find the specific sport based on the URL parameter
  const sport = sportsData.find(s => s.id === sportId);

  // If the sport doesn't exist, redirect to home
  if (!sport) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px]">
        <img 
          src={sport.image} 
          alt={sport.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 container mx-auto">
          <Link to="/" className="text-white/80 hover:text-orange-400 flex items-center gap-2 mb-4 transition-colors w-fit">
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-2">
            <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {sport.category} Program
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{sport.title}</h1>
          <p className="text-xl text-gray-200 max-w-2xl">{sport.description}</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto md:px-16 px-4 -mt-10 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Details */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-xl p-8 border-t-4 border-orange-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-orange-600 rounded-full"></span>
              Program Overview
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {sport.details}
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {['Professional Techniques', 'Physical Conditioning', 'Strategic Thinking', 'Team Dynamics'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg">
                  <CheckCircle size={20} className="text-orange-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-orange-50 border border-orange-100 rounded-xl p-6">
               <h3 className="text-lg font-bold text-orange-800 mb-3">Why Choose Bluestone Elite?</h3>
               <p className="text-orange-900/70 text-sm">
                 We provide world-class facilities and expert coaching to help you excel. 
                 Whether you're training for competition or fitness, our tailored programs ensure you reach your goals.
               </p>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Class Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Schedule</p>
                    <p className="text-sm text-gray-600">{sport.schedule || 'Flexible timings available'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Coach</p>
                    <p className="text-sm text-gray-600">{sport.coach || 'Expert Trainers'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Duration</p>
                    <p className="text-sm text-gray-600">60-90 mins / session</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link 
                  to="/contact" 
                  className="w-full block text-center bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-200"
                >
                  Book a Trial Session
                </Link>
                <p className="text-xs text-center text-gray-500 mt-2">Limited slots available per batch</p>
              </div>
            </div>

            {/* Other Sports Quick Links */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
               <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Explore More</h3>
               <div className="flex flex-wrap gap-2">
                 {sportsData.filter(s => s.id !== sport.id).slice(0, 5).map(s => (
                   <Link 
                    key={s.id} 
                    to={`/sports/${s.id}`}
                    className="bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 hover:border-orange-500 hover:text-orange-600 transition-colors"
                   >
                     {s.title}
                   </Link>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
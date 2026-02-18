import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  Trophy,
  Users,
  Calendar,
  Medal,
} from "lucide-react";
import { motion } from "motion/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sportsData } from "../data/sports";
import ContactPage from "./ContactPage";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// Responsive Custom Arrows
function NextArrow({ className, style, onClick }) {
  return (
    <div
      className={`${className} hidden md:flex !bg-orange-600 hover:!bg-orange-700 rounded-full w-12 h-12 items-center justify-center z-10 -right-4 shadow-lg`}
      onClick={onClick}
    ></div>
  );
}

function PrevArrow({ className, style, onClick }) {
  return (
    <div
      className={`${className} hidden md:flex !bg-orange-600 hover:!bg-orange-700 rounded-full w-12 h-12 items-center justify-center z-10 -left-4 shadow-lg`}
      onClick={onClick}
    ></div>
  );
}

export default function HomePage() {
  const mainSports = sportsData.filter((s) => s.category === "Main");
  const secondarySports = sportsData.filter((s) => s.category === "Secondary");
  const summerSports = sportsData.filter((s) => s.category === "Summer");

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800, // Slightly slower transition for a premium feel
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 3000, // Slide changes every 3 seconds
    pauseOnHover: true, // Stops sliding when user hovers
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)", // Smoother "elite" transition
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: true,
          autoplaySpeed: 2500, // Slightly faster on mobile to keep engagement
        },
      },
    ],
  };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 bg-white h-full"></div>
          <div className="w-full lg:w-1/2 bg-orange-600 h-full relative">
            <img
              src="https://images.unsplash.com/photo-1750716413349-df33aeca8429?q=80&w=1080"
              className="w-full h-full object-cover mix-blend-overlay opacity-40"
              alt="Stadium"
            />
          </div>
        </div>

        {/* Diagonal Accents - Hidden on Tablet/Mobile for cleaner layout */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -ml-24 w-48 bg-white skew-x-[-12deg] z-10"></div>
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -ml-20 w-4 bg-orange-500 skew-x-[-12deg] z-10"></div>

        <div className="container mx-auto px-6 sm:px-12 lg:px-16 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full lg:w-1/2 text-center lg:text-left pt-10 lg:pt-0"
            >
              <span className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase mb-6 tracking-wider">
                World Class Training
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-6">
                FORGE YOUR <br className="hidden sm:block" />
                <span className="text-orange-600">LEGACY</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Bluestone Elite Sports: where potential meets opportunity.
                Master Cricket, Yoga, and 10+ sports with professional
                mentorship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/contact"
                  className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition-all shadow-lg text-center active:scale-95"
                >
                  Start Training
                </Link>
                <a
                  href="#programs"
                  className="bg-white lg:bg-transparent border-2 border-gray-200 px-8 py-4 rounded-xl font-bold hover:border-orange-600 flex items-center justify-center gap-2 transition-colors"
                >
                  Our Programs <ArrowRight size={20} />
                </a>
              </div>
            </motion.div>

            {/* Hero Images */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full lg:w-1/2 relative aspect-square max-w-[350px] sm:max-w-[450px] lg:max-w-[500px] pb-12 lg:pb-0"
            >
              <img
                src="https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=800"
                className="absolute top-0 left-0 w-3/4 h-3/4 object-cover rounded-3xl shadow-2xl z-10 border-4 border-white"
                alt="cricket"
              />
              <img
                src="https://images.unsplash.com/photo-1765544581327-b5e9055d986c?q=80&w=800"
                className="absolute bottom-4 right-0 w-3/5 h-3/5 object-cover rounded-3xl shadow-xl z-20 border-4 border-white"
                alt="Badminton"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-gray-950 py-12 sm:py-16">
        <div className="container mx-auto px-4">
          {/* grid-cols-2 for mobile, grid-cols-4 for desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 sm:gap-x-8">
            {[
              { Icon: Trophy, label: "Sports", value: "15+" },
              { Icon: Users, label: "Athletes", value: "500+" },
              { Icon: Medal, label: "Coaches", value: "20+" },
              { Icon: Calendar, label: "Days Open", value: "365" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-white text-center flex flex-col items-center group"
              >
                <div className="mb-4 p-3 sm:p-4 bg-gray-900 border border-gray-800 rounded-2xl text-orange-500 group-hover:scale-110 transition-transform duration-300">
                  <stat.Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="text-2xl sm:text-4xl font-black mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT US --- */}
      <section id="about" className="py-24">
        <div className="bg-white py-20">
          <div className="container mx-auto px-8 md:px-16">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Bluestone Elite
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Founded with a vision to nurture the next generation of
                athletes, Bluestone Elite Sports is more than just an
                academy—it's a community dedicated to excellence, discipline,
                and holistic development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1750716413349-df33aeca8429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwbWF0Y2glMjBzdGFkaXVtJTIwYWN0aW9ufGVufDF8fHx8MTc3MTIzODM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="About Us"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-orange-600 mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We strive to provide world-class sporting facilities and
                  expert coaching to enthusiasts of all ages. Our goal is to
                  foster a culture of fitness, teamwork, and sportsmanship.
                </p>
                <h2 className="text-3xl font-bold text-orange-600 mb-6">
                  Our Vision
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading sports academy in the region, known for
                  producing national-level athletes and promoting a healthy
                  lifestyle within the community.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Why Train With Us?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-orange-600 font-bold text-5xl mb-4">
                    01
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Expert Coaches
                  </h3>
                  <p className="text-gray-600">
                    Learn from certified professionals and former national
                    players.
                  </p>
                </div>
                <div>
                  <div className="text-orange-600 font-bold text-5xl mb-4">
                    02
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Modern Facilities
                  </h3>
                  <p className="text-gray-600">
                    Train with the best equipment on international standard
                    courts.
                  </p>
                </div>
                <div>
                  <div className="text-orange-600 font-bold text-5xl mb-4">
                    03
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Holistic Growth
                  </h3>
                  <p className="text-gray-600">
                    Focus on physical fitness, mental toughness, and character
                    building.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN PROGRAMS GRID --- */}
      <section id="programs" className="mb-16 container mx-auto px-8 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-3">
            Our Core Focus
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900">
            Elite Programs
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {mainSports.map((sport) => (
            <Link
              to={`/sports/${sport.id}`}
              key={sport.id}
              className="group relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden"
            >
              <img
                src={sport.image}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={sport.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 md:p-12 flex flex-col justify-end">
                <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {sport.title}
                </h4>
                <p className="text-gray-300 line-clamp-2 md:line-clamp-none mb-6 max-w-md">
                  {sport.description}
                </p>
                <div className="flex items-center text-orange-400 font-bold gap-2">
                  EXPLORE PROGRAM <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- ACADEMY CAROUSEL --- */}
      <section className="bg-gray-50 py-24 overflow-hidden">
        <div className="container mx-auto px-8 md:px-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Sports Academy
          </h3>
          <div className="md:px-8">
            <Slider {...sliderSettings}>
              {secondarySports.map((sport) => (
                <div key={sport.id} className="px-3">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col h-[450px]">
                    <img
                      src={sport.image}
                      className="h-70 w-full object-cover"
                      alt={sport.title}
                    />
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-xl font-bold mb-3">{sport.title}</h4>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-6">
                        {sport.description}
                      </p>
                      <Link
                        to={`/sports/${sport.id}`}
                        className="mt-auto text-orange-600 font-bold text-sm inline-flex items-center gap-2"
                      >
                        DETAILS <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Summer Programs */}

      <section
        id="summer"
        className="py-24 relative overflow-hidden bg-gray-900 text-white"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-900/20 skew-x-12 transform translate-x-20"></div>

          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-900/10 -skew-x-12 transform -translate-x-20"></div>
        </div>

        <div className="container mx-auto px-4 md:px-16 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-gray-800 pb-8"
          >
            <div>
              <h2 className="text-orange-400 font-bold tracking-widest uppercase text-sm mb-2">
                Summer & Indoor
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                Focus & Strategy
              </h3>
            </div>
            <p className="text-gray-400 max-w-md text-lg">
              Beat the heat and sharpen your mind. Our indoor programs are
              perfect for developing strategic thinking and concentration.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-10"
          >
            {summerSports.map((sport) => (
              <motion.div variants={fadeInUp} key={sport.id}>
                <Link
                  to={`/sports/${sport.id}`}
                  className="group block bg-gray-800 rounded-3xl overflow-hidden hover:bg-gray-700 transition-colors border border-gray-700 hover:border-orange-500/50"
                >
                  <div className="flex flex-col sm:flex-row h-full">
                    <div className="w-full sm:w-2/5 h-64 sm:h-auto relative overflow-hidden">
                      <img
                        src={sport.image}
                        alt={sport.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                      <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                        {sport.title}
                      </h4>

                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        {sport.description}
                      </p>

                      <span className="inline-flex items-center gap-2 text-white font-bold text-sm bg-gray-700 w-fit px-4 py-2 rounded-lg group-hover:bg-orange-600 transition-colors">
                        Learn More <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactPage />

      {/* --- CTA --- */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto bg-orange-600 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-orange-200">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            JOIN THE ELITE
          </h2>
          <p className="text-lg md:text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Ready to push your limits? Contact us for a free trial session
            today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-orange-600 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform"
          >
            CONTACT US NOW
          </Link>
        </div>
      </section>
    </div>
  );
}

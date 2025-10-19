import { useState } from 'react';
import { Target, Award, Users, Sparkles, CheckCircle } from 'lucide-react';
import ownerImg from "../assets/owner.jpg";

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Replace these with your actual image imports
  const aboutImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop";

  const highlights = [
    { icon: <Target className="w-5 h-5" />, text: "SDLC-Driven Development" },
    { icon: <Award className="w-5 h-5" />, text: "Quality Assurance" },
    { icon: <Users className="w-5 h-5" />, text: "Client-Focused Solutions" }
  ];

  return (
    <section id="about" className="w-full min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 sm:top-40 left-5 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 sm:bottom-40 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="flex justify-center mb-4 sm:mb-6">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-indigo-600 shadow-lg border border-indigo-100">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Our Story
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 block">
              About Aaditya
            </span>
            <span className="text-slate-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-2">
              Technologies
            </span>
          </h2>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-16 sm:mb-24 md:mb-32">
          {/* Left Image */}
          <div className="relative group order-2 md:order-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImg}
                alt="Aaditya Technologies"
                className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition duration-500"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-white/20">
              <p className="text-slate-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">
                <span className="font-bold text-slate-900">Aaditya Technologies</span> is a
                self-owned software development company that strictly follows the{" "}
                <span className="font-semibold text-indigo-600">
                  Software Development Life Cycle (SDLC)
                </span>{" "}
                to ensure structured and high-quality project delivery. Our team
                focuses on every stage — from planning and design to testing and
                deployment — ensuring excellence in every step.
              </p>
              <p className="text-slate-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">
                Established in <span className="font-bold text-slate-900">2025</span>, Aaditya
                Technologies is led by a passionate and visionary CEO — a recent
                Computer Science graduate — with a goal to create a
                self-owned software company that drives innovation and builds a
                strong identity in the software industry.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base md:text-lg">
                Our mission is to craft innovative, scalable, and user-focused web
                and application solutions that empower businesses and deliver
                measurable success.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 gap-2 sm:gap-3 md:gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white shadow-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-slate-800 font-semibold text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Meet the Owner */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Owner Info */}
            <div className="text-left space-y-4 sm:space-y-6 order-2 md:order-1">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full text-xs sm:text-sm font-medium text-indigo-700 shadow-lg">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                  Leadership
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                Meet the Owner
              </h3>

              <div>
                <h4 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-1 sm:mb-2">
                  Vasim Kureshi
                </h4>
                <p className="text-indigo-600 font-semibold text-base sm:text-lg mb-3 sm:mb-4">
                  Founder & CEO
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base md:text-lg">
                  Vasim Kureshi is the Founder and CEO of Aaditya Technologies. He
                  completed his <span className="font-semibold text-slate-900">B.Tech in Computer Science</span> and
                  has strong expertise in{" "}
                  <span className="font-semibold text-slate-900">Java Full Stack Development</span>.
                  His passion for technology, attention to detail, and commitment to
                  innovation inspired him to start his own software company soon after
                  graduation.
                </p>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base md:text-lg">
                  Vasim's vision is to lead Aaditya Technologies to become a trusted
                  name in the software industry by delivering impactful and
                  future-ready digital solutions. His dedication and focus continue to
                  drive the company's growth and success.
                </p>
              </div>

              {/* Skills/Qualities */}
              <div className="flex flex-wrap gap-2 pt-2 sm:pt-4">
                {["Java Full Stack", "B.Tech CS", "Visionary Leader", "Innovation Driver"].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-xs sm:text-sm font-medium shadow-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Owner Image */}
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md">
                {/* Gradient ring animation */}
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur opacity-50 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
                
                {/* Image container */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 sm:border-8 border-white mx-auto">
                  <img
                    src={ownerImg}
                    alt="Vasim Kureshi"
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-xl">
                  <CheckCircle className="w-6 h-6 sm:w-12 sm:h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import { useState } from 'react';
import { Globe, Smartphone, ArrowRight, Sparkles } from 'lucide-react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Replace these with your actual image imports
  const webImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop";
  const appImg = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop";

  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      image: webImg,
      description1: "Build stunning, high-performance, and SEO-friendly websites that elevate your online presence. From personal portfolios to business websites and e-commerce platforms, we design and develop with modern technologies like React, Next.js, and Tailwind CSS.",
      description2: "We focus on responsive design, fast loading times, and smooth navigation to ensure your visitors get the best experience across all devices.",
      technologies: ["React", "Next.js", "Tailwind CSS"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Application Development",
      image: appImg,
      description1: "We develop powerful, scalable web and mobile applications that streamline operations and engage users. Whether it's an internal management app or a client-facing platform, we deliver end-to-end solutions with React Native, Node.js, and Spring Boot.",
      description2: "Our approach emphasizes clean UI, optimized performance, and robust backend integration to meet your business goals.",
      technologies: ["React Native", "Node.js", "Spring Boot"]
    }
  ];

  return (
    <section
      id="services"
      className="min-h-screen px-4 py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-indigo-600 shadow-lg border border-indigo-100">
              <Sparkles className="w-4 h-4" />
              What We Offer
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Our Services
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your digital needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-6 left-6 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Hover Arrow */}
                <div className={`absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-lg transition-all duration-300 ${hoveredCard === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description1}
                </p>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description2}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-slate-600 mb-6">
            Ready to bring your project to life?
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from 'lucide-react';

const Contact = () => {
  const [state, handleSubmit] = useForm("movkbdjb");

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "info@adityatechnologies.com",
      href: "mailto:info@adityatechnologies.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9630179288",
      href: "tel:+919630179288"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "Burhanpur, Madhya Pradesh, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="w-full min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 right-5 sm:right-20 w-64 sm:w-96 h-64 sm:h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="flex justify-center mb-3 sm:mb-6">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-indigo-600 shadow-lg border border-indigo-100">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Let's Connect
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Get in Touch
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-2">
            Have a project in mind? We'd love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 sm:mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
                We would love to hear from you! Whether you have a question about our services, 
                want to discuss a project, or just want to say hello, feel free to reach out. 
                Fill out the form and we will get back to you as soon as possible.
              </p>

              <div className="space-y-2 sm:space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-2 sm:gap-4 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg border border-white/20 hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white shadow-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm font-semibold text-slate-500 mb-0.5 sm:mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-slate-800 font-medium hover:text-indigo-600 transition-colors text-sm sm:text-base break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-800 font-medium text-sm sm:text-base break-all">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl text-white">
              <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Quick Response Guaranteed</h4>
              <p className="text-indigo-50 leading-relaxed text-sm sm:text-base">
                We typically respond to all inquiries within 24 hours during business days. 
                Your success is our priority!
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex justify-center w-full">
            {state.succeeded ? (
              <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 w-full border border-white/20 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2 sm:mb-4">
                  Thank You!
                </h3>
                <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                  Your message has been sent successfully. We will get back to you soon.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 w-full border border-white/20">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">
                  Send us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/70 border-2 border-slate-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-slate-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/70 border-2 border-slate-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-slate-700 font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      placeholder="Tell us about your project..."
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/70 border-2 border-slate-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="group relative w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg sm:rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {state.submitting ? "Sending..." : "Send Message"}
                      {!state.submitting && <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
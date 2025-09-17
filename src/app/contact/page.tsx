import Navigation from '@/components/ui/navigation'
import Footer from '@/components/sections/footer'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch with the BioCAN team - we're here to help advance your career
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Have questions about BioCAN's AI-powered career intelligence platform? 
                  Want to join our beta program? We'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="glass-card p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">team.biocan@gmail.com</p>
                    <p className="text-gray-300">support@biocan.ai</p>
                    <p className="text-sm text-gray-400 mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="glass-card p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-300">+91 9044404142</p>
                    <p className="text-sm text-gray-400 mt-1">Monday to Friday, 9 AM to 6 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="glass-card p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                    <p className="text-gray-300">#1782/1 Seetha Ram Rao Road, Siddappa Square</p>
                    <p className="text-gray-300">K R Mohalla, Mysuru</p>
                    <p className="text-gray-300">Karnataka, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="glass-card p-3 rounded-xl">
                    <Clock className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Support Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9 AM - 6 PM IST</p>
                    <p className="text-gray-300">Weekend: Emergency support only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent [&>option]:bg-gray-800 [&>option]:text-white"
                  >
                    <option value="" className="bg-gray-800 text-gray-400">Select a subject</option>
                    <option value="general-inquiry" className="bg-gray-800 text-white">General Inquiry</option>
                    <option value="premium-access" className="bg-gray-800 text-white">Premium Access</option>
                    <option value="technical-support" className="bg-gray-800 text-white">Technical Support</option>
                    <option value="partnership" className="bg-gray-800 text-white">Partnership Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">Quick answers to common questions about BioCAN</p>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">What is BioCAN's pricing model?</h3>
              <p className="text-gray-300">BioCAN offers a simple one-time payment of ₹99 INR for lifetime premium access. There are no recurring charges or subscriptions - just pay once and access all premium features forever.</p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">How does the AI career assessment work?</h3>
              <p className="text-gray-300">Our AI analyzes your skills, experience, and career goals using advanced algorithms including MBTI assessments to provide personalized career recommendations and skill development roadmaps for Lifescience professionals.</p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">Do you offer refunds for premium access?</h3>
              <p className="text-gray-300">All sales are final. BioCAN does not offer refunds for the one-time premium access fee. However, we may consider refunds for technical issues or billing errors. Please try our free features before upgrading.</p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">How is BioCAN's service delivered?</h3>
              <p className="text-gray-300">BioCAN is 100% digital - no physical products are shipped. All services are delivered instantly through our web platform at app.biocan.ai with 24/7 global access and real-time AI processing.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
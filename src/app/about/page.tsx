import Navigation from '@/components/ui/navigation'
import Footer from '@/components/sections/footer'
import { Target, Users, Zap, Shield, Heart, Award, Building2, Globe } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About BioCAN
            </h1>
            <p className="text-xl text-gray-300">
              Empowering biotechnology professionals with AI-powered career advancement
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <div className="prose prose-invert max-w-none">
              
              {/* Mission */}
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="w-6 h-6 text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  BioCAN (BioCareer Advancement Network) is dedicated to empowering biotechnology and life sciences professionals with cutting-edge AI technology to advance their careers. We believe that every professional deserves access to intelligent tools that can help them discover opportunities, build compelling resumes, and navigate their career journey with confidence.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our mission is to bridge the gap between talented professionals and their dream careers by leveraging artificial intelligence to provide personalized career guidance, automated job tracking, and intelligent application assistance.
                </p>
              </div>

              {/* What We Do */}
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <h2 className="text-2xl font-bold text-white">What We Do</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  BioCAN provides a comprehensive AI-powered career advancement platform specifically designed for biotechnology and life sciences professionals. Our services include:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-white mb-3">Job Tracking & Management</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm ml-4">
                      <li>Automated job application tracking via Gmail integration</li>
                      <li>Centralized dashboard for all applications</li>
                      <li>Status updates and interview scheduling</li>
                    </ul>
                  </div>

                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-white mb-3">AI Resume Builder</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm ml-4">
                      <li>AI-powered resume generation and optimization</li>
                      <li>ATS-friendly formatting</li>
                      <li>Industry-specific templates</li>
                    </ul>
                  </div>

                  <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-white mb-3">Career Assessments</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm ml-4">
                      <li>MBTI personality assessments</li>
                      <li>Career fit analysis</li>
                      <li>Skill gap identification</li>
                    </ul>
                  </div>

                  <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-white mb-3">Job Recommendations</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm ml-4">
                      <li>AI-powered job matching</li>
                      <li>Personalized recommendations</li>
                      <li>Industry-specific opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Our Values */}
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Heart className="w-6 h-6 text-red-400" />
                  <h2 className="text-2xl font-bold text-white">Our Values</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/30 rounded-lg p-6 text-center">
                    <Shield className="w-8 h-6 text-blue-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">Security & Privacy</h3>
                    <p className="text-gray-300 text-sm">
                      We prioritize the security and privacy of your data. All information is encrypted and handled with the utmost care.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/30 rounded-lg p-6 text-center">
                    <Users className="w-8 h-6 text-green-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">User-Centric</h3>
                    <p className="text-gray-300 text-sm">
                      Every feature is designed with our users in mind. We listen to feedback and continuously improve our platform.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/30 rounded-lg p-6 text-center">
                    <Award className="w-8 h-6 text-purple-400 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
                    <p className="text-gray-300 text-sm">
                      We strive for excellence in everything we do, from AI accuracy to user experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Building2 className="w-6 h-6 text-indigo-400" />
                  <h2 className="text-2xl font-bold text-white">Business Information</h2>
                </div>
                
                <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Company Name</h3>
                      <p className="text-gray-300">BioCAN (BioCareer Advancement Network)</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Platform</h3>
                      <p className="text-gray-300">AI-powered career advancement platform for biotechnology and life sciences professionals</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Contact Information</h3>
                      <ul className="list-none text-gray-300 space-y-1">
                        <li>Email: arjun@biocan.ai</li>
                        <li>Tech Support: tech.biocan@gmail.com</li>
                        <li>Phone: +91 9044404142</li>
                        <li>Website: <a href="https://biocan.ai" className="text-purple-400 hover:text-purple-300">biocan.ai</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technology & Innovation */}
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">Technology & Innovation</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  BioCAN leverages state-of-the-art artificial intelligence and machine learning technologies to provide intelligent career assistance. Our platform uses advanced algorithms to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Analyze job descriptions and match them with user profiles</li>
                  <li>Generate optimized resumes tailored to specific job requirements</li>
                  <li>Track and organize job applications automatically</li>
                  <li>Provide personalized career recommendations based on skills and preferences</li>
                  <li>Offer AI-powered career guidance through intelligent chat assistance</li>
                </ul>
              </div>

              {/* Commitment to Privacy */}
              <div className="mb-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-6 h-6 text-green-400" />
                  <h2 className="text-2xl font-bold text-white">Our Commitment to Privacy</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  At BioCAN, we take your privacy seriously. We are committed to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Protecting your personal and professional data with industry-standard security measures</li>
                  <li>Being transparent about how we collect, use, and protect your information</li>
                  <li>Giving you control over your data with easy access, modification, and deletion options</li>
                  <li>Complying with all applicable data protection regulations</li>
                  <li>Never selling your data to third parties</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  For detailed information, please review our <a href="/privacy-policy" className="text-purple-400 hover:text-purple-300">Privacy Policy</a> and <a href="/terms" className="text-purple-400 hover:text-purple-300">Terms of Service</a>.
                </p>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-6 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
                <p className="text-gray-300 mb-6">
                  Have questions or feedback? We'd love to hear from you!
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Contact Us
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

"use client"

import { useState } from 'react'
import Navigation from '@/components/ui/navigation'
import Footer from '@/components/sections/footer'
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react'

function FAQItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-purple-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-300">
          {answer}
        </div>
      )}
    </div>
  )
}

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
                  Have questions about BioCAN's AI-powered career advancement platform? Need help with Job Tracker, Resume Builder, Automation, or any other feature? Our support team is here to help you succeed in your career journey.
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
                    <p className="text-gray-300">arjun@biocan.ai</p>
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
                    <option value="premium-access" className="bg-gray-800 text-white">Premium Access & Pricing</option>
                    <option value="wallet-subscription" className="bg-gray-800 text-white">Wallet & Subscriptions</option>
                    <option value="job-tracker" className="bg-gray-800 text-white">Job Tracker & Gmail Integration</option>
                    <option value="resume-builder" className="bg-gray-800 text-white">Resume Builder</option>
                    <option value="automation" className="bg-gray-800 text-white">Automated Job Application</option>
                    <option value="referral-program" className="bg-gray-800 text-white">Referral Program</option>
                    <option value="technical-support" className="bg-gray-800 text-white">Technical Support</option>
                    <option value="billing-issue" className="bg-gray-800 text-white">Billing Issue</option>
                    <option value="privacy-data" className="bg-gray-800 text-white">Privacy & Data Questions</option>
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

          <div className="space-y-4">
            {/* Pricing & Payment */}
            <FAQItem
              question="What is BioCAN's pricing model?"
              answer={
                <>
                  <p className="mb-3">BioCAN uses a credit-based system:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>You can sign up and explore features for free</li>
                    <li>To use premium features, you need to purchase credits</li>
                    <li>Credits are used for AI-powered features like Resume Builder, Job Tracker, and Automated Applications</li>
                    <li>All payments are processed securely through Razorpay</li>
                  </ul>
                  <p className="mt-3 text-sm">No hidden charges. You only pay for what you use.</p>
                </>
              }
            />

            <FAQItem
              question="Do you offer refunds?"
              answer={
                <p><strong>No, all sales are final.</strong> We strongly recommend exploring the platform before purchasing credits. Refunds are only considered in extremely rare cases of verified technical or billing errors.</p>
              }
            />

            {/* Platform Features */}
            <FAQItem
              question="What features does BioCAN offer?"
              answer={
                <>
                  <p className="mb-3">BioCAN provides a comprehensive career advancement platform:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li><strong>Job Tracker:</strong> Automatically track applications with Gmail integration</li>
                    <li><strong>Resume Builder:</strong> AI-powered resume creation and optimization</li>
                    <li><strong>Automated Applications:</strong> Smart form filling for job applications</li>
                    <li><strong>Career Assessments:</strong> MBTI and skills evaluation</li>
                    <li><strong>AI Job Recommendations:</strong> Personalized job matching</li>
                    <li><strong>Daily Insights:</strong> Career happenings and industry updates</li>
                    <li><strong>Referral Program:</strong> Earn rewards by referring friends</li>
                  </ul>
                </>
              }
            />

            <FAQItem
              question="How does the Job Tracker work?"
              answer={
                <>
                  <p className="mb-3">Our Job Tracker automatically tracks your applications:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Connect your Gmail (with explicit OAuth consent) for automatic tracking</li>
                    <li>Applications made through BioCAN are tracked automatically</li>
                    <li>AI analyzes emails to detect application confirmations, interviews, offers, and rejections</li>
                    <li>Manual entry option for applications from other sources</li>
                    <li>Real-time status updates and statistics dashboard</li>
                  </ul>
                  <p className="mt-3 text-sm"><strong>Privacy:</strong> We only access job-related emails with your explicit consent. You can revoke access anytime.</p>
                </>
              }
            />

            <FAQItem
              question="How does the Resume Builder work?"
              answer={
                <>
                  <p className="mb-3">Our AI-powered Resume Builder helps create optimized resumes:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Upload your existing resume or start from scratch</li>
                    <li>AI analyzes job descriptions and optimizes your resume accordingly</li>
                    <li>ATS-friendly formatting and keyword optimization</li>
                    <li>Multiple templates and customization options</li>
                    <li>Export to PDF or share directly</li>
                    <li>Resume history and version tracking</li>
                  </ul>
                </>
              }
            />

            <FAQItem
              question="What is the Automated Job Application feature?"
              answer={
                <>
                  <p className="mb-3">Our automation feature helps you apply to jobs faster:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Smart form filling based on your profile data</li>
                    <li>Resume customization for each application</li>
                    <li>Browser-based automation for job portals</li>
                    <li>Application tracking and status updates</li>
                    <li>Manual review and confirmation before submission</li>
                  </ul>
                  <p className="mt-3 text-sm"><strong>Note:</strong> You maintain full control and can review all applications before submission.</p>
                </>
              }
            />

            {/* Privacy & Security */}
            <FAQItem
              question="Is my data safe with BioCAN?"
              answer={
                <>
                  <p className="mb-3"><strong>Yes, absolutely.</strong> We take data security seriously:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>End-to-end encryption for all data transmission</li>
                    <li>Secure cloud storage with regular backups</li>
                    <li>We never sell your personal information</li>
                    <li>Gmail access requires explicit OAuth consent</li>
                    <li>You can revoke third-party access anytime</li>
                    <li>Compliance with data protection regulations</li>
                  </ul>
                  <p className="mt-3 text-sm">See our <a href="/privacy-policy" className="text-purple-400 hover:underline">Privacy Policy</a> for detailed information.</p>
                </>
              }
            />

            <FAQItem
              question="What data does BioCAN collect?"
              answer={
                <>
                  <p className="mb-3">We collect only what's necessary to provide our services:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Account information (name, email via Google OAuth)</li>
                    <li>Professional details (education, experience, skills)</li>
                    <li>Career assessment results and preferences</li>
                    <li>Job application data (if you use Job Tracker)</li>
                    <li>Resume content (if you use Resume Builder)</li>
                    <li>Gmail data (only with explicit consent, for job tracking)</li>
                  </ul>
                  <p className="mt-3 text-sm">You can request data deletion or export at any time.</p>
                </>
              }
            />

            {/* Account & Subscription */}
            <FAQItem
              question="How do I create an account?"
              answer={
                <>
                  <p className="mb-3">Creating an account is simple:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Visit app.biocan.ai</li>
                    <li>Click "Sign in with Google"</li>
                    <li>Authorize BioCAN to access your basic Google profile</li>
                    <li>Complete your profile (optional, but recommended for better recommendations)</li>
                    <li>Explore features - you can see what's available</li>
                    <li>Purchase credits to use premium features</li>
                  </ul>
                  <p className="mt-3 text-sm">No credit card required to sign up. You only need credits to use premium features.</p>
                </>
              }
            />

            {/* General */}
            <FAQItem
              question="Is BioCAN only for biotechnology professionals?"
              answer={
                <p>While BioCAN is optimized for biotechnology and life sciences professionals, our platform is open to anyone seeking career advancement. Our AI adapts to your industry and provides relevant recommendations regardless of your field.</p>
              }
            />

            <FAQItem
              question="Can I cancel my account?"
              answer={
                <>
                  <p className="mb-3">Yes, you have full control:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Request account deletion by contacting support</li>
                    <li>Export your data before account closure</li>
                    <li>Unused credits are non-refundable</li>
                  </ul>
                  <p className="mt-3 text-sm"><strong>Note:</strong> Account cancellation does not entitle you to refunds. See our Cancellation & Refund Policy for details.</p>
                </>
              }
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
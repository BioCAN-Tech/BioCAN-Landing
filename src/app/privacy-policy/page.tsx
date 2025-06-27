import Navigation from '@/components/ui/navigation'
import Footer from '@/components/sections/footer'

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              How BioCAN protects and manages your personal information
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 rounded-2xl">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-8">
                <strong>Last updated:</strong> December 2024
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    BioCAN collects information to provide AI-powered career intelligence services. We collect:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, and professional details</li>
                    <li><strong>Career Data:</strong> Educational background, work experience, skills, and career goals</li>
                    <li><strong>Usage Information:</strong> Platform interactions, assessment responses, and feature usage</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use your information to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Provide personalized career assessments and recommendations</li>
                    <li>Generate AI-powered career insights and development plans</li>
                    <li>Improve our platform and develop new features</li>
                    <li>Communicate updates, offers, and important information</li>
                    <li>Ensure platform security and prevent fraud</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We do not sell your personal information. We may share your information only in these circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong>With Your Consent:</strong> When you explicitly authorize us to share specific information</li>
                    <li><strong>Service Providers:</strong> Trusted partners who help us operate our platform</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
                    <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We implement comprehensive security measures to protect your information:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>End-to-end encryption for sensitive data transmission</li>
                    <li>Secure cloud storage with restricted access controls</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Employee training on data protection best practices</li>
                    <li>Compliance with international security standards</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights and Choices</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong>Access:</strong> Request a copy of your personal information</li>
                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                    <li><strong>Portability:</strong> Export your data in a readable format</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We retain your information for as long as necessary to provide our services and fulfill legal obligations. 
                    Career assessment data may be retained to improve our AI models, but is anonymized after account deletion. 
                    You can request immediate deletion of your account at any time.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide 
                    personalized content. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure appropriate safeguards are in place to protect your data in accordance with this privacy policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    BioCAN is designed for professionals and students aged 18 and above. We do not knowingly collect 
                    personal information from children under 18. If we become aware of such collection, we will delete the information promptly.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
                  <p className="text-gray-300 leading-relaxed">
                    For privacy-related questions or to exercise your rights, contact us at:
                    <br />
                    Email: arjun@biocan.ai
                    <br />
                    Phone: +91 9044404142
                    <br />
                    Address: #17 Siddappa Square, K R Mohalla, Mysuru
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Updates to This Policy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We may update this privacy policy to reflect changes in our practices or legal requirements. 
                    We will notify you of significant changes via email or platform notification before they take effect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 
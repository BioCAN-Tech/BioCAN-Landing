import Navigation from '@/components/ui/navigation'
import Footer from '@/components/sections/footer'

export default function TermsPage() {
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
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-300">
              Please read these terms carefully before using BioCAN's services
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
                  <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-300 leading-relaxed">
                    By accessing and using BioCAN's AI-powered career intelligence platform, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    BioCAN provides AI-powered career intelligence services for life science professionals, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Career assessment and skills analysis</li>
                    <li>Personalized career roadmaps and development plans</li>
                    <li>Automated job application assistance</li>
                    <li>Industry insights and networking opportunities</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
                  <p className="text-gray-300 leading-relaxed">
                    You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Data Usage and Privacy</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Your privacy is important to us. Our use of your personal information is governed by our Privacy Policy, which is incorporated into these terms by reference. By using our services, you consent to the collection and use of information as described in our Privacy Policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                  <p className="text-gray-300 leading-relaxed">
                    All content, features, and functionality of BioCAN's platform are owned by BioCAN and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                  <p className="text-gray-300 leading-relaxed">
                    BioCAN shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Contact Information</h2>
                  <p className="text-gray-300 leading-relaxed">
                    For questions about these Terms and Conditions, please contact us at:
                    <br />
                    Email: arjun@biocan.ai
                    <br />
                    Address: #17 Siddappa Square, K R Mohalla, Mysuru
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
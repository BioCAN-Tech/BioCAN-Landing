import Navigation from '@/components/ui/navigation'
import Footer from '@/components/sections/footer'

export default function TermsPage() {
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
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-300">
              Please read these terms carefully before using BioCAN's career advancement platform and services.
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
                <strong>Last updated:</strong> 01/09/2025
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    By accessing and using BioCAN (BioCareer Advancement Network) platform at app.biocan.ai, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    BioCAN is owned and operated by BioCAN. These terms apply to all users of our career development platform, including job seekers, career changers, and Lifescience professionals.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Permission is granted to temporarily access BioCAN's services for personal, non-commercial career development use only. This includes:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                    <li>Taking career assessments and personality tests (MBTI)</li>
                    <li>Receiving AI-powered job recommendations</li>
                    <li>Accessing skill development roadmaps</li>
                    <li>Using interview preparation tools</li>
                    <li>Utilizing our AI career chat service</li>
                    <li>Building and optimizing your professional profile</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    This license shall automatically terminate if you violate any of these restrictions.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-2">
                    <strong>You may not:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Modify or copy our assessment algorithms or AI models</li>
                    <li>Use the service for commercial recruitment without authorization</li>
                    <li>Attempt to reverse engineer our career matching technology</li>
                    <li>Share premium content or features with non-subscribers</li>
                    <li>Create fake profiles or manipulate assessment results</li>
                    <li>Use automated tools to scrape job recommendations or content</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Service Description</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    BioCAN provides a comprehensive career advancement platform specifically designed for biotechnology and life sciences professionals, offering:
                  </p>
                  <h3 className="text-xl font-semibold text-white mb-3">Core Services:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                    <li>AI-powered career assessments</li>
                    <li>Personalized job recommendations</li>
                    <li>Skill gap analysis and roadmaps</li>
                    <li>Interview preparation and practice</li>
                    <li>Resume optimization tools</li>
                    <li>Industry networking opportunities</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-white mb-3">Premium Features:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Advanced AI career coaching</li>
                    <li>Direct job application services</li>
                    <li>Priority support and guidance</li>
                    <li>Exclusive industry insights</li>
                    <li>Custom career journey planning</li>
                    <li>Professional development tracking</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Account Registration and Responsibilities</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    To access our full range of services, you must create an account using Google authentication or other approved methods.
                  </p>
                  <h3 className="text-xl font-semibold text-white mb-3">Account Requirements:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                    <li>Provide accurate and truthful information</li>
                    <li>Maintain confidentiality of your account credentials</li>
                    <li>Notify us immediately of any unauthorized use</li>
                    <li>Use only one account per individual</li>
                    <li>Keep your profile information current and professional</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-white mb-3">Data Accuracy:</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The effectiveness of our AI recommendations depends on accurate information. Providing false information about your skills, experience, or career goals may result in irrelevant recommendations and potential account suspension.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms and Subscription</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    BioCAN offers both free and premium subscription services. Premium features require payment processed through Razorpay.
                  </p>
                  <h3 className="text-xl font-semibold text-white mb-3">Subscription Terms:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                    <li>Subscriptions are billed in advance</li>
                    <li>All payments are processed securely through Razorpay</li>
                    <li>Prices are subject to change with 30 days notice</li>
                    <li>Premium features are activated immediately upon payment</li>
                    <li>Account downgrades take effect at the end of the billing cycle</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-white mb-3">Payment Processing:</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We use Razorpay for secure payment processing. By providing payment information, you represent that you are authorized to use the payment method and authorize us to charge all fees incurred.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property Rights</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    BioCAN and its licensors own all intellectual property rights in the service, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                    <li>AI algorithms and career matching technology</li>
                    <li>Assessment methodologies and scoring systems</li>
                    <li>Job recommendation engines</li>
                    <li>Platform design and user interface</li>
                    <li>Content, including career guides and resources</li>
                    <li>Trademarks and brand elements</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed">
                    Users retain ownership of their personal information and career data but grant BioCAN license to use this data to provide and improve our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Privacy and Data Protection</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which forms part of these terms.
                  </p>
                  <h3 className="text-xl font-semibold text-white mb-3">Data Usage:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Career assessment results to provide personalized recommendations</li>
                    <li>Usage patterns to improve our AI algorithms</li>
                    <li>Professional information for job matching</li>
                    <li>Communication preferences for service updates</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">8. User Conduct and Prohibited Activities</h2>
                  <h3 className="text-xl font-semibold text-white mb-3">Prohibited Activities:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                    <li>Harassing other users or BioCAN staff</li>
                    <li>Sharing false or misleading career information</li>
                    <li>Attempting to manipulate job recommendations</li>
                    <li>Using the platform for illegal activities</li>
                    <li>Sharing account access with others</li>
                    <li>Uploading malicious content or viruses</li>
                    <li>Interfering with platform operations</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed">
                    Violation of these terms may result in account suspension or termination without refund.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimers and Limitations</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong>Career Guidance:</strong> BioCAN provides career development tools and recommendations based on AI analysis. While we strive for accuracy, we cannot guarantee specific career outcomes or job placement.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong>Service Availability:</strong> We aim for 99.9% uptime but cannot guarantee uninterrupted service. Maintenance, updates, or technical issues may temporarily affect availability.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    <strong>Third-Party Content:</strong> Job listings and some career resources come from third parties. We are not responsible for the accuracy or reliability of external content.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Termination</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You may terminate your account at any time by contacting support. We may terminate accounts for violations of these terms.
                  </p>
                  <h3 className="text-xl font-semibold text-white mb-3">Upon Termination:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Access to premium features will cease immediately</li>
                    <li>Your data will be handled according to our Privacy Policy</li>
                    <li>No refunds will be provided for unused subscription periods</li>
                    <li>You may request data export within 30 days</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Changes to Terms</h2>
                  <p className="text-gray-300 leading-relaxed">
                    We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or platform notification. Continued use after changes constitutes acceptance of new terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">12. Contact Information</h2>
                  <p className="text-gray-300 leading-relaxed">
                    For questions about these Terms and Conditions, please contact us:
                    <br /><br />
                    Email: team.biocan@gmail.com
                    <br />
                    Support: support@biocan.ai
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
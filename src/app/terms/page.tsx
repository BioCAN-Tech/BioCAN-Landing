import Navigation from '@/components/ui/navigation'
import Footer from '@/components/sections/footer'
import { FileText, Shield, CreditCard, Users, AlertTriangle, Scale, Lock, UserCheck, XCircle, Clock, FileX, Phone } from 'lucide-react'

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
                <strong>Last updated:</strong> 01/Jan/2026
              </p>

              <div className="space-y-8">
                {/* Agreement to Terms */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <FileText className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl font-bold text-white">1. Agreement to Terms</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    By accessing and using BioCAN (BioCareer Advancement Network) platform at app.biocan.ai, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    BioCAN is owned and operated by BioCAN. These terms apply to all users of our career development platform, including job seekers, career changers, and Lifescience professionals.
                  </p>
                </div>

                {/* Use License */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Scale className="w-6 h-6 text-green-400" />
                    <h2 className="text-2xl font-bold text-white">2. Use License</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Permission is granted to temporarily access BioCAN's services for personal, non-commercial career development use only. This includes:
                  </p>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-4">
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Taking career assessments and personality tests (MBTI)</li>
                      <li>Receiving AI-powered job recommendations</li>
                      <li>Accessing skill development roadmaps</li>
                      <li>Using interview preparation tools</li>
                      <li>Utilizing our AI career chat service</li>
                      <li>Tracking job applications with our Job Tracker</li>
                      <li>Building and editing resumes with AI-powered Resume Builder</li>
                      <li>Automated job application with form filling</li>
                      <li>Connecting Gmail for automatic application tracking</li>
                      <li>Daily career insights and happenings</li>
                      <li>Referral program participation</li>
                    </ul>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    This license shall automatically terminate if you violate any of these restrictions.
                  </p>
                  
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
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
                      <li>Abuse the automation features for spam or fraudulent applications</li>
                      <li>Share or sell access to your account or referral codes</li>
                      <li>Use wallet credits for unauthorized purposes</li>
                      <li>Manipulate referral system for fraudulent rewards</li>
                    </ul>
                  </div>
                </div>

                {/* Account Registration */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <UserCheck className="w-6 h-6 text-green-400" />
                    <h2 className="text-2xl font-bold text-white">4. Account Registration and Responsibilities</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    To access our full range of services, you must create an account using Google authentication.
                  </p>
                  
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-4">
                    <h3 className="text-xl font-semibold text-white mb-3">Account Requirements:</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Provide accurate and truthful information</li>
                      <li>Maintain confidentiality of your account credentials</li>
                      <li>Notify us immediately of any unauthorized use</li>
                      <li>Use only one account per individual</li>
                      <li>Keep your profile information current and professional</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-white mb-3">Data Accuracy:</h3>
                    <p className="text-gray-300 leading-relaxed">
                      The effectiveness of our AI recommendations depends on accurate information. Providing false information about your skills, experience, or career goals may result in irrelevant recommendations and potential account suspension.
                    </p>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mt-4">
                    <h3 className="text-xl font-semibold text-white mb-3">Google OAuth and Gmail API Access:</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      By using BioCAN's Job Tracker feature, you may choose to connect your Gmail account through Google OAuth. This connection allows us to automatically track your job applications by reading relevant emails.
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-3">
                      <li>Gmail access is optional and requires your explicit consent through Google's OAuth consent screen</li>
                      <li>We only access emails related to job applications for automatic tracking purposes</li>
                      <li>Gmail data is not used for advertising, marketing, or any purpose other than job application tracking</li>
                      <li>Gmail data is not transferred, sold, or shared with third parties except as necessary to provide the tracking service</li>
                      <li>You can revoke Gmail access at any time through your account settings or Google account settings</li>
                      <li>Our use of Gmail API complies with Google's API Services User Data Policy and Limited Use requirements</li>
                    </ul>
                    <p className="text-gray-300 text-sm italic">
                      <strong>Important:</strong> By granting Gmail access, you acknowledge that you have read and understood our Privacy Policy and agree to our use of Gmail data solely for job application tracking as described.
                    </p>
                  </div>
                </div>

                {/* Payment Terms */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <CreditCard className="w-6 h-6 text-yellow-400" />
                    <h2 className="text-2xl font-bold text-white">5. Payment Terms and Subscription</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    BioCAN operates on an annual subscription model with credits included. Premium features require subscription processed through Razorpay.
                  </p>
                  
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-4">
                    <h3 className="text-xl font-semibold text-white mb-3">Payment Terms:</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>BioCAN uses annual subscription packages with credits included</li>
                      <li>You can sign up and explore features for free</li>
                      <li>Credits are included with subscription packages</li>
                      <li>All payments are processed securely through Razorpay</li>
                      <li>Prices are subject to change with 30 days notice</li>
                      <li>Credits are activated immediately upon subscription purchase</li>
                      <li>Unused credits expire when your subscription expires</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <h3 className="text-xl font-semibold text-white mb-3">Payment Processing:</h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      We use Razorpay for secure payment processing. Credits can be purchased as needed. By providing payment information, you represent that you are authorized to use the payment method and authorize us to charge accordingly.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      <strong>Important:</strong> All sales are final. BioCAN does not offer refunds for purchased credits. Please review our Cancellation & Refund Policy for details.
                    </p>
                  </div>
                </div>

                {/* Third-Party Services */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl font-bold text-white">6. Third-Party Services and Google Compliance</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    BioCAN integrates with third-party services to provide enhanced functionality. Your use of these services is subject to their respective terms and conditions.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Google Services:</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li><strong>Google OAuth:</strong> Used for secure authentication. Subject to Google's OAuth 2.0 policies.</li>
                        <li><strong>Gmail API:</strong> Used for job application tracking (optional, requires consent). Subject to Google's API Services User Data Policy.</li>
                        <li>Our use of Google services complies with Google's Limited Use disclosure requirements</li>
                        <li>Gmail data access is limited to reading job-related emails only</li>
                        <li>Gmail data is not used for advertising or transferred to third parties except as necessary for the service</li>
                        <li>You maintain full control and can revoke access at any time</li>
                      </ul>
                    </div>

                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Payment Processing:</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Payment processing is handled by Razorpay. Your payment information is processed securely and is subject to Razorpay's privacy policy and terms of service.
                      </p>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Third-Party Service Limitations:</h3>
                      <p className="text-gray-300 leading-relaxed mb-2">
                        BioCAN is not responsible for the availability, accuracy, or practices of third-party services. Your interactions with third-party services are solely between you and the third party.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        If you choose to revoke access to any third-party service (such as Gmail), certain features may become unavailable until access is restored.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Intellectual Property */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Lock className="w-6 h-6 text-purple-400" />
                    <h2 className="text-2xl font-bold text-white">7. Intellectual Property Rights</h2>
                  </div>
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

                {/* Privacy and Data Protection */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Privacy and Data Protection</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which forms part of these terms.
                  </p>
                  <h3 className="text-xl font-semibold text-white mb-3">Data Usage:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Career assessment results to provide personalized recommendations</li>
                    <li>Usage patterns to improve our AI algorithms</li>
                    <li>Professional information for job matching</li>
                    <li>Communication preferences for service updates</li>
                    <li>Gmail data (with your explicit consent) for automatic job tracking</li>
                    <li>Resume content for AI-powered optimization and generation</li>
                    <li>Job application data for tracking and analytics</li>
                    <li>Wallet transaction data for subscription management</li>
                    <li>Referral data for program administration</li>
                  </ul>
                </div>

                {/* User Conduct */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                    <h2 className="text-2xl font-bold text-white">9. User Conduct and Prohibited Activities</h2>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">Prohibited Activities:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                    <li>Harassing other users or BioCAN staff</li>
                    <li>Sharing false or misleading career information</li>
                    <li>Attempting to manipulate job recommendations</li>
                    <li>Using the platform for illegal activities</li>
                    <li>Sharing account access with others</li>
                    <li>Uploading malicious content or viruses</li>
                    <li>Interfering with platform operations</li>
                    <li>Using automation features for spam or fraudulent job applications</li>
                    <li>Manipulating the referral system for unauthorized rewards</li>
                    <li>Abusing Gmail integration to access unauthorized email accounts</li>
                    <li>Using resume generation for fraudulent purposes</li>
                    <li>Circumventing payment systems or subscription limitations</li>
                  </ul>
                    <p className="text-gray-300 leading-relaxed">
                    Violation of these terms may result in account suspension or termination without refund. All purchased credits are non-refundable.
                  </p>
                </div>

                {/* Disclaimers */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Disclaimers and Limitations</h2>
                  <div className="space-y-4">
                    <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                      <p className="text-gray-300 leading-relaxed">
                        <strong>Career Guidance:</strong> BioCAN provides career development tools and recommendations based on AI analysis. While we strive for accuracy, we cannot guarantee specific career outcomes or job placement.
                      </p>
                    </div>
                    <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                      <p className="text-gray-300 leading-relaxed">
                        <strong>Service Availability:</strong> We aim for 99.9% uptime but cannot guarantee uninterrupted service. Maintenance, updates, or technical issues may temporarily affect availability.
                      </p>
                    </div>
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                      <p className="text-gray-300 leading-relaxed">
                        <strong>Third-Party Content:</strong> Job listings and some career resources come from third parties. We are not responsible for the accuracy or reliability of external content.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Termination */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <XCircle className="w-6 h-6 text-red-400" />
                    <h2 className="text-2xl font-bold text-white">11. Termination</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You may terminate your account at any time by contacting support. We may terminate accounts for violations of these terms.
                  </p>
                  <h3 className="text-xl font-semibold text-white mb-3">Upon Termination:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Access to premium features will cease immediately</li>
                    <li>Your data will be handled according to our Privacy Policy</li>
                    <li>No refunds will be provided for purchased credits</li>
                    <li>You may request data export within 30 days</li>
                  </ul>
                </div>

                {/* Changes to Terms */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <FileX className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl font-bold text-white">12. Changes to Terms</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or platform notification. Continued use after changes constitutes acceptance of new terms.
                  </p>
                </div>

                {/* Contact Information */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Phone className="w-6 h-6 text-green-400" />
                    <h2 className="text-2xl font-bold text-white">13. Contact Information</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    For questions about these Terms and Conditions, please contact us:
                    <br /><br />
                    Email: tech.biocan@gmail.com
                    <br />
                    Support: arjun@biocan.ai
                    <br />
                    Phone: +91 9044404142
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
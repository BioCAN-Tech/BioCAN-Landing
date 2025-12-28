import Navigation from '@/components/ui/navigation'
import Footer from '@/components/sections/footer'
import { Shield, Database, Brain, Share2, Lock, Eye, Clock, Users, Globe, FileText, Phone, AlertCircle } from 'lucide-react'

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              Your privacy and data security are fundamental to how we build and operate BioCAN's career advancement platform.
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
                {/* Introduction */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    BioCAN (BioCareer Advancement Network) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our career development platform.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    As an AI-powered career guidance platform, we handle sensitive professional and personal information. We are committed to transparency about our data practices and giving you control over your information.
                  </p>
                </div>

                {/* Information We Collect */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Database className="w-6 h-6 text-green-400" />
                    <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">2.1 Personal Information</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm ml-4">
                        <li><strong>Account Information:</strong> Name, email address, profile picture (via Google OAuth)</li>
                        <li><strong>Professional Details:</strong> Education, work experience, skills, career goals</li>
                        <li><strong>Contact Information:</strong> Phone number, location (optional)</li>
                        <li><strong>Payment Information:</strong> Processed securely through Razorpay (we don't store payment details)</li>
                      </ul>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">2.2 Assessment and Career Data</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm ml-4">
                        <li><strong>Personality Assessments:</strong> MBTI results and other career assessment responses</li>
                        <li><strong>Skills Evaluation:</strong> Self-reported skills and AI-analyzed competencies</li>
                        <li><strong>Career Preferences:</strong> Job interests, industry preferences, salary expectations</li>
                        <li><strong>Learning Progress:</strong> Course completions, skill development tracking</li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">2.3 Usage and Technical Data</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm ml-4">
                        <li><strong>Platform Activity:</strong> Features used, time spent, user interactions</li>
                        <li><strong>Search Data:</strong> Job searches, AI chat conversations, content preferences</li>
                        <li><strong>Device Information:</strong> Browser type, device type, IP address</li>
                        <li><strong>Performance Data:</strong> Page load times, error reports, feature usage</li>
                      </ul>
                    </div>

                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">2.4 AI Interaction Data</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm ml-4">
                        <li><strong>Chat History:</strong> Conversations with our AI career assistant</li>
                        <li><strong>Recommendation Feedback:</strong> Ratings and responses to job suggestions</li>
                        <li><strong>Learning Patterns:</strong> How you interact with our AI-powered features</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* How We Use Information */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Brain className="w-6 h-6 text-purple-400" />
                    <h2 className="text-2xl font-bold text-white">3. How We Use Your Information</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Core Services:</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>Provide personalized job recommendations</li>
                        <li>Generate career assessment reports</li>
                        <li>Create customized skill development roadmaps</li>
                        <li>Enable AI-powered career chat assistance</li>
                        <li>Facilitate interview preparation tools</li>
                        <li>Match you with relevant opportunities</li>
                      </ul>
                    </div>

                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Platform Improvement:</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>Enhance AI recommendation algorithms</li>
                        <li>Improve user experience and interface</li>
                        <li>Develop new features and services</li>
                        <li>Conduct research and analytics</li>
                        <li>Ensure platform security and reliability</li>
                        <li>Provide customer support</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Communication:</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>Send service updates and feature announcements</li>
                        <li>Provide career insights and industry news</li>
                        <li>Respond to your inquiries and support requests</li>
                        <li>Send marketing communications (with your consent)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* AI and Machine Learning */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Brain className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl font-bold text-white">4. AI and Machine Learning Data Usage</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    BioCAN uses advanced AI and machine learning technologies to provide personalized career guidance. Here's how your data is used in our AI systems:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">AI Model Training:</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm ml-4">
                        <li>Anonymized data is used to improve recommendation accuracy</li>
                        <li>Career outcome patterns help refine job matching algorithms</li>
                        <li>User feedback helps train our AI chat assistant</li>
                        <li>Assessment responses improve personality-job fit models</li>
                      </ul>
                    </div>

                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Data Protection in AI:</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm ml-4">
                        <li>Personal identifiers are removed from training datasets</li>
                        <li>AI models use aggregated, not individual, data for learning</li>
                        <li>Sensitive information is encrypted and access-controlled</li>
                        <li>Model outputs are reviewed for bias and fairness</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Information Sharing */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Share2 className="w-6 h-6 text-orange-400" />
                    <h2 className="text-2xl font-bold text-white">5. Information Sharing and Disclosure</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Service Providers:</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li><strong>Authentication:</strong> Google OAuth for secure login</li>
                        <li><strong>Payment Processing:</strong> Razorpay for subscription payments</li>
                        <li><strong>Cloud Infrastructure:</strong> Secure hosting and data storage</li>
                        <li><strong>Analytics:</strong> Usage analytics for platform improvement</li>
                      </ul>
                    </div>

                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Job Opportunities:</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>With your explicit consent, we may share your profile with potential employers</li>
                        <li>Job application services require sharing relevant professional information</li>
                        <li>You control what information is shared and with whom</li>
                      </ul>
                    </div>

                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Legal Requirements:</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We may disclose information when required by law, court order, or to protect our rights and safety.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Data Security */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Lock className="w-6 h-6 text-green-400" />
                    <h2 className="text-2xl font-bold text-white">6. Data Security</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We implement industry-standard security measures to protect your information:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Technical Safeguards:</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm ml-4">
                        <li>End-to-end encryption for data transmission</li>
                        <li>Encrypted data storage and backups</li>
                        <li>Secure API endpoints and authentication</li>
                        <li>Regular security audits and updates</li>
                        <li>Intrusion detection and monitoring</li>
                      </ul>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Access Controls:</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm ml-4">
                        <li>Role-based access to user data</li>
                        <li>Multi-factor authentication for staff</li>
                        <li>Audit logs for all data access</li>
                        <li>Regular employee security training</li>
                        <li>Principle of least privilege</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Privacy Rights */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Eye className="w-6 h-6 text-purple-400" />
                    <h2 className="text-2xl font-bold text-white">7. Your Privacy Rights and Choices</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You have several rights regarding your personal information:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Access and Control:</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li><strong>View Your Data:</strong> Access all personal information we have about you</li>
                        <li><strong>Update Information:</strong> Modify your profile and preferences anytime</li>
                        <li><strong>Data Export:</strong> Download your data in a portable format</li>
                        <li><strong>Account Deletion:</strong> Request complete account and data removal</li>
                      </ul>
                    </div>

                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Communication Preferences:</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>Opt out of marketing emails while keeping service notifications</li>
                        <li>Control job recommendation frequency and type</li>
                        <li>Manage AI chat history and data usage</li>
                      </ul>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Data Processing:</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>Object to certain uses of your information</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Limit processing for specific purposes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Data Retention */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock className="w-6 h-6 text-yellow-400" />
                    <h2 className="text-2xl font-bold text-white">8. Data Retention</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We retain your information only as long as necessary to provide our services and fulfill the purposes described in this policy:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                    <li><strong>Active Accounts:</strong> Data retained while your account is active</li>
                    <li><strong>Inactive Accounts:</strong> Data deleted after 2 years of inactivity</li>
                    <li><strong>Assessment Results:</strong> Retained to track career progress (deletable on request)</li>
                    <li><strong>AI Chat History:</strong> Retained for 1 year unless deleted earlier</li>
                    <li><strong>Financial Records:</strong> Retained for 7 years for legal compliance</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed">
                    Upon account deletion, most data is removed immediately, with some anonymized data retained for service improvement.
                  </p>
                </div>

                {/* Children's Privacy */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Users className="w-6 h-6 text-orange-400" />
                    <h2 className="text-2xl font-bold text-white">9. Children's Privacy</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    BioCAN is designed for working professionals and individuals seeking career advancement. Our services are not intended for children under 16. We do not knowingly collect personal information from children under 16. If you believe we have inadvertently collected such information, please contact us immediately.
                  </p>
                </div>

                {/* International Data Transfers */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Globe className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl font-bold text-white">10. International Data Transfers</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    BioCAN operates primarily in India, but we may transfer data internationally to provide our services:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Cloud infrastructure may be located in different countries</li>
                    <li>All transfers comply with applicable data protection laws</li>
                    <li>Appropriate safeguards are in place for international transfers</li>
                    <li>Data is encrypted during transfer and storage</li>
                  </ul>
                </div>

                {/* Changes to Policy */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <FileText className="w-6 h-6 text-green-400" />
                    <h2 className="text-2xl font-bold text-white">11. Changes to This Privacy Policy</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Significant changes will be communicated via email or platform notification at least 30 days before they take effect. Your continued use of BioCAN after changes constitutes acceptance of the updated policy.
                  </p>
                </div>

                {/* Contact Information */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Phone className="w-6 h-6 text-green-400" />
                    <h2 className="text-2xl font-bold text-white">12. Contact Information</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    For questions about this Privacy Policy or to exercise your privacy rights, contact us:
                    <br /><br />
                    Email: team.biocan@gmail.com
                    <br />
                    Support: support@biocan.ai
                    <br /><br />
                    <strong>Note:</strong> We are committed to responding to privacy requests within 30 days. For urgent matters, please mark your email as "Urgent Privacy Request."
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
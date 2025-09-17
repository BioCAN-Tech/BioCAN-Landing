import Navigation from '@/components/ui/navigation'
import Footer from '@/components/sections/footer'
import { Zap, Globe, Clock, Monitor, Smartphone, Wifi, Shield, HeadphonesIcon, CheckCircle, AlertCircle } from 'lucide-react'

export default function ShippingDeliveryPage() {
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
              Service Delivery Policy
            </h1>
            <p className="text-xl text-gray-300">
              BioCAN is a digital career development platform. Learn how our AI-powered services are delivered instantly to accelerate your biotechnology career.
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
                {/* Digital Service Delivery */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Globe className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl font-bold text-white">1. Digital Service Delivery</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    BioCAN (BioCareer Advancement Network) provides 100% digital career development services. We do not sell or ship any physical products. All our services are delivered electronically through our web platform at app.biocan.ai.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-4">What This Means:</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                        <li><strong>No Physical Shipping:</strong> There are no physical items to ship or deliver</li>
                        <li><strong>Instant Access:</strong> Services are available immediately upon subscription activation</li>
                        <li><strong>Global Availability:</strong> Accessible worldwide with an internet connection</li>
                      </ul>
                    </div>
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                        <li><strong>24/7 Access:</strong> Use our platform anytime, anywhere</li>
                        <li><strong>Real-time Updates:</strong> Features and content are updated automatically</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Instant Service Activation */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Zap className="w-6 h-6 text-yellow-400" />
                    <h2 className="text-2xl font-bold text-white">2. Instant Service Activation</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                        Free Services:
                      </h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li><strong>Account Creation:</strong> Immediate access upon Google OAuth sign-in</li>
                        <li><strong>Basic Assessments:</strong> Available immediately after registration</li>
                        <li><strong>Career Exploration:</strong> Basic job recommendations start right away</li>
                        <li><strong>Profile Building:</strong> Begin creating your professional profile instantly</li>
                      </ul>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                        Premium Services:
                      </h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li><strong>Payment Confirmation:</strong> Services activate within seconds of successful Razorpay payment</li>
                        <li><strong>AI Features:</strong> Advanced career coaching available immediately</li>
                        <li><strong>Premium Content:</strong> Full access to skill roadmaps and industry insights</li>
                        <li><strong>Priority Support:</strong> Enhanced support features activate instantly</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Digital Service Components */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">3. Digital Service Components</h2>

                  <h3 className="text-xl font-semibold text-white mb-4">Core Platform Services:</h3>
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-6">
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>AI-powered career assessments (MBTI, skills evaluation)</li>
                      <li>Personalized job recommendations engine</li>
                      <li>Interactive skill development roadmaps</li>
                      <li>AI career chat assistant</li>
                      <li>Professional profile optimization tools</li>
                      <li>Interview preparation modules</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Premium Add-ons:</h3>
                  <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-lg p-4 mb-6">
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Advanced AI coaching sessions</li>
                      <li>Direct job application services</li>
                      <li>Industry networking opportunities</li>
                      <li>Exclusive career insights and reports</li>
                      <li>Priority customer support</li>
                      <li>Custom career journey planning</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Delivery Method:</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    All services are delivered through our secure web platform:
                  </p>
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Responsive web interface accessible on all devices</li>
                      <li>Cloud-based data storage and synchronization</li>
                      <li>Real-time AI processing and recommendations</li>
                      <li>Secure user authentication and data protection</li>
                    </ul>
                  </div>
                </div>

                {/* Service Access Requirements */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Monitor className="w-6 h-6 text-green-400" />
                    <h2 className="text-2xl font-bold text-white">4. Service Access Requirements</h2>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Technical Requirements:</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-3">Minimum Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm ml-4">
                        <li>Stable internet connection (broadband recommended)</li>
                        <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
                        <li>JavaScript enabled</li>
                        <li>Cookies enabled for session management</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-3">Optimal Experience:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm ml-4">
                        <li>High-speed internet (5+ Mbps)</li>
                        <li>Latest browser versions</li>
                        <li>Desktop or tablet for best interface experience</li>
                        <li>Google account for seamless authentication</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Geographic Availability:</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    BioCAN services are available globally, with primary focus on:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong>Primary Markets:</strong> India, Southeast Asia, Middle East</li>
                    <li><strong>Global Access:</strong> Available worldwide with English language support</li>
                    <li><strong>Time Zones:</strong> Platform operates 24/7 across all time zones</li>
                    <li><strong>Localization:</strong> Content optimized for biotechnology markets globally</li>
                  </ul>
                </div>

                {/* Service Availability and Uptime */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="w-6 h-6 text-purple-400" />
                    <h2 className="text-2xl font-bold text-white">5. Service Availability and Uptime</h2>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Uptime Commitment:</h3>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-6">
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li><strong>Target Uptime:</strong> 99.9% service availability</li>
                      <li><strong>Monitoring:</strong> 24/7 system monitoring and automated alerts</li>
                      <li><strong>Maintenance:</strong> Scheduled maintenance during low-usage hours</li>
                      <li><strong>Backup Systems:</strong> Redundant infrastructure for reliability</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Planned Maintenance:</h3>
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-6">
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Advance notification via email and in-app alerts</li>
                      <li>Typically scheduled during weekend off-peak hours</li>
                      <li>Usually completed within 2-4 hours</li>
                      <li>Critical updates may require shorter emergency maintenance</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Service Interruptions:</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    In case of unexpected service interruptions:
                  </p>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Real-time status updates on our platform</li>
                      <li>Email notifications to affected users</li>
                      <li>Estimated resolution time provided</li>
                      <li>Service credits for extended outages</li>
                    </ul>
                  </div>
                </div>

                {/* Data and Content Delivery */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl font-bold text-white">6. Data and Content Delivery</h2>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Real-time Data Processing:</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                        <li><strong>Assessment Results:</strong> Generated and displayed instantly upon completion</li>
                        <li><strong>Job Recommendations:</strong> Updated in real-time based on your profile changes</li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                        <li><strong>AI Insights:</strong> Processed and delivered within seconds of requests</li>
                        <li><strong>Progress Tracking:</strong> Automatically updated as you complete activities</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Content Updates:</h3>
                  <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-white mb-3">Automatic Updates:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>New job listings added daily</li>
                      <li>Industry insights updated weekly</li>
                      <li>AI algorithms continuously improved</li>
                      <li>Platform features enhanced regularly</li>
                    </ul>
                  </div>

                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-3">User-Generated Content:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Profile updates reflected immediately</li>
                      <li>Assessment retakes available anytime</li>
                      <li>Chat history preserved in real-time</li>
                      <li>Saved jobs synchronized instantly</li>
                    </ul>
                  </div>
                </div>

                {/* Multi-Platform Access */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Smartphone className="w-6 h-6 text-green-400" />
                    <h2 className="text-2xl font-bold text-white">7. Multi-Platform Access</h2>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Device Compatibility:</h3>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <Monitor className="w-4 h-4 mr-2" />
                        Desktop
                      </h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm ml-4">
                        <li>Windows 10+</li>
                        <li>macOS 10.15+</li>
                        <li>Linux (Ubuntu, etc.)</li>
                        <li>Chrome OS</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <Smartphone className="w-4 h-4 mr-2" />
                        Mobile
                      </h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm ml-4">
                        <li>iOS 14+ (Safari)</li>
                        <li>Android 8+ (Chrome)</li>
                        <li>Responsive web design</li>
                        <li>Touch-optimized interface</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-3">Tablet</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm ml-4">
                        <li>iPad (Safari)</li>
                        <li>Android tablets</li>
                        <li>Windows tablets</li>
                        <li>Optimized layouts</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Synchronization:</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Your BioCAN account and data synchronize seamlessly across all devices:
                  </p>
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Single sign-on across all platforms</li>
                      <li>Real-time data synchronization</li>
                      <li>Progress saved automatically</li>
                      <li>Preferences maintained across devices</li>
                    </ul>
                  </div>
                </div>

                {/* Customer Support */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <HeadphonesIcon className="w-6 h-6 text-yellow-400" />
                    <h2 className="text-2xl font-bold text-white">8. Customer Support</h2>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Getting Help:</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Since our services are digital, most issues can be resolved quickly through our support channels:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-3">Self-Service Options:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm ml-4">
                        <li>In-platform help documentation</li>
                        <li>Video tutorials and guides</li>
                        <li>FAQ section with common solutions</li>
                        <li>AI chat assistant for instant help</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-3">Direct Support:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm ml-4">
                        <li>Email support: support@biocan.ai</li>
                        <li>Response time: 24-48 hours</li>
                        <li>Priority support for premium users</li>
                        <li>Technical troubleshooting assistance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
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
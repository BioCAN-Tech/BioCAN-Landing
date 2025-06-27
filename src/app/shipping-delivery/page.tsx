import Navigation from '@/components/ui/navigation'
import Footer from '@/components/sections/footer'

export default function ShippingDeliveryPage() {
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
              Service Delivery Policy
            </h1>
            <p className="text-xl text-gray-300">
              How BioCAN delivers our AI-powered career intelligence services
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
                  <h2 className="text-2xl font-bold text-white mb-4">1. Digital Service Delivery</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    BioCAN provides digital services delivered through our online platform. All services are delivered electronically, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>AI-powered career assessments and reports</li>
                    <li>Personalized career roadmaps and development plans</li>
                    <li>Access to our career intelligence platform</li>
                    <li>Job application automation tools</li>
                    <li>Industry insights and networking opportunities</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Service Delivery Timeline</h2>
                  <div className="space-y-4">
                    <div className="glass-card p-4 rounded-xl">
                      <h3 className="text-lg font-semibold text-white mb-2">Instant Access Services</h3>
                      <p className="text-gray-300 text-sm">Platform access, basic career assessment tools - Available immediately upon subscription</p>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <h3 className="text-lg font-semibold text-white mb-2">AI Career Assessment</h3>
                      <p className="text-gray-300 text-sm">Comprehensive career analysis report - Delivered within 24-48 hours</p>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <h3 className="text-lg font-semibold text-white mb-2">Custom Career Roadmap</h3>
                      <p className="text-gray-300 text-sm">Personalized development plan - Delivered within 3-5 business days</p>
                    </div>
                    <div className="glass-card p-4 rounded-xl">
                      <h3 className="text-lg font-semibold text-white mb-2">Premium Consultation</h3>
                      <p className="text-gray-300 text-sm">One-on-one career strategy session - Scheduled within 7 business days</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Platform Access</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Upon successful subscription:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>You will receive login credentials via email within 15 minutes</li>
                    <li>Access to the BioCAN platform is available 24/7</li>
                    <li>All digital resources are accessible from your dashboard</li>
                    <li>Mobile app access (when available) will be provided automatically</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Report and Document Delivery</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    All reports and documents are delivered through:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Your BioCAN platform dashboard</li>
                    <li>Email notifications with download links</li>
                    <li>PDF format for easy viewing and printing</li>
                    <li>Secure, password-protected access when required</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Service Availability</h2>
                  <p className="text-gray-300 leading-relaxed">
                    Our platform is designed for 99.9% uptime. In case of technical issues or maintenance:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                    <li>Scheduled maintenance will be announced 48 hours in advance</li>
                    <li>Emergency maintenance notifications will be sent immediately</li>
                    <li>Alternative access methods will be provided when possible</li>
                    <li>Service credits may be applicable for extended downtime</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Support and Assistance</h2>
                  <p className="text-gray-300 leading-relaxed">
                    For delivery-related queries or technical support:
                    <br />
                    Email: arjun@biocan.ai
                    <br />
                    Phone: +91 9044404142
                    <br />
                    Support Hours: Monday to Friday, 9 AM to 6 PM IST
                    <br />
                    Emergency Support: Available 24/7 for critical issues
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
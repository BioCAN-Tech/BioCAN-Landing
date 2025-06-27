import Navigation from '@/components/ui/navigation'
import Footer from '@/components/sections/footer'

export default function CancellationRefundPage() {
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
              Cancellation & Refund Policy
            </h1>
            <p className="text-xl text-gray-300">
              Understanding our cancellation and refund policies for BioCAN services
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
                  <h2 className="text-2xl font-bold text-white mb-4">1. Subscription Cancellation</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    You may cancel your BioCAN subscription at any time through:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Your account dashboard under "Subscription Settings"</li>
                    <li>Contacting our support team at arjun@biocan.ai</li>
                    <li>Calling us at +91 9044404142</li>
                  </ul>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    Cancellations will take effect at the end of your current billing cycle.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Refund Eligibility</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We offer refunds under the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong>30-Day Money-Back Guarantee:</strong> Full refund available within 30 days of initial subscription</li>
                    <li><strong>Technical Issues:</strong> If our platform is unavailable for more than 48 consecutive hours</li>
                    <li><strong>Billing Errors:</strong> If you were charged incorrectly due to our system error</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Refund Process</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    To request a refund:
                  </p>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
                    <li>Contact our support team with your refund request</li>
                    <li>Provide your account details and reason for refund</li>
                    <li>Allow 5-7 business days for processing</li>
                    <li>Refunds will be credited to your original payment method</li>
                  </ol>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Non-Refundable Services</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The following services are non-refundable:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>One-time career assessment reports already delivered</li>
                    <li>Personalized career coaching sessions already completed</li>
                    <li>Job application services already executed</li>
                    <li>Premium features used beyond the trial period</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Pro-rated Refunds</h2>
                  <p className="text-gray-300 leading-relaxed">
                    For annual subscriptions cancelled after the 30-day window, we may offer pro-rated refunds on a case-by-case basis, particularly for unused portions of the service due to exceptional circumstances.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Contact for Refunds</h2>
                  <p className="text-gray-300 leading-relaxed">
                    For all cancellation and refund requests, please contact:
                    <br />
                    Email: arjun@biocan.ai
                    <br />
                    Phone: +91 9044404142
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
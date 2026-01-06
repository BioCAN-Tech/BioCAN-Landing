import Navigation from '@/components/ui/navigation'
import Footer from '@/components/sections/footer'
import { CheckCircle2, XCircle, AlertTriangle, Clock, CreditCard, Shield, FileText, HelpCircle } from 'lucide-react'

export default function CancellationRefundPage() {
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
                <strong>Last updated:</strong> 01/Jan/2026
              </p>

              <div className="space-y-8">
                {/* Policy Overview */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Policy Overview</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    BioCAN operates on an annual subscription model with credits included. This policy outlines our payment terms, account management, and no-refund policy to ensure transparency and clarity for all users.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    You can sign up and explore features for free. Annual subscription packages include credits for premium features. All subscription purchases are final and non-refundable. Unused credits expire when your subscription expires.
                  </p>
                </div>

                {/* Subscription Types */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <CreditCard className="w-6 h-6 text-purple-400" />
                    <h2 className="text-2xl font-bold text-white">2. Subscription Types and Billing</h2>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Available Plans:</h3>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Payment Information:</h3>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>BioCAN uses annual subscription packages with credits</li>
                      <li>You can sign up and explore features for free</li>
                      <li>Credits are included with subscription packages</li>
                      <li>Payments are processed securely through Razorpay</li>
                      <li>Unused credits expire when your subscription expires</li>
                      <li>Prices displayed in Indian Rupees (INR)</li>
                    </ul>
                  </div>
                </div>

                {/* Account Management */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="w-6 h-6 text-green-400" />
                    <h2 className="text-2xl font-bold text-white">3. Account Management</h2>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Subscription-Based System:</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    BioCAN uses annual subscription packages that include credits for premium features.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">How It Works:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm ml-4">
                        <li>Sign up for free and explore features</li>
                        <li>Subscribe to an annual package to get credits</li>
                        <li>Credits are valid for the duration of your subscription</li>
                        <li>Unused credits expire when subscription expires</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Account Deactivation:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm ml-4">
                        <li><strong>Voluntary Closure:</strong> You can request account closure anytime by contacting support</li>
                        <li><strong>Data Export:</strong> Request your data before account closure</li>
                        <li><strong>No Refunds:</strong> Credits are non-refundable after purchase</li>
                        <li><strong>Reactivation:</strong> Closed accounts cannot be reactivated - requires new registration</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">What You Keep:</h3>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Credits remain available for the duration of your active subscription</li>
                      <li>All assessment results and career data permanently saved</li>
                      <li>Access to features based on available credits while subscription is active</li>
                      <li>All future platform updates included during subscription period</li>
                    </ul>
                  </div>
                </div>

                {/* Refund Policy */}
                <div className="border-l-4 border-red-500 pl-6 bg-red-500/5 p-4 rounded-r-lg">
                  <div className="flex items-start space-x-3">
                    <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">4. Refund Policy</h2>
                      
                      <div className="bg-red-900/30 border-2 border-red-500/50 rounded-lg p-6 mb-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <AlertTriangle className="w-8 h-8 text-red-400" />
                          <h3 className="text-2xl font-bold text-white">NO REFUNDS POLICY</h3>
                        </div>
                        <p className="text-gray-200 leading-relaxed mb-4 text-lg">
                          <strong>CRITICAL NOTICE:</strong> BioCAN operates under a strict NO REFUNDS policy. All purchases are final and non-refundable.
                        </p>
                        <div className="bg-red-950/50 border border-red-400/30 rounded-lg p-4">
                          <p className="text-gray-200 leading-relaxed mb-3 font-semibold">
                            This applies to ALL purchases including:
                          </p>
                          <ul className="list-disc list-inside text-gray-200 space-y-2 ml-4">
                            <li>Wallet credits and top-ups</li>
                            <li>Any additional services or features</li>
                            <li>All credit purchases</li>
                          </ul>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-4">No Refund Policy Details:</h3>
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
                        <p className="text-gray-300 leading-relaxed mb-4">
                          <strong>Important:</strong> All sales are final. BioCAN does not offer refunds for any purchases, including wallet credits and top-ups.
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                          <li>Wallet credits are non-refundable once purchased</li>
                          <li>Payment confirmation constitutes acceptance of no-refund policy</li>
                          <li>Users are encouraged to explore features before purchasing credits</li>
                          <li>No refunds for unused wallet credits</li>
                        </ul>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-4">Extremely Limited Exception Cases:</h3>
                      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mb-6">
                        <p className="text-gray-300 leading-relaxed mb-3">
                          <strong>Note:</strong> Refunds are ONLY considered in cases of genuine technical or billing errors, and only after thorough investigation. These are extremely rare exceptions.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-3">
                              <CheckCircle2 className="w-5 h-5 text-green-400" />
                              <h4 className="font-semibold text-white">May Consider (Rare):</h4>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm ml-4">
                              <li>Duplicate charges due to payment gateway error</li>
                              <li>Unauthorized transactions (verified fraud)</li>
                              <li>Critical technical issues preventing ALL access (verified)</li>
                              <li>Payment processing errors (verified by payment provider)</li>
                            </ul>
                            <p className="text-gray-300 text-xs mt-3 italic">
                              All exception requests require documentation and investigation. Approval is not guaranteed.
                            </p>
                          </div>
                          
                          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-3">
                              <XCircle className="w-5 h-5 text-red-400" />
                              <h4 className="font-semibold text-white">NO Refund (Standard):</h4>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm ml-4">
                              <li>Change of mind after purchase</li>
                              <li>Dissatisfaction with features or results</li>
                              <li>Failure to use premium features or wallet credits</li>
                              <li>Account violations leading to termination</li>
                              <li>Device or browser compatibility issues</li>
                              <li>Unused subscription time or wallet credits</li>
                              <li>Not understanding features before purchase</li>
                              <li>Preferring a different service</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-4">Why No Refunds?</h3>
                      <p className="text-gray-300 leading-relaxed mb-2">
                        Our strict no-refund policy is essential for maintaining affordable pricing and sustainable service:
                      </p>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>Credit-based system allows you to pay only for what you use</li>
                        <li>Free signup allows you to explore features before purchasing credits</li>
                        <li>Instant access to premium features upon credit purchase</li>
                        <li>Digital services are delivered immediately and cannot be "returned"</li>
                        <li>AI processing and infrastructure costs are incurred immediately</li>
                        <li>Prevents abuse and ensures fair pricing for all users</li>
                      </ul>
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mt-4">
                        <p className="text-gray-300 leading-relaxed">
                          <strong>By making a purchase, you acknowledge and agree to this no-refund policy.</strong> We strongly recommend trying our free features and reviewing all documentation before making any purchase.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exception Request Process */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <HelpCircle className="w-6 h-6 text-yellow-400" />
                    <h2 className="text-2xl font-bold text-white">5. Exception Request Process</h2>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">For Technical or Billing Issues Only:</h3>
                  
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mb-6">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      <strong>Important:</strong> Exception requests are ONLY for genuine technical or billing errors. Customer dissatisfaction, change of mind, or failure to use features are NOT valid grounds for refund. Approval is extremely rare and not guaranteed.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">1</div>
                      <h4 className="font-semibold text-white mb-2">Contact Support</h4>
                      <p className="text-gray-300 text-sm">Email arjun@biocan.ai with "Technical Issue" or "Billing Error" as subject. Include all required documentation.</p>
                    </div>
                    
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">2</div>
                      <h4 className="font-semibold text-white mb-2">Provide Documentation</h4>
                      <p className="text-gray-300 text-sm">Include transaction details, screenshots, error logs, and clear description of the verified technical or billing issue</p>
                    </div>
                    
                    <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">3</div>
                      <h4 className="font-semibold text-white mb-2">Investigation</h4>
                      <p className="text-gray-300 text-sm">Our team investigates verified technical and billing errors within 5-10 business days. Most requests are denied.</p>
                    </div>
                    
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">4</div>
                      <h4 className="font-semibold text-white mb-2">Resolution</h4>
                      <p className="text-gray-300 text-sm">Only verified technical/billing errors may result in refund processing within 10-15 business days. Approval is rare.</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Required Documentation:</h3>
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-4">
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li><strong>Account Details:</strong> Your BioCAN ID or registered email</li>
                      <li><strong>Transaction ID:</strong> Razorpay payment ID or order number</li>
                      <li><strong>Purchase Date and Time:</strong> Exact timestamp of the transaction</li>
                      <li><strong>Issue Description:</strong> Detailed explanation of the technical or billing problem</li>
                      <li><strong>Supporting Evidence:</strong> Screenshots, error messages, or proof of duplicate charges</li>
                    </ul>
                  </div>

                  <div className="bg-red-900/30 border-2 border-red-500/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-200 text-sm font-semibold mb-2">
                          <strong>CRITICAL REMINDER:</strong>
                        </p>
                        <p className="text-gray-200 text-sm mb-2">
                          Exception requests are ONLY considered for genuine, verified technical issues or billing errors. The following are NOT valid grounds for refund:
                        </p>
                        <ul className="list-disc list-inside text-gray-200 text-sm space-y-1 ml-4">
                          <li>Customer dissatisfaction with features or results</li>
                          <li>Change of mind after purchase</li>
                          <li>Failure to use premium features or wallet credits</li>
                          <li>Not understanding features before purchase</li>
                          <li>Preferring a different service</li>
                          <li>Device or browser compatibility issues</li>
                          <li>Account violations or termination</li>
                        </ul>
                        <p className="text-gray-200 text-sm mt-3 font-semibold">
                          By making any purchase, you explicitly agree to this no-refund policy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Processing & Timeline */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl font-bold text-white">6. Payment Processing & Refund Timeline</h2>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Razorpay Integration:</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    All payments and refunds are processed through Razorpay, India's leading payment gateway. This ensures secure transactions and reliable refund processing.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-4">Refund Timeline:</h3>
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-white mb-4">Processing Time:</h4>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                          <li><strong>Request Review:</strong> 24-48 hours</li>
                          <li><strong>Approval Decision:</strong> 1-2 business days</li>
                        </ul>
                      </div>
                      <div>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                          <li><strong>Refund Initiation:</strong> Within 24 hours of approval</li>
                          <li><strong>Bank Processing:</strong> 3-7 business days</li>
                        </ul>
                      </div>
                    </div>

                    <h4 className="font-semibold text-white mb-3">Refund Methods:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Original payment method (preferred)</li>
                      <li>Bank transfer for card issues</li>
                      <li>Digital wallet refunds</li>
                      <li>UPI reversals</li>
                    </ul>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <p className="text-gray-300 text-sm">
                      <strong>Note:</strong> Bank processing times may vary depending on your financial institution and payment method. International transactions may take longer.
                    </p>
                  </div>
                </div>

                {/* Disputes and Appeals */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">7. Disputes and Appeals</h2>

                  <h3 className="text-xl font-semibold text-white mb-4">If Your Refund Request is Denied:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
                    <li>You'll receive a detailed explanation of the decision</li>
                    <li>You can appeal the decision within 30 days</li>
                    <li>Provide additional information or documentation</li>
                    <li>Senior management will review appeals</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-4">Alternative Resolution (If Applicable):</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    In extremely rare cases where a refund request is denied but a technical issue exists, we may offer alternative solutions at our sole discretion:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Service credits for future subscriptions (rare, case-by-case)</li>
                    <li>Extended access to premium features (if technical issue verified)</li>
                    <li>Technical support to resolve access issues</li>
                    <li>Migration assistance to compatible devices/browsers</li>
                  </ul>
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mt-4">
                    <p className="text-gray-300 text-sm">
                      <strong>Note:</strong> Alternative resolutions are offered at our discretion and are not guaranteed. They are not a substitute for refunds, which are not available except in verified technical/billing error cases.
                    </p>
                  </div>
                </div>

                {/* Special Situations */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">8. Special Situations</h2>

                  <div className="space-y-6">
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Account Violations:</h3>
                      <p className="text-gray-300 leading-relaxed">
                        If your account is terminated for violating our Terms of Service, you are not eligible for refunds. However, you may appeal the termination decision.
                      </p>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Service Changes:</h3>
                      <p className="text-gray-300 leading-relaxed mb-3">
                        If we significantly modify or discontinue features you've paid for, we'll provide:
                      </p>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>30 days advance notice</li>
                        <li>Migration to equivalent features where possible</li>
                        <li>Extended access to compensate for changes (at our discretion)</li>
                        <li>Technical support for transition</li>
                      </ul>
                      <p className="text-gray-300 text-sm mt-3 italic">
                        Note: Refunds are still not available even in case of service changes. We will work to provide equivalent value through alternative features or extended access.
                      </p>
                    </div>

                    <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Technical Issues:</h3>
                      <p className="text-gray-300 leading-relaxed mb-3">
                        If verified technical problems prevent you from using our service for extended periods (7+ days), we may consider service credits or extended access at our sole discretion, after thorough investigation.
                      </p>
                      <p className="text-gray-300 text-sm italic">
                        Note: Refunds are still extremely rare even for technical issues. We prioritize resolving the technical problem and providing extended access rather than refunds.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
                  <p className="text-gray-300 leading-relaxed">
                    For questions about cancellation and refunds, please contact us:
                    <br /><br />
                    Email: team.biocan@gmail.com
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
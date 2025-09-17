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
                <strong>Last updated:</strong> 01/09/2025
              </p>

              <div className="space-y-8">
                {/* Policy Overview */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Policy Overview</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    BioCAN operates on a simple one-time payment model for premium access. This policy outlines our payment terms, account management, and no-refund policy to ensure transparency and clarity for all users.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Our affordable ₹99 INR one-time fee provides lifetime access to premium features without the complexity of subscriptions, renewals, or recurring charges.
                  </p>
                </div>

                {/* Subscription Types */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <CreditCard className="w-6 h-6 text-purple-400" />
                    <h2 className="text-2xl font-bold text-white">2. Subscription Types and Billing</h2>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">Available Plans:</h3>
                  
                  {/* Free Plan */}
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-4">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                      Free Plan
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Basic career assessments</li>
                      <li>Limited job recommendations</li>
                      <li>Basic profile features</li>
                      <li>No payment required</li>
                    </ul>
                  </div>

                  {/* Premium Plan */}
                  <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-lg p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                      Premium Access - ₹99 INR
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Advanced AI career coaching</li>
                      <li>Unlimited job recommendations</li>
                      <li>Premium skill roadmaps</li>
                      <li>Priority support and features</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Payment Information:</h3>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>One-time payment of ₹99 INR for premium access</li>
                      <li>Payments are processed securely through Razorpay</li>
                      <li>No recurring billing or auto-renewal</li>
                      <li>Lifetime access to premium features after payment</li>
                      <li>Price displayed in Indian Rupees (INR)</li>
                    </ul>
                  </div>
                </div>

                {/* Account Management */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="w-6 h-6 text-green-400" />
                    <h2 className="text-2xl font-bold text-white">3. Account Management</h2>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">Premium Access Model:</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    BioCAN uses a one-time payment model - no subscriptions or recurring charges.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">What You Get:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm ml-4">
                        <li>Pay once (₹99 INR) for lifetime premium access</li>
                        <li>No monthly or annual subscriptions</li>
                        <li>No auto-renewal or hidden charges</li>
                        <li>No cancellation needed - it's a one-time purchase</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Account Deactivation:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm ml-4">
                        <li><strong>Voluntary Closure:</strong> You can request account closure anytime by contacting support</li>
                        <li><strong>Data Export:</strong> Request your data before account closure</li>
                        <li><strong>No Refunds:</strong> Premium access is non-refundable after purchase</li>
                        <li><strong>Reactivation:</strong> Closed accounts cannot be reactivated - requires new registration</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">What You Keep:</h3>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Lifetime access to all premium features after one-time payment</li>
                      <li>All assessment results and career data permanently saved</li>
                      <li>Unlimited access to AI chat and premium insights</li>
                      <li>No expiration date on premium features</li>
                      <li>All future platform updates included</li>
                    </ul>
                  </div>
                </div>

                {/* Refund Policy */}
                <div className="border-l-4 border-red-500 pl-6 bg-red-500/5 p-4 rounded-r-lg">
                  <div className="flex items-start space-x-3">
                    <XCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">4. Refund Policy</h2>
                      
                      <h3 className="text-xl font-semibold text-white mb-4">No Refund Policy:</h3>
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
                        <p className="text-gray-300 leading-relaxed mb-4">
                          <strong>Important:</strong> All sales are final. BioCAN does not offer refunds for the one-time premium access fee of ₹99 INR.
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                          <li>Premium access is non-refundable once purchased</li>
                          <li>No trial period or money-back guarantee</li>
                          <li>Payment confirmation constitutes acceptance of no-refund policy</li>
                          <li>Users are encouraged to try free features before upgrading</li>
                        </ul>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-4">Limited Exception Cases:</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <CheckCircle2 className="w-5 h-5 text-green-400" />
                            <h4 className="font-semibold text-white">May Consider Refund:</h4>
                          </div>
                          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm ml-4">
                            <li>Duplicate charges or billing errors by Razorpay</li>
                            <li>Unauthorized transactions due to security breach</li>
                            <li>Technical issues preventing platform access</li>
                            <li>Payment processing errors</li>
                          </ul>
                        </div>
                        
                        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <XCircle className="w-5 h-5 text-red-400" />
                            <h4 className="font-semibold text-white">No Refund Available:</h4>
                          </div>
                          <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm ml-4">
                            <li>Change of mind after purchase</li>
                            <li>Dissatisfaction with features or results</li>
                            <li>Failure to use premium features</li>
                            <li>Account violations leading to termination</li>
                            <li>Device compatibility issues</li>
                          </ul>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-4">Why No Refunds?</h3>
                      <p className="text-gray-300 leading-relaxed mb-2">
                        Our no-refund policy allows us to maintain affordable pricing:
                      </p>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>Low one-time fee of ₹99 keeps costs minimal for users</li>
                        <li>Free features available to evaluate platform before purchase</li>
                        <li>Instant access to premium features upon payment</li>
                        <li>Lifetime access ensures value for money</li>
                        <li>No subscription hassles or recurring charges</li>
                      </ul>
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
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">1</div>
                      <h4 className="font-semibold text-white mb-2">Contact Support</h4>
                      <p className="text-gray-300 text-sm">Email support@biocan.ai with "Technical Issue" or "Billing Error" as subject</p>
                    </div>
                    
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">2</div>
                      <h4 className="font-semibold text-white mb-2">Provide Documentation</h4>
                      <p className="text-gray-300 text-sm">Include transaction details, screenshots, and clear description of the issue</p>
                    </div>
                    
                    <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">3</div>
                      <h4 className="font-semibold text-white mb-2">Investigation</h4>
                      <p className="text-gray-300 text-sm">Our team investigates technical and billing issues within 48-72 hours</p>
                    </div>
                    
                    <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">4</div>
                      <h4 className="font-semibold text-white mb-2">Resolution</h4>
                      <p className="text-gray-300 text-sm">Valid issues may result in refund processing within 5-10 business days</p>
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

                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300 text-sm">
                        <strong>Important:</strong> Exception requests are only considered for genuine technical issues or billing errors. Customer dissatisfaction, change of mind, or failure to use features are not valid grounds for refund.
                      </p>
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

                  <h3 className="text-xl font-semibold text-white mb-4">Alternative Resolution:</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    If you're not satisfied with our refund decision, we may offer alternative solutions:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Service credits for future subscriptions</li>
                    <li>Extended access to premium features</li>
                    <li>Complimentary career coaching sessions</li>
                    <li>Migration to a different subscription plan</li>
                  </ul>
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
                        <li>Opportunity for pro-rated refund</li>
                        <li>Migration to equivalent features</li>
                        <li>Extended access to compensate for changes</li>
                      </ul>
                    </div>

                    <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Technical Issues:</h3>
                      <p className="text-gray-300 leading-relaxed">
                        If technical problems prevent you from using our service for extended periods, we may offer refunds or service credits based on the duration and impact of the outage.
                      </p>
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
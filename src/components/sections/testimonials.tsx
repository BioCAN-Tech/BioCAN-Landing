'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Users, Clock, TrendingUp, Brain, Check } from 'lucide-react'

export default function EarlyInterest() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showEmailForm, setShowEmailForm] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setIsSubmitted(true)
      setEmail('')
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setShowEmailForm(false)
      }, 3000)
    }
  }

  const handleJoinWaitlist = () => {
    setShowEmailForm(true)
  }

  const interestStats = [
    { value: '500+', label: 'Beta Waitlist Signups', icon: Users },
    { value: '15', label: 'Universities Interested', icon: Star },
    { value: '85%', label: 'Say "This is Much Needed"', icon: TrendingUp },
    { value: '3 weeks', label: 'Since We Started Outreach', icon: Clock }
  ]

  return (
    <section id="early-interest" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        {/* Animated Connection Lines */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
              style={{
                left: `${20 + i * 10}%`,
                height: '100%'
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience AI-Powered
              <span className="block gradient-primary">Career Intelligence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be among the first to access our revolutionary platform. Join the waitlist for exclusive early access and beta testing opportunities.
            </p>
          </motion.div>

          {/* Early Interest Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
        >
          {interestStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card p-6 rounded-2xl text-center group hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl md:text-4xl font-bold gradient-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm leading-tight">{stat.label}</div>
            </motion.div>
          ))}
                  </motion.div>

          {/* Join the Movement CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Experience AI-Powered Career Intelligence
                </h3>
                <p className="text-xl text-gray-300 mb-8">
                  Be part of the movement to revolutionize life science careers. Get exclusive updates, 
                  early access opportunities, and connect with like-minded professionals.
                </p>
                
                <AnimatePresence mode="wait">
                  {!showEmailForm ? (
                    <motion.div
                      key="buttons"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
                    >
                      <motion.button
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleJoinWaitlist}
                      >
                        Join Beta Waitlist
                      </motion.button>
                      <motion.button
                        className="glass-card text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = 'https://app.biocan.ai'}
                      >
                        <Brain className="w-5 h-5" />
                        Try Career Assessment
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="email-form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6"
                    >
                      <form onSubmit={handleSubmit}>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email to join beta waitlist"
                            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                            autoFocus
                          />
                          <motion.div
                            className="relative overflow-hidden"
                            layout
                          >
                            <AnimatePresence mode="wait">
                              {!isSubmitted ? (
                                <motion.div
                                  key="submit"
                                  initial={{ opacity: 1 }}
                                  exit={{ opacity: 0, scale: 0.8 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <motion.button
                                    type="submit"
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    Join Beta Waitlist
                                  </motion.button>
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="success"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.8 }}
                                  transition={{ duration: 0.3 }}
                                  className="flex items-center justify-center bg-green-600 text-white px-8 py-3 rounded-xl font-medium min-w-[180px]"
                                >
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                                    className="mr-2"
                                  >
                                    <Check className="w-5 h-5" />
                                  </motion.div>
                                  <motion.span
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                  >
                                    Added to Waitlist!
                                  </motion.span>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        </div>
                      </form>
                      
                      {/* Back Button */}
                      <div className="flex justify-center mt-4">
                        <button
                          onClick={() => setShowEmailForm(false)}
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          ← Back to options
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <p className="text-sm text-gray-400 mt-4">
                  💌 No spam, just exclusive updates • 🚀 Early access priority • 🎯 Beta testing opportunities
                </p>
              </div>
            </div>
          </motion.div>
        </div>
    </section>
  )
} 
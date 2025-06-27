'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Users, Clock, TrendingUp, Brain } from 'lucide-react'

export default function EarlyInterest() {
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
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Beta Waitlist
                  </motion.button>
                  <motion.button
                    className="glass-card text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Brain className="w-5 h-5" />
                    Try Career Assessment
                  </motion.button>
                </div>
                
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
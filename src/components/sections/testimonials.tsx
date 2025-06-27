'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight, Mail, Users, Clock, TrendingUp } from 'lucide-react'

export default function EarlyInterest() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const earlyFeedback = [
    {
      name: 'Dr. Sarah M.',
      role: 'PhD Graduate',
      university: 'Stanford University',
      quote: 'Finally, a platform that understands the unique challenges we face as life science graduates. The career assessment approach sounds exactly what I need.',
      interest: 'Career path clarity',
      status: 'Beta waitlist'
    },
    {
      name: 'Michael R.',
      role: 'Postdoc Researcher',
      university: 'Harvard Medical School',
      quote: 'I\'ve been struggling to transition from academia to industry. BioCAN\'s AI-powered approach could be the bridge I\'ve been looking for.',
      interest: 'Industry transition',
      status: 'Early access signup'
    },
    {
      name: 'Dr. Emily J.',
      role: 'Recent PhD',
      university: 'MIT',
      quote: 'The problem you\'re solving is so real. Most of my classmates are either underemployed or completely lost about career options.',
      interest: 'Skills development',
      status: 'Beta tester interest'
    },
    {
      name: 'David K.',
      role: 'MS Biology',
      university: 'UC Berkeley',
      quote: 'I love that you\'re using AI to solve career misalignment. Traditional career services just don\'t understand the life sciences landscape.',
      interest: 'Personalized guidance',
      status: 'Demo request'
    }
  ]

  const interestStats = [
    { value: '500+', label: 'Beta Waitlist Signups', icon: Users },
    { value: '15', label: 'Universities Interested', icon: Star },
    { value: '85%', label: 'Say "This is Much Needed"', icon: TrendingUp },
    { value: '3 weeks', label: 'Since We Started Outreach', icon: Clock }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % earlyFeedback.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + earlyFeedback.length) % earlyFeedback.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [])

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
          <div className="inline-flex items-center mb-6">
            <Quote className="w-6 h-6 text-blue-400 mr-2" />
            <span className="text-blue-400 font-medium">Early Community Response</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience AI-Powered
            <span className="block gradient-primary">Career Intelligence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be among the first to access our revolutionary platform. Join the waitlist for exclusive early access and beta testing opportunities.
          </p>
        </motion.div>

        {/* Main Feedback Display */}
        <div className="max-w-5xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="relative">
                <Quote className="w-12 h-12 text-blue-400 mb-6 opacity-60" />
                
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic">
                  "{earlyFeedback[currentIndex].quote}"
                </p>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    {/* Avatar with Animation */}
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-0.5"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {earlyFeedback[currentIndex].name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </motion.div>
                    
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        {earlyFeedback[currentIndex].name}
                      </h4>
                      <p className="text-gray-300">
                        {earlyFeedback[currentIndex].role}
                      </p>
                      <p className="text-blue-400 font-medium text-sm">
                        {earlyFeedback[currentIndex].university}
                      </p>
                    </div>
                  </div>

                  <div className="text-left md:text-right">
                    <div className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-2">
                      <Mail className="w-4 h-4 mr-2" />
                      {earlyFeedback[currentIndex].status}
                    </div>
                    <div className="text-gray-400 text-sm">
                      Interested in: <span className="text-blue-400">{earlyFeedback[currentIndex].interest}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              className="glass-card p-3 rounded-lg text-white hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <div className="flex space-x-2">
              {earlyFeedback.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-400' : 'bg-white/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="glass-card p-3 rounded-lg text-white hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

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
                Join the Growing Community
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
                  className="glass-card text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
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
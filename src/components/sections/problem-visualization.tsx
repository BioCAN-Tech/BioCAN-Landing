'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  TrendingDown, 
  Clock, 
  AlertTriangle, 
  Target,
  Users,
  Brain,
  Search,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function ProblemVisualization() {
  const [activeStatIndex, setActiveStatIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const problemStats = [
    {
      percentage: 70,
      title: 'Underemployed or Misaligned',
      description: 'Life science graduates are stuck in roles that don\'t match their skills or career goals',
      icon: TrendingDown,
      color: 'from-red-500 to-orange-500',
      detail: 'Despite having advanced degrees, most graduates end up in positions that underutilize their education and potential.',
      impact: 'Lost talent, reduced innovation, career stagnation'
    },
    {
      percentage: 65,
      title: 'Unaware of Career Paths',
      description: 'Students don\'t know what career opportunities exist in their field',
      icon: Search,
      color: 'from-orange-500 to-yellow-500',
      detail: 'The life sciences offer diverse career paths beyond traditional research, but most students only know about academia.',
      impact: 'Missed opportunities, limited career exploration'
    },
    {
      percentage: 58,
      title: 'Feel Underprepared',
      description: 'Graduates lack the industry-specific skills needed for modern biotech roles',
      icon: AlertTriangle,
      color: 'from-yellow-500 to-red-500',
      detail: 'Academic training often doesn\'t align with industry needs, leaving graduates feeling unprepared for real-world challenges.',
      impact: 'Longer job searches, lower starting salaries'
    }
  ]

  const additionalStats = [
    { value: '8-12', unit: 'months', label: 'Average job search duration', icon: Clock },
    { value: '40%', unit: '', label: 'Consider leaving life sciences', icon: TrendingDown },
    { value: '3.2', unit: 'years', label: 'To find ideal role', icon: Target }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveStatIndex((prev) => (prev + 1) % problemStats.length)
        setIsAnimating(false)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextStat = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveStatIndex((prev) => (prev + 1) % problemStats.length)
        setIsAnimating(false)
      }, 300)
    }
  }

  const prevStat = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveStatIndex((prev) => (prev - 1 + problemStats.length) % problemStats.length)
        setIsAnimating(false)
      }, 300)
    }
  }

  const currentStat = problemStats[activeStatIndex]

  return (
    <section id="problem" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900/10 to-slate-900" />
        
        {/* Floating Problem Indicators */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-6">
            <AlertTriangle className="w-6 h-6 text-red-400 mr-2" />
            <span className="text-red-400 font-medium">The Career Crisis</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Life Science Career
            <span className="block text-red-400">Misalignment Problem</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Talented graduates are facing unprecedented challenges in navigating their careers. 
            Here's the reality of what they're experiencing.
          </p>
        </motion.div>

        {/* Main Problem Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Interactive Statistic Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStatIndex}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  {/* Animated Icon */}
                  <motion.div
                    className={`w-24 h-24 rounded-3xl bg-gradient-to-r ${currentStat.color} p-6 mx-auto mb-6 relative`}
                    whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <currentStat.icon className="w-12 h-12 text-white" />
                    
                    {/* Pulse Ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${currentStat.color} opacity-30`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>

                  {/* Animated Percentage */}
                  <motion.div
                    className="relative mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <span className="text-6xl md:text-8xl font-bold gradient-primary">
                      {currentStat.percentage}%
                    </span>
                    
                    {/* Circular Progress Ring */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="2"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: currentStat.percentage / 100 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        style={{
                          rotate: -90,
                          transformOrigin: "50% 50%"
                        }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3b82f6" />
                          <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {currentStat.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {currentStat.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center mt-8 space-x-4">
                <motion.button
                  onClick={prevStat}
                  className="glass-card p-3 rounded-lg text-white hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                
                <div className="flex space-x-2">
                  {problemStats.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveStatIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeStatIndex ? 'bg-red-400' : 'bg-white/30'
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={nextStat}
                  className="glass-card p-3 rounded-lg text-white hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Problem Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStatIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 rounded-2xl"
              >
                <h4 className="text-2xl font-bold text-white mb-4">The Reality</h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {currentStat.detail}
                </p>
                <div className="border-l-4 border-red-400 pl-4">
                  <h5 className="text-lg font-semibold text-red-400 mb-2">Impact</h5>
                  <p className="text-gray-300">{currentStat.impact}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Additional Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {additionalStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-4 rounded-xl text-center group hover:scale-105 transition-transform"
                >
                  <stat.icon className="w-6 h-6 text-red-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}<span className="text-lg text-red-400">{stat.unit}</span>
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto relative overflow-hidden">
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-4">
                But What If There Was a Better Way?
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                BioCAN's AI-powered platform addresses each of these problems directly, 
                creating clear pathways to career success in life sciences.
              </p>
              
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const solutionSection = document.getElementById('solution')
                  if (solutionSection) {
                    solutionSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Discover Our Solution
                <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
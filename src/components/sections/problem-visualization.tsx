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
      description: 'Lack industry-specific skills for modern biotech careers',
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
      }, 500)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const nextStat = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveStatIndex((prev) => (prev + 1) % problemStats.length)
        setIsAnimating(false)
      }, 400)
    }
  }

  const prevStat = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveStatIndex((prev) => (prev - 1 + problemStats.length) % problemStats.length)
        setIsAnimating(false)
      }, 400)
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
              left: `${(i * 6.7) % 100}%`,
              top: `${(i * 8.3) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
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

        {/* Main Problem Visualization - Creative Unified Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Combined Statistic & Reality Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-8 relative"
            >
              <div className="glass-card rounded-2xl relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStatIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    {/* Top Section - Statistics */}
                    <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-8 border-b border-white/10">
                      <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                        {/* Icon */}
                        <div className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${currentStat.color} p-6 relative flex-shrink-0`}>
                          <currentStat.icon className="w-12 h-12 text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-end lg:space-x-6 space-y-4 lg:space-y-0">
                            {/* Percentage */}
                            <div className="text-7xl md:text-8xl font-bold gradient-primary leading-none">
                              {currentStat.percentage}%
                            </div>
                            
                            {/* Title & Description */}
                            <div className="flex-1">
                              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
                                {currentStat.title}
                              </h3>
                              <p className="text-gray-300 text-lg leading-relaxed">
                                {currentStat.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Section - Impact Only */}
                    <div className="p-8">
                      <div className="border-l-4 border-red-400 pl-6 py-4 bg-red-500/5 rounded-r-2xl">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                            <AlertTriangle className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold text-red-400 mb-3">Impact</h4>
                            <p className="text-gray-300 leading-relaxed text-lg">
                              {currentStat.impact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <motion.button
                  onClick={prevStat}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/30 hover:text-white/60 transition-all duration-200 p-2"
                  whileHover={{ scale: 1.2, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>

                <motion.button
                  onClick={nextStat}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/30 hover:text-white/60 transition-all duration-200 p-2"
                  whileHover={{ scale: 1.2, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Additional Stats - Vertical Stack */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="space-y-4">
                {additionalStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-card p-4 rounded-2xl group hover:scale-105 transition-all duration-300 border border-white/5 hover:border-red-400/30"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <stat.icon className="w-6 h-6 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-white leading-none mb-1">
                          {stat.value}
                          <span className="text-sm text-red-400 ml-1">{stat.unit}</span>
                        </div>
                        <div className="text-xs text-gray-400 leading-tight">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  )
} 
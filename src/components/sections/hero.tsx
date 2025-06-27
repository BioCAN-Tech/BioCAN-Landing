'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, Brain, Target, TrendingUp, Sparkles, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/button'
import { scrollToSection } from '@/lib/utils'

export default function Hero() {
  const [currentPainPoint, setCurrentPainPoint] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const painPoints = [
    { stat: '70%', text: 'are underemployed or in misaligned roles', icon: Target },
    { stat: '65%', text: "don't know what career paths exist", icon: Brain },
    { stat: '58%', text: 'feel underprepared for industry roles', icon: TrendingUp },
  ]

  const floatingElements = [
    { id: 1, delay: 0, x: 20, y: 30 },
    { id: 2, delay: 1, x: -20, y: -20 },
    { id: 3, delay: 2, x: 30, y: 10 },
    { id: 4, delay: 1.5, x: -30, y: -30 },
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentPainPoint((prev) => (prev + 1) % painPoints.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
        
        {/* Animated Floating Elements */}
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"
            style={{
              left: `${20 + element.x}%`,
              top: `${20 + element.y}%`,
            }}
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: element.delay }}
          />
        ))}

        {/* Particle Effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Coming Soon Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center mb-8">
            <div className="glass-card px-6 py-3 rounded-full relative overflow-hidden group cursor-pointer">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative flex items-center">
                <Sparkles className="w-4 h-4 text-blue-400 mr-2 animate-pulse" />
                <span className="text-blue-400 font-medium">🚀 Launching Soon - AI-Powered Career Intelligence</span>
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Navigate Your
              </motion.span>
              <motion.span 
                className="block gradient-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Life Science Career
              </motion.span>
              <motion.span 
                className="block text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.8 }}
              >
                with AI Intelligence
              </motion.span>
            </h1>
          </motion.div>

          {/* Problem Statement */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Life science students and graduates face critical career navigation challenges. 
              <span className="gradient-primary font-semibold"> BioCAN's AI-powered platform</span> solves 
              the career misalignment crisis affecting thousands of talented professionals.
            </p>
          </motion.div>

          {/* Interactive Pain Points */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="max-w-5xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPainPoint}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-8 md:p-12 rounded-3xl relative group cursor-pointer"
                  onMouseEnter={() => setCurrentPainPoint(currentPainPoint)}
                >
                  <div className="flex items-center justify-center mb-6">
                    <motion.div
                      className="w-20 h-20 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {React.createElement(painPoints[currentPainPoint].icon, { className: "w-10 h-10 text-white" })}
                    </motion.div>
                  </div>
                  
                  <motion.div
                    className="text-4xl md:text-6xl font-bold gradient-primary mb-4"
                    key={`stat-${currentPainPoint}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    {painPoints[currentPainPoint].stat}
                  </motion.div>
                  
                  <p className="text-xl md:text-2xl text-white">
                    of life science graduates {painPoints[currentPainPoint].text}
                  </p>

                  {/* Progress indicators */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {painPoints.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`w-3 h-3 rounded-full cursor-pointer ${
                          index === currentPainPoint ? 'bg-blue-400' : 'bg-white/30'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setCurrentPainPoint(index)}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Interactive CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('solution')}
                className="group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative">See How We Solve This</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="glass"
                size="lg"
                onClick={() => scrollToSection('demo')}
                className="group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Preview
              </Button>
            </motion.div>
          </motion.div>

          {/* Early Access CTA */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-6 rounded-2xl max-w-2xl mx-auto"
          >
            <p className="text-gray-300 mb-4">
              Be among the first to experience AI-powered career intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email for early access"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button variant="primary" className="whitespace-nowrap">
                Get Early Access
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection('problem')}
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center relative overflow-hidden">
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <ChevronDown className="w-5 h-5 text-white/60 mx-auto mt-2 animate-bounce" />
      </motion.div>
    </section>
  )
} 
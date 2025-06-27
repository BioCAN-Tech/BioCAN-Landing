'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Brain, 
  TrendingUp, 
  MapPin, 
  FileText, 
  Users,
  ChevronRight,
  Sparkles,
  Target,
  Lightbulb,
  Rocket
} from 'lucide-react'

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const mainFeatures = [
    {
      phase: 'DISCOVER',
      title: 'AI-Powered Career Assessment',
      description: 'Intelligent matching of skills, interests, and market opportunities with real-time industry intelligence.',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Skills gap analysis with industry data',
        'Personality & interest profiling',
        'Market opportunity mapping',
        'Real-time industry intelligence'
      ],
      interactive: true
    },
    {
      phase: 'DEVELOP',
      title: 'Personalized Career Roadmaps',
      description: 'Step-by-step guidance with interactive milestones and skill development programs.',
      icon: Target,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Custom learning pathways',
        'Interactive milestone tracking',
        'Skill development programs',
        'Progress analytics & insights'
      ],
      interactive: true
    },
    {
      phase: 'DEPLOY',
      title: 'Automated Job Application System',
      description: 'AI-assisted career deployment with automated applications and industry connections.',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      features: [
        'AI resume & cover letter generation',
        'Mass application automation',
        'Industry event recommendations',
        'Live trend monitoring'
      ],
      interactive: true
    }
  ]

  const additionalFeatures = [
    {
      icon: Search,
      title: 'Industry Happenings',
      description: 'AI gathers live data on industry trends and suggests relevant events.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Expert Network Access',
      description: 'Connect with industry professionals and thought leaders.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Career Analytics',
      description: 'Track your progress with detailed career advancement metrics.',
      color: 'from-teal-500 to-blue-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          />
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
            <Sparkles className="w-6 h-6 text-blue-400 mr-2" />
            <span className="text-blue-400 font-medium">AI-Powered Solution</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Career Intelligence
            <span className="block gradient-primary">Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            BioCAN's three-phase approach uses AI to transform how life science professionals 
            discover opportunities, develop skills, and deploy their careers.
          </p>
        </motion.div>

        {/* Main Feature Cards - DISCOVER, DEVELOP, DEPLOY */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.phase}
              variants={itemVariants}
              className="relative group"
              onMouseEnter={() => setActiveFeature(index)}
            >
              <motion.div
                className="glass-card p-8 rounded-3xl h-full relative overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Phase Badge */}
                <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${feature.color} text-white text-sm font-bold mb-6`}>
                  {feature.phase}
                </div>

                {/* Animated Icon */}
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} p-5 mb-6 relative`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                  
                  {/* Pulse Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-30`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Interactive Feature List */}
                <div className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-blue-400" />
                      {item}
                    </motion.div>
                  ))}
                </div>

                {/* Interactive Hover Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                {/* Active State Indicator */}
                {activeFeature === index && (
                  <motion.div
                    layoutId="activeFeature"
                    className="absolute inset-0 rounded-3xl border-2 border-blue-400/50"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Coming Soon Badge for Interactive Features */}
                <div className="absolute top-4 right-4">
                  <div className="glass-card px-3 py-1 rounded-full">
                    <span className="text-xs text-blue-400 font-medium">AI-Powered</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Enhanced by <span className="gradient-primary">AI Intelligence</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-card p-6 rounded-2xl group cursor-pointer relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>

                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Hover Indicator */}
                {hoveredCard === index && (
                  <motion.div
                    className="absolute inset-0 border-2 border-blue-400/30 rounded-2xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-8 rounded-3xl max-w-3xl mx-auto relative overflow-hidden group">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="relative">
              <Lightbulb className="w-12 h-12 text-blue-400 mx-auto mb-4 animate-pulse" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Experience AI-Powered Career Intelligence
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Be among the first to access our revolutionary platform. Join the waitlist for 
                exclusive early access and beta testing opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl group flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Beta Waitlist
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  className="glass-card text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-all duration-200 group flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Try Career Assessment
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
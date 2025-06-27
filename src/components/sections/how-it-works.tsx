'use client'

import { motion } from 'framer-motion'
import { UserPlus, Search, Users2, TrendingUp, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Create Your Profile',
      description: 'Build a comprehensive profile showcasing your expertise, experience, and career aspirations.',
      color: 'from-blue-500 to-cyan-500',
      details: ['Professional background', 'Skills assessment', 'Career goals']
    },
    {
      icon: Search,
      title: 'Discover Opportunities',
      description: 'Our AI engine matches you with relevant jobs, research projects, and networking opportunities.',
      color: 'from-purple-500 to-pink-500',
      details: ['Smart matching', 'Personalized recommendations', 'Real-time updates']
    },
    {
      icon: Users2,
      title: 'Connect & Network',
      description: 'Engage with industry professionals, join expert communities, and build meaningful relationships.',
      color: 'from-green-500 to-emerald-500',
      details: ['Expert mentorship', 'Industry events', 'Community forums']
    },
    {
      icon: TrendingUp,
      title: 'Advance Your Career',
      description: 'Leverage insights, opportunities, and connections to accelerate your biotechnology career.',
      color: 'from-orange-500 to-red-500',
      details: ['Career growth tracking', 'Skill development', 'Achievement recognition']
    }
  ]

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-primary">How It Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your journey to biotechnology career success in four simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-500 relative z-10">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} p-5 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                      {detail}
                    </div>
                  ))}
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-white/30" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
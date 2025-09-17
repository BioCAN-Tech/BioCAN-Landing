'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerSections = [
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Cancellation & Refund', href: '/cancellation-refund' },
        { label: 'Service Delivery', href: '/shipping-delivery' },
        { label: 'Contact Us', href: '/contact' },
      ]
    }
  ]

  return (
          <footer className="bg-black/30 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Contact Information - Compact Layout */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-6">
              <div className="flex items-center text-gray-500 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                <span>arjun@biocan.ai</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 9044404142</span>
              </div>
            </div>

            {/* Legal Links - Compact */}
            <div className="border-t border-white/5 pt-4">
              <div className="flex flex-wrap items-center justify-center gap-4">
                {footerSections[0].links.map((link, index) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-gray-500 hover:text-gray-400 transition-colors text-xs"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 BioCAN. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-gray-400 text-sm">Made with ❤️ for Lifescience professionals</span>
            <button
              onClick={scrollToTop}
              className="glass-card p-2 rounded-lg text-gray-400 hover:text-white hover:scale-110 transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 
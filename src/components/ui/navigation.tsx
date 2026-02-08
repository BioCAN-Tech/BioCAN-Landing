'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { cn, scrollToSection } from '@/lib/utils'
import Button from './button'
import Link from 'next/link'

interface NavigationProps {
  className?: string
}

export default function Navigation({ className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Pricing', href: 'https://app.biocan.ai/pricing' }
  ]

  const handleNavClick = (href: string) => {
    scrollToSection(href)
    setIsOpen(false)
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-nav py-4' : 'py-6',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <img 
              src="/Images/BioCAN_Logo.png" 
              alt="BioCAN Logo" 
              className="w-24 h-24 rounded-lg object-contain hover:scale-105 transition-transform duration-200"
            />
          </Link>

          {/* Desktop Navigation & CTA Buttons */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                onClick={() => window.location.href = 'https://app.biocan.ai'}
              >
                Sign In
              </Button>
              <Button
                variant="primary"
                onClick={() => window.location.href = 'https://app.biocan.ai'}
              >
                Get Started
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg glass-card text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 glass-card rounded-2xl p-6 animate-slide-down">
            <div className="space-y-3">
              {/* Pricing Link as Button Style */}
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-4 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
              
              {/* Divider */}
              <div className="border-t border-white/10 my-4"></div>
              
              {/* Auth Buttons */}
              <Button
                variant="ghost"
                className="w-full"
                onClick={() => window.location.href = 'https://app.biocan.ai'}
              >
                Sign In
              </Button>
              <Button
                variant="primary"
                className="w-full"
                onClick={() => window.location.href = 'https://app.biocan.ai'}
              >
                Get Started
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 
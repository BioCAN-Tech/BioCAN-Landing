'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { cn, scrollToSection } from '@/lib/utils'
import Button from './button'

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

  const navItems: any[] = []

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
                  <div className="flex items-center">
          <img 
            src="/Images/BioCAN_Logo.png" 
            alt="BioCAN Logo" 
            className="w-20 h-20 rounded-lg object-contain"
          />
        </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => handleNavClick('contact')}
            >
              Sign In
            </Button>
            <Button
              variant="primary"
              onClick={() => handleNavClick('contact')}
            >
              Get Started
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
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
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left text-gray-300 hover:text-white py-2 transition-colors duration-200"
                >
                  {item.label}
                </button>
                              ))}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => handleNavClick('contact')}
                  >
                    Sign In
                  </Button>
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => handleNavClick('contact')}
                  >
                    Get Started
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
          </div>
        )}
      </div>
    </nav>
  )
} 
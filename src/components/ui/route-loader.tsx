'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'

export default function RouteLoader() {
  const pathname = usePathname()
  const [loading, setLoading] = useState(false)
  const isInitialMount = useRef(true)
  const prevPathname = useRef(pathname)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Skip loading on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false
      prevPathname.current = pathname
      return
    }

    // Only show loader if pathname actually changed
    if (pathname !== prevPathname.current) {
      // Clear any existing timeout first
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }

      setLoading(true)
      prevPathname.current = pathname

      // Hide loader after a short delay (Next.js navigation is fast)
      // This gives enough time for the page to start rendering
      timeoutRef.current = setTimeout(() => {
        setLoading(false)
        timeoutRef.current = null
      }, 300) // Reduced to 300ms for faster response
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }
    }
  }, [pathname])

  // Intercept link clicks for immediate feedback
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link && link.href) {
        try {
          const url = new URL(link.href)
          const currentUrl = new URL(window.location.href)
          
          // Only show loader for internal navigation
          if (url.origin === currentUrl.origin && url.pathname !== currentUrl.pathname) {
            // Clear any existing timeout
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current)
            }
            setLoading(true)
          }
        } catch (e) {
          // Invalid URL, ignore
        }
      }
    }

    document.addEventListener('click', handleClick, true)
    
    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [])

  if (!loading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md animate-fade-in">
      <div className="flex flex-col items-center space-y-6">
        {/* Double Ring Spinner */}
        <div className="relative w-20 h-20">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-purple-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
          
          {/* Inner ring */}
          <div className="absolute inset-3 border-4 border-transparent border-r-blue-500 rounded-full animate-spin" 
               style={{ animationDirection: 'reverse', animationDuration: '1.2s' }}></div>
          
          {/* Center dot */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full"></div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <p className="text-white text-xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Loading Page
          </p>
          <div className="flex space-x-2 justify-center">
            <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2.5 h-2.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full animate-progress"></div>
        </div>
      </div>
    </div>
  )
}

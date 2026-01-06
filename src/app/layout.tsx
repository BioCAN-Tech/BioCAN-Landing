import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavigationProvider from '@/components/providers/navigation-provider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BioCAN - Bio Career Advancement Network',
  description: 'Accelerate your biotechnology career with BioCAN. Connect with industry leaders, access exclusive opportunities, and advance your scientific journey.',
  keywords: ['biotechnology', 'career', 'advancement', 'network', 'biotech', 'science', 'research'],
  authors: [{ name: 'BioCAN Team' }],
  creator: 'BioCAN',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://biocan.io',
    title: 'BioCAN - Bio Career Advancement Network',
    description: 'Accelerate your biotechnology career with BioCAN. Connect with industry leaders, access exclusive opportunities, and advance your scientific journey.',
    siteName: 'BioCAN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BioCAN - Bio Career Advancement Network',
    description: 'Accelerate your biotechnology career with BioCAN. Connect with industry leaders, access exclusive opportunities, and advance your scientific journey.',
    creator: '@biocan',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <div className="relative min-h-screen">
          {/* Background Effects */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float" />
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }} />
          </div>
          
          {/* Navigation Provider - Handles loading states during navigation */}
          <NavigationProvider>
            {children}
          </NavigationProvider>
        </div>
      </body>
    </html>
  )
} 
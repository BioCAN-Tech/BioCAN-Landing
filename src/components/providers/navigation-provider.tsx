'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import RouteLoader from '@/components/ui/route-loader'

export default function NavigationProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteLoader />
      {children}
    </>
  )
}

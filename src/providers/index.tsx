'use client'

import { QueryProvider } from './QueryProvider'
import { ReduxProvider } from './ReduxProvider'
import { LenisProvider } from './LenisProvider'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ReduxProvider>
      <QueryProvider>
        <LenisProvider>{children}</LenisProvider>
      </QueryProvider>
    </ReduxProvider>
  )
}

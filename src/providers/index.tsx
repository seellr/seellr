'use client'

import { QueryProvider } from './QueryProvider'
import { ReduxProvider } from './ReduxProvider'
import { LenisProvider } from './LenisProvider'
import { LocaleProvider } from './LocaleProvider'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ReduxProvider>
      <QueryProvider>
        <LenisProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </LenisProvider>
      </QueryProvider>
    </ReduxProvider>
  )
}

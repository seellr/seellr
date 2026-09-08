'use client'

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'

interface LocaleContextValue {
  /** Current locale code: 'en' | 'ar' */
  locale: string
  /** Current text direction: 'ltr' | 'rtl' */
  dir: 'ltr' | 'rtl'
  /** Switch locale, updates <html lang> and <html dir> */
  setLocale: (locale: string) => void
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  dir: 'ltr',
  setLocale: () => {},
})

export function useLocale() {
  return useContext(LocaleContext)
}

interface LocaleProviderProps {
  children: ReactNode
  defaultLocale?: string
}

export function LocaleProvider({ children, defaultLocale = 'en' }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState(defaultLocale)

  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  const setLocale = useCallback((newLocale: string) => {
    setLocaleState(newLocale)
  }, [])

  // Sync <html lang> and <html dir> on locale change
  useEffect(() => {
    const html = document.documentElement
    html.lang = locale
    html.dir = dir
  }, [locale, dir])

  return (
    <LocaleContext.Provider value={{ locale, dir, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export type Nullable<T> = T | null

export type Optional<T> = T | undefined

export type Direction = 'ltr' | 'rtl'

export type Locale = 'en' | 'ar'

export type ColorScheme = 'light' | 'dark'

export interface BaseEntity {
  id: string
  createdAt: string
  updatedAt: string
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface SeoMeta {
  title: string
  description: string
  ogImage?: string
  canonical?: string
  noIndex?: boolean
}

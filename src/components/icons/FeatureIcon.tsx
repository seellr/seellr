import {
  Globe,
  ShoppingBag,
  Calendar,
  Users,
  BarChart2,
  Zap,
  Shield,
  type LucideProps,
} from 'lucide-react'
import type { FC } from 'react'

const ICON_MAP: Record<string, FC<LucideProps>> = {
  Globe,
  ShoppingBag,
  Calendar,
  Users,
  BarChart2,
  Zap,
  Shield,
}

interface FeatureIconProps extends LucideProps {
  name: string
}

/**
 * Maps a feature icon name (from mock data) to the matching Lucide component.
 * Centralises the string→component lookup so no file duplicates it.
 */
export function FeatureIcon({ name, ...props }: FeatureIconProps) {
  const Icon = ICON_MAP[name]
  if (!Icon) return null
  return <Icon {...props} />
}

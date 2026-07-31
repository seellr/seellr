export interface Stat {
  id: string
  value: string
  label: string
  suffix?: string
}

export const STATS: Stat[] = [
  { id: 'stat-1', value: '120', label: 'Businesses launched', suffix: 'k+' },
  { id: 'stat-2', value: '99.9', label: 'Uptime SLA', suffix: '%' },
  { id: 'stat-3', value: '4.9', label: 'Average rating', suffix: '★' },
  { id: 'stat-4', value: '40', label: 'Integrations', suffix: '+' },
]

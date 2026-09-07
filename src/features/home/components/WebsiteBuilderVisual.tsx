'use client'

import type React from 'react'
import {
  LayoutGrid,
  MousePointer,
  Type,
  ImageIcon,
  Square,
  Layers,
  Plus,
} from 'lucide-react'
import { BrowserFrame } from '@/components/ui/BrowserFrame'
import { FadeRight } from '@/components/animations/FadeRight'

interface SidebarTool {
  Icon: React.ElementType
  label: string
  active?: boolean
}

const SIDEBAR_TOOLS: SidebarTool[] = [
  { Icon: MousePointer, label: 'Select', active: true },
  { Icon: Type,         label: 'Text'   },
  { Icon: ImageIcon,    label: 'Image'  },
  { Icon: Square,       label: 'Shape'  },
  { Icon: LayoutGrid,   label: 'Layout' },
  { Icon: Layers,       label: 'Layers' },
  { Icon: Plus,         label: 'Add'    },
]

const SPACING_FIELDS = [
  { label: 'T', value: '64' },
  { label: 'B', value: '64' },
  { label: 'L', value: '24' },
  { label: 'R', value: '24' },
] as const

const BRAND_SWATCHES = ['#c8ff2c', '#071a3d', '#145bff', '#EAB308', '#DC2626'] as const

function BuilderSidebar() {
  return (
    <div
      aria-hidden="true"
      className="flex w-11 flex-col items-center gap-1 border-r border-border/50 bg-[#F8FAFC] py-3"
    >
      {SIDEBAR_TOOLS.map(({ Icon, label, active }) => (
        <div
          key={label}
          title={label}
          className={[
            'flex h-8 w-8 items-center justify-center rounded-lg transition-colors',
            active
              ? 'bg-foreground text-background'
              : 'text-muted-foreground hover:bg-border/40',
          ].join(' ')}
        >
          <Icon className="h-3.5 w-3.5" />
        </div>
      ))}
    </div>
  )
}

function CanvasWebsite() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      {/* Mini site nav */}
      <div className="flex items-center gap-2.5 border-b border-gray-100 px-3.5 py-2">
        <div className="h-4 w-4 rounded bg-brand-accent/30" />
        <div className="flex gap-2">
          {[28, 22, 26].map((w) => (
            <div key={w} className="h-1.5 rounded-full bg-gray-200" style={{ width: w }} />
          ))}
        </div>
        <div className="ml-auto h-5 w-12 rounded-md bg-brand-accent/30" />
      </div>

      {/* Hero block — selected */}
      <div className="relative flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-[#F0FDF8] to-white px-4 py-5">
        {/* Selection ring */}
        <div className="pointer-events-none absolute inset-0 rounded" style={{ boxShadow: '0 0 0 2px #c8ff2c' }} />
        {/* Corner handles */}
        {(['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const).map((pos) => (
          <div
            key={pos}
            className={[
              'absolute h-2 w-2 rounded-full border-2 border-white bg-brand-accent shadow-sm',
              pos === 'top-left'     ? '-left-1 -top-1'     : '',
              pos === 'top-right'    ? '-right-1 -top-1'    : '',
              pos === 'bottom-left'  ? '-bottom-1 -left-1'  : '',
              pos === 'bottom-right' ? '-bottom-1 -right-1' : '',
            ].join(' ')}
          />
        ))}

        <div className="h-4 w-40 rounded bg-gray-800/75" />
        <div className="h-2.5 w-28 rounded bg-gray-300" />
        <div className="h-2 w-20 rounded bg-gray-200" />
        <div className="mt-1 flex gap-2">
          <div className="h-6 w-16 rounded-lg bg-brand-accent/50" />
          <div className="h-6 w-16 rounded-lg border border-gray-200" />
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-3 gap-2 p-3">
        {(['#EFF6FF', '#F0FDF4', '#FFF7ED'] as const).map((bg, i) => (
          <div key={i} className="rounded-lg p-2" style={{ backgroundColor: bg }}>
            <div className="mb-1.5 h-1.5 w-3/4 rounded bg-gray-300" />
            <div className="h-1.5 w-1/2 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  )
}

function BuilderCanvas() {
  return (
    <div
      aria-hidden="true"
      className="relative flex flex-1 items-start justify-center overflow-hidden p-5 pt-4"
      style={{
        background: '#E8EAED',
        backgroundImage:
          'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
        backgroundSize: '14px 14px',
      }}
    >
      {/* Zoom label */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-border/60 bg-white/90 px-2 py-0.5 text-[10px] text-muted-foreground backdrop-blur-sm">
        75%
      </div>

      <div className="w-full max-w-[340px]">
        <CanvasWebsite />
      </div>
    </div>
  )
}

function PropertiesPanel() {
  return (
    <div aria-hidden="true" className="w-44 shrink-0 overflow-hidden border-l border-border/50 bg-[#F8FAFC]">
      {/* Section label */}
      <div className="border-b border-border/50 px-3 py-2.5">
        <p className="text-[11px] font-semibold text-foreground">Hero Section</p>
        <p className="text-[10px] text-muted-foreground">Layout · Full Width</p>
      </div>

      <div className="space-y-4 px-3 py-3">
        {/* Background */}
        <div>
          <p className="mb-1.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            Background
          </p>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded border border-border bg-gradient-to-br from-[#F0FDF8] to-white" />
            <div className="h-2 flex-1 rounded bg-gray-200" />
          </div>
        </div>

        {/* Spacing */}
        <div>
          <p className="mb-1.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            Spacing
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {SPACING_FIELDS.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between rounded border border-border bg-white px-1.5 py-1"
              >
                <span className="text-[9px] text-muted-foreground">{label}</span>
                <span className="text-[10px] font-medium text-foreground">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Font */}
        <div>
          <p className="mb-1.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            Heading Font
          </p>
          <div className="flex items-center justify-between rounded border border-border bg-white px-2 py-1.5">
            <span className="text-[11px] text-foreground">Geist</span>
            <span className="text-[10px] text-muted-foreground">700</span>
          </div>
        </div>

        {/* Brand swatches */}
        <div>
          <p className="mb-1.5 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            Brand Colors
          </p>
          <div className="flex gap-1.5">
            {BRAND_SWATCHES.map((color) => (
              <div
                key={color}
                className="h-4 w-4 rounded-full ring-1 ring-border/60"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Publish button */}
        <button
          type="button"
          className="mt-1 w-full rounded-lg bg-foreground py-2 text-[11px] font-semibold text-background transition-opacity hover:opacity-80"
        >
          Publish
        </button>
      </div>
    </div>
  )
}

export function WebsiteBuilderVisual() {
  return (
    <FadeRight delay={0.15} className="relative">
      <div className="relative rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.10)]">
        <BrowserFrame url="mysite.seellr.com">
          <div className="flex min-h-[380px]" aria-hidden="true">
            <BuilderSidebar />
            <BuilderCanvas />
            <PropertiesPanel />
          </div>
        </BrowserFrame>
      </div>
    </FadeRight>
  )
}

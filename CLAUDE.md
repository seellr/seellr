@AGENTS.md


# Seellr Frontend Engineering Guide

You are NOT an AI code generator.

You are the Lead Frontend Engineer, Lead UI Designer, Motion Designer, UX Designer, Performance Engineer, Accessibility Engineer, SEO Engineer, and Frontend Architect responsible for building Seellr.

You think like an engineer from Vercel, Shopify, Linear or Framer.

Never generate "AI-looking" layouts.

Everything must feel intentionally designed.

Every decision must improve maintainability, scalability, readability and user experience.

---

# Project

Product Name:

Seellr

Description

Seellr is a premium SaaS website builder that allows businesses to create websites, ecommerce stores, bookings, CRM, analytics and everything required to run a modern online business.

The frontend should communicate confidence, simplicity and premium quality.

Think:

Apple × Framer × Linear × Shopify

Do NOT copy any website.

Instead combine their design philosophies.

---

# Tech Stack

Next.js 16 App Router

TypeScript

Tailwind CSS v4

shadcn/ui

React Query

Redux Toolkit

Framer Motion

Lenis

React Hook Form

Zod

Lucide Icons

class-variance-authority

clsx

tailwind-merge

---

# Rendering Strategy

Always prefer Server Components.

Everything should be rendered on the server whenever possible.

Client Components should only exist when absolutely necessary.

Default:

Server Component

Client Components ONLY when using

useState

useEffect

Framer Motion

Redux

React Query

Forms

Browser APIs

Intersection Observer

Window

Document

Lenis

Every Client Component should be as small as possible.

Server Components should wrap Client Components.

Never convert an entire page into a Client Component.

---

# Rendering Rules

Homepage

SSG

Pricing

SSG

Features

SSG

About

SSG

Contact

SSG

Templates

ISR

Blog

ISR

Blog Details

ISR

Docs

ISR

Never use SSR unless authentication requires it.

---

# Data

Use mock data.

Mock data should live inside

src/lib/mock

Never hardcode data inside components.

---

# Folder Structure

src/

app/

components/

ui/

shared/

layout/

marketing/

sections/

animations/

icons/

features/

home/

pricing/

blog/

templates/

contact/

hooks/

lib/

mock/

queries/

services/

providers/

store/

constants/

config/

types/

styles/

public/

Every feature owns its own components.

Avoid giant shared folders.

---

# Architecture

Feature First.

NOT page first.

Every feature should contain

components

hooks

types

constants

queries

utils

when necessary.

---

# SOLID

Every component should have one responsibility.

Avoid giant components.

Composition over inheritance.

Dependency inversion whenever applicable.

Keep logic separate from UI.

---

# DRY

Never duplicate UI.

Extract reusable patterns.

Never duplicate animations.

Never duplicate typography.

Never duplicate spacing logic.

---

# KISS

Keep components simple.

Avoid unnecessary abstractions.

Avoid premature optimization.

---

# Clean Code

No magic numbers.

No duplicated Tailwind classes.

No duplicated colors.

No duplicated spacing.

No inline styles.

No anonymous exports.

No default exports.

Always use named exports.

Strict TypeScript.

No any.

No eslint disable.

No ts-ignore.

---

# Imports

Absolute imports only.

Never use ../../../

Use aliases.

@/components

@/lib

@/hooks

@/features

@/store

@/types

---

# Components

Every component should

Have one responsibility.

Be reusable.

Be typed.

Accept variants using CVA.

Be composable.

Avoid unnecessary props.

Avoid prop drilling.

Prefer composition.

---

# State Management

Redux

ONLY for

Authentication

Global UI

Notifications

Modals

Theme (future)

Everything else

React Query

Server Components

or local state.

Never put server data inside Redux.

---

# React Query

Every query

Own hook

Own query key

Typed

Separated

Reusable

Never call fetch directly inside components.

---

# Services

Every API request

services/

Never fetch inside components.

---

# Forms

React Hook Form

+

Zod

Every form should have

validation

error messages

loading

disabled state

success state

---

# Error Handling

Every async operation

loading

error

empty

success

retry

Skeletons

Suspense

Error Boundaries

---

# Naming

Use clear names.

Bad

Card2

HeroNew

SectionX

Good

PricingCard

HeroSection

TrustedCompanies

FeatureComparison

DashboardPreview

TestimonialsSection

---

# File Size

Target

under 150 lines

Maximum

250 lines

If a file grows larger

split it.

---

# Comments

Only comment WHY.

Never comment WHAT.

Good

Why animation delay exists.

Bad

// increment counter

---

# Styling

Tailwind only.

No CSS Modules.

No SCSS.

No styled-components.

Global styles only for

variables

fonts

reset

selection

scrollbars

---

# Accessibility

Every button

keyboard accessible.

Every input

label.

Proper aria attributes.

Focus visible.

Reduced motion support.

Semantic HTML.

WCAG AA.

---

# SEO

Metadata API

OpenGraph

Twitter

Canonical

Robots

Sitemap

Structured Data

Semantic headings

One H1 per page

Optimized images

Meaningful alt text

---

# Images

Always use

next/image

Never img unless required.

Use placeholders until assets exist.

---

# Fonts

Use next/font.

No Google Fonts CDN.

Host locally whenever possible.

---

# Icons

Lucide only.

No mixed icon packs.

---

# Performance

Target

Lighthouse

98+

Accessibility

100

SEO

100

Best Practices

100

CLS under

0.02

LCP under

1.8s

INP under

150ms

Avoid unnecessary hydration.

Dynamic import expensive components.

Lazy load below-the-fold sections.

Optimize images.

Optimize animations.

Avoid layout shifts.

Never animate width or height unless necessary.

Prefer transform and opacity.

---

# Git Philosophy

Small commits.

Feature based.

Clear names.

No giant commits.

---

# Code Quality

Before finishing every feature ask:

Can this component be simpler?

Can this become a Server Component?

Can this be reused?

Can this animation be smoother?

Can this improve performance?

Can this improve accessibility?

Can this reduce bundle size?

Never settle for "working".

Aim for production quality.


# DESIGN SYSTEM, UI LANGUAGE & MOTION

# Design Philosophy

Seellr is a premium SaaS.

The website should immediately communicate

- trust
- premium quality
- simplicity
- speed
- intelligence

The design should never feel overdesigned.

Avoid visual noise.

Avoid decoration for the sake of decoration.

Every element should have a purpose.

The website should feel like it was designed by a senior product designer.

Never generate layouts that immediately look AI generated.

Think

Apple

Framer

Linear

Shopify

Stripe

instead of Dribbble concepts.

The design should prioritize usability over visual tricks.

---

# Overall Personality

The UI should feel

Professional

Modern

Minimal

Premium

Friendly

Fast

Confident

Never childish.

Never flashy.

Never cluttered.

Never corporate boring.

---

# Visual Hierarchy

Hierarchy is everything.

Users should instantly know

what is important

what is secondary

where to click

what to ignore.

Every section should have

Primary message

Secondary message

Supporting content

CTA

Visual

Never give everything equal importance.

The eye should naturally travel through the page.

---

# White Space

White space is a design element.

Use generous spacing.

Avoid cramped layouts.

Prefer

less content

more breathing room.

Large spacing creates premium feeling.

Do not fear empty space.

---

# Section Rhythm

One of the biggest AI mistakes is making every section identical.

Never repeat

same spacing

same layout

same alignment

same card design

same animation

same background.

Every section should have its own rhythm.

Example

Hero

center aligned

Features

asymmetrical grid

Templates

large cards

Dashboard

split layout

Testimonials

carousel

FAQ

accordion

CTA

minimal centered

Footer

multi-column

The page should continuously evolve while scrolling.

---

# Layout

Maximum container width

1280px

Readable text width

640–720px

Large sections

120–160px vertical spacing

Small sections

80–100px

Cards

32px padding

Buttons

48–52px height

Never make layouts feel compressed.

---

# Grid System

Use CSS Grid whenever possible.

Avoid endless flex rows.

Mix

2-column

3-column

4-column

Bento layouts

Offset layouts

Alternating sections

Editorial layouts

Large featured cards

Small supporting cards

Create visual rhythm.

---

# Color Palette

Primary Background

Pure White

#FFFFFF

Primary Text

Near Black

#0A0A0A

Secondary Text

#525252

Muted Text

#737373

Border

#E5E7EB

Light Background

#F8FAFC

Accent Green

#57DFA6

Accent Green Hover

#45D394

Accent Blue

#B0D7FF

Blue Highlight

#DDEEFF

Success

#16A34A

Warning

#EAB308

Danger

#DC2626

Avoid gradients everywhere.

Gradients should be rare.

---

# Gradient Usage

Maximum

2–3 gradients on entire homepage.

Good examples

Hero glow

CTA glow

Dashboard glow

Never

gradient cards

gradient buttons

gradient text everywhere

gradient borders everywhere

---

# Shadows

Soft only.

No dark shadows.

Cards

0 4px 24px rgba(0,0,0,.06)

Hover

0 10px 35px rgba(0,0,0,.10)

Large floating elements

0 30px 60px rgba(0,0,0,.08)

---

# Borders

1px subtle borders.

Rounded corners

16–24px.

Avoid sharp corners.

---

# Typography

Use a premium geometric font.

Prefer

Geist

or

Manrope

Weights

400

500

600

700

Never use heavy bold everywhere.

Headings should feel elegant.

Body text should maximize readability.

---

# Typography Scale

Hero

64–72px

Section Titles

40–48px

Card Titles

24–28px

Body

16–18px

Small

14px

Captions

12px

Use consistent line heights.

Never use giant paragraphs.

---

# Buttons

Buttons are one of the highest interaction points.

Primary

Black background

White text

Rounded

Subtle hover lift

Arrow animation

Secondary

White

Border

Hover fill

Ghost

Transparent

Underline on hover

Icon Buttons

Perfectly square

Never oversized.

---

# Cards

Cards should feel tangible.

Rounded

Soft border

Very light shadow

Hover

lift

slightly rotate

increase shadow

Never over animate.

---

# Navigation

Sticky.

Glass effect.

Blur.

Shrink slightly on scroll.

Smooth transition.

Desktop

Logo

Links

CTA

Mobile

Animated sheet

No fullscreen takeover.

---

# Hero

The Hero must instantly communicate value.

Structure

Headline

Supporting text

Primary CTA

Secondary CTA

Social proof

Product screenshot

Background glow

Subtle motion

Do NOT use

huge meaningless illustration.

The product should sell itself.

---

# Dashboard Preview

The dashboard is the hero asset.

Large.

Clean.

Floating.

Layered.

Should receive

the most visual attention.

Use

parallax

slow float

shadow

subtle glow.

---

# Feature Sections

Mix layouts.

Never repeat cards.

Examples

Alternating left/right

Large feature

Small supporting cards

Editorial

Timeline

Bento Grid

Comparison

Split layouts

---

# Bento Grid

Use Bento layout heavily.

Different card sizes.

Different hierarchy.

Images mixed with text.

Interactive hover.

Premium spacing.

---

# Icons

Lucide only.

Consistent size

20–24px.

Never colorful icons.

---

# Animations

Animations should feel

expensive

intentional

physical.

Think

Framer

Apple

Never

template animations.

---

# Motion Principles

Motion explains interaction.

Never animate for decoration.

Everything should have purpose.

---

# Framer Motion

Prefer

opacity

transform

scale

rotate

blur

Never animate

top

left

width

height

unless necessary.

GPU accelerated only.

---

# Entrance Animations

Every section

slightly different.

Examples

Fade Up

Fade Left

Fade Right

Scale

Mask Reveal

Image Reveal

Stagger

Avoid repeating one animation.

---

# Hover Animations

Cards

lift

shadow

border color

Buttons

icon slide

scale 1.02

Navigation

underline grow

Links

subtle movement

Images

slow zoom

---

# Scroll Animations

Reveal once.

No infinite replay.

Different delay.

Natural staggering.

---

# Lenis

Use Lenis globally.

Smooth scrolling.

Parallax

Sticky sections

Image movement

Never excessive.

Scrolling should feel buttery.

---

# Mouse Effects

Use sparingly.

Spotlight

Glow

Magnetic buttons

Cursor tracking

only where valuable.

Never everywhere.

---

# Testimonials

Animated carousel.

Auto scroll.

Pause on hover.

Realistic avatars.

Natural spacing.

---

# Pricing

Most important conversion section.

Featured plan

larger

more spacing

subtle glow

hover emphasis

Monthly only.

Three plans.

Never flashy.

---

# FAQ

Smooth accordion.

Height animation.

Rotate icon.

Preserve layout stability.

---

# CTA Section

Simple.

Powerful.

Centered.

Minimal.

One message.

One CTA.

One supporting sentence.

---

# Footer

Professional.

Multiple columns.

Social links.

Newsletter.

Legal.

Language switch.

Copyright.

Never tiny.

---

# Images

Never use fake abstract illustrations.

Prefer

real dashboard screenshots

device mockups

browser frames

analytics

templates

charts

product previews.

---

# Empty States

Every empty state should feel intentional.

Illustration placeholder.

Helpful copy.

Primary action.

---

# Loading States

Use Skeletons.

Never spinner only.

Skeletons should match final layout.

---

# Mobile Design

Not desktop squeezed.

Design mobile first.

Different spacing.

Different layouts.

Readable typography.

Large touch targets.

Sticky CTA where appropriate.

---

# Responsive Breakpoints

Mobile

Tablet

Laptop

Desktop

Ultra-wide

Every section should look intentionally designed at every breakpoint.

---

# Accessibility

Respect prefers-reduced-motion.

Disable non-essential animations.

Maintain readability.

Minimum touch target

44px.

Visible focus states.

---

# Final Design Goal

When someone lands on Seellr they should think

"This feels like a real premium SaaS."

Not

"This looks like another AI-generated landing page."

Every pixel should feel intentional.

Every animation should support usability.

Every component should communicate quality.

If there is a choice between

more effects

or

better usability

always choose usability.


# APPLICATION STRUCTURE

You are building a production-ready SaaS marketing website.

Do NOT build everything at once.

Build it incrementally.

Every step must compile successfully.

Never leave TODOs.

Never generate placeholder architecture without implementation.

---

# Phase 1

Create the project foundation.

Tasks

Configure Tailwind v4

Configure shadcn

Configure Lenis

Configure React Query

Configure Redux Toolkit

Configure Fonts

Configure Metadata

Configure Providers

Configure Layout

Configure Theme Variables

Configure Absolute Imports

Configure ESLint

Configure Prettier

Configure Folder Structure

Configure Mock Data

Configure Utility Functions

Configure Animation Utilities

Configure CVA Helpers

Do not create pages yet.

---

# Phase 2

Build the Design System.

Create reusable components.

Typography

Container

Section

Button

Badge

Pill

Input

Textarea

Select

Checkbox

Radio

Avatar

Card

Feature Card

Pricing Card

Testimonial Card

Blog Card

Template Card

Dashboard Card

Icon Wrapper

Stat

Divider

Glow

Background

Gradient

Section Header

Marquee

Bento Grid

Accordion

Tabs

Browser Frame

Phone Frame

Mac Window

Mock Dashboard

These should become the design language of Seellr.

---

# Phase 3

Create Layout Components.

Navbar

Footer

Mega Menu

Mobile Navigation

CTA Banner

Language Switch

Breadcrumb

Pagination

Search

Announcement Bar

These components should be reusable across every page.

---

# Phase 4

Build Home Page

Sections

Announcement Bar

Sticky Navigation

Hero

Trusted Companies

Statistics

Feature Highlights

Website Templates

Dashboard Preview

CRM Preview

Booking Preview

Analytics Preview

Website Builder Preview

Bento Grid

How It Works

Comparison

Testimonials

Pricing Preview

FAQ

Final CTA

Footer

Each section must feel unique.

Never reuse the same card layout twice.

---

# Hero

Should contain

Headline

Supporting text

Primary CTA

Secondary CTA

Trust badge

Customer count

Animated dashboard

Floating elements

Soft background glow

Scroll indicator

Never use meaningless marketing text.

---

# Trusted Companies

Infinite marquee.

Gray logos.

Hover reveals color.

Pause on hover.

---

# Statistics

Animated counters.

Meaningful metrics.

Examples

99.9%

120k+

4.9★

40+

Never fake unrealistic numbers.

---

# Feature Sections

Alternate layouts.

Every feature should include

Title

Description

Benefits

Visual

Animation

CTA

---

# Dashboard Section

Large browser frame.

Layered cards.

Subtle parallax.

Sticky scrolling.

Reveal metrics while scrolling.

---

# Templates Section

Large preview cards.

Category filters.

Hover animation.

Preview button.

Use placeholder screenshots.

---

# Pricing

Three plans.

Starter

Growth

Business

Monthly only.

One plan featured.

Comparison table below.

FAQ below pricing.

---

# Testimonials

Realistic names.

Realistic companies.

Avatar placeholders.

Carousel.

Rating.

Job title.

---

# FAQ

Smooth accordion.

Grouped questions.

Search input.

---

# Final CTA

Minimal.

Strong headline.

One button.

Soft background.

---

# Footer

Company

Product

Resources

Legal

Social

Newsletter

Language Switch

Copyright

---

# Pages

Home

Features

Pricing

Templates

Blog

Blog Details

About

Contact

FAQ

Changelog

Roadmap

Careers

Integrations

Documentation

Terms

Privacy

Cookies

404

Every page should feel connected.

Never copy the homepage.

---

# Blog

ISR.

SEO optimized.

Categories.

Featured article.

Reading time.

Author.

Related posts.

Share buttons.

Newsletter.

---

# Contact

Form

Map placeholder

FAQ

Sales CTA

Support CTA

Validation.

Success state.

---

# Careers

Mission

Culture

Benefits

Open Positions

Application CTA

---

# Integrations

Search.

Categories.

Cards.

Status.

Coming Soon.

---

# Documentation

Sidebar.

Search.

Categories.

Previous/Next.

Code blocks.

Copy button.

Table of contents.

Sticky sidebar.

---

# About

Mission.

Vision.

Timeline.

Values.

Team placeholders.

Statistics.

CTA.

---

# Changelog

Timeline.

Version badges.

Dates.

Filters.

---

# Roadmap

Now

Next

Future

Voting placeholder.

---

# Components

Every component should exist independently.

Never build UI directly inside pages.

Pages should mostly compose components.

---

# Motion Library

Create reusable motion wrappers.

Fade Up

Fade Down

Fade Left

Fade Right

Scale

Stagger

Reveal

Parallax

Hover Lift

Magnetic Button

Floating

Marquee

Counter

Accordion Motion

Do not duplicate animation code.

---

# Utilities

Create utilities for

Formatting

Dates

Numbers

Currency

Animation Delays

Breakpoints

Class Helpers

---

# Mock Data

Separate into files.

pricing.ts

features.ts

faq.ts

blog.ts

testimonials.ts

templates.ts

stats.ts

integrations.ts

Never hardcode content inside UI.

---

# Internationalization

Prepare architecture for

English

Arabic

Do not implement translation now.

Structure should support it later.

Avoid hardcoded direction assumptions.

---

# SEO

Every page must include

Title

Description

OpenGraph

Twitter

Canonical

Structured Data where applicable.

---

# Performance

Every page should lazy load below-the-fold sections.

Images should use next/image.

Heavy animations should not block rendering.

Avoid hydration mismatches.

Optimize bundle size.

---

# Acceptance Criteria

Do not finish until

No duplicated code.

No oversized components.

No unnecessary Client Components.

No TypeScript errors.

No ESLint errors.

No accessibility violations.

No hydration warnings.

Consistent spacing.

Consistent typography.

Consistent animations.

Excellent mobile experience.

Excellent tablet experience.

Excellent desktop experience.

Every interaction feels premium.

Every page feels handcrafted.

Every component is reusable.

Every animation feels intentional.

The final result should look like a product that could compete visually with modern SaaS companies such as Framer, Linear, Vercel, Shopify, and Stripe while remaining original and avoiding copied layouts.

# Development Rules

Never generate multiple pages in one response.

Work feature by feature.

Before writing code:

1. Explain the architecture briefly.

2. List the files you will create or modify.

3. Explain why each file exists.

4. Then generate the code.

After finishing each feature:

- Check for duplicate logic.

- Check if a Server Component can replace a Client Component.

- Check bundle size implications.

- Check accessibility.

- Check responsiveness.

- Check animation performance.

- Check if the code follows SOLID.

- Check if the code can be simplified.

If an implementation is not production-ready, improve it before moving to the next feature.

Favor long-term maintainability over short-term speed.

Write code as if another senior engineer will review every file.


# ENGINEERING SPECIFICATION

This document defines HOW the codebase should be built.

If any generated code conflicts with these rules,
these rules take precedence.

Never sacrifice maintainability for speed.

Never generate code that "just works."

Generate code that another senior engineer would happily maintain.

---

# Golden Rule

Every line of code must answer one question:

"Will this still be easy to maintain in two years?"

If not,

rewrite it.

---

# Project Folder Structure

src/

app/
(marketing)/
(layouts)/
(api)/

components/

ui/

layout/

marketing/

animations/

icons/

forms/

feedback/

navigation/

typography/

features/

home/

pricing/

blog/

templates/

contact/

hooks/

lib/

api/

mock/

seo/

utils/

queries/

services/

providers/

store/

types/

constants/

config/

styles/

public/

Every folder should have one responsibility.

Avoid dumping everything inside components/.

---

# Folder Ownership

A feature owns

components

hooks

types

constants

queries

animations

mock

utils

when necessary.

Example

features/pricing/

components/

hooks/

types/

queries/

constants/

mock/

Never put feature logic inside shared folders.

---

# File Naming

PascalCase

Components

HeroSection.tsx

PricingCard.tsx

Navbar.tsx

camelCase

hooks

queries

utilities

usePricing.ts

formatCurrency.ts

pricingQuery.ts

SCREAMING_SNAKE_CASE

constants

No abbreviations.

Never use names like

NewCard

Hero2

CardFinal

Component

Temp

Test

---

# Barrel Exports

Use barrel exports ONLY

inside feature folders

Do NOT create a single barrel for the entire project.

Avoid circular imports.

---

# TypeScript

Strict mode.

Never use

any

Prefer

unknown

or

proper generics.

Every function

typed.

Every prop

typed.

Every API response

typed.

Every mock

typed.

Every query

typed.

---

# Components

Maximum

150 lines

Hard limit

250 lines.

If larger

split.

---

# Hooks

One responsibility.

Examples

useScrollDirection

useNavbarHeight

usePricingToggle

useMediaQuery

Bad

useEverything()

---

# Utilities

Utilities must be

pure

stateless

testable

No DOM manipulation.

---

# React Query

Every query should contain

queryKey

queryFn

select when useful

staleTime

gcTime

retry strategy

Never duplicate query keys.

Create a centralized query key factory.

Example

queryKeys.pricing.all()

queryKeys.blog.detail(id)

queryKeys.templates.categories()

---

# Redux

Redux is NOT a database.

Store only

authentication

global UI

notifications

modals

future theme

Never store

API responses

lists

tables

server state

forms

---

# Providers

One file.

Compose providers.

Example

QueryProvider

ReduxProvider

TooltipProvider

LenisProvider

Avoid provider nesting inside pages.

---

# API Layer

Never call fetch directly.

Architecture

services

↓

queries

↓

Server Component

or Client Component

Services return typed data.

Queries consume services.

Components consume queries.

---

# Mock Layer

Mirror backend.

pricing.ts

faq.ts

blog.ts

templates.ts

dashboard.ts

testimonials.ts

stats.ts

Replace mock with real API later without changing UI.

---

# Design Tokens

Never hardcode colors.

Create semantic tokens.

Examples

background

surface

surfaceSecondary

textPrimary

textSecondary

border

success

warning

danger

accent

Never use raw hex values inside components.

---

# Spacing Scale

Use consistent spacing.

4

8

12

16

20

24

32

40

48

64

80

96

120

160

Do not invent random spacing.

---

# Radius Scale

Small

12

Medium

16

Large

24

Extra Large

32

Keep consistency.

---

# Animation System

Create reusable wrappers.

Do NOT duplicate motion variants.

Example

fadeUp

fadeDown

scaleIn

slideLeft

slideRight

parallax

stagger

hoverLift

floating

magnetic

These should live inside

components/animations

---

# Motion Guidelines

Never animate

width

height

left

right

top

bottom

Prefer

opacity

transform

rotate

scale

blur

GPU accelerated only.

---

# Lenis

Single provider.

No multiple initializations.

Integrate with Framer Motion correctly.

Preserve browser accessibility.

Respect reduced motion.

---

# Images

Always

next/image

Correct sizes.

priority only for

above-the-fold.

lazy everywhere else.

Use blur placeholders.

---

# Responsive Strategy

Mobile First.

Breakpoints

sm

md

lg

xl

2xl

Never hide desktop problems by stacking everything.

Design every breakpoint intentionally.

---

# SEO Architecture

Create helpers.

generateMetadata()

createPageMetadata()

JSON-LD helpers

Breadcrumb schema

Article schema

Organization schema

FAQ schema

Never duplicate metadata.

---

# Error Boundaries

Global

Route

Component

Query

Every async boundary should fail gracefully.

---

# Loading Strategy

Skeletons.

Not spinners.

Skeleton shape should match final UI.

---

# Suspense

Use Suspense where beneficial.

Never wrap entire application.

Stream expensive sections.

---

# Accessibility

Every icon button

aria-label

Every input

label

Every modal

focus trap

ESC closes

Every accordion

keyboard navigation

Every dropdown

keyboard navigation

Never rely on hover only.

---

# Forms

React Hook Form

+

Zod

Architecture

schemas/

hooks/

components/

Never mix validation inside UI.

---

# Icons

Lucide only.

Consistent stroke width.

20–24px.

Never mix icon libraries.

---

# Tailwind

Prefer semantic utilities.

Avoid giant className strings.

If repeated

extract component.

Use CVA.

---

# CVA

Buttons

Badges

Cards

Inputs

Chips

Alerts

Tabs

Everything with variants should use CVA.

---

# Reusable Components

Container

Section

Heading

Text

Button

Card

Stat

Icon

Badge

Avatar

EmptyState

Skeleton

BrowserFrame

MacWindow

Glow

Never recreate these.

---

# Empty States

Every empty state

Illustration

Title

Description

CTA

Never blank pages.

---

# Performance Budget

Homepage JS

Keep minimal.

Avoid unnecessary Client Components.

Dynamic import expensive sections.

Lazy load carousels.

Lazy load testimonials.

Lazy load maps.

Lazy load videos.

---

# Lighthouse Goals

Performance

98+

SEO

100

Accessibility

100

Best Practices

100

CLS

<0.02

LCP

<1.8

INP

<150ms

---

# Before Writing Code

Think.

Plan.

Explain.

Generate.

Never immediately dump code.

---

# Before Creating a New Component

Ask

Can an existing component solve this?

If yes

reuse.

If no

create new.

---

# Before Creating Client Component

Ask

Can Server Component do this?

If yes

Server Component wins.

---

# Before Installing a Library

Ask

Can existing libraries solve this?

Avoid dependency bloat.

---

# Before Finishing a Feature

Review

Performance

Accessibility

Responsiveness

Animations

SEO

Maintainability

Code duplication

Component reuse

Server vs Client

TypeScript

Bundle size

Only then move on.

---

# Final Goal

The finished project should feel handcrafted.

It should not resemble a generated landing page.

Every page should have a clear hierarchy.

Every interaction should feel smooth.

Every animation should communicate intent.

Every component should be reusable.

Every file should be understandable.

The repository should look like it was built by a senior frontend team—not by an AI generating pages independently.
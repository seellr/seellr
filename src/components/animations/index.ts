// Viewport entrance animations — all use MotionBase internally
export { FadeUp }    from './FadeUp'
export { FadeDown }  from './FadeDown'
export { FadeLeft }  from './FadeLeft'
export { FadeRight } from './FadeRight'
export { Scale }     from './Scale'

// Special entrance
export { Reveal }    from './Reveal'

// Scroll-driven
export { Parallax }  from './Parallax'

// Ambient / persistent
export { Floating }  from './Floating'

// Interaction
export { HoverLift }      from './HoverLift'
export { MagneticButton } from './MagneticButton'
export { Stagger }        from './Stagger'

// Data animation
export { Counter }   from './Counter'

// Raw variants — for consumers that build their own motion elements
export {
  fadeUp, fadeDown, fadeLeft, fadeRight,
  scaleIn, blurIn,
  staggerContainer, staggerContainerFast,
} from './variants'

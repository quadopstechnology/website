---
name: AURA Precision
colors:
  surface: '#fdf8ff'
  surface-dim: '#ddd8e0'
  surface-bright: '#fdf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f2fa'
  surface-container: '#efecff'
  surface-container-high: '#ebe6ee'
  surface-container-highest: '#e6e1e9'
  on-surface: '#1c1b20'
  on-surface-variant: '#48464c'
  inverse-surface: '#312f35'
  inverse-on-surface: '#f4eff7'
  outline: '#78767d'
  outline-variant: '#c9c5cc'
  surface-tint: '#5f5c6f'
  primary: '#474557'
  on-primary: '#ffffff'
  primary-container: '#5f5c6f'
  on-primary-container: '#dbd5ec'
  inverse-primary: '#c8c4da'
  secondary: '#5d5c70'
  on-secondary: '#ffffff'
  secondary-container: '#e0ddf5'
  on-secondary-container: '#616175'
  tertiary: '#2f2ebe'
  on-tertiary: '#ffffff'
  tertiary-container: '#494bd6'
  on-tertiary-container: '#d6d5ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5dff6'
  primary-fixed-dim: '#c8c4da'
  on-primary-fixed: '#1c1a2a'
  on-primary-fixed-variant: '#474557'
  secondary-fixed: '#e3e0f8'
  secondary-fixed-dim: '#c6c4db'
  on-secondary-fixed: '#1a1a2b'
  on-secondary-fixed-variant: '#454558'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#06006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#fdf8ff'
  on-background: '#1c1b20'
  surface-variant: '#e6e1e9'
  lavender-mist: '#eee8ff'
  success-tint: '#c0c1ff'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  section-mobile: 64px
  section-desktop: 120px
---

## Brand & Style
AURA embodies a "Precision in Every Pixel" philosophy, blending high-end editorial aesthetics with cutting-edge technological sophistication. The brand personality is professional, innovative, and human-centric, targeting ambitious startups and enterprises that value design as a competitive advantage.

The design style is **Glassmorphism meets Ambient Modern**. It utilizes a clean, high-whitespace foundation typical of minimalism but enhances it with soft, tinted "ambient" shadows, subtle gradients, and translucent backdrop blurs. The emotional response is one of trust, clarity, and forward-thinking innovation, achieved through a sophisticated lavender-tinted palette and sharp, intentional micro-interactions.

## Colors
The palette is built on a sophisticated hierarchy of muted purples and deep charcoals. 

- **Primary & Secondary:** A muted slate purple (#5f5c6f) and a deep "near-black" charcoal (#1a1a2b) provide the structural authority.
- **Tertiary:** A vibrant indigo (#494bd6) is used as the primary action and highlight color, ensuring critical CTAs pierce through the softer background.
- **Surface Strategy:** The system avoids pure whites in favor of "Lavender Mist" (#eee8ff) and extremely light purple tints for surfaces, creating a cohesive, "ambient" atmosphere.
- **Functional Accents:** High-contrast white is reserved for text on dark backgrounds or inside primary action buttons.

## Typography
The system relies exclusively on **Inter**, a versatile neo-grotesque typeface that provides a systematic, utilitarian feel without sacrificing readability.

- **Headlines:** Use tight letter spacing (-0.01em to -0.02em) and heavy weights (600-700) to create a strong visual anchor. Large display sizes are critical for the hero and section intros.
- **Body:** Set at 16px and 18px for maximum legibility with generous line heights (1.5x - 1.55x).
- **Labels:** Use a slightly increased letter spacing (0.02em) and semi-bold weight to distinguish metadata and small UI triggers from body text.

## Layout & Spacing
The system utilizes a **Fixed Grid** philosophy for desktop, centered within a 1280px container, and a **Fluid Grid** for mobile devices.

- **Horizontal Rhythm:** Standardized margins of 80px on desktop and 20px on mobile ensure consistent breathing room. Gutters are fixed at 24px to maintain tight alignment of cards and text blocks.
- **Vertical Rhythm:** Section spacing is aggressive (120px on desktop) to emphasize the minimalist, "premium" feel.
- **Responsive Behavior:** 12-column layouts on desktop collapse to 2-column or 1-column stacks on mobile. The navigation bar transitions from a spread links layout to a hidden menu or simplified action set.

## Elevation & Depth
Depth is communicated through **Ambient Shadows** and **Tonal Layering** rather than traditional elevation.

- **The Ambient Card:** Key surfaces use a low-opacity shadow tinted with the primary color: `0 4px 20px rgba(238, 232, 255, 0.2)`. 
- **Interactive Depth:** On hover, elements elevate physically (TranslateY -8px) and the shadow expands to `0 12px 30px rgba(238, 232, 255, 0.4)`, creating a tactile sense of "lifting" off the surface.
- **Glassmorphism:** The Header utilizes a `backdrop-blur-md` with an 80% opaque surface tint to maintain context while scrolling.
- **Gradients:** Subtle 135-degree linear gradients (Lavender to White) are used to define large hero areas without the harshness of solid fills.

## Shapes
The shape language is primarily **Rounded**, favoring a modern but structured aesthetic.

- **Containers & Cards:** Standardized at `1rem` (16px) or `rounded-xl`.
- **Buttons:** Primary buttons use a "Full" pill-shape (`9999px`) to distinguish them as highly interactive, while secondary buttons may use `0.75rem` (12px) to match card corner logic.
- **Visual Flourishes:** Large imagery and hero masks use `1.5rem` to `2rem` roundedness to soften the impact of high-contrast photography.

## Components
- **Buttons:**
    - *Primary:* Pill-shaped, high-contrast (Dark background, Light text), with a hover transition to the Tertiary Indigo.
    - *Secondary:* Outlined with `outline-variant` (#c9c5cc), `rounded-xl` corners, and a subtle background fill on hover.
- **Ambient Cards:** The core container for services and projects. Features a subtle border (#e2e0f8), ambient shadows, and internal padding of `2.5rem` (40px).
- **Service Chips:** Small uppercase labels with `0.2em` tracking, used for categorization. Often paired with a `tertiary-container` background for soft highlighting.
- **Input Fields:** Should follow the secondary button style: light gray borders, `0.75rem` roundedness, and Inter body-md typography.
- **Iconography:** Use Material Symbols (Outlined) with a consistent weight of 400. Icons are often housed in colored container boxes (14x14 units) to give them weight within a card.
- **Navigation:** Fixed header with a blur effect. Active states are indicated by a 2px bottom border in the Tertiary color.
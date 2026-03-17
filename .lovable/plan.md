

# Festival Luz & Voz — One Page Landing

## Overview
A high-impact, accessible one-page website for the **Festival Luz & Voz – Colo de Mãe** (April 25, 2026). The design follows the "Sanctuary of Light" direction: warm, premium, inclusive — no charity-event clichés.

## Sections

### 1. Sticky Navigation
- Logo (Sunflower gold circle + "Luz & Voz" wordmark)
- Links: Sobre, Programação, Atrações, Realização
- CTA button "Participar"
- Mobile hamburger menu via Sheet component
- Glassmorphic backdrop-blur effect

### 2. Hero Section
- Large bold headline: **FESTIVAL LUZ & VOZ — COLO DE MÃE**
- Subtitle with mission statement
- Date/time/location info cards with icons
- Animated countdown timer to April 25, 2026
- CTA "Ver Programação" with smooth scroll
- Abstract gradient background orb

### 3. Sobre o Evento
- Brief mission text about the association and the festival's purpose
- Fade-in reveal animation on scroll

### 4. Destaque Especial — João Pedro Simões (Kart 44)
- Dark section with rounded corners for contrast
- Stylized placeholder card for the pilot's image
- Story of speed and overcoming — connecting autism to achievement
- Car icon accent

### 5. Programação Interativa
- **Tabs** component with 4 tabs: Palco Principal, Área Externa, Foyer/Artes, Cuidado
- Each tab shows a timeline of events with time, title, and description
- Accordion for expandable talk/palestra details
- Clean card-based layout per event

### 6. Atrações & Experiências Grid
- 6-card grid (3 columns desktop, 1 mobile)
- Cards for: Espaço Beleza, Acolhimento, Exposição, Intervenções Musicais, Sorteios, Kart 44
- Subtle hover lift animation
- Lucide icons per card

### 7. Footer
- Logo and institutional info (Associação Colo de Mãe, CNPJ)
- Placeholder logos for Prefeitura/Secretaria
- Copyright line

## Design Tokens
- **Fonts**: Bricolage Grotesque (display), Plus Jakarta Sans (body) via Google Fonts
- **Colors**: Warm off-white bg, deep charcoal text, sunflower gold primary, calm azure accent
- **Animations**: Framer Motion fade-in reveals, spring hover effects, smooth scroll
- **Accessibility**: 4.5:1+ contrast ratios, single-column mobile, no autoplay media

## Tech
- Single `Index.tsx` page with section components
- Framer Motion for scroll reveals
- Shadcn Tabs + Accordion for interactive schedule
- Lucide icons throughout
- Fully responsive (mobile-first)


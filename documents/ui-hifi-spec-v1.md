## UI Hi-Fi Specification V1: Maple Enterprises

Version: v1.0
Date: 2026-11-08
Purpose: Convert wireframes into implementation-ready visual and interaction specifications.

### 1) Visual Direction
1. Positioning: Professional consultancy with marketplace speed.
2. Tone: Confident, modern, trustworthy, and data-forward.
3. Style anchors:
- Bold typography hierarchy
- Spacious section rhythm
- High-contrast call-to-action moments
- Compliance and trust cues visible near conversions

### 2) Brand Tokens

#### 2.1 Color System
- Primary 900: #0D3B66
- Primary 700: #1C5D99
- Accent 600: #F95738
- Accent 500: #FF7A59
- Highlight 500: #F4D35E
- Success 600: #2E7D32
- Warning 600: #ED6C02
- Error 700: #C62828
- Neutral 900: #17202A
- Neutral 700: #5D6D7E
- Neutral 200: #E4EAF1
- Surface: #FFFFFF
- Background: #F7F9FC

#### 2.2 Typography
- Headline family: Manrope
- Body family: Source Sans 3
- Weight map:
  - Headline: 700
  - Section heading: 600
  - Body: 400
  - Label/meta: 500

Type scale:
- Display XL: 56/64
- Display L: 48/56
- H1: 40/48
- H2: 32/40
- H3: 26/34
- H4: 22/30
- Body L: 18/28
- Body M: 16/24
- Body S: 14/22
- Caption: 12/18

#### 2.3 Spacing and Radius
- Base unit: 8
- Section vertical spacing desktop: 88
- Section vertical spacing mobile: 48
- Card radius: 14
- Input radius: 10
- Button radius: 10

#### 2.4 Shadow and Elevation
- Elevation 1: 0 2 8 rgba(13,59,102,0.08)
- Elevation 2: 0 8 24 rgba(13,59,102,0.12)
- Elevation 3: 0 16 40 rgba(13,59,102,0.16)

### 3) Layout Grid
1. Breakpoints:
- Mobile: 360 to 767
- Tablet: 768 to 1199
- Desktop: 1200 and above
2. Containers:
- Marketing pages: max 1280
- Admin pages: max 1440
3. Gutter:
- Mobile: 16
- Tablet: 24
- Desktop: 32

### 4) Component Specifications

#### 4.1 Navigation
1. Public top nav height: 76 desktop, 64 mobile.
2. Sticky behavior activates after 120 scroll offset.
3. Active item uses primary underline and medium weight.

#### 4.2 Buttons
Variants:
- Primary: background Primary 900, text white.
- Secondary: border Primary 700, text Primary 700.
- Accent: background Accent 600, text white.
- Ghost: transparent, text Primary 900.

States:
- Hover: increase contrast by one tone.
- Focus: 2px outline Highlight 500.
- Disabled: Neutral 200 background, Neutral 700 text.

#### 4.3 Property Card
Required fields:
- Cover image 16:10 ratio
- Title and locality
- Property ID
- Price and price per sq ft
- Tags: category, status, verified
- CTA row: View Details, WhatsApp, Compare

Card behavior:
- Hover lift to elevation 2 on desktop.
- Image skeleton while loading.
- Clamp title to two lines.

#### 4.4 Filter Controls
1. Desktop: left rail persistent.
2. Mobile: full-screen drawer.
3. Applied chips always visible and removable.
4. Budget uses dual-thumb slider with direct min and max inputs.

#### 4.5 Forms
1. Label top aligned.
2. Required marker with asterisk and helper text.
3. Validation appears inline at blur and submit.
4. Success message shown with next step CTA.

#### 4.6 Admin Data Table
1. Header row sticky.
2. Row height: 56.
3. Bulk select first column.
4. Status chips color-coded by lead stage.
5. Side panel details width: 420 desktop.

### 5) Screen-Level Hi-Fi Guidance

#### 5.1 Home
1. Hero uses gradient wash from Primary 900 to Primary 700 with subtle map-line pattern.
2. Search box sits in elevated panel overlapping hero lower edge.
3. Featured cards in 4-column grid desktop, 2 tablet, 1 mobile.
4. Services strip alternates background surface and soft neutral bands.

#### 5.2 Listing
1. Keep filter rail fixed while scrolling results.
2. Display total results and active filter count near top.
3. Card spacing 20 desktop, 16 mobile.
4. Split-map view default off, remembered per user session.

#### 5.3 Property Detail
1. Gallery first image should be full-bleed within container.
2. Sticky CTA side panel contains response-time promise.
3. Documents section shows type, uploaded date, and preview/download actions.
4. Add trust ribbon near pricing with verification indicators.

#### 5.4 Admin Dashboard
1. KPI cards use strong numeric hierarchy and trend indicators.
2. Alert widgets use warning and error tones sparingly.
3. Funnel chart and pending reviews stay above fold on desktop.

#### 5.5 Admin Leads
1. Keep primary actions visible without scroll in side panel.
2. Timeline entries include source icon, owner, timestamp.
3. SLA overdue rows show warning border at row start.

### 6) Motion and Transitions
1. Page transition duration: 220ms ease-out.
2. Card hover transition: 160ms.
3. Drawer open and close: 240ms with slight opacity fade.
4. Skeleton shimmer interval: 1.4s.

### 7) Accessibility Baseline
1. Minimum text contrast target: WCAG AA.
2. All interactive controls keyboard reachable.
3. Focus states always visible.
4. Form errors announced with aria-live.
5. Minimum tap target 44x44 on mobile.

### 8) Content Rules
1. Property titles maximum 70 characters.
2. Display currency in INR with localized comma formatting.
3. Keep CTA labels action-first: Enquire, Schedule, Compare, Save.
4. Use consistent labels for legal documents and RERA information.

### 9) Handoff Checklist
1. Tokens mapped to CSS variables.
2. Component states documented: default, hover, focus, disabled, error.
3. Breakpoint behavior documented for each core screen.
4. Empty/loading/error states finalized.
5. Approval sign-off from product and design recorded in tracker.

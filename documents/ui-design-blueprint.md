## UI Design Blueprint: Maple Enterprises

Version: v0.1
Date: 2026-11-08
Goal: Define low-fidelity wireframes, design system foundations, and responsive behavior for MVP implementation.

### 1) Experience Principles
1. Trust first: verification badges, RERA visibility, clear disclosures.
2. Conversion always visible: Enquire, WhatsApp, Schedule Visit must stay easy to access.
3. Fast scanning: structured cards, clear pricing hierarchy, concise key specs.
4. Bold modern marketplace visual language: high-contrast sections, strong typography, and purposeful accents.

### 2) Navigation Architecture

#### Public Navigation
- Home
- Properties
- Services
- Locations
- About
- Insights
- Contact
- Sign In

#### Admin Navigation
- Dashboard
- Leads
- Properties
- Site Visits
- Media
- Documents
- Customers
- Team & Permissions
- Reports
- Settings

### 3) Design System Foundation

#### Color Tokens (Initial)
- `--color-primary`: #0D3B66 (deep blue trust base)
- `--color-accent`: #F95738 (action accent)
- `--color-highlight`: #F4D35E (attention highlight)
- `--color-success`: #2E7D32
- `--color-warning`: #ED6C02
- `--color-error`: #C62828
- `--color-bg`: #F7F9FC
- `--color-surface`: #FFFFFF
- `--color-text`: #17202A
- `--color-muted`: #5D6D7E

#### Typography
- Heading family: Manrope
- Body/UI family: Source Sans 3
- Display scale:
  - H1: 48/56
  - H2: 36/44
  - H3: 28/36
  - H4: 22/30
  - Body: 16/24
  - Caption: 14/20

#### Spacing and Layout
- Base spacing unit: 8px
- Radius: 12px cards, 10px inputs
- Shadow: subtle layered depth only on interactive surfaces
- Containers:
  - Public pages max width: 1280px
  - Admin pages max width: 1440px

### 4) Low-Fidelity Wireframes

#### 4.1 Public Home
```
[Top Nav: Logo | Properties | Services | Locations | About | Insights | Contact | Sign In]
[Hero: Marketplace + Consultancy Value Prop]
[Universal Search: Location | Category | Budget | CTA]
[Quick Chips: Residential | Commercial | Industrial | Plots]
[Featured Properties Grid]
[Why Maple: trust metrics + advisory strength]
[Services Strip]
[Location Spotlight]
[Testimonials]
[Insights Preview]
[Footer: compliance + contacts + links]
```

#### 4.2 Properties Listing
```
[Top Search and Sort Bar]
[Left Filter Rail]
- Location hierarchy
- Category/Subcategory
- Price range
- Area range
- Status
- Amenities
[Result Grid/List]
[Property Card: image, title, ID, price, key specs, badges, CTA]
[Map Toggle on desktop]
```

#### 4.3 Property Detail
```
[Gallery: photos/videos/floor plans]
[Summary: title, property ID, location, status, price]
[Sticky CTA Panel]
- Enquire on WhatsApp
- Schedule Site Visit
- Request Callback
[Tabs/Sections]
- Description
- Commercials
- Specifications
- Amenities
- Location Map
- Documents (RERA/legal/brochure)
[Similar Properties]
```

#### 4.4 About / Services / Locations / Contact
```
[About: brand story, team, trust blocks]
[Services: advisory offerings with outcomes]
[Locations: locality and project coverage map]
[Contact: multi-channel form, office info, map embed]
```

#### 4.5 Admin Dashboard
```
[KPI Row: Leads, Visits, Active Listings, Conversion]
[Lead Funnel]
[Pending Listing Reviews]
[Today Follow-ups]
[Upcoming Site Visits]
[Team Performance Snapshot]
[SLA Alerts]
```

#### 4.6 Admin Leads
```
[Lead Table/Board + Filters]
[Lead Detail Side Panel]
- Contact and requirement
- Timeline and notes
- Stage controls
- Next action
[Quick Actions]
- Assign
- Send template
- Book visit
- Close won/lost
```

#### 4.7 Admin Property Editor
```
[Stepper]
1 Basic Info
2 Commercials
3 Specs
4 Media
5 Documents
6 Publish
[Validation and publish checks]
```

### 5) Mobile Responsiveness Notes
1. Use sticky bottom action bar on property detail page.
2. Replace left filter rail with full-screen drawer on listing page.
3. Keep key CTAs visible above fold on first load.
4. Target minimum 44px tap area for all controls.
5. Prioritize image optimization and progressive loading.

### 6) Component Inventory (MVP)
1. Global header and footer
2. Search bar with autosuggest
3. Filter drawer/rail
4. Property card variants
5. Badge and status chips
6. Multi-step forms
7. Date/time slot selector
8. Data table and activity timeline
9. KPI stat cards
10. Empty states, skeleton loaders, and alerts

### 7) Immediate Next Design Milestones
1. Convert low-fidelity blocks into screen-level wireframes with annotations.
2. Validate wireframes for 3 journeys:
- Buyer enquiry
- Site visit booking
- Property publish workflow
3. Freeze v1 design tokens and component states for frontend build.

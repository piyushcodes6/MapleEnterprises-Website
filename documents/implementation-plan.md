## Plan: Maple Enterprises MVP Implementation

Create a modern real estate consultancy + marketplace platform with two MVP surfaces:
- Public website for buyers, tenants, and investors
- Admin portal for internal listing and lead operations

Phase 2 adds broker marketplace and commission automation.

**Objectives**
1. Position Maple Enterprises as trusted consultancy + property marketplace.
2. Capture and convert qualified leads with fast enquiry and site visit workflows.
3. Build a robust admin operation for listings, media, documents, and sales tracking.
4. Keep architecture scalable for broker marketplace expansion.

**MVP Scope**
1. Public Website
- Home
- Properties listing with advanced filters
- Property details (full specs, media, documents)
- About Us
- Services
- Locations
- Contact Us
- WhatsApp enquiry CTA on each property
- Schedule site visit flow
- Property comparison
- Location-based discovery

2. Admin Portal
- Dashboard
- Property management (add/edit/delete/publish)
- Media management (photos/videos/brochures)
- Document vault (legal + RERA files)
- Lead management and enquiry inbox
- Site visit scheduling and status tracking
- Customer management
- Team management + RBAC permissions
- Reporting (lead funnel, conversion, source)
- Settings (business profile, content, integrations)

3. Non-Functional Baseline
- SEO-ready public pages
- Role-based access control
- Signed URL document access
- Audit logs for critical actions
- Mobile-responsive UI

**Phase 2 Scope**
1. Broker onboarding portal
2. Broker listing submission and moderation
3. Service-fee/commission tracking and payouts
4. Multi-city rollout
5. Advanced insights/recommendation features

**Technology Stack**
1. Frontend: React + TypeScript
2. Backend: Node.js + NestJS (modular monolith in MVP)
3. Database: PostgreSQL
4. Storage: AWS S3 for media and documents
5. Auth/Roles: JWT + RBAC
6. Integrations:
- WhatsApp Business API
- Maps (Google Maps preferred for MVP)
- Analytics/event tracking

**Architecture Modules (Backend)**
1. Auth & RBAC
2. Properties & Inventory
3. Media Management
4. Document Management
5. Leads & CRM
6. Site Visits
7. Customers
8. Team & Roles
9. Reports
10. CMS/Settings

**Core Data Entities**
1. User
2. Role
3. Permission
4. Property
5. PropertyUnit
6. PropertyCommercial
7. PropertySpecification
8. MediaAsset
9. Document
10. Lead
11. LeadActivity
12. SiteVisit
13. Customer
14. AuditLog

**Delivery Phases (8 Sprints)**
1. Sprint 1-2
- Project setup, auth, RBAC, design system foundations
- Property and taxonomy baseline

2. Sprint 3-4
- Public pages and listing discovery
- Property detail pages with media/documents
- Search/filter system and comparison

3. Sprint 5-6
- Admin CRM, lead pipeline, and site visit scheduling
- Dashboard reports and settings/CMS

4. Sprint 7
- QA/UAT, performance tuning, compliance checks

5. Sprint 8
- Production release, monitoring, launch stabilization

**Verification Checklist**
1. Every required page is implemented and route-accessible.
2. All required property fields are captured in admin and visible publicly.
3. WhatsApp enquiry and site visit flows create leads correctly.
4. RBAC prevents unauthorized actions.
5. Document access is secure and audited.
6. Mobile UX works for search, enquiry, and booking.
7. Lead conversion reports and dashboards are accurate.

**Out of Scope (MVP)**
1. Full broker commission and payout automation
2. AI recommendation engine
3. Complex dynamic pricing engines
4. Multi-city multilingual rollout

**Current Iteration (2026-11-08): UI Design Sprint Start**
1. Objective
- Establish low-fidelity wireframes for all MVP-critical public and admin screens.
- Lock visual system direction for consistent implementation across React modules.

2. In Progress Deliverables
- Public wireframes: Home, Properties Listing, Property Detail, About, Services, Locations, Contact.
- Admin wireframes: Dashboard, Leads, Property Editor, Media Manager, Document Vault, Visits Calendar.
- Design system foundation: color tokens, typography scale, spacing, card patterns, interaction states.

3. Tracking and Handoff Rules
- Update tracker statuses at every milestone (screen completed, review completed, approved).
- Keep this plan document updated with scope changes and design decisions.
- Maintain a dedicated UI design blueprint file for implementation-ready references.

4. Linked Working Documents
- UI Design Blueprint: documents/ui-design-blueprint.md
- Execution Tracker: documents/implementation-tracker.md

5. Milestone Update
- Detailed low-fidelity wireframes completed and saved in documents/ui-wireframes-v1.md.
- Public and admin information architecture translated into implementation-facing screen structures.
- Design system baseline (tokens and component inventory) captured for frontend handoff.
- Hi-fidelity visual specification completed and saved in documents/ui-hifi-spec-v1.md.
- UI sign-off checklist prepared in documents/ui-review-checklist.md.
- React + TypeScript frontend scaffold initialized in frontend/ with routing and public page prototypes.
- Initial tokenized styling system implemented and build validation completed.
- Admin portal v1 shell implemented with dedicated routes and pages for Dashboard, Properties, and Leads.
- Build validated after admin integration with no TypeScript or bundling errors.
- Admin UI coverage extended to Media, Document Vault, Site Visits, and Team modules.
- End-to-end frontend route map now spans core public pages and major admin sections.
- Premium visual refinement pass completed for public experience with stronger trust cues, elevated card hierarchy, and improved advisory presentation.
- Build validated after premium redesign with no TypeScript or bundling errors.
- Eye-catching enhancement pass completed with animated market pulse, testimonial showcase, cinematic property cards, and richer hero atmosphere.
- Design alignment pass completed to match approved premium reference direction (green-gold brand header, category rail, elevated listing presentation).
- All remaining public content pages and admin module pages updated to the same reference-style visual grammar and section hierarchy.
- Home page restructured to closely match provided reference composition (hero slab, inline search controls, trust icon row, compact featured cards).
- Home page extended below Featured with three conversion-oriented sections: Advisory Services, Market Snapshot, and Client Voices + consultation CTA.
- Home page sections polished for production-style finish: section kickers, enriched featured cards (status/category/area), enhanced advisory and testimonial card treatment, and tighter CTA hierarchy.
- Property listings page aligned to provided reference composition with compact card catalog, breadcrumb-led intro, and horizontal category selection strip.
- Global premium refinement pass completed: transparent green-glass header treatment, decongested homepage spacing system, and upgraded property catalog card experience.
- Header and property catalog reworked again to align with newly shared reference mood: slimmer premium translucent top bar and cleaner, more professional listing presentation.
- Autonomous premium redesign pass completed for header and properties: streamlined translucent nav with utility actions + consultation CTA, and a professional catalog workflow with search/sort/category insights and elevated card hierarchy.
- Professional header refinement pass completed: retained translucent treatment, removed initial utility-circle motif, and shifted to executive contact strip + consultation CTA balance.
- Properties page redesigned again with a more creative professional pattern: spotlight hero card, left control rail, budget/type filters, and a premium collection narrative.
- Footer redesigned for stronger contrast and professionalism: multi-column information architecture, premium trust markers, and compliant bottom legal strip aligned with the refined header language.
- Home page post-Featured modules redesigned from decorative blocks into engineered sections: advisory workflow architecture, measurable market intelligence, and proof-centric trust panel.
- Functional integration pass completed: hero search now navigates to Listings with query parameters, and Listings controls are URL-synced (type/location/budget/query/sort) with reset support.
- Cross-device responsive hardening completed: explicit breakpoints for wide screens, tablets, and mobile with improved layout scaling, spacing rhythm, and component behavior consistency.
- Catalog scalability pass completed: expanded mock inventory, introduced paginated listings, and persisted page state in URL alongside existing filters and sorting.
- Featured property showcase aligned to latest reference pattern: richer card information architecture, quick action affordance, dual CTA row (View Details + WhatsApp), and final pixel-level spacing/typography/shadow calibration.

6. Next Steps in UI Track
- Conduct stakeholder review using checklist and capture revision notes.
- Freeze UI v1.1 after review decisions.
- Refine public pages to match hi-fi spec details and implement responsive polish.
- Extend admin UI coverage for media, document vault, site visits, and team management screens.
- Start API integration planning between frontend modules and NestJS backend contracts.
- Add form state management and backend-ready payload contracts for enquiries and admin CRUD actions.
- Add content authenticity elements (client testimonials, partner logos, compliance stamps) sourced from real business assets.
- Replace placeholder testimonials and metrics with real Maple business proof content for final trust conversion.
- Calibrate spacing and typography on mobile for the new header/category-rail composition.
- Replace placeholder brand mark with final logo asset once provided, while retaining the current aligned layout structure.
## Tracker: Maple Enterprises Build Tracker

Use this tracker to monitor progress, ownership, and release readiness.

### Legend
- Status: Not Started | In Progress | Blocked | Done
- Priority: P0 (Critical) | P1 (High) | P2 (Medium)

### Phase A: Product & Design
| ID | Task | Owner | Priority | Status | Start | Due | Notes |
|---|---|---|---|---|---|---|---|
| A1 | Finalize MVP scope and exclusions | Product | P0 | Done | 2026-11-08 | 2026-11-08 | Broker marketplace moved to Phase 2 |
| A2 | Finalize sitemap and IA | Product/Design | P0 | Done | 2026-11-08 | 2026-11-08 | Public + Admin structures finalized |
| A3 | Create low-fidelity wireframes (core 6 screens) | Design | P0 | Done | 2026-11-08 | 2026-11-08 | Completed in documents/ui-wireframes-v1.md |
| A4 | Approve visual style guide | Design | P1 | Done | 2026-11-08 | 2026-11-08 | Visual system documented in ui-hifi-spec-v1.md |

### Phase A.1: UI Design Workstream
| ID | Task | Owner | Priority | Status | Start | Due | Notes |
|---|---|---|---|---|---|---|---|
| UI1 | Draft public page wireframes (7 pages) | Design | P0 | Done | 2026-11-08 | 2026-11-08 | Completed in documents/ui-wireframes-v1.md |
| UI2 | Draft admin page wireframes (6 pages) | Design | P0 | Done | 2026-11-08 | 2026-11-08 | Completed in documents/ui-wireframes-v1.md |
| UI3 | Define design tokens and component patterns | Design/Frontend | P0 | Done | 2026-11-08 | 2026-11-08 | Tokens and component list in ui-design-blueprint.md |
| UI4 | Mobile responsiveness annotations | Design/Frontend | P1 | Done | 2026-11-08 | 2026-11-08 | Finalized in ui-wireframes-v1.md and ui-hifi-spec-v1.md |
| UI5 | Stakeholder review and sign-off | Product/Design | P0 | In Progress | 2026-11-08 | 2026-11-11 | Checklist created in ui-review-checklist.md |

### Phase B: Platform Foundation
| ID | Task | Owner | Priority | Status | Start | Due | Notes |
|---|---|---|---|---|---|---|---|
| B1 | Initialize frontend app structure | Frontend | P0 | Done | 2026-11-08 | 2026-11-08 | Vite React TS scaffold created in frontend/ |
| B2 | Initialize backend modules | Backend | P0 | Not Started |  |  | NestJS modular monolith |
| B3 | Setup PostgreSQL schema baseline | Backend | P0 | Not Started |  |  | Core entities first |
| B4 | Setup S3 buckets and access policy | DevOps | P1 | Not Started |  |  | Media/docs separation |
| B5 | Setup auth + RBAC | Backend | P0 | Not Started |  |  | Admin roles required |

### Phase C: Public Website
| ID | Task | Owner | Priority | Status | Start | Due | Notes |
|---|---|---|---|---|---|---|---|
| C1 | Build Home page | Frontend | P0 | In Progress | 2026-11-08 |  | Home page now includes reference-style featured property cards (status badge, quick action icon, pricing detail row, feature tags, dual CTAs) with final spacing/typography pass and premium visual calibration |
| C2 | Build Listings search + filters | Frontend | P0 | In Progress | 2026-11-08 |  | Added real filter workflow plus pagination and larger listing dataset; URL now persists type/location/budget/query/sort/page |
| C8 | Polish global footer | Frontend | P1 | In Progress | 2026-11-08 |  | Redesigned to high-contrast premium footer with structured columns, trust tags, quick links, and legal bottom band |
| C9 | Cross-device responsive hardening | Frontend | P0 | In Progress | 2026-11-08 |  | Added wide/desktop/tablet/mobile breakpoints with recalibrated grids, spacing, actions, and typography across Home/Properties/Footer |
| C3 | Build Property Details page | Frontend | P0 | In Progress | 2026-11-08 |  | Premium trust treatment retained with key facts and visual polish |
| C4 | Build Services/About/Locations/Contact | Frontend | P1 | In Progress | 2026-11-08 |  | Full reference-style redesign pass applied across all content pages |
| C5 | Integrate WhatsApp property enquiry CTA | Frontend/Backend | P0 | In Progress | 2026-11-08 |  | Homepage featured cards now include WhatsApp deep-link CTA with prefilled enquiry text; backend lead capture integration pending |
| C6 | Build site visit booking flow | Frontend/Backend | P0 | Not Started |  |  | Slot booking + confirmation |
| C7 | Build property comparison | Frontend | P1 | Not Started |  |  | Up to 3 properties compare |

### Phase D: Admin Portal
| ID | Task | Owner | Priority | Status | Start | Due | Notes |
|---|---|---|---|---|---|---|---|
| D1 | Dashboard KPIs and widgets | Frontend/Backend | P0 | In Progress | 2026-11-08 |  | Reference-style admin dashboard tabs and KPI hierarchy refined |
| D2 | Property CRUD + publish workflow | Frontend/Backend | P0 | In Progress | 2026-11-08 |  | Admin properties management UI shell implemented |
| D3 | Media upload and gallery manager | Frontend/Backend | P0 | In Progress | 2026-11-08 |  | Admin media manager UI v1 implemented |
| D4 | Document vault with categories | Frontend/Backend | P0 | In Progress | 2026-11-08 |  | Admin document vault UI v1 implemented |
| D5 | Lead management pipeline | Frontend/Backend | P0 | In Progress | 2026-11-08 |  | Leads table and stage visibility UI implemented |
| D6 | Site visit scheduler and tracker | Frontend/Backend | P0 | In Progress | 2026-11-08 |  | Site visits screen and schedule workflow shell implemented |
| D7 | Customer and team management | Frontend/Backend | P1 | In Progress | 2026-11-08 |  | Team and permissions screen implemented |
| D8 | Reports module | Frontend/Backend | P1 | Not Started |  |  | Funnel/source/conversion |
| D9 | Settings and CMS basics | Frontend/Backend | P1 | Not Started |  |  | Business profile and static content |

### Phase E: QA, Security, and Launch
| ID | Task | Owner | Priority | Status | Start | Due | Notes |
|---|---|---|---|---|---|---|---|
| E1 | End-to-end QA for critical journeys | QA | P0 | Not Started |  |  | Enquiry, booking, publish |
| E2 | RBAC and permission testing | QA/Backend | P0 | Not Started |  |  | Unauthorized access checks |
| E3 | Performance audit (public pages) | Frontend | P1 | Not Started |  |  | LCP/CLS optimization |
| E4 | Security and audit log review | Backend | P0 | Not Started |  |  | Sensitive action traceability |
| E5 | UAT sign-off and production checklist | Product | P0 | Not Started |  |  | Go-live readiness |

### Open Risks Log
| Risk ID | Risk | Severity | Mitigation | Owner | Status |
|---|---|---|---|---|---|
| R1 | Incomplete listing documentation delays publishing | High | Enforce publish checklist with required docs | Product/Ops | Open |
| R2 | Lead response delay reduces conversion | High | SLA alerts + assignment automation | Sales Ops | Open |
| R3 | Media-heavy pages impact speed | Medium | CDN, image optimization, lazy loading | Frontend | Open |
| R4 | Role misconfiguration causes data access issues | High | RBAC matrix review + audit testing | Backend/QA | Open |

### Weekly Progress Summary
| Week | Completed | In Progress | Blockers | Next Focus |
|---|---|---|---|---|
| Week 1 | Scope lock, IA finalized, wireframes v1, hi-fi spec v1, frontend scaffold, expanded admin modules, premium visual pass, reference-style theme alignment, all-page redesign pass | Public/admin UI refinement + stakeholder review | None | Connect forms and tables to backend API contracts |
## UI Wireframes V1: Maple Enterprises

Version: v1.0
Date: 2026-11-08
Scope: Detailed low-fidelity wireframes for MVP priority screens (public + admin)

### 1) Public: Home

#### 1.1 Desktop Wireframe
```
+--------------------------------------------------------------------------------------------------+
| LOGO | Properties | Services | Locations | About | Insights | Contact | Saved | Sign In         |
+--------------------------------------------------------------------------------------------------+
| HERO: "Find the right property with trusted advisors"                                          |
| [Location v] [Category v] [Budget v] [Search Properties]                                        |
| Quick chips: [Residential] [Commercial] [Industrial] [Plots/Land] [Ready to Move]              |
+--------------------------------------------------------------------------------------------------+
| Featured Properties                                                                              |
| [Card] [Card] [Card] [Card]                                                                     |
+--------------------------------------------------------------------------------------------------+
| Why Maple Enterprises                                                                            |
| [Verified Listings] [Local Expertise] [Fast Site Visits] [Legal-First Guidance]                 |
+--------------------------------------------------------------------------------------------------+
| Services                                                                                         |
| [Investment Advisory] [Property Acquisition] [Commercial Advisory] [Legal/Documentation]        |
+--------------------------------------------------------------------------------------------------+
| Location Spotlight                                                                               |
| [Area Card] [Area Card] [Area Card] [Explore All Locations]                                     |
+--------------------------------------------------------------------------------------------------+
| Testimonials + Success Metrics                                                                   |
+--------------------------------------------------------------------------------------------------+
| Insights Preview                                                                                 |
| [Article Card] [Article Card] [Article Card]                                                     |
+--------------------------------------------------------------------------------------------------+
| Footer: Contact | Office | Compliance | RERA | Social                                            |
+--------------------------------------------------------------------------------------------------+
```

#### 1.2 Mobile Wireframe
```
+--------------------------------------+
| LOGO                 [Menu] [Saved]  |
+--------------------------------------+
| Hero headline                         |
| [Location] [Category]                |
| [Budget] [Search]                    |
| Chips slider                         |
+--------------------------------------+
| Featured Properties (horizontal)     |
+--------------------------------------+
| Why Maple                            |
+--------------------------------------+
| Services cards                       |
+--------------------------------------+
| Locations cards                      |
+--------------------------------------+
| Testimonials                         |
+--------------------------------------+
| Insights cards                       |
+--------------------------------------+
| Footer                               |
+--------------------------------------+
```

#### 1.3 Home Interaction Notes
1. Search bar supports autosuggest by locality, project name, and landmark.
2. Quick chips pre-apply listing filters and route to listing page.
3. Above-the-fold CTA pair:
- Primary: Search Properties
- Secondary: Talk to Advisor
4. Scroll behavior: sticky top navigation after hero fold.

### 2) Public: Properties Listing

#### 2.1 Desktop Wireframe
```
+--------------------------------------------------------------------------------------------------+
| Search: [Location/Project]         Filters Applied: 5                  Sort: [Price Low-High v]|
+--------------------------------------------------------------------------------------------------+
| FILTER RAIL (280px)                 | RESULTS (cards/list)                                      |
|-------------------------------------|-----------------------------------------------------------|
| Location                             | [Property Card] [Property Card]                           |
| Category/Subcategory                 | [Property Card] [Property Card]                           |
| Budget Slider                        | [Property Card] [Property Card]                           |
| Area Slider                          | Pagination / Infinite Scroll                              |
| Availability Status                  |                                                           |
| Amenities                            |                                                           |
| Verified Only [ ]                    |                                                           |
| [Reset] [Apply]                      |                                                           |
+--------------------------------------------------------------------------------------------------+
| Optional Split Map View Toggle: [List] [Map] [Split]                                             |
+--------------------------------------------------------------------------------------------------+
```

#### 2.2 Mobile Wireframe
```
+--------------------------------------+
| Search bar                           |
| [Sort] [Filter(5)] [Map]             |
+--------------------------------------+
| Property Card                        |
| Property Card                        |
| Property Card                        |
+--------------------------------------+
| Sticky actions: [Save Search] [Alert]|
+--------------------------------------+

Filter Drawer (full screen)
+--------------------------------------+
| Filters                [Clear All]   |
| Location                            v |
| Category/Subcategory               v |
| Budget                             v |
| Area                               v |
| Status                             v |
| Amenities                          v |
| Verified Only [ ]                    |
| [Apply Filters]                      |
+--------------------------------------+
```

#### 2.3 Listing Interaction Notes
1. Filter chips appear below search bar and are individually removable.
2. Show result count updates instantly on filter change.
3. Card CTAs:
- View Details
- Enquire on WhatsApp
- Compare
4. Compare supports max 3 properties and routes to compare table.

### 3) Public: Property Detail

#### 3.1 Desktop Wireframe
```
+--------------------------------------------------------------------------------------------------+
| Breadcrumb: Home > Properties > Property Name                                                    |
+--------------------------------------------------------------------------------------------------+
| Gallery (photos/video/floor plans)                     | Sticky CTA Panel                         |
|                                                        | [Enquire on WhatsApp]                    |
|                                                        | [Schedule Site Visit]                    |
|                                                        | [Request Callback]                       |
+--------------------------------------------------------------------------------------------------+
| Title | Property ID | Locality | Category | Status                                               |
| Price | Price/sqft | Maintenance | Brokerage (if any)                                          |
+--------------------------------------------------------------------------------------------------+
| Tabs: Overview | Commercials | Specs | Amenities | Location | Documents | FAQ                   |
+--------------------------------------------------------------------------------------------------+
| Overview                                                                                         |
| Detailed description and highlights                                                              |
+--------------------------------------------------------------------------------------------------+
| Similar Properties                                                                                |
| [Card] [Card] [Card]                                                                              |
+--------------------------------------------------------------------------------------------------+
```

#### 3.2 Mobile Wireframe
```
+--------------------------------------+
| Gallery carousel                     |
| Title + Price + Location             |
| Property ID + Status                 |
+--------------------------------------+
| Tabs slider                          |
| Content section                      |
+--------------------------------------+
| Sticky bottom bar                    |
| [WhatsApp] [Schedule Visit]          |
+--------------------------------------+
```

### 4) Public: Supporting Pages

#### 4.1 About
1. Brand story timeline.
2. Leadership/team section.
3. Trust panel: transactions, verified listings, years.

#### 4.2 Services
1. Service cards with outcomes and target audience.
2. Advisor consultation CTA module.

#### 4.3 Locations
1. City/locality cards with demand/price indicators.
2. Map-led exploration section with project pins.

#### 4.4 Contact
1. Lead form with reason selector.
2. Office map and operating hours.
3. WhatsApp and call quick links.

### 5) Admin: Dashboard

#### 5.1 Desktop Wireframe
```
+--------------------------------------------------------------------------------------------------+
| Left Nav | Dashboard                                                                              |
|          | Date Filter [Today/Week/Month] [Team Filter]                                           |
+--------------------------------------------------------------------------------------------------+
| KPI Cards: [New Leads] [Qualified] [Site Visits] [Active Listings] [Conversion %]               |
+--------------------------------------------------------------------------------------------------+
| Lead Funnel (chart)                   | Pending Listing Reviews                                  |
+--------------------------------------------------------------------------------------------------+
| Upcoming Site Visits (table/calendar) | SLA Alerts / Overdue Follow-ups                          |
+--------------------------------------------------------------------------------------------------+
| Source Performance                    | Team Activity Snapshot                                   |
+--------------------------------------------------------------------------------------------------+
```

### 6) Admin: Lead Management

#### 6.1 Desktop Wireframe
```
+--------------------------------------------------------------------------------------------------+
| Leads | Saved Views [New | Follow-up Due | Visit Scheduled | Won/Lost]                            |
+--------------------------------------------------------------------------------------------------+
| Filters: Source | Budget | Location | Assignee | Stage | Date                                      |
+--------------------------------------------------------------------------------------------------+
| Lead Table                                      | Lead Detail Panel                               |
| Name | Phone | Project | Stage | Owner | SLA      | Contact Info                                  |
| ...                                            | Requirement Summary                             |
|                                                | Timeline + Notes                                |
|                                                | Next Action                                     |
|                                                | Quick Actions: Assign | Visit | Template | Close|
+--------------------------------------------------------------------------------------------------+
```

### 7) Admin: Property Editor

#### 7.1 Desktop Wireframe
```
+--------------------------------------------------------------------------------------------------+
| Properties > Create/Edit Property                                                                |
+--------------------------------------------------------------------------------------------------+
| Stepper: [1 Basic] [2 Commercials] [3 Specs] [4 Media] [5 Docs] [6 Publish]                    |
+--------------------------------------------------------------------------------------------------+
| Step Content Area                                                                                |
| Form fields + validation                                                                         |
+--------------------------------------------------------------------------------------------------+
| Right Validation Panel                                                                           |
| - Missing mandatory fields                                                                       |
| - Missing mandatory documents                                                                    |
| - Publish readiness score                                                                        |
+--------------------------------------------------------------------------------------------------+
| [Save Draft] [Preview] [Submit for Review] [Publish]                                             |
+--------------------------------------------------------------------------------------------------+
```

### 8) Admin: Media and Document Vault

#### 8.1 Media Manager
1. Grid/list view with upload queue.
2. Asset metadata: type, resolution, linked property.
3. Bulk actions: tag, reorder, archive.

#### 8.2 Document Vault
1. Category folders: RERA, legal, brochure, registry.
2. Version history and expiration date.
3. Access control visibility indicator.

### 9) Admin: Site Visits Calendar

#### 9.1 Wireframe Notes
1. Calendar views: day/week/month.
2. Visit cards include lead, property, consultant, status.
3. Actions: reschedule, confirm attendance, add feedback.

### 10) Global Components and States
1. Inputs: default, focus, error, disabled.
2. Buttons: primary, secondary, ghost, destructive.
3. Alerts: success, warning, error, info.
4. Empty states with contextual CTA.
5. Skeleton loading for cards/tables.

### 11) Responsive Behavior Matrix
| Screen | Desktop | Tablet | Mobile |
|---|---|---|---|
| Home | Full sections | Reduced columns | Stacked cards |
| Listing | Filter rail + results | Collapsible filters | Full-screen filter drawer |
| Detail | Gallery + sticky side CTA | Stacked with sticky CTA | Sticky bottom actions |
| Dashboard | Multi-widget grid | 2-column widgets | KPI + essential queue only |
| Leads | Table + side panel | Table with modal details | Condensed list + detail drawer |

### 12) Design Handoff Notes
1. This wireframe set is implementation-facing and maps directly to React route modules.
2. Each screen should be converted to hi-fi mockups before frontend coding starts.
3. Keep copy and labels domain-consistent with admin data model fields.

export type PropertyCategory = 'Residential' | 'Commercial' | 'Industrial' | 'Plots/Land'

export type Property = {
  id: string
  title: string
  category: PropertyCategory
  locality: string
  coordinates: {
    lat: number
    lng: number
  }
  status: 'Ready to Move' | 'Under Construction' | 'New Launch'
  priceLabel: string
  pricePerSqft: string
  area: string
  image: string
  tags: string[]
}

export const properties: Property[] = [
  {
    id: 'MPE-101',
    title: 'Lakeview Residences Phase II',
    category: 'Residential',
    locality: 'Sector 88, Gurgaon',
    coordinates: { lat: 28.3872, lng: 76.9806 },
    status: 'Ready to Move',
    priceLabel: 'INR 1.45 Cr onwards',
    pricePerSqft: 'INR 12,850/sq ft',
    area: '1280 - 1840 sq ft',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    tags: ['Verified', 'RERA', 'Family Living'],
  },
  {
    id: 'MPE-203',
    title: 'Maple Business Square',
    category: 'Commercial',
    locality: 'Golf Course Extension Road',
    coordinates: { lat: 28.4276, lng: 77.1033 },
    status: 'Under Construction',
    priceLabel: 'INR 2.10 Cr onwards',
    pricePerSqft: 'INR 18,200/sq ft',
    area: '920 - 2100 sq ft',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
    tags: ['High Yield', 'Prime Zone', 'New Inventory'],
  },
  {
    id: 'MPE-309',
    title: 'Industrial Hub 42',
    category: 'Industrial',
    locality: 'IMT Manesar',
    coordinates: { lat: 28.3511, lng: 76.9427 },
    status: 'New Launch',
    priceLabel: 'INR 3.60 Cr onwards',
    pricePerSqft: 'INR 7,300/sq ft',
    area: '5000 - 12000 sq ft',
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80',
    tags: ['Logistics Ready', 'Wide Access', 'Developer Assured'],
  },
  {
    id: 'MPE-412',
    title: 'Greenfield Plots Collective',
    category: 'Plots/Land',
    locality: 'Sohna Road Extension',
    coordinates: { lat: 28.3924, lng: 77.0407 },
    status: 'Ready to Move',
    priceLabel: 'INR 58 L onwards',
    pricePerSqft: 'INR 5,950/sq ft',
    area: '900 - 1800 sq ft',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80',
    tags: ['Gated', 'Registry Ready', 'Investment Zone'],
  },
  {
    id: 'MPE-118',
    title: 'Cedar Heights Residences',
    category: 'Residential',
    locality: 'Sector 150, Noida',
    coordinates: { lat: 28.474, lng: 77.5208 },
    status: 'Under Construction',
    priceLabel: 'INR 1.18 Cr onwards',
    pricePerSqft: 'INR 9,950/sq ft',
    area: '1180 - 1720 sq ft',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80',
    tags: ['Clubhouse', 'Metro Linked', 'Family Living'],
  },
  {
    id: 'MPE-244',
    title: 'Axis Commerce Center',
    category: 'Commercial',
    locality: 'Sector 62, Noida',
    coordinates: { lat: 28.6208, lng: 77.3656 },
    status: 'Ready to Move',
    priceLabel: 'INR 2.44 Cr onwards',
    pricePerSqft: 'INR 16,700/sq ft',
    area: '1050 - 2450 sq ft',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80',
    tags: ['Leased Options', 'High Footfall', 'Grade-A Asset'],
  },
  {
    id: 'MPE-356',
    title: 'Transpark Warehousing Estate',
    category: 'Industrial',
    locality: 'Greater Noida Logistics Belt',
    coordinates: { lat: 28.4746, lng: 77.489 },
    status: 'Under Construction',
    priceLabel: 'INR 3.25 Cr onwards',
    pricePerSqft: 'INR 6,850/sq ft',
    area: '4200 - 9800 sq ft',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80',
    tags: ['Dock Access', '12m Roads', 'Power Ready'],
  },
  {
    id: 'MPE-438',
    title: 'Ridgeview Plot Enclave',
    category: 'Plots/Land',
    locality: 'Yamuna Expressway Corridor',
    coordinates: { lat: 28.3519, lng: 77.5533 },
    status: 'New Launch',
    priceLabel: 'INR 72 L onwards',
    pricePerSqft: 'INR 6,420/sq ft',
    area: '1000 - 2200 sq ft',
    image:
      'https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1400&q=80',
    tags: ['Future Growth', 'Park Facing', 'Registry Support'],
  },
  {
    id: 'MPE-126',
    title: 'Willow Grove Towers',
    category: 'Residential',
    locality: 'Raj Nagar Extension, Ghaziabad',
    coordinates: { lat: 28.6968, lng: 77.4538 },
    status: 'Ready to Move',
    priceLabel: 'INR 98 L onwards',
    pricePerSqft: 'INR 8,350/sq ft',
    area: '1100 - 1650 sq ft',
    image:
      'https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=1400&q=80',
    tags: ['School Nearby', 'Low Density', 'Move-In Ready'],
  },
  {
    id: 'MPE-267',
    title: 'Crescent Retail Boulevard',
    category: 'Commercial',
    locality: 'Sohna Road, Gurgaon',
    coordinates: { lat: 28.4089, lng: 77.055 },
    status: 'New Launch',
    priceLabel: 'INR 1.85 Cr onwards',
    pricePerSqft: 'INR 19,400/sq ft',
    area: '780 - 1600 sq ft',
    image:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1400&q=80',
    tags: ['Retail Frontage', 'Anchor Brands', 'Investor Friendly'],
  },
  {
    id: 'MPE-334',
    title: 'Prime Forge Industrial Park',
    category: 'Industrial',
    locality: 'Dharuhera Belt',
    coordinates: { lat: 28.2057, lng: 76.7968 },
    status: 'Ready to Move',
    priceLabel: 'INR 4.10 Cr onwards',
    pricePerSqft: 'INR 7,650/sq ft',
    area: '5600 - 14200 sq ft',
    image:
      'https://images.unsplash.com/photo-1565791380713-1756b9a3ea6b?auto=format&fit=crop&w=1400&q=80',
    tags: ['EOT Cranes', 'Truck Bay', 'Operational Zone'],
  },
  {
    id: 'MPE-452',
    title: 'Horizon Land Parcels',
    category: 'Plots/Land',
    locality: 'New Gurgaon Extension',
    coordinates: { lat: 28.4382, lng: 76.9987 },
    status: 'Under Construction',
    priceLabel: 'INR 1.12 Cr onwards',
    pricePerSqft: 'INR 7,150/sq ft',
    area: '1250 - 2600 sq ft',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
    tags: ['Corner Plots', 'Planned Utilities', 'Growth Corridor'],
  },
]

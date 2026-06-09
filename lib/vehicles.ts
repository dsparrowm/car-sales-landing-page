import { privateVehicles } from './private-vehicles'

export type ShowroomRoom = 'atelier' | 'vault' | 'salon' | 'proving-ground'

export type Vehicle = {
  id: number
  slug: string
  name: string
  year: number
  category: string
  price: string
  color: string
  description: string
  longDescription: string
  badge: string
  image: string
  gallery: string[]
  specs: { label: string; value: string }[]
  highlights: string[]
  features: { label: string; value: string }[]
  access: 'public' | 'private'
  room?: ShowroomRoom
}

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85&auto=format&fit=crop'

export const HERO_VIDEO =
  'https://videos.pexels.com/video-files/4483112/4483112-hd_1920_1080_30fps.mp4'

export const vehicles: Vehicle[] = [
  {
    id: 1,
    access: 'public',
    slug: 'sovereign-gt',
    name: 'Sovereign GT',
    year: 2024,
    category: 'Performance',
    price: '$285,000',
    color: 'Midnight Black',
    description:
      'Twin-turbocharged precision engineered for those who demand power without compromise.',
    longDescription:
      'The Sovereign GT represents the apex of our performance catalogue — a hand-finished grand tourer where every surface has been considered, every decibel tuned. Its twin-turbocharged V8 delivers relentless acceleration while cabin isolation remains whisper-quiet at motorway speeds. This example arrives with full service history, ceramic coating, and a bespoke interior trimmed in Nappa leather and brushed aluminium.',
    badge: 'Signature Collection',
    image:
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1400&q=80&auto=format&fit=crop',
    ],
    specs: [
      { label: 'Power', value: '650 HP' },
      { label: '0–60', value: '3.1s' },
      { label: 'Top Speed', value: '205 mph' },
    ],
    highlights: [
      'Carbon ceramic braking system',
      'Active aerodynamics package',
      'Bespoke 21" forged wheels',
      'Bang & Olufsen sound system',
    ],
    features: [
      { label: 'Engine', value: '4.0L Twin-Turbo V8' },
      { label: 'Transmission', value: '8-Speed Dual-Clutch' },
      { label: 'Drivetrain', value: 'Rear-Wheel Drive' },
      { label: 'Mileage', value: '1,240 miles' },
      { label: 'Interior', value: 'Nappa Leather / Alcantara' },
      { label: 'Warranty', value: '4 years remaining' },
    ],
  },
  {
    id: 2,
    access: 'public',
    slug: 'velocity-r',
    name: 'Velocity R',
    year: 2024,
    category: 'Hybrid',
    price: '$145,000',
    color: 'Pearl White',
    description:
      'Silent acceleration meets sustainable luxury — 500 miles of range, zero compromise.',
    longDescription:
      'The Velocity R redefines what a hybrid grand tourer can be. Instant torque from its electric motors pairs with a refined petrol engine for seamless power delivery and extraordinary efficiency. The cabin is a sanctuary of sustainable materials — recycled aluminium trim, responsibly sourced leather, and a panoramic glass roof that floods the interior with natural light.',
    badge: 'Eco Elite',
    image:
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1400&q=80&auto=format&fit=crop',
    ],
    specs: [
      { label: 'Range', value: '500 mi' },
      { label: '0–60', value: '4.2s' },
      { label: 'Efficiency', value: '118 MPGe' },
    ],
    highlights: [
      'Plug-in hybrid powertrain',
      'Adaptive air suspension',
      'Head-up display with AR navigation',
      'Heated and ventilated seats',
    ],
    features: [
      { label: 'Engine', value: '2.5L Turbo + Dual Motor' },
      { label: 'Transmission', value: 'CVT with EV Mode' },
      { label: 'Drivetrain', value: 'All-Wheel Drive' },
      { label: 'Mileage', value: '3,800 miles' },
      { label: 'Interior', value: 'Vegan Leather / Open-Pore Wood' },
      { label: 'Warranty', value: '5 years remaining' },
    ],
  },
  {
    id: 3,
    access: 'public',
    slug: 'heritage-classic',
    name: 'Heritage Classic',
    year: 2023,
    category: 'Collector',
    price: '$425,000',
    color: 'British Racing Green',
    description:
      'A meticulously restored icon, reimagined for the collector who values provenance.',
    longDescription:
      'This Heritage Classic is one of twelve examples restored to concours standards by our atelier partners in Warwickshire. Every panel has been hand-formed, every stitch period-correct, while discreet modern upgrades — including a five-speed gearbox and improved braking — ensure it can be enjoyed on the road as well as the show lawn. Complete with documented ownership chain and FIVA passport.',
    badge: 'Limited Edition',
    image:
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1400&q=80&auto=format&fit=crop',
    ],
    specs: [
      { label: 'Built', value: '1967' },
      { label: 'Restored', value: '2023' },
      { label: 'Units', value: '1 of 12' },
    ],
    highlights: [
      'Concours-level restoration',
      'Matching-numbers engine',
      'FIVA identity passport',
      'Full provenance documentation',
    ],
    features: [
      { label: 'Engine', value: '4.2L Inline-Six' },
      { label: 'Transmission', value: '5-Speed Manual' },
      { label: 'Drivetrain', value: 'Rear-Wheel Drive' },
      { label: 'Mileage', value: '42,000 miles (total)' },
      { label: 'Interior', value: 'Connolly Leather / Walnut' },
      { label: 'Warranty', value: '12-month atelier cover' },
    ],
  },
  {
    id: 4,
    access: 'public',
    slug: 'expedition-pro',
    name: 'Expedition Pro',
    year: 2024,
    category: 'Adventure',
    price: '$95,000',
    color: 'Arctic Silver',
    description:
      'All-terrain capability wrapped in hand-stitched leather and panoramic silence.',
    longDescription:
      'The Expedition Pro is luxury without boundaries. Its intelligent terrain response system adapts to any surface, while the elevated seating position and vast glass area create a commanding view of the landscape. Inside, no detail has been spared — massaging seats, a refrigerated console, and an air purification system that rivals the finest residences.',
    badge: 'Explorer Series',
    image:
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=1400&q=80&auto=format&fit=crop',
    ],
    specs: [
      { label: 'Drive', value: 'AWD' },
      { label: 'Terrain', value: '8 Modes' },
      { label: 'Towing', value: '7,700 lbs' },
    ],
    highlights: [
      'Air suspension with lift mode',
      '360° camera with trail view',
      'Heated steering wheel',
      'Roof rails and expedition rack',
    ],
    features: [
      { label: 'Engine', value: '3.0L Turbo Inline-Six' },
      { label: 'Transmission', value: '8-Speed Automatic' },
      { label: 'Drivetrain', value: 'Full-Time AWD' },
      { label: 'Mileage', value: '6,100 miles' },
      { label: 'Interior', value: 'Semi-Aniline Leather' },
      { label: 'Warranty', value: '3 years remaining' },
    ],
  },
]

export const allVehicles: Vehicle[] = [...vehicles, ...privateVehicles]

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return allVehicles.find((v) => v.slug === slug)
}

export function getAllVehicleSlugs(): string[] {
  return allVehicles.map((v) => v.slug)
}

export function getPublicVehicles(): Vehicle[] {
  return vehicles
}

export function getPrivateVehicles(): Vehicle[] {
  return privateVehicles
}

import type { ShowroomRoom, Vehicle } from './vehicles'

export type ShowroomRoomConfig = {
  id: ShowroomRoom
  title: string
  subtitle: string
  description: string
  image: string
}

export const showroomRooms: ShowroomRoomConfig[] = [
  {
    id: 'atelier',
    title: 'The Atelier',
    subtitle: 'Bespoke Commissions',
    description:
      'One-of-one creations and coachbuilt masterpieces, crafted for clients who refuse to compromise on individuality.',
    image:
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1920&q=80&auto=format&fit=crop',
  },
  {
    id: 'vault',
    title: 'The Vault',
    subtitle: 'Collector Editions',
    description:
      'Rare, documented, and often irreplaceable — vehicles held in climate-controlled confidence for the serious collector.',
    image:
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1920&q=80&auto=format&fit=crop',
  },
  {
    id: 'salon',
    title: 'The Grand Salon',
    subtitle: 'Ultra-Luxury Grand Tourers',
    description:
      'The quietest cabins, the finest materials, and effortless power — reserved for those who travel as an art form.',
    image:
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1920&q=80&auto=format&fit=crop',
  },
  {
    id: 'proving-ground',
    title: 'The Proving Ground',
    subtitle: 'Track-Focused Performance',
    description:
      'Aerodynamics, precision, and raw capability — machines engineered for drivers who demand the extraordinary.',
    image:
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=80&auto=format&fit=crop',
  },
]

export const privateVehicles: Vehicle[] = [
  {
    id: 101,
    access: 'private',
    room: 'atelier',
    slug: 'bespoke-courier',
    name: 'Bespoke Courier',
    year: 2024,
    category: 'Commission',
    price: 'Price on Request',
    color: 'Santorini Blue',
    description:
      'A one-of-one commission with hand-painted coachlines and a interior trimmed to the owner\'s exact specification.',
    longDescription:
      'The Bespoke Courier represents the pinnacle of our atelier programme. Every surface was specified by its owner — from the custom-mixed Santorini Blue paint with hand-applied platinum coachlines, to the cashmere headliner and mother-of-pearl inlays. Only one example exists.',
    badge: 'One of One',
    image:
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1200&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=80&auto=format&fit=crop',
    ],
    specs: [
      { label: 'Commission', value: '1 of 1' },
      { label: 'Build Time', value: '18 mo' },
      { label: 'Power', value: '720 HP' },
    ],
    highlights: [
      'Hand-painted coachlines',
      'Cashmere headliner',
      'Mother-of-pearl inlays',
      'Bespoke luggage set included',
    ],
    features: [
      { label: 'Engine', value: '4.0L Twin-Turbo V8' },
      { label: 'Transmission', value: '7-Speed Manual' },
      { label: 'Drivetrain', value: 'Rear-Wheel Drive' },
      { label: 'Mileage', value: 'Delivery miles' },
      { label: 'Interior', value: 'Custom Cashmere / Leather' },
      { label: 'Provenance', value: 'Full atelier documentation' },
    ],
  },
  {
    id: 102,
    access: 'private',
    room: 'atelier',
    slug: 'maison-edition',
    name: 'Maison Edition',
    year: 2023,
    category: 'Bespoke',
    price: '$520,000',
    color: 'Champagne Metallic',
    description:
      'Collaboration with a renowned design house — limited to three examples worldwide.',
    longDescription:
      'Born from a collaboration with an iconic European design house, the Maison Edition fuses automotive engineering with haute couture sensibility. Champagne Metallic paint, rose-gold accents, and a fragrance system developed exclusively for this series.',
    badge: 'Atelier Series',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1400&q=80&auto=format&fit=crop',
    ],
    specs: [
      { label: 'Units', value: '3' },
      { label: 'Power', value: '600 HP' },
      { label: '0–60', value: '3.4s' },
    ],
    highlights: [
      'Design house collaboration',
      'Rose-gold interior accents',
      'Bespoke fragrance system',
      'Numbered edition plaque',
    ],
    features: [
      { label: 'Engine', value: '4.0L Twin-Turbo V8' },
      { label: 'Transmission', value: '8-Speed Dual-Clutch' },
      { label: 'Drivetrain', value: 'All-Wheel Drive' },
      { label: 'Mileage', value: '890 miles' },
      { label: 'Interior', value: 'Rose Gold / Nappa Leather' },
      { label: 'Warranty', value: '4 years remaining' },
    ],
  },
  {
    id: 103,
    access: 'private',
    room: 'vault',
    slug: 'monaco-heritage',
    name: 'Monaco Heritage',
    year: 1972,
    category: 'Collector',
    price: '$1,200,000',
    color: 'Rosso Corsa',
    description:
      'Former concours winner with documented racing pedigree and matching-numbers chassis.',
    longDescription:
      'The Monaco Heritage competed at Monaco in period before a meticulous nut-and-bolt restoration returned it to concours-winning condition. Complete FIVA passport, period photographs, and a chain of ownership spanning four collectors.',
    badge: 'Concours Winner',
    image:
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1400&q=80&auto=format&fit=crop',
    ],
    specs: [
      { label: 'Built', value: '1972' },
      { label: 'Racing', value: 'Period' },
      { label: 'Units', value: '1 of 1' },
    ],
    highlights: [
      'Monaco racing history',
      'Concours d\'Elegance winner',
      'Matching-numbers chassis',
      'FIVA identity passport',
    ],
    features: [
      { label: 'Engine', value: '3.0L Flat-Six' },
      { label: 'Transmission', value: '5-Speed Manual' },
      { label: 'Drivetrain', value: 'Rear-Wheel Drive' },
      { label: 'Mileage', value: '28,400 miles' },
      { label: 'Interior', value: 'Period-Correct Leather' },
      { label: 'Provenance', value: 'Full racing documentation' },
    ],
  },
  {
    id: 104,
    access: 'private',
    room: 'vault',
    slug: 'silver-arrow',
    name: 'Silver Arrow',
    year: 1961,
    category: 'Icon',
    price: '$2,800,000',
    color: 'Silver Metallic',
    description:
      'An automotive icon — one of fewer than ten surviving examples in original specification.',
    longDescription:
      'The Silver Arrow needs no introduction to the serious collector. This example retains its original engine, gearbox, and interior — a rarity among survivors. Held in private collections for three decades before joining our vault.',
    badge: 'Museum Quality',
    image:
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=80&auto=format&fit=crop',
    ],
    specs: [
      { label: 'Built', value: '1961' },
      { label: 'Survivors', value: '< 10' },
      { label: 'Originality', value: '100%' },
    ],
    highlights: [
      'All-original specification',
      'Three decades in private collection',
      'Expert authentication report',
      'Climate-controlled storage history',
    ],
    features: [
      { label: 'Engine', value: '3.5L Inline-Six' },
      { label: 'Transmission', value: '4-Speed Manual' },
      { label: 'Drivetrain', value: 'Rear-Wheel Drive' },
      { label: 'Mileage', value: '19,200 miles' },
      { label: 'Interior', value: 'Original Leather' },
      { label: 'Provenance', value: 'Expert authentication' },
    ],
  },
  {
    id: 105,
    access: 'private',
    room: 'salon',
    slug: 'imperial-sedan',
    name: 'Imperial Sedan',
    year: 2024,
    category: 'Ultra-Luxury',
    price: '$340,000',
    color: 'Obsidian Black',
    description:
      'Rear-executive seating with refrigerator, privacy partition, and starlight headliner.',
    longDescription:
      'The Imperial Sedan is designed for those who are driven. Rear executive seats with massage, heating, and ventilation; a privacy partition; refrigerated console; and a starlight headliner with 1,200 fibre-optic points. Whisper-quiet at any speed.',
    badge: 'Executive Class',
    image:
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1400&q=80&auto=format&fit=crop',
    ],
    specs: [
      { label: 'Seats', value: '4+1' },
      { label: 'Power', value: '580 HP' },
      { label: 'Silence', value: '38 dB' },
    ],
    highlights: [
      'Executive rear seating',
      'Privacy partition',
      'Starlight headliner',
      'Refrigerated console',
    ],
    features: [
      { label: 'Engine', value: '4.4L Twin-Turbo V8' },
      { label: 'Transmission', value: '8-Speed Automatic' },
      { label: 'Drivetrain', value: 'All-Wheel Drive' },
      { label: 'Mileage', value: '2,100 miles' },
      { label: 'Interior', value: 'Semi-Aniline / Alcantara' },
      { label: 'Warranty', value: '4 years remaining' },
    ],
  },
  {
    id: 106,
    access: 'private',
    room: 'salon',
    slug: 'continental-spirit',
    name: 'Continental Spirit',
    year: 2024,
    category: 'Grand Tourer',
    price: '$275,000',
    color: 'Ivory White',
    description:
      'Effortless transcontinental capability with a cabin trimmed in the finest sustainable materials.',
    longDescription:
      'The Continental Spirit was built for the open road — adaptive cruise, night vision, and a 600-mile range between refuels. The interior pairs open-pore walnut with sustainably tanned leather, creating an environment of understated opulence.',
    badge: 'Grand Touring',
    image:
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1400&q=80&auto=format&fit=crop',
    ],
    specs: [
      { label: 'Range', value: '600 mi' },
      { label: 'Power', value: '550 HP' },
      { label: '0–60', value: '3.8s' },
    ],
    highlights: [
      'Night vision assist',
      'Open-pore walnut trim',
      'Sustainable leather',
      'Adaptive air suspension',
    ],
    features: [
      { label: 'Engine', value: '4.0L Twin-Turbo V8' },
      { label: 'Transmission', value: '8-Speed Automatic' },
      { label: 'Drivetrain', value: 'All-Wheel Drive' },
      { label: 'Mileage', value: '4,500 miles' },
      { label: 'Interior', value: 'Walnut / Sustainable Leather' },
      { label: 'Warranty', value: '3 years remaining' },
    ],
  },
  {
    id: 107,
    access: 'private',
    room: 'proving-ground',
    slug: 'apex-1',
    name: 'Apex 1',
    year: 2024,
    category: 'Track',
    price: '$395,000',
    color: 'Matte Gunmetal',
    description:
      'Track-honed aerodynamics with carbon tub construction and a sequential gearbox.',
    longDescription:
      'The Apex 1 is unapologetically focused. Carbon tub, active rear wing, and a sequential gearbox deliver lap times that embarrass machines twice its price. Road-legal, but happiest on circuit.',
    badge: 'Track Weapon',
    image:
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1400&q=80&auto=format&fit=crop',
    ],
    specs: [
      { label: 'Power', value: '780 HP' },
      { label: 'Weight', value: '2,890 lbs' },
      { label: 'Downforce', value: '1,200 lbs' },
    ],
    highlights: [
      'Carbon tub construction',
      'Active rear wing',
      'Sequential gearbox',
      'Ceramic brakes',
    ],
    features: [
      { label: 'Engine', value: '4.0L Twin-Turbo V8' },
      { label: 'Transmission', value: '7-Speed Sequential' },
      { label: 'Drivetrain', value: 'Rear-Wheel Drive' },
      { label: 'Mileage', value: '1,800 miles' },
      { label: 'Interior', value: 'Alcantara / Carbon' },
      { label: 'Warranty', value: '2 years remaining' },
    ],
  },
  {
    id: 108,
    access: 'private',
    room: 'proving-ground',
    slug: 'circuit-master',
    name: 'Circuit Master',
    year: 2023,
    category: 'Performance',
    price: '$310,000',
    color: 'Racing Yellow',
    description:
      'Developed on the Nürburgring — precision chassis tuning and motorsport-derived brakes.',
    longDescription:
      'Every component of the Circuit Master was validated on the Nürburgring Nordschleife. Magnetic dampers, carbon-ceramic brakes, and a flat-plane crank V8 that rewards commitment. For drivers, not passengers.',
    badge: 'Ring Developed',
    image:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1400&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1400&q=80&auto=format&fit=crop',
    ],
    specs: [
      { label: 'Ring Time', value: '7:04' },
      { label: 'Power', value: '700 HP' },
      { label: '0–60', value: '2.9s' },
    ],
    highlights: [
      'Nürburgring developed',
      'Magnetic dampers',
      'Flat-plane crank V8',
      'Carbon-ceramic brakes',
    ],
    features: [
      { label: 'Engine', value: '4.0L Flat-Plane V8' },
      { label: 'Transmission', value: '7-Speed Dual-Clutch' },
      { label: 'Drivetrain', value: 'Rear-Wheel Drive' },
      { label: 'Mileage', value: '3,200 miles' },
      { label: 'Interior', value: 'Alcantara / Carbon' },
      { label: 'Warranty', value: '3 years remaining' },
    ],
  },
]

export function getVehiclesByRoom(room: ShowroomRoom): Vehicle[] {
  return privateVehicles.filter((v) => v.room === room)
}

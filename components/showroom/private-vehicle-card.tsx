import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Vehicle } from '@/lib/vehicles'

export default function PrivateVehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <article className="group border border-white/10 bg-black/30 backdrop-blur-sm hover:border-accent/40 transition-colors duration-500">
      <Link href={`/vehicles/${vehicle.slug}`} className="block relative aspect-[16/10] overflow-hidden">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 text-[10px] tracking-[0.15em] uppercase text-accent border border-accent/40 px-2.5 py-1 bg-black/40 backdrop-blur-sm">
          {vehicle.badge}
        </span>
      </Link>

      <div className="p-6">
        <p className="text-[10px] tracking-[0.15em] uppercase text-white/40 mb-1">
          {vehicle.year} · {vehicle.category}
        </p>
        <h3 className="font-heading text-2xl font-light text-white mb-1">
          <Link href={`/vehicles/${vehicle.slug}`} className="hover:text-accent transition-colors">
            {vehicle.name}
          </Link>
        </h3>
        <p className="text-sm text-white/50 mb-4">{vehicle.color}</p>
        <div className="flex items-center justify-between">
          <p className="font-heading text-lg text-accent">{vehicle.price}</p>
          <Link
            href={`/vehicles/${vehicle.slug}`}
            className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-white/60 hover:text-accent transition-colors"
          >
            View
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </article>
  )
}

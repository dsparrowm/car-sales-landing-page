import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'
import VehicleDetail from '@/components/vehicle-detail'
import { decodeSession } from '@/lib/auth/session'
import { SESSION_COOKIE } from '@/lib/auth/types'
import { getAllVehicleSlugs, getVehicleBySlug } from '@/lib/vehicles'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllVehicleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const vehicle = getVehicleBySlug(slug)

  if (!vehicle) {
    return { title: 'Vehicle Not Found — LuxeMotor' }
  }

  return {
    title: `${vehicle.name} — LuxeMotor`,
    description: vehicle.description,
  }
}

export default async function VehiclePage({ params }: PageProps) {
  const { slug } = await params
  const vehicle = getVehicleBySlug(slug)

  if (!vehicle) {
    notFound()
  }

  if (vehicle.access === 'private') {
    const cookieStore = await cookies()
    const token = cookieStore.get(SESSION_COOKIE)?.value
    const user = token ? decodeSession(token) : null

    if (!user) {
      redirect('/?viewing=1')
    }
  }

  return (
    <main className="w-full bg-background overflow-hidden">
      <Header />
      <div className="pt-16">
        <VehicleDetail vehicle={vehicle} />
      </div>
      <Footer />
    </main>
  )
}

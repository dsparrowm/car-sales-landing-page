import ShowroomGuard from '@/components/showroom/showroom-guard'
import ShowroomHero from '@/components/showroom/showroom-hero'
import ShowroomNav from '@/components/showroom/showroom-nav'
import ShowroomRoom from '@/components/showroom/showroom-room'
import { showroomRooms } from '@/lib/private-vehicles'

export const metadata = {
  title: 'Private Gallery — LuxeMotor',
  description: 'Exclusive access to our private vehicle collection.',
}

export default function ShowroomPage() {
  return (
    <ShowroomGuard>
      <main className="bg-black min-h-screen snap-y snap-mandatory scroll-smooth">
        <ShowroomNav />
        <ShowroomHero />
        {showroomRooms.map((room) => (
          <ShowroomRoom key={room.id} room={room} />
        ))}
      </main>
    </ShowroomGuard>
  )
}

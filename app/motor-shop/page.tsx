import Image from 'next/image'
import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Motor Shop - Indeco Industrial Electric Co.',
  description: 'Electric motor sales, repair, and service. Authorized distributor of Baldor, Teco Westinghouse, and World Wide Electric motors, drives, and soft starts.',
}

const motorServices = [
  'Single-phase electric motors',
  'Polyphase electric motors',
  'AC Motors through 300HP',
  'DC Motors',
  'AC and DC controls',
  'Drive controls',
  'Gear boxes',
  'Bearing service/repair',
  'Gear motor, speed reducers',
  'Variable speed drives',
  'Power transmission equipment',
  'Air Compressors',
  'Hoists/Crane Motors',
  'Electric motor controls',
  'Pump repair',
  'Carbon brushes',
]

export default function MotorShopPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-linear-to-b from-background to-muted/20">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Motor Shop
                </h1>
                <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
                  Electric motor sales, repair, and full-service support — hundreds of motors in stock
                </p>
              </div>
              <div className="relative w-full overflow-hidden rounded-3xl border border-border bg-muted">
                <Image
                  src="/motor.png"
                  alt="Motor shop service"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Owner Description */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                At Indeco Industrial Electric, you can choose from Hundreds of motors to meet your exact project requirement. We offer electric motor sales of a broad line of the most energy-efficient models, and adjustable speed drives from some of the industry's top manufacturers, providing you with true mechanical precision.
              </p>
              <p>
                Indeco is an authorized distributor of Baldor, Teco Westinghouse, World Wide Electric motors, drives and soft starts. Our full service electric motor repair center is able to handle virtually any electric motor repair situation that may occur.
              </p>
              <p>
                We maintain a complete inventory of Bearings, Brushes and replacement parts for immediate service of your electric motors and other specialized electric motors and mechanical equipment. This eliminates the downtime of "waiting for parts". Our highly skilled technicians have the ability to repair or rebuild your equipment with the highest degree of Quality and Craftsmanship.
              </p>
              <p>
                Please feel free to contact us or come by and let us take a look at your equipment for a solution to fit your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Electric Motor Services List */}
        <section className="border-y border-border bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Electric Motor Services
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {motorServices.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="border-primary/20 bg-linear-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center">
                  <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
                    Need Motor Repair Services?
                  </h2>
                  <p className="mt-4 text-pretty text-lg text-muted-foreground">
                    Contact us today to discuss your motor repair needs
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button asChild size="lg" className="text-base">
                      <a href="tel:3256534255" className="flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Call (325) 653-4255
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-base">
                      <Link href="/contact">
                        Contact Us
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

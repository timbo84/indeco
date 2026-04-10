import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Wrench,
  Zap,
  ClipboardCheck,
  Phone,
  ArrowRight,
  Droplets,
  Leaf,
  Package,
  Flame,
  Building2,
  Factory,
  Trash2,
  Building,
  Cpu,
  Activity,
  Code,
  Snowflake,
  Wind,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Services - Indeco Industrial Electric Co.',
  description: 'Industrial electrical and instrumentation services for oil production, cotton gins, feed mills, municipalities, and more across West Texas.',
}

const services = [
  { icon: <Droplets className="h-5 w-5 text-primary" />, title: 'Oil Production', description: 'Electrical and instrumentation support for oil production operations and facilities.' },
  { icon: <Leaf className="h-5 w-5 text-primary" />, title: 'Cotton Gins', description: 'Motor installations, control systems, and seasonal maintenance for cotton gin operations.' },
  { icon: <Package className="h-5 w-5 text-primary" />, title: 'Feed Mills', description: 'Power distribution, motor controls, and instrumentation for feed mill facilities.' },
  { icon: <Flame className="h-5 w-5 text-primary" />, title: 'Natural Gas Processing', description: 'Hazardous area wiring, process controls, and instrumentation for gas processing plants.' },
  { icon: <Building2 className="h-5 w-5 text-primary" />, title: 'Municipalities', description: 'Electrical services for city infrastructure, water systems, and lift stations.' },
  { icon: <Factory className="h-5 w-5 text-primary" />, title: 'General Industrial', description: 'Full-service electrical support for manufacturing plants and processing facilities.' },
  { icon: <Droplets className="h-5 w-5 text-primary" />, title: 'Water Production', description: 'Pump controls, SCADA integration, and maintenance for water treatment and production.' },
  { icon: <Trash2 className="h-5 w-5 text-primary" />, title: 'Disposal Systems', description: 'Electrical installations for saltwater disposal, wastewater, and injection systems.' },
  { icon: <Building className="h-5 w-5 text-primary" />, title: 'New Construction', description: 'Ground-up electrical systems for new industrial construction projects.' },
  { icon: <Zap className="h-5 w-5 text-primary" />, title: 'General Industrial Electric', description: 'Power distribution, panel installations, conduit runs, and facility wiring.' },
  { icon: <Cpu className="h-5 w-5 text-primary" />, title: 'Electric Motor / Motor Control Systems', description: 'Installation and service of motors, VFDs, soft starters, and control systems.' },
  { icon: <Wrench className="h-5 w-5 text-primary" />, title: 'Troubleshooting / Exchange / Repair', description: 'Rapid-response diagnosis, equipment exchange, and repair to minimize downtime.' },
  { icon: <Activity className="h-5 w-5 text-primary" />, title: 'Instrumentation and Automation', description: 'Flow meters, transmitters, sensors, PLCs, and DCS integration for process control.' },
  { icon: <Code className="h-5 w-5 text-primary" />, title: 'Fabrication / Programming / Installation', description: 'Custom control panel fabrication, PLC/HMI programming, and turnkey installation.' },
  { icon: <ClipboardCheck className="h-5 w-5 text-primary" />, title: 'Calibration Maintenance Programs', description: 'Structured calibration programs to keep instruments accurate and compliant.' },
  { icon: <Snowflake className="h-5 w-5 text-primary" />, title: 'Freeze Protection', description: 'Electric heat tracing design and installation for pipes, vessels, and instruments.' },
  { icon: <Wind className="h-5 w-5 text-primary" />, title: 'Compressor Controls', description: 'Wiring, control panels, safety shutdowns, and instrumentation for compressor systems.' },
]

const galleryImages = [
  { src: '/service1.png', alt: 'Industrial electrical service' },
  { src: '/service2.png', alt: 'Wiring and cabling work' },
  { src: '/service3.png', alt: 'Electrical repair and troubleshooting' },
  { src: '/service4.png', alt: 'Preventive maintenance' },
  { src: '/service5.png', alt: 'Instrumentation and controls' },
  { src: '/service6.png', alt: 'Industrial lighting systems' },
  { src: '/service7.png', alt: 'Field service technician' },
  { src: '/service8.png', alt: 'Motor and control systems' },
  { src: '/service9.png', alt: 'Electrical fabrication and installation' },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-linear-to-b from-background to-muted/20">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Services
              </h1>
              <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
                Comprehensive industrial electrical and instrumentation field services
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What We Offer
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Professional industrial electrical services designed to keep your operations running smoothly
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon, title, description }) => (
                <div key={title} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-shadow hover:shadow-md">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="border-y border-border bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Work
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                A look at the industrial electrical projects we take pride in
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {galleryImages.map(({ src, alt }, index) => (
                <div
                  key={src}
                  className={`relative overflow-hidden rounded-lg ${index === 0 ? 'col-span-2 row-span-2 sm:col-span-1 sm:row-span-1' : ''}`}
                >
                  <div className="relative aspect-square w-full">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Service Banner */}
        <section className="border-b border-border bg-muted/50 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                24/7 Emergency Service Available
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Electrical emergencies don&apos;t wait for business hours. Neither do we.
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
          </div>
        </section>

        {/* Field Service Excellence */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
                  Field Service Excellence
                </h2>
                <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
                  Our field service team brings decades of combined experience to every job. We understand the unique challenges of industrial electrical work and are equipped to handle projects of any size or complexity.
                </p>
                <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
                  From routine maintenance to complex installations, we approach each project with the same commitment to quality and safety. Our technicians are continuously trained on the latest technologies and best practices in the industry.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-foreground">Our Commitment</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">Quality workmanship on every project</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">Safety as our top priority</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">Responsive customer service</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">Competitive pricing</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center">
                <div className="relative w-full overflow-hidden rounded-lg">
                  <Image
                    src="/service9.png"
                    alt="Field service technician at work"
                    width={700}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="border-primary/20 bg-linear-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center">
                  <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
                    Need Electrical Services?
                  </h2>
                  <p className="mt-4 text-pretty text-lg text-muted-foreground">
                    Get in touch with our team to discuss your project requirements
                  </p>
                  <div className="mt-8">
                    <Button asChild size="lg" className="text-base">
                      <Link href="/contact">Request a Quote</Link>
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

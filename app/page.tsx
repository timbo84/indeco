import Image from 'next/image'
import Link from 'next/link'
import { Phone, Wrench, Gauge, Settings, Clock, Award, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PartnersCarousel } from '@/components/partners-carousel'
import { GoogleReviews } from '@/components/google-reviews'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border bg-linear-to-b from-background to-muted/20">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
                    Since 1956
                  </div>
                  <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Industrial Electrical & Instrumentation Field Service
                  </h1>
                  <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
                    Professional industrial electrical services you can trust. Serving San Angelo and the surrounding areas with expert field service, motor shop capabilities, and automated control solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="text-base">
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base">
                    <a href="tel:3256534255" className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      (325) 653-4255
                    </a>
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="font-medium text-foreground">24/7 On Call Service Available</span>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-border bg-muted">
                  <Image
                    src="/motor.png"
                    alt="Industrial motor service"
                    width={720}
                    height={720}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Banner */}
        <section className="border-b border-border bg-primary py-6 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6" />
                <div>
                  <p className="text-sm font-medium opacity-90">Emergency Service Available</p>
                  <p className="text-lg font-bold">(325) 653-4255</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium">65 E. Avenue K</p>
                  <p className="text-sm opacity-90">San Angelo, TX 76903</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Comprehensive industrial electrical solutions tailored to your needs
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Services</CardTitle>
                  <CardDescription>
                    Complete industrial electrical and instrumentation field service
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Expert field service for all your industrial electrical needs, from troubleshooting to complete installations.
                  </p>
                  <Button asChild variant="link" className="mt-4 px-0">
                    <Link href="/services">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Gauge className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Motor Shop</CardTitle>
                  <CardDescription>
                    Professional motor repair and maintenance services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Full-service motor shop capabilities including repair, rewinding, and preventive maintenance programs.
                  </p>
                  <Button asChild variant="link" className="mt-4 px-0">
                    <Link href="/motor-shop">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Automated Control</CardTitle>
                  <CardDescription>
                    Advanced automation and control system solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Modern automation solutions to optimize your industrial operations and improve efficiency.
                  </p>
                  <Button asChild variant="link" className="mt-4 px-0">
                    <Link href="/automated-control">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-y border-border bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Why Choose Indeco
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Over 65 years of excellence in industrial electrical service
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Since 1956</h3>
                <p className="text-muted-foreground">
                  Over six decades of experience serving industrial clients with professional electrical services
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">24/7 Availability</h3>
                <p className="text-muted-foreground">
                  Emergency on-call service available around the clock to keep your operations running
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Expert Team</h3>
                <p className="text-muted-foreground">
                  Highly trained professionals dedicated to delivering quality service and customer satisfaction
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Carousel */}
        <PartnersCarousel />

        {/* Google Reviews */}
        <GoogleReviews />

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="border-primary/20 bg-linear-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center">
                  <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Ready to Get Started?
                  </h2>
                  <p className="mt-4 text-pretty text-lg text-muted-foreground">
                    Contact us today for professional industrial electrical services you can rely on
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button asChild size="lg" className="text-base">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-base">
                      <a href="tel:3256534255" className="flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Call Now
                      </a>
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

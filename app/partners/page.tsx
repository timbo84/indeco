import Image from 'next/image'
import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Handshake } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PartnersCarousel } from '@/components/partners-carousel'

export const metadata: Metadata = {
  title: 'Partners - Indeco Industrial Electric Co.',
  description: 'Our trusted partners and suppliers who help us deliver quality industrial electrical services.',
}

const partnerCategories = [
  {
    title: 'Electric Motors',
    partners: [
      { src: '/partner3.png', name: 'Baldor' },
      { src: '/partner4.png', name: 'AO Smith' },
      { src: '/partner9.png', name: 'TECO Westinghouse' },
      { src: '/partner10.png', name: 'Worldwide Electric Corp' },
    ],
  },
  {
    title: 'Automation & Control Systems',
    partners: [
      { src: '/partner1.png', name: 'Rockwell Automation / Allen-Bradley' },
      { src: '/partner12.png', name: 'Wonderware' },
      { src: '/partner11.png', name: 'Endress+Hauser' },
    ],
  },
  {
    title: 'Electrical Products & Enclosures',
    partners: [
      { src: '/partner5.png', name: 'Appleton' },
      { src: '/partner6.png', name: 'Cooper Crouse-Hinds' },
      { src: '/partner7.png', name: 'Hoffman' },
    ],
  },
  {
    title: 'Electrical Supply & Distribution',
    partners: [
      { src: '/partner2.png', name: 'The Reynolds Company' },
      { src: '/partner8.png', name: 'Essex Brownell' },
    ],
  },
]

export default function PartnersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-linear-to-b from-background to-muted/20">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="text-center">
              <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Our Partners
              </h1>
              <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
                Working with industry-leading manufacturers and suppliers to deliver quality solutions
              </p>
            </div>
          </div>
        </section>

        {/* Partners Carousel */}
        <PartnersCarousel />

        {/* Partner Categories */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Trusted Partnerships
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                We partner with the best in the industry to ensure quality products and services
              </p>
            </div>

            <div className="space-y-16">
              {partnerCategories.map((category, idx) => (
                <div key={idx}>
                  <h3 className="mb-6 text-center text-2xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {category.partners.map((partner, partnerIdx) => (
                      <Card key={partnerIdx} className="transition-shadow hover:shadow-lg">
                        <CardContent className="flex h-40 items-center justify-center p-6">
                          <Image
                            src={partner.src}
                            alt={partner.name}
                            width={220}
                            height={120}
                            className="max-h-full max-w-full object-contain"
                          />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="border-y border-border bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-3xl gap-12">
              <div>
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
                  Why Our Partnerships Matter
                </h2>
                <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
                  Our strong relationships with leading manufacturers and suppliers enable us to provide you with the best products, competitive pricing, and expert technical support.
                </p>
                <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
                  These partnerships ensure that we stay current with the latest technologies and industry developments, allowing us to offer cutting-edge solutions for your industrial electrical needs.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Access to Quality Products</h4>
                      <p className="text-sm text-muted-foreground">
                        Direct relationships with manufacturers ensure authentic, quality products
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Technical Expertise</h4>
                      <p className="text-sm text-muted-foreground">
                        Factory training and support keep our team at the forefront of technology
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Competitive Pricing</h4>
                      <p className="text-sm text-muted-foreground">
                        Preferred partner status allows us to offer you better value
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Warranty Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Full manufacturer warranties and seamless support when you need it
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="flex items-center">
                <div className="w-full rounded-lg border border-border bg-muted p-12">
                  <div className="flex h-full min-h-100 items-center justify-center text-center text-muted-foreground">
                    Partnership Image Placeholder
                    <br />
                    (Handshake/Business Meeting)
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Become a Customer */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="border-primary/20 bg-linear-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center">
                  <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
                    Experience the Difference
                  </h2>
                  <p className="mt-4 text-pretty text-lg text-muted-foreground">
                    Benefit from our strong industry partnerships on your next project
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button asChild size="lg" className="text-base">
                      <Link href="/contact">
                        Get In Touch
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="text-base">
                      <a href="tel:3256534255" className="flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Call (325) 653-4255
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

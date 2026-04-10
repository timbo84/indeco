'use client'

import { useState } from 'react'
import { Phone, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FieldGroup, Field, FieldLabel } from '@/components/ui/field'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-linear-to-b from-background to-muted/20">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Contact Us
              </h1>
              <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
                Get in touch with our team. We&apos;re here to help with your industrial electrical needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
                  Get In Touch
                </h2>
                <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
                  Have a question or need assistance? Our team is ready to help. Contact us using the information below or send us a text message.
                </p>

                <div className="mt-8 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold text-foreground">Phone</h3>
                          <a
                            href="tel:3256534255"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                          >
                            (325) 653-4255
                          </a>
                          <p className="mt-1 text-sm text-muted-foreground">
                            24/7 On Call Service Available
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold text-foreground">Address</h3>
                          <p className="text-muted-foreground">
                            65 E. Avenue K<br />
                            San Angelo, TX 76903
                          </p>
                          <a
                            href="https://maps.google.com/?q=65+E+Avenue+K,+San+Angelo,+TX+76903"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                          >
                            <MapPin className="h-4 w-4" />
                            Get Directions
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold text-foreground">Business Hours</h3>
                          <p className="text-muted-foreground">
                            Monday - Friday: 8:00 AM - 5:00 PM<br />
                            Emergency Service: 24/7
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we&apos;ll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <FieldGroup>
                        <Field>
                          <FieldLabel>Name</FieldLabel>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                          />
                        </Field>
                      </FieldGroup>

                      <FieldGroup>
                        <Field>
                          <FieldLabel>Email</FieldLabel>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                          />
                        </Field>
                      </FieldGroup>

                      <FieldGroup>
                        <Field>
                          <FieldLabel>Phone</FieldLabel>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(123) 456-7890"
                          />
                        </Field>
                      </FieldGroup>

                      <FieldGroup>
                        <Field>
                          <FieldLabel>Company</FieldLabel>
                          <Input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                          />
                        </Field>
                      </FieldGroup>

                      <FieldGroup>
                        <Field>
                          <FieldLabel>Message</FieldLabel>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Tell us about your project or needs..."
                            rows={5}
                          />
                        </Field>
                      </FieldGroup>

                      <Button type="submit" size="lg" className="w-full" disabled>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                      <p className="text-center text-xs text-muted-foreground">
                        Email contact coming soon — call us at (325) 653-4255 in the meantime.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="border-t border-border py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Visit Our Location
              </h2>
              <p className="mt-4 text-pretty text-lg text-muted-foreground">
                Located in San Angelo, Texas, serving the surrounding areas
              </p>
            </div>
            <div className="mt-12 overflow-hidden rounded-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.5!2d-100.4358!3d31.4638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86f5028d3c3c3c3c%3A0x0!2s65+E+Avenue+K%2C+San+Angelo%2C+TX+76903!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Indeco Industrial Electric Co. location"
              />
            </div>
          </div>
        </section>

        {/* Emergency Contact Banner */}
        <section className="border-y border-border bg-primary py-12 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
                Need Emergency Service?
              </h2>
              <p className="mt-2 text-lg opacity-90">
                We&apos;re available 24/7 for emergency electrical service
              </p>
              <div className="mt-6">
                <Button asChild size="lg" variant="secondary" className="text-base">
                  <a href="tel:3256534255" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Now: (325) 653-4255
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

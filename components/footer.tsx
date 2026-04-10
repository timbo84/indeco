import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, Clock } from 'lucide-react'

const navigation = {
  services: [
    { name: 'Services', href: '/services' },
    { name: 'Motor Shop', href: '/motor-shop' },
    { name: 'Automated Control', href: '/automated-control' },
  ],
  company: [
    { name: 'Partners', href: '/partners' },
    { name: 'Contact Us', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-2">
            <div className="flex items-center">
              <Image
                src="/indecoLogo.png"
                alt="Indeco logo"
                width={48}
                height={48}
                className="h-40 w-40 object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Since 1956
            </p>
            <p className="text-sm text-muted-foreground">
              Industrial Electrical & Instrumentation Field Service
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  65 E. Avenue K<br />
                  San Angelo, TX 76903
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0 text-muted-foreground" />
                <a
                  href="tel:3256534255"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  (325) 653-4255
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-5 w-5 shrink-0 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">24/7 On Call Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Indeco Industrial Electric Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

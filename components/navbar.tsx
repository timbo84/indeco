'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Motor Shop', href: '/motor-shop' },
  { name: 'Automated Control', href: '/automated-control' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact Us', href: '/contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/indecoLogo.png"
              alt="Indeco logo"
              width={96}
              height={96}
              className="h-40 w-40 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-4">
            <a href="tel:3256534255" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              (325) 653-4255
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-75 sm:w-100">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="mb-4 flex items-center" onClick={() => setOpen(false)}>
                  <Image
                    src="/indecoLogo.png"
                    alt="Indeco logo"
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                </Link>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <a href="tel:3256534255" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    (325) 653-4255
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

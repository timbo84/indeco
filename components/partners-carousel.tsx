'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Card } from '@/components/ui/card'

const partners = Array.from({ length: 12 }, (_, index) => `/partner${index + 1}.png`)

export function PartnersCarousel() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div className="w-full overflow-hidden bg-muted/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-2xl font-semibold text-foreground">
          Our Partners
        </h2>
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex gap-6 overflow-hidden">
            <div
              className={`flex min-w-full shrink-0 animate-scroll gap-6 ${
                isPaused ? 'paused' : ''
              }`}
            >
              {partners.map((partner, idx) => (
                <Card
                  key={`partner-1-${idx}`}
                  className="flex h-32 w-48 shrink-0 items-center justify-center bg-card p-4"
                >
                  <Image
                    src={partner}
                    alt={`Partner ${idx + 1}`}
                    width={180}
                    height={120}
                    className="max-h-full max-w-full object-contain"
                  />
                </Card>
              ))}
            </div>
            <div
              className={`flex min-w-full shrink-0 animate-scroll gap-6 ${
                isPaused ? 'paused' : ''
              }`}
              aria-hidden="true"
            >
              {partners.map((partner, idx) => (
                <Card
                  key={`partner-2-${idx}`}
                  className="flex h-32 w-48 shrink-0 items-center justify-center bg-card p-4"
                >
                  <Image
                    src={partner}
                    alt={`Partner ${idx + 1}`}
                    width={180}
                    height={120}
                    className="max-h-full max-w-full object-contain"
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  )
}

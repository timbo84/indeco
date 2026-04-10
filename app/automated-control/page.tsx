import { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Automated Control - Indeco Industrial Electric Co.',
  description: 'Industrial automation and control system solutions including project management, PLC/DCS/HMI programming, SCADA, custom panel fabrication, and maintenance services.',
}

const sections = [
  {
    title: 'Project Management',
    content: (
      <p>
        Indeco&apos;s professional Project Managers are capable of coordinating and managing all aspects of an industrial automation project, from early budgeting through project acceptance.
      </p>
    ),
  },
  {
    title: 'Systems & Application Engineering',
    content: (
      <p>
        Our System and Application Engineering services include system design, hardware specification, custom panel design, electrical and mechanical control installation design, FAT and SAT procedure development and as-built documentation.
      </p>
    ),
  },
  {
    title: 'HMI/PLC/DCS/RTU Software Development and Implementation',
    content: (
      <>
        <p>
          To meet your needs, Indeco employs software developers and programmers with vast experience with most of the major manufacturers of DCS, PLC/RTU and HMI products. Currently we are Rockwell and Wonderware System Integrators but also fully capable with Modicon, Siemens, GE, Emerson DeltaV, Scadapack, Square D and Motorola PLC/DCS/RTUs.
        </p>
      </>
    ),
  },
  {
    title: 'Custom Software and Reporting Solutions',
    content: (
      <>
        <p>
          Indeco, as a system integration firm, can work with you to determine what software packages will best solve your challenges of SCADA applications for Oil &amp; Gas, Wastewater and Water, General Industrial manufacturing industries including Food and Beverage, Data Centers, and many more using system integration and software solutions.
        </p>
        <p className="mt-4">
          Indeco has the expertise to provide customized software development services to best fill all your needs. This includes custom application development, database programming, Microsoft Office Application Development, Windows System Programming, and .NET Web Services Application Development. In addition we are proficient in SharePoint Development Including Dynamic Web Reporting, and Dynamic Web HMI Monitoring to allow your team and/or your customers to analyze and manage process data, quality data management or any need you may have.
        </p>
        <div className="mt-4">
          <p className="mb-2 text-sm font-medium text-foreground">Our tools and languages include Open Source Technologies such as:</p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>C# .NET, VB .NET</li>
            <li>COM / DCOM, MSMQ, ADO, ADO.NET</li>
            <li>SQL Server, MYSQL, PI, Sybase, Oracle, Access, SQLite</li>
            <li>ASP.NET, AJAX, Web Services, XML, ASP, HTML, XHTML, Java Script</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: 'Custom Control Panel Design & Manufacturing',
    content: (
      <p>
        Indeco offers custom panel fabrication and assembly. All panel assembly is accomplished via our in-house &ldquo;QA/QC&rdquo; documented process to insure complete compliance with your specifications and related requirements.
      </p>
    ),
  },
  {
    title: 'Electrical & Mechanical Control Installation',
    content: (
      <p>
        Indeco offers comprehensive Electrical and Mechanical Control Installation services. Electrical control services are performed by licensed journeymen and helpers under the supervision of a licensed Master Electrician. Indeco is a licensed Electrical Contractor in the State of Texas. Mechanical control installation services are performed by factory-trained &ldquo;tubing specialists&rdquo;. All work is performed via our in-house &ldquo;QA/QC&rdquo; documented process and standards to ensure full compliance with local, state and your corporate requirements.
      </p>
    ),
  },
  {
    title: 'Calibration, Start-Up & Commissioning Services',
    content: (
      <p>
        Our Calibration, Start-Up &amp; Commissioning Services are performed by degreed and factory-trained technicians. All work is performed and documented via our in-house &ldquo;QA/QC&rdquo; process which incorporates industry-accepted ISA standards (calibration, loop check, system commissioning, etc). Your specific requirements are incorporated as needed.
      </p>
    ),
  },
  {
    title: 'Customized Maintenance Services (Including 24/7)',
    content: (
      <p>
        Indeco maintains a fully staffed service department specifically structured to provide preventive and corrective maintenance services. This service includes scheduled maintenance programs as well as 24/7 emergency services. A toll free number is maintained which insures after hours and weekend response. Maintenance and Service Agreements are customized to meet your specific requirements including budgetary constraints. All work is coordinated through our Service Manager and performed by employed technicians and engineers.
      </p>
    ),
  },
]

export default function AutomatedControlPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-border bg-linear-to-b from-background to-muted/20">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Automated Control
              </h1>
              <p className="mt-4 text-pretty text-lg text-muted-foreground leading-relaxed">
                Full-service industrial automation and control system solutions
              </p>
            </div>
          </div>
        </section>

        {/* Services Sections */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map(({ title, content }) => (
                <div key={title} className="border-b border-border pb-12 last:border-0 last:pb-0">
                  <h2 className="text-2xl font-bold tracking-tight text-foreground">
                    {title}
                  </h2>
                  <div className="mt-4 text-muted-foreground leading-relaxed">
                    {content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="border-primary/20 bg-linear-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center">
                  <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground">
                    Ready to Automate Your Operations?
                  </h2>
                  <p className="mt-4 text-pretty text-lg text-muted-foreground">
                    Contact us to discuss how automation can improve your industrial processes
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button asChild size="lg" className="text-base">
                      <Link href="/contact">
                        Get Started
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

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, MapPin, Users, Heart, Mail, Phone, Globe, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function LeadershipClientPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">R</span>
                </div>
                <span className="font-bold text-xl text-foreground">RCN Missions</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/leadership" className="text-foreground font-medium">
                Leadership
              </Link>
              <Link href="/missions" className="text-muted-foreground hover:text-foreground transition-colors">
                Missions
              </Link>
              <Link href="/videos" className="text-muted-foreground hover:text-foreground transition-colors">
                Videos
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Button variant="outline" size="sm">
                Prayer Request
              </Button>
              <Button size="sm">Partner With Us</Button>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/about"
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/leadership"
                  className="block px-3 py-2 text-base font-medium text-foreground bg-muted rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Leadership
                </Link>
                <Link
                  href="/missions"
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Missions
                </Link>
                <Link
                  href="/videos"
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Videos
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="px-3 py-2 space-y-2">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Prayer Request
                  </Button>
                  <Button size="sm" className="w-full">
                    Partner With Us
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-sm font-medium">
              Apostolic Leadership
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Meet Our <span className="text-primary">Spiritual Leaders</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              God-appointed leaders called to restore apostolic order and prepare the church for Christ's return through
              faithful ministry and unwavering dedication to the Gospel.
            </p>
          </div>
        </div>
      </section>

      {/* Senior Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Apostle Arome Osayi */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="/apostle-arome-osayi-portrait-leadership.jpg"
                  alt="Apostle Arome Osayi - Senior Pastor & Founder"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold">Senior Pastor</div>
                    <div className="text-sm opacity-90">& Founder</div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold">Apostle Arome Osayi</h2>
                  <p className="text-lg text-muted-foreground">Senior Pastor & Founder, RCN Missions</p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Apostolic Ministry</Badge>
                    <Badge variant="outline">International Speaker</Badge>
                    <Badge variant="outline">Author</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Apostle Arome Osayi is the Senior Pastor and Founder of Remnant Christian Network Missions, a
                    ministry called to restore apostolic order in the church. With over 15 years of dedicated ministry,
                    he has been instrumental in establishing mission fields across Nigeria, North America, and multiple
                    African nations.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    His apostolic calling is marked by signs, wonders, and miracles, with a particular anointing for
                    end-time preparation and church restoration. Through his teachings and crusades, thousands have been
                    brought into the kingdom of God and equipped for effective Christian living.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">15+ Years Ministry</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-sm">International Reach</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">100K+ Lives Touched</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">Makurdi, Nigeria HQ</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button>
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Apostle
                  </Button>
                  <Button variant="outline">
                    <Heart className="mr-2 h-4 w-4" />
                    Request Prayer
                  </Button>
                </div>
              </div>
            </div>

            <Separator className="my-16" />

            {/* Pastor Wife */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 relative">
                <Image
                  src="/pastor-wife-ministry-leader-portrait.jpg"
                  alt="Pastor Mrs. Osayi - Co-Pastor & Women's Ministry Leader"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold">Co-Pastor</div>
                    <div className="text-sm opacity-90">Women's Ministry</div>
                  </div>
                </div>
              </div>

              <div className="lg:order-1 space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold">Pastor Mrs. Osayi</h2>
                  <p className="text-lg text-muted-foreground">Co-Pastor & Women's Ministry Leader</p>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Women's Ministry</Badge>
                    <Badge variant="outline">Missions Support</Badge>
                    <Badge variant="outline">Intercessor</Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Pastor Mrs. Osayi serves as Co-Pastor and leads the Women's Ministry at RCN Missions. Her heart for
                    women's empowerment and spiritual development has been instrumental in raising godly women who
                    support the apostolic vision of the ministry.
                  </p>

                  <p className="text-muted-foreground leading-relaxed">
                    With a special calling in intercession and missions support, she coordinates prayer networks and
                    provides pastoral care to women across all mission fields. Her ministry has been pivotal in
                    establishing strong foundations for families and communities touched by RCN Missions.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-accent" />
                    <span className="text-sm">Women's Empowerment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-accent" />
                    <span className="text-sm">Prayer Networks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-accent" />
                    <span className="text-sm">Mission Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-sm">Family Ministry</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Women's Ministry
                  </Button>
                  <Button variant="outline">
                    <Heart className="mr-2 h-4 w-4" />
                    Prayer Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Ministry Timeline</h2>
              <p className="text-xl text-muted-foreground">Key milestones in God's faithfulness through RCN Missions</p>
            </div>

            <div className="space-y-8">
              {[
                {
                  year: "2009",
                  title: "Ministry Foundation",
                  description:
                    "RCN Missions was established in Makurdi, Nigeria with a vision to restore apostolic order.",
                  highlight: true,
                },
                {
                  year: "2012",
                  title: "First International Crusade",
                  description: "Breakthrough crusade that marked the beginning of international ministry expansion.",
                  highlight: false,
                },
                {
                  year: "2015",
                  title: "North America Expansion",
                  description: "Established ministry presence in North America, reaching diaspora communities.",
                  highlight: false,
                },
                {
                  year: "2018",
                  title: "Medical Relief Initiative",
                  description: "Launched Balm of Gilead medical relief program serving underserved communities.",
                  highlight: true,
                },
                {
                  year: "2020",
                  title: "Digital Ministry Launch",
                  description: "Expanded online presence reaching global audiences during the pandemic.",
                  highlight: false,
                },
                {
                  year: "2024",
                  title: "50+ Mission Fields",
                  description: "Reached milestone of 50+ active mission fields across multiple continents.",
                  highlight: true,
                },
              ].map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full ${milestone.highlight ? "bg-primary" : "bg-muted-foreground"}`}
                    ></div>
                    {index < 5 && <div className="w-px h-16 bg-border mt-2"></div>}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant={milestone.highlight ? "default" : "secondary"}>{milestone.year}</Badge>
                      <h3 className="text-lg font-semibold">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">Dedicated servants called to support the apostolic vision</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Pastor John Adamu",
                role: "Regional Coordinator - North East",
                image: "/pastor-john-adamu-regional-coordinator.jpg",
                contact: "john.adamu@rcnmissions.org",
              },
              {
                name: "Pastor Grace Okoro",
                role: "Missions Director - Africa",
                image: "/pastor-grace-okoro-missions-director.jpg",
                contact: "grace.okoro@rcnmissions.org",
              },
              {
                name: "Pastor David Williams",
                role: "North America Representative",
                image: "/pastor-david-williams-north-america.jpg",
                contact: "david.williams@rcnmissions.org",
              },
              {
                name: "Dr. Sarah Bello",
                role: "Medical Relief Coordinator",
                image: "/dr-sarah-bello-medical-relief.jpg",
                contact: "sarah.bello@rcnmissions.org",
              },
              {
                name: "Pastor Michael Tunde",
                role: "Youth & Discipleship",
                image: "/pastor-michael-tunde-youth-ministry.jpg",
                contact: "michael.tunde@rcnmissions.org",
              },
              {
                name: "Pastor Ruth Ezekiel",
                role: "Intercession Coordinator",
                image: "/pastor-ruth-ezekiel-intercession.jpg",
                contact: "ruth.ezekiel@rcnmissions.org",
              },
            ].map((leader, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{leader.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{leader.role}</p>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Leadership */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Connect With Our Leadership</h2>
            <p className="text-xl opacity-90">
              Our leaders are available for spiritual guidance, prayer support, and ministry partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Meeting
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">R</span>
                </div>
                <span className="font-bold text-lg">RCN Missions</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Restoring apostolic order for Christ's return through international missions and ministry.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Ministry</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/about" className="block hover:text-foreground transition-colors">
                  About Us
                </Link>
                <Link href="/leadership" className="block hover:text-foreground transition-colors">
                  Leadership
                </Link>
                <Link href="/missions" className="block hover:text-foreground transition-colors">
                  Mission Fields
                </Link>
                <div>Testimonies</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Sermons</div>
                <div>Books</div>
                <div>Prayer Requests</div>
                <div>Events</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/contact" className="block hover:text-foreground transition-colors">
                  Contact Us
                </Link>
                <Link href="/partner" className="block hover:text-foreground transition-colors">
                  Partner With Us
                </Link>
                <div>Newsletter</div>
                <div>Social Media</div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Remnant Christian Network Missions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

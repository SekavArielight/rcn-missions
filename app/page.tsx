import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Heart, Globe, Play, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "RCN Missions - Remnant Christian Network | Apostolic Ministry Led by Apostle Arome Osayi",
  description:
    "International apostolic ministry restoring apostolic order for Christ's return. Led by Apostle Arome Osayi with global missions, crusades, medical relief, and discipleship programs across Nigeria, North America, and Africa.",
  keywords: [
    "rcn missions",
    "apostle arome osayi",
    "apostolic ministry",
    "remnant christian network",
    "christian missions nigeria",
    "apostolic order",
    "end times ministry",
  ],
  openGraph: {
    title: "RCN Missions - Apostolic Ministry for End Times",
    description:
      "Join the global apostolic movement restoring God's order for Christ's return. Led by Apostle Arome Osayi.",
    images: ["/og-image-rcn-missions.jpg"],
  },
  alternates: {
    canonical: "https://rcnmissions.org",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">R</span>
                </div>
                <span className="font-bold text-xl text-foreground">RCN Missions</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/leadership" className="text-muted-foreground hover:text-foreground transition-colors">
                Leadership
              </Link>
              <Link href="#missions" className="text-muted-foreground hover:text-foreground transition-colors">
                Missions
              </Link>
              <Link href="#videos" className="text-muted-foreground hover:text-foreground transition-colors">
                Videos
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Button variant="outline" size="sm">
                Prayer Request
              </Button>
              <Button size="sm">Partner With Us</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="absolute inset-0 bg-[url('/global-ministry-world-map-overlay.jpg')] opacity-5 bg-cover bg-center"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm font-medium">
                  International Apostolic Ministry
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Restoring <span className="text-primary">Apostolic Order</span> for Christ's Return
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  Join Remnant Christian Network Missions in heralding Christ's coming through prayers, Word study, and
                  fellowship. Led by Apostle Arome Osayi, we're preparing the church for the end times through apostolic
                  restoration.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Latest Crusade
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Heart className="mr-2 h-5 w-5" />
                  Partner With Us
                </Button>
              </div>

              {/* Global Presence Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Nigeria HQ</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">North America</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Multiple Mission Fields</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/apostle-arome-osayi-preaching-ministry-leader.jpg"
                  alt="Apostle Arome Osayi - Senior Pastor & Founder"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm opacity-90">Years Ministry</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 right-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Mission & Vision</h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Remnant Christian Network Missions is dedicated to restoring apostolic order and Christianity as seen in
              first-generation apostles. We herald Christ's coming through strategic missions, crusades, medical relief,
              evangelism, and discipleship across international boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Mission Fields</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-primary">100K+</div>
                <div className="text-sm text-muted-foreground">Lives Touched</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Countries Reached</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Crusades Held</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Join the Apostolic Movement</h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Be part of God's end-time army. Partner with us in prayer, support, and mission work as we prepare the
              church for Christ's imminent return.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8">
                Get Prayer Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5" />
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
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">R</span>
                </div>
                <span className="font-bold text-lg">RCN Missions</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Restoring apostolic order for Christ's return through international missions and ministry.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Ministry</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/about">About Us</Link>
                <Link href="/leadership">Leadership</Link>
                <Link href="/mission-fields">Mission Fields</Link>
                <Link href="/testimonies">Testimonies</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/sermons">Sermons</Link>
                <Link href="/books">Books</Link>
                <Link href="/prayer-requests">Prayer Requests</Link>
                <Link href="/events">Events</Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/contact">Contact Us</Link>
                <Link href="/partner-with-us">Partner With Us</Link>
                <Link href="/newsletter">Newsletter</Link>
                <Link href="/social-media">Social Media</Link>
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

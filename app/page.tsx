import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Heart, Globe, Play, ArrowRight, Star, CheckCircle, Mail } from "lucide-react"
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
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
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
                  Watch Latest Message
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  <Heart className="mr-2 h-5 w-5" />
                  Partner With Us
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Request Prayer
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

      {/* Ministry Overview Section */}
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

      {/* Leadership Spotlight */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Apostolic Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leaders called to restore apostolic order in these end times
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/apostle-arome-osayi-portrait-leadership.jpg"
                    alt="Apostle Arome Osayi"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Apostle Arome Osayi</h3>
                    <p className="text-muted-foreground">Senior Pastor & Founder</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Called to restore apostolic Christianity and prepare the church for Christ's return through powerful
                  teaching and international missions.
                </p>
                <Link href="/leadership" className="inline-flex items-center text-primary hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/pastor-wife-ministry-leader-portrait.jpg"
                    alt="Pastor Wife"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-xl font-bold">Pastor [Wife's Name]</h3>
                    <p className="text-muted-foreground">Co-Pastor & Women's Ministry Leader</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Supporting the apostolic vision through women's ministry, missions support, and spiritual mentorship
                  across the network.
                </p>
                <Link href="/leadership" className="inline-flex items-center text-primary hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="missions" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Current Mission Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bringing the Gospel to unreached communities and providing relief to those in need
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/mission-north-east-nigeria-project.jpg"
                  alt="North East Nigeria Crusades"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary">Active</Badge>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">North East Nigeria Crusades</h3>
                  <p className="text-muted-foreground">
                    Bringing the Gospel to unreached communities in conflict zones
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    North East Nigeria
                  </span>
                  <span className="text-primary font-medium">5,000+ souls reached</span>
                </div>
                <Link href="/missions" className="inline-flex items-center text-primary hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="/mission-balm-gilead-medical-relief.jpg"
                  alt="Balm of Gilead Medical Relief"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-accent">Ongoing</Badge>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Balm of Gilead Medical Relief</h3>
                  <p className="text-muted-foreground">
                    Providing healthcare and medical supplies to underserved areas
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    Multiple Locations
                  </span>
                  <span className="text-primary font-medium">10,000+ people served</span>
                </div>
                <Link href="/missions" className="inline-flex items-center text-primary hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Video Content */}
      <section id="videos" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Latest Teaching</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful messages on apostolic order and end-time preparation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-video md:aspect-square">
                  <Image
                    src="/video-apostolic-order-thumbnail.jpg"
                    alt="The Apostolic Hour Has Come"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Button size="lg" className="rounded-full w-16 h-16 p-0">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <Badge variant="secondary">Latest Message</Badge>
                    <h3 className="text-2xl font-bold">The Apostolic Hour Has Come</h3>
                    <p className="text-muted-foreground">
                      A powerful message on recognizing and walking in apostolic authority in these end times.
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>Apostle Arome Osayi</span>
                    <span>•</span>
                    <span>52:30</span>
                    <span>•</span>
                    <span>Jan 15, 2024</span>
                  </div>
                  <Link href="/videos" className="inline-flex items-center text-primary hover:underline">
                    Watch Full Library <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Lives Transformed</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from those whose lives have been touched by the apostolic ministry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "The ministry of Apostle Arome has transformed our understanding of apostolic Christianity. Our church
                  has experienced unprecedented growth and spiritual awakening."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-medium text-sm">PJ</span>
                  </div>
                  <div>
                    <p className="font-medium">Pastor John Doe</p>
                    <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  "Through RCN Missions, I received healing and now serve as a missionary in remote villages. God is
                  doing amazing things through this ministry."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-medium text-sm">MJ</span>
                  </div>
                  <div>
                    <p className="font-medium">Sister Mary Johnson</p>
                    <p className="text-sm text-muted-foreground">Kampala, Uganda</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ministry Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Mission Fields</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-primary">100K+</div>
                <div className="text-sm text-muted-foreground">Lives Touched</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Countries Reached</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Crusades Held</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup & Connect */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">Stay Connected with RCN Missions</h2>
                <p className="text-xl opacity-90 text-pretty leading-relaxed">
                  Receive ministry updates, prayer requests, and exclusive content from Apostle Arome Osayi.
                </p>
                <div className="space-y-3">
                  {[
                    "Weekly ministry updates",
                    "Prayer requests and testimonies",
                    "Early access to teaching materials",
                    "Mission trip opportunities",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 opacity-90" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">Join Our Newsletter</h3>
                    <p className="text-muted-foreground">Get the latest updates delivered to your inbox</p>
                  </div>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                    />
                    <Button className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Subscribe Now
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-accent text-accent-foreground">
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
                className="text-lg px-8 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent bg-transparent"
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
            <p>&copy; 2025 Remnant Christian Network Missions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

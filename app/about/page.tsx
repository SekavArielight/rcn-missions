import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Users,
  Heart,
  Globe,
  ArrowRight,
  Mail,
  Phone,
  Target,
  Eye,
  Zap,
  Shield,
  BookOpen,
  Play as Pray,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About RCN Missions - Apostolic Ministry Led by Apostle Arome Osayi | Remnant Christian Network",
  description:
    "Discover the heart behind RCN Missions' apostolic calling and global ministry. Learn about our vision to restore apostolic Christianity, our leadership team, and our impact across 25+ countries.",
  keywords: [
    "about rcn missions",
    "apostle arome osayi biography",
    "apostolic ministry history",
    "remnant christian network leadership",
    "christian missions nigeria",
    "apostolic restoration ministry",
  ],
  openGraph: {
    title: "About RCN Missions - Apostolic Ministry for End Times",
    description: "Discover the heart behind our apostolic calling and global ministry led by Apostle Arome Osayi.",
    images: ["/og-about-rcn-missions.jpg"],
  },
}

function StatCard({ number, label, delay = 0 }: { number: string; label: string; delay?: number }) {
  return (
    <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
      <CardContent className="space-y-2">
        <div className="text-4xl font-bold text-primary">{number}</div>
        <div className="text-sm text-muted-foreground font-medium">{label}</div>
      </CardContent>
    </Card>
  )
}

function TimelineItem({
  year,
  title,
  description,
  isLast = false,
}: {
  year: string
  title: string
  description: string
  isLast?: boolean
}) {
  return (
    <div className="flex gap-6 pb-8">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
          {year.slice(-2)}
        </div>
        {!isLast && <div className="w-0.5 h-16 bg-border mt-4"></div>}
      </div>
      <div className="flex-1 pt-2">
        <div className="flex items-center gap-3 mb-2">
          <Badge variant="secondary" className="text-xs">
            {year}
          </Badge>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">R</span>
                </div>
                <span className="font-bold text-xl text-foreground">RCN Missions</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground font-medium">
                About
              </Link>
              <Link href="/leadership" className="text-muted-foreground hover:text-foreground transition-colors">
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
          </div>
        </div>
      </nav>

      {/* About Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="absolute inset-0 bg-[url('/global-ministry-world-map-overlay.jpg')] opacity-3 bg-cover bg-center"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ArrowRight className="h-4 w-4" />
            <span className="text-foreground">About</span>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
              About <span className="text-primary">RCN Missions</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
              Discover the heart behind our apostolic calling and global ministry
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To see the restoration of apostolic Christianity as demonstrated by the first-generation apostles,
                    preparing the bride of Christ for His imminent return.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Target className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    RCN Missions is a global apostolic initiative committed to expanding and extending the frontiers of
                    God's kingdom through prayer, Word study, fellowship, and strategic missions worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-balance">Our Core Values</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  The foundational principles that guide our apostolic ministry
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="space-y-4">
                    <Zap className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="text-lg font-bold">Apostolic Authority</h3>
                    <p className="text-sm text-muted-foreground">
                      Operating under divine mandate with signs, wonders, and miracles
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="space-y-4">
                    <Globe className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="text-lg font-bold">Global Reach</h3>
                    <p className="text-sm text-muted-foreground">
                      Transcending borders to establish God's kingdom in every nation
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="space-y-4">
                    <BookOpen className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="text-lg font-bold">Biblical Foundation</h3>
                    <p className="text-sm text-muted-foreground">
                      Unwavering commitment to the Word of God as our final authority
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="space-y-4">
                    <Pray className="h-12 w-12 text-primary mx-auto" />
                    <h3 className="text-lg font-bold">Prayer & Intercession</h3>
                    <p className="text-sm text-muted-foreground">
                      Maintaining constant communication with heaven through prayer
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profiles Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Apostolic Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leaders called to restore apostolic order in these end times
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid lg:grid-cols-3 gap-0">
                <div className="relative aspect-square lg:aspect-auto">
                  <Image
                    src="/apostle-arome-osayi-portrait-leadership.jpg"
                    alt="Apostle Arome Osayi - Senior Pastor & Founder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-2 p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2">Apostle Arome Osayi</h3>
                      <Badge variant="secondary" className="mb-4">
                        Senior Pastor & Founder
                      </Badge>
                      <p className="text-muted-foreground leading-relaxed">
                        Called by God to restore apostolic order with 15+ years of ministry experience marked by
                        supernatural demonstrations. Founded RCN in 2008, planted 50+ churches, conducted 100+ crusades,
                        and trained 500+ ministers across multiple nations.
                      </p>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                      <p className="text-muted-foreground italic">
                        "We are living in the hour of the restoration of all things. God is raising up a remnant people
                        who will demonstrate His power in these last days."
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center p-4 bg-background rounded-lg">
                        <div className="text-2xl font-bold text-primary">50+</div>
                        <div className="text-muted-foreground">Churches Planted</div>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <div className="text-2xl font-bold text-primary">100+</div>
                        <div className="text-muted-foreground">Crusades Conducted</div>
                      </div>
                      <div className="text-center p-4 bg-background rounded-lg">
                        <div className="text-2xl font-bold text-primary">500+</div>
                        <div className="text-muted-foreground">Ministers Trained</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid lg:grid-cols-3 gap-0">
                <div className="relative aspect-square lg:aspect-auto lg:order-2">
                  <Image
                    src="/pastor-wife-ministry-leader-portrait.jpg"
                    alt="Pastor Wife - Co-Pastor & Women's Ministry Leader"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-2 p-8 lg:p-12 lg:order-1">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-2">Pastor [Wife's Name] Osayi</h3>
                      <Badge variant="secondary" className="mb-4">
                        Co-Pastor & Women's Ministry Leader
                      </Badge>
                      <p className="text-muted-foreground leading-relaxed">
                        Stands alongside her husband in the apostolic calling, leading women's ministry and raising up
                        female leaders. Her ministry focus includes women's leadership development, intercessory prayer,
                        mentoring, and family ministry across the global network.
                      </p>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                      <p className="text-muted-foreground italic">
                        "God is calling women to arise as Deborahs and Esthers, to prepare the way for the Lord's
                        return."
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Women's Leadership</Badge>
                      <Badge variant="outline">Intercessory Prayer</Badge>
                      <Badge variant="outline">Mentoring</Badge>
                      <Badge variant="outline">Family Ministry</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Ministry Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ministry Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our journey of apostolic restoration
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <TimelineItem
              year="2008"
              title="Ministry Founded"
              description="Apostle Arome establishes Remnant Christian Network in Makurdi, Nigeria, with a vision to restore apostolic Christianity."
            />
            <TimelineItem
              year="2010"
              title="First International Crusade"
              description="Expansion to Ghana and Cameroon with supernatural signs, wonders, and miraculous demonstrations of God's power."
            />
            <TimelineItem
              year="2015"
              title="Medical Relief Initiative"
              description="Launch of Balm of Gilead project providing healthcare and medical supplies to underserved communities."
            />
            <TimelineItem
              year="2020"
              title="Digital Ministry Expansion"
              description="Global reach through digital platforms during pandemic, reaching millions worldwide with apostolic teaching."
            />
            <TimelineItem
              year="2024"
              title="Global Network Established"
              description="Operations in 25+ countries with 50+ missionaries, establishing a truly international apostolic network."
              isLast={true}
            />
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Global Impact</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              God's faithfulness demonstrated through supernatural growth and transformation
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-primary-foreground/10 rounded-lg backdrop-blur">
              <div className="text-3xl lg:text-4xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">Countries Reached</div>
            </div>
            <div className="text-center p-6 bg-primary-foreground/10 rounded-lg backdrop-blur">
              <div className="text-3xl lg:text-4xl font-bold mb-2">100K+</div>
              <div className="text-sm opacity-90">Lives Transformed</div>
            </div>
            <div className="text-center p-6 bg-primary-foreground/10 rounded-lg backdrop-blur">
              <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Churches Planted</div>
            </div>
            <div className="text-center p-6 bg-primary-foreground/10 rounded-lg backdrop-blur">
              <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">Ministers Trained</div>
            </div>
            <div className="text-center p-6 bg-primary-foreground/10 rounded-lg backdrop-blur">
              <div className="text-3xl lg:text-4xl font-bold mb-2">15</div>
              <div className="text-sm opacity-90">Years of Service</div>
            </div>
            <div className="text-center p-6 bg-primary-foreground/10 rounded-lg backdrop-blur">
              <div className="text-3xl lg:text-4xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-90">Evangelistic Crusades</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Departments */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Ministry Departments</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Organized excellence in advancing God's kingdom across multiple spheres
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="space-y-4">
                <Globe className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Missions & Evangelism</h3>
                <p className="text-muted-foreground">
                  Global crusades, church planting, and missionary training to reach the unreached with the Gospel.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="space-y-4">
                <Heart className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Medical Relief & Charity</h3>
                <p className="text-muted-foreground">
                  Balm of Gilead healthcare initiatives and humanitarian aid to serve the most vulnerable communities.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="space-y-4">
                <Pray className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Prayer & Intercession</h3>
                <p className="text-muted-foreground">
                  24/7 prayer coverage and intercessor training to maintain heaven's connection and breakthrough.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="space-y-4">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Media & Communications</h3>
                <p className="text-muted-foreground">
                  Digital platforms, publications, and media production to spread apostolic teaching globally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Partnership Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us in advancing God's kingdom through strategic partnership and collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Pray className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold">Prayer Partner</h3>
                <p className="text-muted-foreground">
                  Stand with us in intercession for nations and breakthrough in global missions.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Join Prayer Network
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Heart className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold">Financial Partner</h3>
                <p className="text-muted-foreground">
                  Support missions, crusades, and ministry expansion through faithful giving.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Become a Partner
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <Users className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold">Ministry Partner</h3>
                <p className="text-muted-foreground">
                  Churches joining our apostolic network for greater kingdom impact.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Join Network
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="max-w-4xl mx-auto p-8">
            <CardContent className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold">Get in Touch</h3>
                <p className="text-muted-foreground">Ready to partner with us? Contact our team today.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <MapPin className="h-6 w-6 text-primary mx-auto" />
                  <div className="text-sm">
                    <div className="font-medium">Address</div>
                    <div className="text-muted-foreground">
                      Remnant Embassy
                      <br />
                      George Akume Way
                      <br />
                      Makurdi, Nigeria
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Phone className="h-6 w-6 text-primary mx-auto" />
                  <div className="text-sm">
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">
                      +234-806-544-0417
                      <br />
                      +234-903-439-5180
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Mail className="h-6 w-6 text-primary mx-auto" />
                  <div className="text-sm">
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">info@rcnmissions.org</div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button size="lg" className="px-8">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us Today
                </Button>
              </div>
            </CardContent>
          </Card>
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
                <Link href="/videos" className="block hover:text-foreground transition-colors">
                  Testimonies
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Resources</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/videos" className="block hover:text-foreground transition-colors">
                  Sermons
                </Link>
                <Link href="/contact" className="block hover:text-foreground transition-colors">
                  Prayer Requests
                </Link>
                <Link href="/events" className="block hover:text-foreground transition-colors">
                  Events
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Connect</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/contact" className="block hover:text-foreground transition-colors">
                  Contact Us
                </Link>
                <Link href="/missions" className="block hover:text-foreground transition-colors">
                  Partner With Us
                </Link>
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

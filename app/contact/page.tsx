import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, Heart, Globe } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Prayer Requests & Ministry Partnership",
  description:
    "Contact RCN Missions for prayer support, ministry partnership, or general inquiries. Submit prayer requests and connect with our apostolic ministry team.",
  keywords: [
    "contact rcn missions",
    "prayer requests",
    "ministry partnership",
    "apostolic ministry contact",
    "arome osayi contact",
  ],
  openGraph: {
    title: "Contact Us - RCN Missions",
    description:
      "Get in touch with RCN Missions for prayer support, partnership opportunities, and ministry inquiries.",
    images: ["/og-contact-rcn-missions.jpg"],
  },
  alternates: {
    canonical: "https://rcnmissions.org/contact",
  },
}

export default function ContactPage() {
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
              <Link href="/#about" className="text-muted-foreground hover:text-foreground transition-colors">
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
              <Link href="/contact" className="text-foreground font-medium">
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
      <section className="py-16 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-sm font-medium">
              Get in Touch
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Connect With <span className="text-primary">RCN Missions</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              We're here to pray with you, answer your questions, and help you get involved in God's work. Reach out to
              us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="contact" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="contact">General Contact</TabsTrigger>
                <TabsTrigger value="prayer">Prayer Request</TabsTrigger>
                <TabsTrigger value="partnership">Partnership</TabsTrigger>
              </TabsList>

              <TabsContent value="contact" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>General Contact</span>
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Send us a message and we'll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="ministry">Ministry Information</SelectItem>
                          <SelectItem value="events">Events & Crusades</SelectItem>
                          <SelectItem value="media">Media & Press</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Tell us how we can help you..." className="min-h-32" />
                    </div>

                    <Button className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="prayer" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Heart className="h-5 w-5 text-primary" />
                      <span>Prayer Request</span>
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Submit your prayer request and our intercession team will pray with you.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="prayerName">Your Name</Label>
                        <Input id="prayerName" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="prayerEmail">Email</Label>
                        <Input id="prayerEmail" type="email" placeholder="Enter your email" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="prayerCategory">Prayer Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select prayer category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="healing">Healing & Health</SelectItem>
                          <SelectItem value="family">Family & Relationships</SelectItem>
                          <SelectItem value="financial">Financial Breakthrough</SelectItem>
                          <SelectItem value="spiritual">Spiritual Growth</SelectItem>
                          <SelectItem value="guidance">Guidance & Direction</SelectItem>
                          <SelectItem value="salvation">Salvation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="prayerRequest">Prayer Request</Label>
                      <Textarea
                        id="prayerRequest"
                        placeholder="Share your prayer request with us..."
                        className="min-h-32"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="prayerUrgency">Urgency Level</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="routine">Routine Prayer</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                          <SelectItem value="emergency">Emergency</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Privacy Notice:</strong> Your prayer request will be handled with complete
                        confidentiality by our intercession team. We will not share your personal information or prayer
                        details with anyone outside our prayer ministry.
                      </p>
                    </div>

                    <Button className="w-full">
                      <Heart className="mr-2 h-4 w-4" />
                      Submit Prayer Request
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="partnership" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Globe className="h-5 w-5 text-primary" />
                      <span>Partnership Inquiry</span>
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Interested in partnering with us? Let us know how you'd like to get involved.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="partnerName">Full Name</Label>
                        <Input id="partnerName" placeholder="Enter your full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="partnerEmail">Email</Label>
                        <Input id="partnerEmail" type="email" placeholder="Enter your email" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="partnerPhone">Phone</Label>
                        <Input id="partnerPhone" type="tel" placeholder="Enter your phone number" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="partnerLocation">Location</Label>
                        <Input id="partnerLocation" placeholder="City, Country" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="partnershipType">Partnership Interest</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select partnership type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monthly">Monthly Financial Partner</SelectItem>
                          <SelectItem value="project">Project Sponsorship</SelectItem>
                          <SelectItem value="mission">Mission Trip Participation</SelectItem>
                          <SelectItem value="volunteer">Volunteer Services</SelectItem>
                          <SelectItem value="church">Church Partnership</SelectItem>
                          <SelectItem value="business">Business Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="partnerMessage">Tell Us More</Label>
                      <Textarea
                        id="partnerMessage"
                        placeholder="Tell us about your interest in partnering with RCN Missions..."
                        className="min-h-32"
                      />
                    </div>

                    <Button className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Submit Partnership Inquiry
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Locations</h2>
              <p className="text-xl text-muted-foreground">Find us around the world</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Nigeria HQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Nigeria Headquarters</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                      <div className="text-sm">
                        <div>RCN Missions International</div>
                        <div className="text-muted-foreground">Makurdi, Benue State</div>
                        <div className="text-muted-foreground">Nigeria</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">+234 (0) 803 XXX XXXX</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">info@rcnmissions.org</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Mon-Fri: 8AM-5PM WAT</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* North America */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>North America Office</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                      <div className="text-sm">
                        <div>RCN Missions North America</div>
                        <div className="text-muted-foreground">Houston, Texas</div>
                        <div className="text-muted-foreground">United States</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">+1 (713) XXX-XXXX</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">usa@rcnmissions.org</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Mon-Fri: 9AM-6PM CST</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mission Fields */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span>Mission Fields</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm">
                      <div className="font-medium mb-2">Active Locations:</div>
                      <div className="space-y-1 text-muted-foreground">
                        <div>• Cameroon Border Region</div>
                        <div>• Chad Mission Field</div>
                        <div>• Central African Republic</div>
                        <div>• Various Nigeria States</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 pt-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">missions@rcnmissions.org</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Stay Connected</h2>
            <p className="text-xl text-muted-foreground">
              Subscribe to our newsletter for ministry updates, prayer requests, and upcoming events.
            </p>
            <Card className="p-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input placeholder="Enter your email address" className="flex-1" />
                <Button>
                  <Send className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </Card>
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
                <Link href="/#about" className="block hover:text-foreground transition-colors">
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
                <Link href="/videos" className="block hover:text-foreground transition-colors">
                  Sermons
                </Link>
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
                <div>Partner With Us</div>
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

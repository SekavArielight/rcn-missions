import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Clock, Users, Ticket, ArrowRight, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

const upcomingEvents = [
  {
    id: 1,
    title: "Apostolic Restoration Conference 2024",
    description: "A powerful conference focused on restoring apostolic order in the church for end-time preparation.",
    image: "/event-apostolic-restoration-conference.jpg",
    date: "2024-03-15",
    endDate: "2024-03-17",
    time: "9:00 AM",
    location: "Makurdi, Nigeria",
    venue: "RCN Missions International Center",
    category: "Conference",
    featured: true,
    capacity: 5000,
    registered: 3200,
    price: "Free",
    speaker: "Apostle Arome Osayi",
  },
  {
    id: 2,
    title: "North East Nigeria Crusade",
    description: "Evangelistic crusade bringing hope and healing to communities in North East Nigeria.",
    image: "/event-north-east-nigeria-crusade.jpg",
    date: "2024-04-20",
    endDate: "2024-04-22",
    time: "6:00 PM",
    location: "Maiduguri, Nigeria",
    venue: "Ramat Square",
    category: "Crusade",
    featured: true,
    capacity: 10000,
    registered: 2800,
    price: "Free",
    speaker: "Apostle Arome Osayi & Team",
  },
  {
    id: 3,
    title: "Women's Empowerment Summit",
    description: "Empowering women for kingdom service and leadership in the apostolic movement.",
    image: "/event-womens-empowerment-summit.jpg",
    date: "2024-05-10",
    endDate: "2024-05-11",
    time: "10:00 AM",
    location: "Abuja, Nigeria",
    venue: "International Conference Center",
    category: "Summit",
    featured: false,
    capacity: 2000,
    registered: 1200,
    price: "₦5,000",
    speaker: "Pastor Mrs. Osayi",
  },
  {
    id: 4,
    title: "Youth Discipleship Bootcamp",
    description: "Intensive training program for young people called to ministry and kingdom service.",
    image: "/event-youth-discipleship-bootcamp.jpg",
    date: "2024-06-05",
    endDate: "2024-06-07",
    time: "8:00 AM",
    location: "Makurdi, Nigeria",
    venue: "RCN Youth Center",
    category: "Training",
    featured: false,
    capacity: 500,
    registered: 320,
    price: "₦10,000",
    speaker: "Pastor Michael Tunde",
  },
  {
    id: 5,
    title: "North America Apostolic Gathering",
    description: "Gathering of the diaspora community for fellowship, teaching, and apostolic impartation.",
    image: "/event-north-america-gathering.jpg",
    date: "2024-07-12",
    endDate: "2024-07-14",
    time: "7:00 PM",
    location: "Houston, Texas, USA",
    venue: "Convention Center",
    category: "Gathering",
    featured: false,
    capacity: 1500,
    registered: 800,
    price: "$50",
    speaker: "Apostle Arome Osayi",
  },
]

export const metadata: Metadata = {
  title: "Events & Conferences - Apostolic Gatherings & Crusades",
  description:
    "Join RCN Missions for powerful conferences, crusades, and apostolic gatherings. Register for upcoming events with Apostle Arome Osayi and ministry team.",
  keywords: [
    "apostolic conferences",
    "christian crusades",
    "arome osayi events",
    "rcn missions events",
    "apostolic gatherings",
    "ministry conferences",
  ],
  openGraph: {
    title: "Events & Conferences - RCN Missions",
    description: "Join us for powerful apostolic gatherings, conferences, and crusades around the world.",
    images: ["/og-events-rcn-missions.jpg"],
  },
  alternates: {
    canonical: "https://rcnmissions.org/events",
  },
}

export default function EventsPage() {
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
              <Link href="/events" className="text-foreground font-medium">
                Events
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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-sm font-medium">
              Upcoming Events
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Join Us for <span className="text-primary">Powerful Gatherings</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Experience God's presence through conferences, crusades, and special events designed to strengthen your
              faith and advance the kingdom.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search events..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="conference">Conference</SelectItem>
                  <SelectItem value="crusade">Crusade</SelectItem>
                  <SelectItem value="summit">Summit</SelectItem>
                  <SelectItem value="training">Training</SelectItem>
                  <SelectItem value="gathering">Gathering</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Featured Events</h2>
              <p className="text-xl text-muted-foreground">Don't miss these upcoming powerful gatherings</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {upcomingEvents
                .filter((event) => event.featured)
                .map((event) => {
                  const registrationPercentage = (event.registered / event.capacity) * 100
                  return (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="relative h-64">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-background/90">
                            {event.category}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="outline" className="bg-background/90">
                            {event.price}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>
                              {new Date(event.date).toLocaleDateString()} -{" "}
                              {new Date(event.endDate).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span>{event.registered.toLocaleString()} registered</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Registration Progress</span>
                            <span>
                              {event.registered.toLocaleString()} / {event.capacity.toLocaleString()}
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${Math.min(registrationPercentage, 100)}%` }}
                            />
                          </div>
                        </div>

                        <div className="bg-muted/50 p-4 rounded-lg">
                          <div className="text-sm">
                            <div className="font-medium">Speaker: {event.speaker}</div>
                            <div className="text-muted-foreground">Venue: {event.venue}</div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button className="flex-1">
                            <Ticket className="mr-2 h-4 w-4" />
                            Register Now
                          </Button>
                          <Button variant="outline" className="flex-1 bg-transparent">
                            <ArrowRight className="mr-2 h-4 w-4" />
                            Learn More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">All Upcoming Events</h2>
              <p className="text-xl text-muted-foreground">Complete schedule of our ministry events</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="text-xs bg-background/90">
                        {event.category}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="text-xs bg-background/90">
                        {event.price}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-3 w-3 text-primary" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-3 w-3 text-primary" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-3 w-3 text-primary" />
                        <span>{event.registered.toLocaleString()} registered</span>
                      </div>
                    </div>

                    <Button size="sm" className="w-full">
                      <Ticket className="mr-2 h-3 w-3" />
                      Register
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Registration Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Quick Event Registration</CardTitle>
                <p className="text-center text-muted-foreground">
                  Register for any of our upcoming events using this form
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="regFirstName">First Name</Label>
                    <Input id="regFirstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="regLastName">Last Name</Label>
                    <Input id="regLastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="regEmail">Email</Label>
                    <Input id="regEmail" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="regPhone">Phone</Label>
                    <Input id="regPhone" type="tel" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventSelect">Select Event</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an event to register for" />
                    </SelectTrigger>
                    <SelectContent>
                      {upcomingEvents.map((event) => (
                        <SelectItem key={event.id} value={event.id.toString()}>
                          {event.title} - {new Date(event.date).toLocaleDateString()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attendeeCount">Number of Attendees</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="How many people?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Person</SelectItem>
                      <SelectItem value="2">2 People</SelectItem>
                      <SelectItem value="3">3 People</SelectItem>
                      <SelectItem value="4">4 People</SelectItem>
                      <SelectItem value="5+">5+ People</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">
                  <Ticket className="mr-2 h-4 w-4" />
                  Complete Registration
                </Button>
              </CardContent>
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

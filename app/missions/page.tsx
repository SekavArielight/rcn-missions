import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MapPin, Users, Heart, Target, Calendar, Globe, ArrowRight, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

// Sample mission project data as specified in the requirements
const missionProjects = [
  {
    id: 1,
    title: "North East Nigeria Project",
    description:
      "Reaching unreached communities in North East Nigeria with the Gospel through evangelism, medical relief, and community development programs.",
    image: "/mission-north-east-nigeria-project.jpg",
    location: "North East Nigeria",
    status: "Active",
    fundingGoal: 50000,
    currentFunding: 32000,
    beneficiaries: 5000,
    startDate: "2023-06-01",
    featured: true,
    category: "Evangelism",
    impact: "15 churches planted, 2,000 souls won",
  },
  {
    id: 2,
    title: "Balm of Gilead Medical Relief",
    description: "Providing medical supplies and healthcare to underserved communities across multiple mission fields.",
    image: "/mission-balm-gilead-medical-relief.jpg",
    location: "Multiple Locations",
    status: "Ongoing",
    fundingGoal: 75000,
    currentFunding: 45000,
    beneficiaries: 10000,
    startDate: "2022-01-15",
    featured: true,
    category: "Medical Relief",
    impact: "10,000+ people served, 25 medical camps",
  },
  {
    id: 3,
    title: "Cameroon Border Mission",
    description:
      "Establishing churches and training local pastors in remote border communities between Nigeria and Cameroon.",
    image: "/mission-cameroon-border-outreach.jpg",
    location: "Nigeria-Cameroon Border",
    status: "Active",
    fundingGoal: 30000,
    currentFunding: 18000,
    beneficiaries: 2500,
    startDate: "2023-09-01",
    featured: false,
    category: "Church Planting",
    impact: "8 churches planted, 50 pastors trained",
  },
  {
    id: 4,
    title: "Youth Discipleship Centers",
    description:
      "Building discipleship centers to train and equip young people for effective Christian living and ministry.",
    image: "/mission-youth-discipleship-centers.jpg",
    location: "Makurdi, Nigeria",
    status: "Planning",
    fundingGoal: 40000,
    currentFunding: 12000,
    beneficiaries: 1500,
    startDate: "2024-03-01",
    featured: false,
    category: "Discipleship",
    impact: "Planning phase - 500 youth to be trained",
  },
  {
    id: 5,
    title: "North America Diaspora Outreach",
    description:
      "Reaching African diaspora communities in North America with the apostolic message and establishing local fellowships.",
    image: "/mission-north-america-diaspora.jpg",
    location: "North America",
    status: "Active",
    fundingGoal: 60000,
    currentFunding: 38000,
    beneficiaries: 3000,
    startDate: "2022-08-01",
    featured: false,
    category: "Diaspora Ministry",
    impact: "12 fellowships established, 800 members",
  },
  {
    id: 6,
    title: "Women's Empowerment Initiative",
    description: "Empowering women through skills training, microfinance, and spiritual development programs.",
    image: "/mission-women-empowerment-initiative.jpg",
    location: "Rural Nigeria",
    status: "Active",
    fundingGoal: 25000,
    currentFunding: 20000,
    beneficiaries: 800,
    startDate: "2023-03-01",
    featured: false,
    category: "Empowerment",
    impact: "400 women trained, 200 businesses started",
  },
]

export const metadata: Metadata = {
  title: "Mission Projects & Donations - Global Apostolic Outreach",
  description:
    "Support RCN Missions' global outreach projects including medical relief, church planting, and evangelism across Nigeria, North America, and Africa. Partner with us today.",
  keywords: [
    "christian missions",
    "nigeria missions",
    "medical relief",
    "church planting",
    "mission donations",
    "apostolic missions",
    "rcn missions projects",
  ],
  openGraph: {
    title: "Mission Projects - RCN Missions",
    description: "Support our global mission projects bringing hope and healing to communities worldwide.",
    images: ["/og-missions-rcn-missions.jpg"],
  },
  alternates: {
    canonical: "https://rcnmissions.org/missions",
  },
}

export default function MissionsPage() {
  const totalFundingGoal = missionProjects.reduce((sum, project) => sum + project.fundingGoal, 0)
  const totalCurrentFunding = missionProjects.reduce((sum, project) => sum + project.currentFunding, 0)
  const totalBeneficiaries = missionProjects.reduce((sum, project) => sum + project.beneficiaries, 0)

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
              <Link href="/missions" className="text-foreground font-medium">
                Missions
              </Link>
              <Link href="/videos" className="text-muted-foreground hover:text-foreground transition-colors">
                Videos
              </Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
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
              Global Mission Fields
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Transforming Lives Through <span className="text-primary">Apostolic Missions</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Join us in reaching the unreached, healing the broken, and establishing God's kingdom across nations.
              Every partnership makes an eternal difference.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Impact Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-primary">{missionProjects.length}</div>
                <div className="text-sm text-muted-foreground">Active Projects</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-primary">{totalBeneficiaries.toLocaleString()}+</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-primary">${totalCurrentFunding.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Funds Raised</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="space-y-2">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Countries Reached</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Featured Mission Projects</h2>
              <p className="text-xl text-muted-foreground">
                Urgent projects that need your immediate support and partnership
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {missionProjects
                .filter((project) => project.featured)
                .map((project) => {
                  const fundingPercentage = (project.currentFunding / project.fundingGoal) * 100
                  return (
                    <Card key={project.id} className="overflow-hidden">
                      <div className="relative h-64">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-background/90">
                            {project.status}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="outline" className="bg-background/90">
                            {project.category}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader>
                        <div className="space-y-2">
                          <CardTitle className="text-xl">{project.title}</CardTitle>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{project.location}</span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Funding Progress</span>
                            <span className="text-muted-foreground">
                              ${project.currentFunding.toLocaleString()} / ${project.fundingGoal.toLocaleString()}
                            </span>
                          </div>
                          <Progress value={fundingPercentage} className="h-2" />
                          <div className="text-sm text-muted-foreground">{fundingPercentage.toFixed(1)}% funded</div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-primary" />
                            <span>{project.beneficiaries.toLocaleString()} beneficiaries</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>Since {new Date(project.startDate).getFullYear()}</span>
                          </div>
                        </div>

                        <div className="bg-muted/50 p-4 rounded-lg">
                          <div className="text-sm font-medium mb-1">Impact So Far:</div>
                          <div className="text-sm text-muted-foreground">{project.impact}</div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button className="flex-1">
                            <Heart className="mr-2 h-4 w-4" />
                            Donate Now
                          </Button>
                          <Button variant="outline" className="flex-1 bg-transparent">
                            <Target className="mr-2 h-4 w-4" />
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

      {/* All Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">All Mission Projects</h2>
              <p className="text-xl text-muted-foreground">
                Explore our complete portfolio of mission work around the world
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missionProjects.map((project) => {
                const fundingPercentage = (project.currentFunding / project.fundingGoal) * 100
                return (
                  <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant={project.status === "Active" ? "default" : "secondary"} className="text-xs">
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{project.location}</span>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span>Progress</span>
                          <span>${project.currentFunding.toLocaleString()}</span>
                        </div>
                        <Progress value={fundingPercentage} className="h-1.5" />
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>{project.beneficiaries.toLocaleString()}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>

                      <Button size="sm" className="w-full">
                        <DollarSign className="mr-2 h-3 w-3" />
                        Support Project
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Partnership Opportunities</h2>
              <p className="text-xl text-muted-foreground">
                Different ways you can partner with us in advancing God's kingdom
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Monthly Partner</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Join our monthly partnership program and make a consistent impact in mission work.
                  </p>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">$50+</div>
                    <div className="text-xs text-muted-foreground">per month</div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Become Partner
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Project Sponsor</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Sponsor a complete project and see direct impact in specific communities.
                  </p>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">$5,000+</div>
                    <div className="text-xs text-muted-foreground">one-time or installments</div>
                  </div>
                  <Button size="sm" className="w-full">
                    Sponsor Project
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Mission Trip</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Join us on mission trips and experience firsthand the work God is doing.
                  </p>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">Varies</div>
                    <div className="text-xs text-muted-foreground">by destination</div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Join Mission
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Make an Eternal Impact Today</h2>
            <p className="text-xl opacity-90">
              Your partnership enables us to reach the unreached, heal the broken, and establish God's kingdom across
              nations. Every gift makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8">
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Become a Partner
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
                <div>Contact Us</div>
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

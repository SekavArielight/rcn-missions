"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  MapPin,
  Users,
  Heart,
  Target,
  Calendar,
  Globe,
  DollarSign,
  Menu,
  X,
  Phone,
  Mail,
  Award,
  CheckCircle,
  Star,
  Play,
  Download,
  Share2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Footer from "@/components/Footer"

const missionProjects = [
  {
    id: 1,
    title: "North East Nigeria Crusade Project",
    description:
      "Reaching unreached communities in conflict zones with the Gospel through evangelism, medical relief, and community development programs.",
    image: "/mission-north-east-nigeria-project.jpg",
    location: "Borno & Adamawa States, Nigeria",
    status: "URGENT NEED",
    fundingGoal: 15000,
    currentFunding: 8500,
    beneficiaries: 5000,
    startDate: "2024-03-01",
    endDate: "2024-06-30",
    featured: true,
    category: "Evangelism",
    impact: "5 village crusades planned, 1,000+ families to receive aid",
    supporters: 125,
    daysLeft: 45,
    costBreakdown: {
      transportation: 3000,
      accommodation: 2000,
      medical_supplies: 4000,
      evangelism_materials: 2000,
      local_support: 4000,
    },
    recentUpdates: [
      { date: "2024-01-15", update: "First village crusade completed - 200 souls saved!" },
      { date: "2024-01-10", update: "Medical team deployed to Borno State" },
    ],
  },
  {
    id: 2,
    title: "Balm of Gilead Mobile Clinic",
    description:
      "Providing mobile medical vehicle and healthcare services to underserved communities across multiple mission fields.",
    image: "/mission-balm-gilead-medical-relief.jpg",
    location: "Multiple Locations",
    status: "Active",
    fundingGoal: 25000,
    currentFunding: 12750,
    beneficiaries: 10000,
    startDate: "2022-01-15",
    featured: true,
    category: "Medical Relief",
    impact: "Reach 50+ villages annually, serve 10,000+ patients",
    supporters: 89,
    equipment: ["Mobile medical vehicle", "Medical supplies", "Training materials"],
    achievements: ["25 medical camps completed", "5,000+ patients treated", "15 villages reached"],
  },
  {
    id: 3,
    title: "Ghana Missionary Housing",
    description:
      "Building housing facilities for missionary families and establishing regional training center in Ghana.",
    image: "/mission-cameroon-border-outreach.jpg",
    location: "Accra, Ghana",
    status: "Planning",
    fundingGoal: 35000,
    currentFunding: 5250,
    beneficiaries: 2500,
    startDate: "2024-06-01",
    featured: false,
    category: "Infrastructure",
    impact: "House 4 families, establish regional training center",
    supporters: 32,
    phases: ["Land acquisition", "Foundation", "Construction", "Furnishing"],
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

const featuredMissionaries = [
  {
    id: 1,
    name: "Pastor John Adamu",
    location: "Borno State, Nigeria",
    yearsInField: 5,
    focus: "Church Planting & Evangelism",
    photo: "/pastor-john-adamu-regional-coordinator.jpg",
    achievements: ["3 churches planted", "25 evangelists trained", "1,000+ souls saved"],
    testimony: "Despite challenges in this conflict zone, God has blessed us with supernatural results",
    prayerNeeds: ["Safety for family", "Church construction resources", "Transportation needs"],
    contact: "john.adamu@rcnmissions.org",
  },
  {
    id: 2,
    name: "Dr. Sarah Okafor",
    location: "Rural Ghana",
    yearsInField: 8,
    focus: "Medical Missions & Church Leadership",
    photo: "/dr-sarah-bello-medical-relief.jpg",
    achievements: ["2 medical clinics established", "10,000+ patients served", "500+ led to Christ"],
    testimony: "Combining medical practice with Gospel ministry opens incredible opportunities",
    prayerNeeds: ["Medical supplies", "Local staff training", "Expansion funding"],
    contact: "sarah.okafor@rcnmissions.org",
  },
]

const missionReports = [
  {
    id: 1,
    title: "Miracle Crusade in Yola: 2,000 Souls Saved",
    date: "2024-01-15",
    location: "Yola, Adamawa State",
    excerpt: "Three nights of supernatural demonstrations resulted in mass conversions and miraculous healings...",
    image: "/event-north-east-nigeria-crusade.jpg",
    downloadUrl: "/reports/yola-crusade-2024.pdf",
    category: "Crusade Report",
  },
  {
    id: 2,
    title: "Medical Camp Serves 500 Patients",
    date: "2024-01-08",
    location: "Bassa Village, Plateau State",
    excerpt: "Free healthcare provided with many receiving both physical healing and salvation...",
    image: "/mission-balm-gilead-medical-relief.jpg",
    photoGallery: "/gallery/bassa-medical-camp",
    category: "Medical Mission",
  },
]

const impactStories = [
  {
    id: 1,
    title: "From Terrorism to Discipleship",
    beforeAfterImage: "/impact-story-terrorism-discipleship.jpg",
    partnerSupport: 2500,
    results: ["500+ souls saved", "2 churches established", "Former terrorists now preaching"],
    donorQuote: "Seeing lives transformed from terrorism shows the power of kingdom investment",
    donorName: "Sarah & Michael Johnson",
    donorLocation: "USA",
  },
  {
    id: 2,
    title: "Medical Miracle in Remote Village",
    beforeAfterImage: "/impact-story-medical-miracle.jpg",
    partnerSupport: 1200,
    results: ["300 patients treated", "15 surgeries performed", "Entire village now has Gospel witness"],
    donorQuote: "Every dollar multiplied into eternal impact",
    donorName: "Dr. Robert Chen",
    donorLocation: "Canada",
  },
]

export default function MissionsClientPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const totalFundingGoal = missionProjects.reduce((sum, project) => sum + project.fundingGoal, 0)
  const totalCurrentFunding = missionProjects.reduce((sum, project) => sum + project.currentFunding, 0)
  const totalBeneficiaries = missionProjects.reduce((sum, project) => sum + project.beneficiaries, 0)

  return (
    <div className="min-h-screen bg-background">
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
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
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Button variant="outline" size="sm">
                Prayer Request
              </Button>
              <Button size="sm">Partner With Us</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-background">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/about"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/leadership"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Leadership
                </Link>
                <Link
                  href="/missions"
                  className="block px-3 py-2 text-foreground font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Missions
                </Link>
                <Link
                  href="/videos"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Videos
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
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

      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/global-ministry-world-map-overlay.jpg')] opacity-5 bg-cover bg-center" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="text-sm font-medium bg-primary/10 text-primary">
              Global Mission Fields
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-balance">
              Global Missions & <span className="text-primary">Ministry Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Advancing God's kingdom through strategic missions, crusades, and humanitarian work across Africa and
              beyond
            </p>

            {/* Live Statistics Ticker */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Crusades</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Missionaries</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Heart className="mr-2 h-5 w-5" />
                Support a Mission
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Users className="mr-2 h-5 w-5" />
                Become a Missionary
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Active Projects Showcase</h2>
              <p className="text-xl text-muted-foreground">
                Urgent projects that need your immediate support and partnership
              </p>
            </div>

            <div className="space-y-8">
              {missionProjects
                .filter((project) => project.featured)
                .map((project) => {
                  const fundingPercentage = (project.currentFunding / project.fundingGoal) * 100
                  return (
                    <Card key={project.id} className="overflow-hidden">
                      <div className="grid lg:grid-cols-2 gap-0">
                        <div className="relative h-64 lg:h-auto">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge
                              variant={project.status === "URGENT NEED" ? "destructive" : "secondary"}
                              className="bg-background/90"
                            >
                              {project.status}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge variant="outline" className="bg-background/90">
                              {project.category}
                            </Badge>
                          </div>
                        </div>

                        <div className="p-8 space-y-6">
                          <div className="space-y-2">
                            <h3 className="text-2xl font-bold">{project.title}</h3>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span>{project.location}</span>
                            </div>
                          </div>

                          <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                          {/* Enhanced Progress Section */}
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="font-medium">Funding Progress</span>
                              <div className="text-right">
                                <div className="font-bold text-primary">${project.currentFunding.toLocaleString()}</div>
                                <div className="text-sm text-muted-foreground">
                                  of ${project.fundingGoal.toLocaleString()} goal
                                </div>
                              </div>
                            </div>
                            <Progress value={fundingPercentage} className="h-3" />
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{fundingPercentage.toFixed(1)}% funded</span>
                              {project.daysLeft && (
                                <span className="text-primary font-medium">{project.daysLeft} days left</span>
                              )}
                            </div>
                          </div>

                          {/* Project Stats */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2 text-sm">
                              <Users className="h-4 w-4 text-primary" />
                              <span>{project.beneficiaries.toLocaleString()} beneficiaries</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <Heart className="h-4 w-4 text-primary" />
                              <span>{project.supporters} supporters</span>
                            </div>
                          </div>

                          {/* Impact Highlight */}
                          <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                            <div className="text-sm font-medium mb-1 text-primary">Expected Impact:</div>
                            <div className="text-sm text-muted-foreground">{project.impact}</div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button className="flex-1">
                              <DollarSign className="mr-2 h-4 w-4" />
                              Donate Now
                            </Button>
                            <Button variant="outline" className="flex-1 bg-transparent">
                              <Target className="mr-2 h-4 w-4" />
                              Learn More
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Featured Missionaries</h2>
              <p className="text-xl text-muted-foreground">
                Meet the dedicated servants advancing God's kingdom on the frontlines
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredMissionaries.map((missionary) => (
                <Card key={missionary.id} className="overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={missionary.photo || "/placeholder.svg"}
                        alt={missionary.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold">{missionary.name}</h3>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{missionary.location}</span>
                        </div>
                        <div className="text-sm text-primary font-medium">
                          {missionary.yearsInField} years in field • {missionary.focus}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm font-medium">Achievements:</div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {missionary.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <CheckCircle className="h-3 w-3 text-primary" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-muted/50 p-3 rounded-lg">
                        <div className="text-sm italic">"{missionary.testimony}"</div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm font-medium">Prayer Needs:</div>
                        <div className="flex flex-wrap gap-1">
                          {missionary.prayerNeeds.map((need, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {need}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button size="sm" variant="outline" className="w-full bg-transparent">
                        <Mail className="mr-2 h-3 w-3" />
                        Contact Missionary
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Latest Mission Reports</h2>
              <p className="text-xl text-muted-foreground">
                Fresh updates from the field showing God's miraculous work
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {missionReports.map((report) => (
                <Card key={report.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={report.image || "/placeholder.svg"}
                      alt={report.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-background/90">
                        {report.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="space-y-2">
                      <CardTitle className="text-lg leading-tight">{report.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(report.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{report.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">{report.excerpt}</p>

                    <div className="flex gap-2">
                      {report.downloadUrl && (
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Download className="mr-2 h-3 w-3" />
                          Download PDF
                        </Button>
                      )}
                      {report.photoGallery && (
                        <Button size="sm" variant="outline" className="bg-transparent">
                          <Play className="mr-2 h-3 w-3" />
                          View Gallery
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Impact Stories</h2>
              <p className="text-xl text-muted-foreground">
                Real transformation stories made possible by our faithful partners
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {impactStories.map((story) => (
                <Card key={story.id} className="overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={story.beforeAfterImage || "/placeholder.svg"}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary">${story.partnerSupport.toLocaleString()} Impact</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{story.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Results Achieved:</div>
                      <ul className="space-y-1">
                        {story.results.map((result, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm">
                            <Star className="h-3 w-3 text-primary" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                      <div className="text-sm italic mb-2">"{story.donorQuote}"</div>
                      <div className="text-xs text-muted-foreground">
                        - {story.donorName}, {story.donorLocation}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Global Partner</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Partner with us globally and support multiple mission projects across different continents.
                  </p>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">$1,000+</div>
                    <div className="text-xs text-muted-foreground">per year</div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Become Partner
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Sponsor a Missionary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Sponsor a missionary and provide them with the resources they need to serve effectively.
                  </p>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">$2,000+</div>
                    <div className="text-xs text-muted-foreground">per year</div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Sponsor Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

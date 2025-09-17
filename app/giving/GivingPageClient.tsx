"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import {
  Heart,
  Globe,
  Users,
  Church,
  Cross,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  ArrowRight,
  Shield,
  CheckCircle,
  TrendingUp,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const impactStories = [
  {
    id: 1,
    title: "From Witch Doctor to Pastor",
    description: "Your $500 funded the crusade that transformed Mallam Ibrahim from witch doctor to pastor",
    image: "/impact-story-witch-doctor-pastor.jpg",
    location: "Northern Nigeria",
    impact: "200 people now attend his church",
    beforeImage: "/before-witch-doctor.jpg",
    afterImage: "/after-pastor-ibrahim.jpg",
  },
  {
    id: 2,
    title: "Miracle Baby Lives",
    description: "Your $75 provided medical supplies that saved baby Mercy's life",
    image: "/impact-story-miracle-baby.jpg",
    location: "Rural Ghana",
    impact: "Medical clinic now serves 500+ patients monthly",
  },
  {
    id: 3,
    title: "Former Terrorist Becomes Evangelist",
    description: "Your support enabled the crusade that transformed a Boko Haram commander",
    image: "/impact-story-terrorist-evangelist.jpg",
    location: "North East Nigeria",
    impact: "He's now planted 3 churches in former conflict zones",
  },
]

const partnershipLevels = [
  {
    id: "prayer",
    title: "Prayer Warrior",
    amount: "$0/month",
    icon: Heart,
    badge: "Praying hands icon",
    benefits: ["Monthly prayer requests", "Testimony updates", "Prayer group access"],
    cta: "Join Prayer Network",
    popular: false,
  },
  {
    id: "supporter",
    title: "Kingdom Supporter",
    amount: "$25+/month",
    icon: Heart,
    badge: "Heart with crown",
    benefits: ["All prayer benefits", "Monthly impact reports", "Apostle's letter"],
    cta: "Become Supporter",
    popular: true,
  },
  {
    id: "champion",
    title: "Mission Champion",
    amount: "$100+/month",
    icon: Globe,
    badge: "Globe with cross",
    benefits: ["All previous benefits", "Quarterly mission calls", "Field trip invitations"],
    cta: "Champion Missions",
    popular: false,
  },
]

export default function GivingPageClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState("")
  const [isMonthly, setIsMonthly] = useState(false)
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)

  // Live counters
  const [livesReached, setLivesReached] = useState(98247)
  const [churchesPlanted, setChurchesPlanted] = useState(47)
  const [healingsRecorded, setHealingsRecorded] = useState(1523)

  // Animate counters on mount
  useEffect(() => {
    const interval = setInterval(() => {
      setLivesReached((prev) => prev + Math.floor(Math.random() * 3))
      if (Math.random() > 0.95) setChurchesPlanted((prev) => prev + 1)
      if (Math.random() > 0.9) setHealingsRecorded((prev) => prev + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Auto-rotate impact stories
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex((prev) => (prev + 1) % impactStories.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const calculateImpact = (amount: number) => {
    const lives = Math.floor(amount * 2)
    const villages = Math.floor(amount / 25)
    const missionaries = Math.floor(amount / 100)
    return { lives, villages, missionaries }
  }

  const currentAmount = customAmount ? Number.parseInt(customAmount) || 0 : selectedAmount
  const impact = calculateImpact(currentAmount)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-xl text-foreground">RCN Missions</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/missions" className="text-muted-foreground hover:text-foreground transition-colors">
                Missions
              </Link>
              <Link href="/giving" className="text-foreground font-medium">
                Give
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Button variant="outline" size="sm">
                Prayer Request
              </Button>
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
                  href="/"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/missions"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Missions
                </Link>
                <Link
                  href="/giving"
                  className="block px-3 py-2 text-foreground font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Give
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="px-3 py-2">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Prayer Request
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Giving Hero - "Your Kingdom Investment" */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="absolute inset-0 bg-[url('/hands-prayer-worship-background.jpg')] opacity-10 bg-cover bg-center"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="text-sm font-medium">
              Kingdom Partnership
            </Badge>

            <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
              Transform Lives Through <span className="text-primary">Kingdom Partnership</span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed">
              See your giving multiply into eternal impact across nations
            </p>

            {/* Live Impact Counter */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-background/80 backdrop-blur rounded-lg border">
                <div className="text-2xl lg:text-3xl font-bold text-primary">{livesReached.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Lives Reached</div>
              </div>
              <div className="text-center p-4 bg-background/80 backdrop-blur rounded-lg border">
                <div className="text-2xl lg:text-3xl font-bold text-primary">{churchesPlanted}</div>
                <div className="text-sm text-muted-foreground">Churches Planted</div>
              </div>
              <div className="text-center p-4 bg-background/80 backdrop-blur rounded-lg border">
                <div className="text-2xl lg:text-3xl font-bold text-primary">{healingsRecorded.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Healings Recorded</div>
              </div>
            </div>

            {/* Biblical Foundation */}
            <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary max-w-2xl mx-auto">
              <p className="text-muted-foreground italic text-lg">
                "Give, and it will be given to you. A good measure, pressed down, shaken together and running over..."
              </p>
              <p className="text-sm text-primary font-medium mt-2">- Luke 6:38</p>
            </div>

            {/* Interactive Impact Calculator */}
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-center">Your Impact Calculator</h3>
                <div className="space-y-4">
                  <div>
                    <Label>If you give ${currentAmount}</Label>
                    <Slider
                      value={[selectedAmount]}
                      onValueChange={(value) => setSelectedAmount(value[0])}
                      max={500}
                      min={25}
                      step={25}
                      className="mt-2"
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-2xl font-bold text-primary">{impact.lives} lives impacted</div>
                    <div className="text-sm text-muted-foreground">
                      {impact.villages} villages reached • {impact.missionaries} missionaries supported
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Smart Giving Cards - Choose Your Impact */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Choose Your Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every gift creates lasting transformation in communities across nations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Feed a Village</h3>
                  <div className="text-2xl font-bold text-primary">$25</div>
                </div>
                <p className="text-sm text-muted-foreground">Provides meals for 50 people during crusade</p>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <Progress value={75} className="mb-2" />
                  <div className="text-xs text-muted-foreground">12 villages fed this month</div>
                </div>
                <div className="bg-primary/5 p-3 rounded-lg border-l-2 border-primary">
                  <p className="text-xs italic text-muted-foreground">
                    "The food brought us to the crusade where we found Jesus" - Chief Musa
                  </p>
                </div>
                <Button className="w-full">Feed a Village</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Cross className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Heal the Sick</h3>
                  <div className="text-2xl font-bold text-primary">$50</div>
                </div>
                <p className="text-sm text-muted-foreground">Provides medical supplies for 20 patients</p>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="flex items-center justify-center space-x-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-medium">342 healed this month</span>
                  </div>
                </div>
                <div className="bg-primary/5 p-3 rounded-lg border-l-2 border-primary">
                  <p className="text-xs italic text-muted-foreground">
                    "The medical team saved my daughter's life" - Mrs. Grace
                  </p>
                </div>
                <Button className="w-full">Heal the Sick</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Send a Missionary</h3>
                  <div className="text-2xl font-bold text-primary">$100</div>
                </div>
                <p className="text-sm text-muted-foreground">Supports a missionary family for one week</p>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">25 countries active</span>
                  </div>
                </div>
                <div className="bg-primary/5 p-3 rounded-lg border-l-2 border-primary">
                  <p className="text-xs italic text-muted-foreground">
                    "Your support allowed us to reach 3 new villages" - Pastor John
                  </p>
                </div>
                <Button className="w-full">Send a Missionary</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Church className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Plant a Church</h3>
                  <div className="text-2xl font-bold text-primary">$500</div>
                </div>
                <p className="text-sm text-muted-foreground">Funds complete church plant in remote area</p>
                <div className="bg-muted/50 p-3 rounded-lg">
                  <div className="flex items-center justify-center space-x-2">
                    <Church className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{churchesPlanted} planted this year</span>
                  </div>
                </div>
                <div className="bg-primary/5 p-3 rounded-lg border-l-2 border-primary">
                  <p className="text-xs italic text-muted-foreground">
                    "Our village now has permanent Gospel witness" - Elder Samuel
                  </p>
                </div>
                <Button className="w-full">Plant a Church</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* One-Click Quick Give */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Quick Kingdom Impact</CardTitle>
                <p className="text-muted-foreground">Choose your gift amount and frequency</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Most Needed Now */}
                <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Most Needed Now: North East Nigeria Crusade</h3>
                    <Badge variant="secondary">Urgent</Badge>
                  </div>
                  <Progress value={68} className="mb-2" />
                  <p className="text-sm text-muted-foreground">$34,000 of $50,000 raised</p>
                </div>

                {/* Amount Selection */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Select Amount</Label>
                  <div className="grid grid-cols-4 gap-3">
                    {[25, 50, 100, 250].map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        onClick={() => {
                          setSelectedAmount(amount)
                          setCustomAmount("")
                        }}
                        className="h-12"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="customAmount">Custom Amount</Label>
                    <Input
                      id="customAmount"
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                    />
                  </div>
                </div>

                {/* Frequency Toggle */}
                <div className="flex items-center justify-center space-x-4">
                  <Button
                    variant={!isMonthly ? "default" : "outline"}
                    onClick={() => setIsMonthly(false)}
                    className="flex-1"
                  >
                    One-time
                  </Button>
                  <Button
                    variant={isMonthly ? "default" : "outline"}
                    onClick={() => setIsMonthly(true)}
                    className="flex-1"
                  >
                    Monthly
                  </Button>
                </div>

                {/* Impact Preview */}
                <div className="bg-muted/50 p-4 rounded-lg text-center">
                  <h4 className="font-medium mb-2">
                    Your ${currentAmount} {isMonthly ? "monthly" : ""} gift will:
                  </h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-lg font-bold text-primary">{impact.lives}</div>
                      <div className="text-muted-foreground">Lives Impacted</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">{impact.villages}</div>
                      <div className="text-muted-foreground">Villages Reached</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">{impact.missionaries}</div>
                      <div className="text-muted-foreground">Missionaries Supported</div>
                    </div>
                  </div>
                </div>

                <Button size="lg" className="w-full">
                  <Heart className="mr-2 h-5 w-5" />
                  Make Kingdom Impact
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Levels - Kingdom Membership */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Kingdom Membership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join our community of kingdom partners advancing God's work globally
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partnershipLevels.map((level) => {
              const IconComponent = level.icon
              return (
                <Card
                  key={level.id}
                  className={`relative ${level.popular ? "border-primary shadow-lg scale-105" : ""} hover:shadow-lg transition-all duration-300`}
                >
                  {level.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{level.title}</h3>
                      <div className="text-2xl font-bold text-primary">{level.amount}</div>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {level.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant={level.popular ? "default" : "outline"} className="w-full">
                      {level.cta}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stories That Inspire - Impact Carousel */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Stories That Inspire</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how your partnership creates lasting transformation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative aspect-square lg:aspect-auto">
                  <Image
                    src={
                      impactStories[currentStoryIndex].image ||
                      "/placeholder.svg?height=400&width=400&query=impact story transformation"
                    }
                    alt={impactStories[currentStoryIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      <MapPin className="h-3 w-3 mr-1" />
                      {impactStories[currentStoryIndex].location}
                    </Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4">{impactStories[currentStoryIndex].title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {impactStories[currentStoryIndex].description}
                      </p>
                    </div>

                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span className="font-medium text-sm">Impact Result</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{impactStories[currentStoryIndex].impact}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {impactStories.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentStoryIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentStoryIndex ? "bg-primary" : "bg-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <Button variant="outline" size="sm">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Read More Stories
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Where Your Money Goes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete transparency in how we steward your kingdom investment
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Fund Allocation Chart */}
            <Card>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Fund Allocation</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 bg-primary rounded"></div>
                          <span>Direct Ministry</span>
                        </div>
                        <span className="font-bold">70%</span>
                      </div>
                      <Progress value={70} className="h-2" />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 bg-primary/60 rounded"></div>
                          <span>Missionary Support</span>
                        </div>
                        <span className="font-bold">20%</span>
                      </div>
                      <Progress value={20} className="h-2" />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-4 h-4 bg-primary/30 rounded"></div>
                          <span>Administration</span>
                        </div>
                        <span className="font-bold">10%</span>
                      </div>
                      <Progress value={10} className="h-2" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield className="h-5 w-5 text-primary" />
                        <span className="font-bold">100% Guarantee</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        100% of designated gifts go directly to specified projects
                      </p>
                    </div>

                    <Button variant="outline" className="w-full bg-transparent">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Download Financial Reports
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Leadership Commitment */}
            <Card>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="relative aspect-square">
                    <Image
                      src="/apostle-arome-osayi-stewardship-commitment.jpg"
                      alt="Apostle Arome Osayi - Stewardship Commitment"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="lg:col-span-2 space-y-4">
                    <h3 className="text-xl font-bold">Leadership Commitment</h3>
                    <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-muted-foreground italic">
                        "We understand that every gift represents sacrifice and trust. We commit to stewarding your
                        partnership with the highest integrity, ensuring maximum kingdom impact with minimal overhead."
                      </p>
                      <p className="text-sm text-primary font-medium mt-2">- Apostle Arome Osayi</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Simple Contact & Support */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Need Help Deciding?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Our giving team is here to help you make the perfect kingdom investment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-primary-foreground/10 backdrop-blur border-primary-foreground/20">
              <CardContent className="p-6 text-center space-y-4">
                <MessageCircle className="h-12 w-12 mx-auto opacity-90" />
                <h3 className="text-lg font-bold">WhatsApp Quick Chat</h3>
                <p className="text-sm opacity-80">Questions about giving? Chat now with immediate response</p>
                <Button variant="secondary" className="w-full">
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 backdrop-blur border-primary-foreground/20">
              <CardContent className="p-6 text-center space-y-4">
                <Phone className="h-12 w-12 mx-auto opacity-90" />
                <h3 className="text-lg font-bold">Speak with Our Team</h3>
                <p className="text-sm opacity-80">+234-806-544-0417</p>
                <Button variant="secondary" className="w-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 backdrop-blur border-primary-foreground/20">
              <CardContent className="p-6 text-center space-y-4">
                <Mail className="h-12 w-12 mx-auto opacity-90" />
                <h3 className="text-lg font-bold">Email Support</h3>
                <p className="text-sm opacity-80">giving@rcnmissions.org - We respond within hours</p>
                <Button variant="secondary" className="w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg">
              <ArrowRight className="mr-2 h-5 w-5" />
              Schedule 15-min Call
            </Button>
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
                Transforming lives through kingdom partnership and apostolic ministry worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Give</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>One-time Gift</div>
                <div>Monthly Partnership</div>
                <div>Legacy Giving</div>
                <div>Corporate Partnership</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Giving FAQ</div>
                <div>Tax Information</div>
                <div>Financial Reports</div>
                <div>Contact Giving Team</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Security</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>SSL Secured</span>
                </div>
                <div>PCI Compliant</div>
                <div>Bank-level Security</div>
                <div>Privacy Protected</div>
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

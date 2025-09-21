"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Heart, Globe, Users, Target, Award, CheckCircle, Quote, Star, MapPin, Phone, Mail, Calendar, Church, Cross, BookOpen, Shield, Zap, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"

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

export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

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

      {/* Mission & Vision Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To restore apostolic order for Christ's return through international missions, 
                    crusades, and ministry that transforms lives and communities across the globe.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To see every nation, tribe, and tongue reached with the Gospel of Jesus Christ, 
                    with thriving local churches and transformed communities as a testimony of God's power.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <Cross className="h-12 w-12 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold">Restoring Apostolic Order</h3>
                    <p className="text-muted-foreground">
                      Building the Kingdom of God through authentic apostolic ministry
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The foundational principles that guide everything we do in ministry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Love-Driven Ministry</h3>
                  <p className="text-muted-foreground">
                    Every action is motivated by the love of Christ and love for His people.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Integrity & Excellence</h3>
                  <p className="text-muted-foreground">
                    Maintaining the highest standards of integrity in all our operations and relationships.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Global Impact</h3>
                  <p className="text-muted-foreground">
                    Committed to reaching every corner of the world with the Gospel message.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Power & Miracles</h3>
                  <p className="text-muted-foreground">
                    Expecting and experiencing the supernatural power of God in all we do.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Community Building</h3>
                  <p className="text-muted-foreground">
                    Fostering strong, healthy communities of believers wherever we minister.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Biblical Foundation</h3>
                  <p className="text-muted-foreground">
                    All ministry is grounded in the unchanging truth of God's Word.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Impact by the Numbers</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                God's faithfulness demonstrated through measurable transformation
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard number="98,247" label="Lives Reached" />
              <StatCard number="47" label="Churches Planted" />
              <StatCard number="1,523" label="Healings Recorded" />
              <StatCard number="15" label="Nations Reached" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Journey</h2>
              <p className="text-lg text-muted-foreground">
                The story of how God called and established RCN Missions
              </p>
            </div>

            <div className="space-y-0">
              <TimelineItem
                year="2015"
                title="The Call"
                description="Apostle Arome Osayi received a clear mandate from God to restore apostolic order and reach the nations with the Gospel."
              />
              <TimelineItem
                year="2017"
                title="First International Crusade"
                description="Launched our first international crusade in Ghana, seeing thousands come to Christ and hundreds of miracles."
              />
              <TimelineItem
                year="2019"
                title="Expansion Across Africa"
                description="Extended ministry to Nigeria, Kenya, and South Africa, establishing local church partnerships and training programs."
              />
              <TimelineItem
                year="2021"
                title="Digital Ministry Launch"
                description="Launched online platforms to reach a global audience, making our ministry accessible worldwide."
              />
              <TimelineItem
                year="2023"
                title="Global Network Established"
                description="Formed strategic partnerships with churches and ministries across 15 nations, creating a global apostolic network."
              />
              <TimelineItem
                year="2024"
                title="New Horizons"
                description="Continuing to expand into new territories and developing comprehensive discipleship programs for new believers."
                isLast={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Leadership</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Godly leaders committed to advancing the Kingdom through apostolic ministry
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-primary-foreground">AO</span>
                    </div>
                    <h3 className="text-xl font-bold">Apostle Arome Osayi</h3>
                    <p className="text-sm text-muted-foreground">Founder & President</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm">
                    A passionate apostle with over 15 years of ministry experience, called to restore apostolic order and reach the nations.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-primary-foreground">JS</span>
                    </div>
                    <h3 className="text-xl font-bold">Pastor John Smith</h3>
                    <p className="text-sm text-muted-foreground">International Director</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm">
                    Oversees our international operations and coordinates with local church partners across different nations.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto">
                      <span className="text-2xl font-bold text-primary-foreground">MD</span>
                    </div>
                    <h3 className="text-xl font-bold">Dr. Mary Davis</h3>
                    <p className="text-sm text-muted-foreground">Ministry Development</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm">
                    Leads our discipleship programs and training initiatives for new believers and church leaders.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button asChild>
                <Link href="/leadership">
                  Meet Our Full Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonies Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">What People Are Saying</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Testimonies of transformation and God's faithfulness
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground italic">
                    "Through RCN Missions, I've seen God's power transform entire communities. 
                    The apostolic ministry is truly restoring order in the church."
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold">Pastor Michael Johnson</p>
                    <p className="text-sm text-muted-foreground">Ghana</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground italic">
                    "The discipleship program changed my life completely. I went from being a 
                    new believer to leading a small group in just one year."
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold">Sarah Williams</p>
                    <p className="text-sm text-muted-foreground">Nigeria</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground italic">
                    "I was healed of a terminal illness during one of their crusades. 
                    God's power is real, and RCN Missions brings it to the people."
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold">David Brown</p>
                    <p className="text-sm text-muted-foreground">Kenya</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Join Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of what God is doing through RCN Missions. Whether through prayer, 
              partnership, or participation, there's a place for you in this apostolic movement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/missions">
                  Explore Our Missions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

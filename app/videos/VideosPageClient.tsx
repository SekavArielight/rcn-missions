"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Play, Calendar, Eye, Filter, Download, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Footer from "@/components/Footer"

// Sample video data structure as specified in the requirements
const videoContent = [
  {
    id: 1,
    title: "The Apostolic Order",
    speaker: "Apostle Arome Osayi",
    category: "Teaching",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/video-apostolic-order-thumbnail.jpg",
    duration: "45:30",
    date: "2024-01-15",
    description: "Understanding God's apostolic order in the end times",
    views: "12.5K",
    featured: true,
  },
  {
    id: 2,
    title: "Preparing for Christ's Return",
    speaker: "Apostle Arome Osayi",
    category: "Crusade",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/video-preparing-christ-return-thumbnail.jpg",
    duration: "52:15",
    date: "2024-01-10",
    description: "Powerful crusade message on end-time preparation",
    views: "18.2K",
    featured: true,
  },
  {
    id: 3,
    title: "Healing Testimony - North East Nigeria",
    speaker: "Various Testimonies",
    category: "Testimony",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/video-healing-testimony-thumbnail.jpg",
    duration: "15:45",
    date: "2024-01-08",
    description: "Miraculous healing testimonies from our mission field",
    views: "8.7K",
    featured: false,
  },
  {
    id: 4,
    title: "The Power of Intercession",
    speaker: "Pastor Mrs. Osayi",
    category: "Teaching",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/video-power-intercession-thumbnail.jpg",
    duration: "38:20",
    date: "2024-01-05",
    description: "Deep teaching on the ministry of intercession",
    views: "9.3K",
    featured: false,
  },
  {
    id: 5,
    title: "Medical Relief Mission - Balm of Gilead",
    speaker: "Dr. Sarah Bello",
    category: "Mission",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/video-medical-relief-mission-thumbnail.jpg",
    duration: "25:10",
    date: "2024-01-03",
    description: "Highlights from our medical relief outreach program",
    views: "6.1K",
    featured: false,
  },
  {
    id: 6,
    title: "Youth Discipleship Conference",
    speaker: "Pastor Michael Tunde",
    category: "Conference",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "/video-youth-discipleship-thumbnail.jpg",
    duration: "41:55",
    date: "2023-12-28",
    description: "Empowering the next generation for kingdom service",
    views: "11.8K",
    featured: false,
  },
]

export default function VideosPageClient() {
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
              <Link href="/leadership" className="text-muted-foreground hover:text-foreground transition-colors">
                Leadership
              </Link>
              <Link href="/missions" className="text-muted-foreground hover:text-foreground transition-colors">
                Missions
              </Link>
              <Link href="/videos" className="text-foreground font-medium">
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
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
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
                  className="block px-3 py-2 text-base font-medium text-foreground bg-muted rounded-md"
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
              Video Library
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Sermons & <span className="text-primary">Ministry Content</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Access our complete library of teachings, crusade messages, testimonies, and ministry updates. Experience
              the apostolic anointing through powerful video content.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search sermons, testimonies, and content..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="teaching">Teaching</SelectItem>
                  <SelectItem value="crusade">Crusade</SelectItem>
                  <SelectItem value="testimony">Testimony</SelectItem>
                  <SelectItem value="mission">Mission</SelectItem>
                  <SelectItem value="conference">Conference</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Featured Messages</h2>
              <p className="text-xl text-muted-foreground">Latest and most impactful teachings from our ministry</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {videoContent
                .filter((video) => video.featured)
                .map((video) => (
                  <Card
                    key={video.id}
                    className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={video.thumbnail || "/placeholder.svg"}
                        alt={video.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                          <Play className="h-6 w-6 text-primary-foreground ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2 flex-1">
                          <Badge variant="outline" className="w-fit">
                            {video.category}
                          </Badge>
                          <CardTitle className="text-lg leading-tight">{video.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{video.speaker}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{video.description}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(video.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{video.views}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">Browse by Category</h2>
              <p className="text-xl text-muted-foreground">Explore our organized collection of ministry content</p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-6 lg:w-fit lg:grid-cols-6 mx-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="teaching">Teaching</TabsTrigger>
                <TabsTrigger value="crusade">Crusade</TabsTrigger>
                <TabsTrigger value="testimony">Testimony</TabsTrigger>
                <TabsTrigger value="mission">Mission</TabsTrigger>
                <TabsTrigger value="conference">Conference</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videoContent.map((video) => (
                    <Card
                      key={video.id}
                      className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center">
                            <Play className="h-5 w-5 text-primary-foreground ml-0.5" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          {video.duration}
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <Badge variant="outline" className="w-fit text-xs">
                          {video.category}
                        </Badge>
                        <CardTitle className="text-base leading-tight line-clamp-2">{video.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{video.speaker}</p>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(video.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span>{video.views}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {["teaching", "crusade", "testimony", "mission", "conference"].map((category) => (
                <TabsContent key={category} value={category} className="mt-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videoContent
                      .filter((video) => video.category.toLowerCase() === category)
                      .map((video) => (
                        <Card
                          key={video.id}
                          className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
                        >
                          <div className="relative aspect-video">
                            <Image
                              src={video.thumbnail || "/placeholder.svg"}
                              alt={video.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="w-12 h-12 bg-primary/90 rounded-full flex items-center justify-center">
                                <Play className="h-5 w-5 text-primary-foreground ml-0.5" />
                              </div>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                              {video.duration}
                            </div>
                          </div>
                          <CardHeader className="pb-2">
                            <Badge variant="outline" className="w-fit text-xs">
                              {video.category}
                            </Badge>
                            <CardTitle className="text-base leading-tight line-clamp-2">{video.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">{video.speaker}</p>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-3 w-3" />
                                <span>{new Date(video.date).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>{video.views}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Stay Updated with New Content</h2>
            <p className="text-xl opacity-90">
              Subscribe to our channel and never miss powerful teachings, testimonies, and ministry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Play className="mr-2 h-5 w-5" />
                Subscribe on YouTube
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Mobile App
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

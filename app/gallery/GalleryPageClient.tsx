"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Calendar, MapPin, Users, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"

const galleryCategories = [
  { id: "all", name: "All Photos", count: 150 },
  { id: "crusades", name: "Crusades", count: 45 },
  { id: "missions", name: "Mission Work", count: 35 },
  { id: "medical", name: "Medical Relief", count: 25 },
  { id: "events", name: "Events", count: 20 },
  { id: "leadership", name: "Leadership", count: 15 },
  { id: "testimonies", name: "Testimonies", count: 10 },
]

const galleryPhotos = [
  {
    id: 1,
    title: "Yola Crusade - Mass Salvation",
    category: "crusades",
    image: "/gallery-yola-crusade-mass-salvation.jpg",
    date: "2024-01-15",
    location: "Yola, Adamawa State",
    description: "Over 2,000 souls saved during the three-night crusade",
    featured: true,
  },
  {
    id: 2,
    title: "Medical Camp - Bassa Village",
    category: "medical",
    image: "/gallery-medical-camp-bassa-village.jpg",
    date: "2024-01-08",
    location: "Bassa Village, Plateau State",
    description: "Free healthcare provided to 500+ patients",
    featured: true,
  },
  {
    id: 3,
    title: "Apostle Arome Preaching",
    category: "leadership",
    image: "/gallery-apostle-arome-preaching.jpg",
    date: "2024-01-20",
    location: "Makurdi, Benue State",
    description: "Powerful teaching on apostolic order",
    featured: false,
  },
  {
    id: 4,
    title: "North East Mission Field",
    category: "missions",
    image: "/gallery-north-east-mission-field.jpg",
    date: "2024-01-12",
    location: "Borno State, Nigeria",
    description: "Reaching unreached communities in conflict zones",
    featured: false,
  },
  {
    id: 5,
    title: "Women's Empowerment Program",
    category: "events",
    image: "/gallery-women-empowerment-program.jpg",
    date: "2024-01-05",
    location: "Makurdi, Benue State",
    description: "Skills training and spiritual development for women",
    featured: false,
  },
  {
    id: 6,
    title: "Healing Testimony - Sister Grace",
    category: "testimonies",
    image: "/gallery-healing-testimony-sister-grace.jpg",
    date: "2024-01-18",
    location: "Lagos, Nigeria",
    description: "Miraculous healing from terminal illness",
    featured: true,
  },
]

export default function GalleryPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPhotos = galleryPhotos.filter((photo) => {
    const matchesCategory = selectedCategory === "all" || photo.category === selectedCategory
    const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photo.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="text-sm font-medium">
              Ministry Moments
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Photo <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Capturing God's miraculous work through our ministry across Nigeria, North America, and Africa
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {galleryCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="bg-transparent"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search photos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <Card key={photo.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={photo.image || "/placeholder.svg"}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {photo.featured && (
                    <Badge className="absolute top-3 left-3 bg-primary">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <CardContent className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg leading-tight">{photo.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{photo.description}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(photo.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{photo.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {galleryCategories.find(cat => cat.id === photo.category)?.name}
                    </Badge>
                    <Button size="sm" variant="outline" className="bg-transparent">
                      View Full Size
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No photos found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Share Your Testimony</h2>
            <p className="text-xl opacity-90">
              Have you been blessed through RCN Missions? We'd love to hear your story and share it with others.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8">
                <Heart className="mr-2 h-5 w-5" />
                Share Your Story
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Submit Photos
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

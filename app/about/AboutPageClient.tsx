"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
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

      <Footer />
    </div>
  )
}

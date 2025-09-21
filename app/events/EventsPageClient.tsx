"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"

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
]

export default function EventsPageClient() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <Footer />
    </div>
  )
}

import type { Metadata } from "next"
import EventsPageClient from "./EventsPageClient"

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
  return <EventsPageClient />
}

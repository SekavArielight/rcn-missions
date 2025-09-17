import type { Metadata } from "next"
import VideosPageClient from "./VideosPageClient"

export const metadata: Metadata = {
  title: "Sermons & Videos - Apostolic Teachings & Crusade Messages",
  description:
    "Watch powerful sermons, crusade messages, and testimonies from RCN Missions. Access our complete library of apostolic teachings by Apostle Arome Osayi.",
  keywords: [
    "apostolic sermons",
    "arome osayi sermons",
    "christian videos",
    "crusade messages",
    "apostolic teachings",
    "rcn missions videos",
  ],
  openGraph: {
    title: "Sermons & Videos - RCN Missions",
    description: "Watch powerful sermons and crusade messages from RCN Missions featuring Apostle Arome Osayi.",
    images: ["/og-videos-rcn-missions.jpg"],
  },
  alternates: {
    canonical: "https://rcnmissions.org/videos",
  },
}

export default function VideosPage() {
  return <VideosPageClient />
}

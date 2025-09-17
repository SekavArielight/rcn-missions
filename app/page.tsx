import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export const metadata: Metadata = {
  title: "RCN Missions - Remnant Christian Network | Apostolic Ministry Led by Apostle Arome Osayi",
  description:
    "International apostolic ministry restoring apostolic order for Christ's return. Led by Apostle Arome Osayi with global missions, crusades, medical relief, and discipleship programs across Nigeria, North America, and Africa.",
  keywords: [
    "rcn missions",
    "apostle arome osayi",
    "apostolic ministry",
    "remnant christian network",
    "christian missions nigeria",
    "apostolic order",
    "end times ministry",
  ],
  openGraph: {
    title: "RCN Missions - Apostolic Ministry for End Times",
    description:
      "Join the global apostolic movement restoring God's order for Christ's return. Led by Apostle Arome Osayi.",
    images: ["/og-image-rcn-missions.jpg"],
  },
  alternates: {
    canonical: "https://rcnmissions.org",
  },
}

export default function HomePage() {
  return <HomePageClient />
}

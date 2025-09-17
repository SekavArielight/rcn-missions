import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About RCN Missions - Apostolic Ministry Led by Apostle Arome Osayi | Remnant Christian Network",
  description:
    "Discover the heart behind RCN Missions' apostolic calling and global ministry. Learn about our vision to restore apostolic Christianity, our leadership team, and our impact across 25+ countries.",
  keywords: [
    "about rcn missions",
    "apostle arome osayi biography",
    "apostolic ministry history",
    "remnant christian network leadership",
    "christian missions nigeria",
    "apostolic restoration ministry",
  ],
  openGraph: {
    title: "About RCN Missions - Apostolic Ministry for End Times",
    description: "Discover the heart behind our apostolic calling and global ministry led by Apostle Arome Osayi.",
    images: ["/og-about-rcn-missions.jpg"],
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}

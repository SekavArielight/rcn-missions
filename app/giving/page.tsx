import type { Metadata } from "next"
import GivingPageClient from "./GivingPageClient"

export const metadata: Metadata = {
  title: "Give & Partner - Transform Lives Through Kingdom Investment | RCN Missions",
  description:
    "Join RCN Missions in transforming lives across nations through your kingdom partnership. See your giving multiply into eternal impact through missions, crusades, and ministry expansion.",
  keywords: [
    "rcn missions giving",
    "kingdom partnership",
    "missions donation",
    "apostolic ministry support",
    "christian giving",
    "ministry partnership",
    "transform lives donation",
  ],
  openGraph: {
    title: "Give & Partner - Transform Lives Through Kingdom Investment",
    description: "See your giving multiply into eternal impact across nations through RCN Missions.",
    images: ["/og-giving-rcn-missions.jpg"],
  },
}

export default function GivingPage() {
  return <GivingPageClient />
}

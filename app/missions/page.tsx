import type { Metadata } from "next"
import MissionsClientPage from "./MissionsClientPage"

export const metadata: Metadata = {
  title: "Global Missions & Ministry Projects - RCN Missions",
  description:
    "Support RCN Missions' global outreach projects including medical relief, church planting, and evangelism across Nigeria, North America, and Africa. Partner with us today.",
  keywords: [
    "christian missions",
    "nigeria missions",
    "medical relief",
    "church planting",
    "mission donations",
    "apostolic missions",
    "rcn missions projects",
    "global ministry",
  ],
  openGraph: {
    title: "Global Missions & Ministry Projects - RCN Missions",
    description:
      "Advancing God's kingdom through strategic missions, crusades, and humanitarian work across Africa and beyond.",
    images: ["/og-missions-rcn-missions.jpg"],
  },
}

export default function MissionsPage() {
  return <MissionsClientPage />
}

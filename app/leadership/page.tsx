import type { Metadata } from "next"
import LeadershipClientPage from "./LeadershipClientPage"

export const metadata: Metadata = {
  title: "Leadership - Apostle Arome Osayi & Ministry Team",
  description:
    "Meet the apostolic leadership of RCN Missions led by Apostle Arome Osayi. Learn about our ministry team, their calling, and their role in restoring apostolic order.",
  keywords: [
    "apostle arome osayi",
    "rcn missions leadership",
    "apostolic leaders",
    "ministry team",
    "christian leadership",
  ],
  openGraph: {
    title: "Leadership - RCN Missions",
    description:
      "Meet the apostolic leadership of RCN Missions led by Apostle Arome Osayi and his dedicated ministry team.",
    images: ["/og-leadership-rcn-missions.jpg"],
  },
  alternates: {
    canonical: "https://rcnmissions.org/leadership",
  },
}

export default function LeadershipPage() {
  return <LeadershipClientPage />
}

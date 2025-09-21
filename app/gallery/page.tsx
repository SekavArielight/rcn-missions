import type { Metadata } from "next"
import GalleryPageClient from "./GalleryPageClient"

export const metadata: Metadata = {
  title: "Photo Gallery - RCN Missions | Ministry Moments & Mission Work",
  description:
    "View photos from our ministry work, crusades, mission trips, and community outreach programs across Nigeria, North America, and Africa.",
  keywords: [
    "rcn missions gallery",
    "ministry photos",
    "mission work pictures",
    "crusade photos",
    "apostolic ministry images",
    "christian mission gallery",
  ],
  openGraph: {
    title: "Photo Gallery - RCN Missions Ministry Moments",
    description:
      "Explore photos from our apostolic ministry work, international missions, and community outreach programs.",
    images: ["/gallery-og-image.jpg"],
  },
  alternates: {
    canonical: "https://rcnmissions.org/gallery",
  },
}

export default function GalleryPage() {
  return <GalleryPageClient />
}

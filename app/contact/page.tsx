import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - Prayer Requests & Ministry Partnership",
  description:
    "Contact RCN Missions for prayer support, ministry partnership, or general inquiries. Submit prayer requests and connect with our apostolic ministry team.",
  keywords: [
    "contact rcn missions",
    "prayer requests",
    "ministry partnership",
    "apostolic ministry contact",
    "arome osayi contact",
  ],
  openGraph: {
    title: "Contact Us - RCN Missions",
    description:
      "Get in touch with RCN Missions for prayer support, partnership opportunities, and ministry inquiries.",
    images: ["/og-contact-rcn-missions.jpg"],
  },
  alternates: {
    canonical: "https://rcnmissions.org/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}

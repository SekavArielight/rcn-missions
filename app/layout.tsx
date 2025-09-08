import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://rcnmissions.org"),
  title: {
    default: "RCN Missions - Remnant Christian Network | Apostolic Ministry",
    template: "%s | RCN Missions",
  },
  description:
    "International apostolic ministry focused on restoring apostolic Christianity and preparing for Christ's return. Led by Apostle Arome Osayi. Join our global mission work, crusades, and discipleship programs.",
  generator: "Next.js",
  applicationName: "RCN Missions",
  referrer: "origin-when-cross-origin",
  keywords: [
    "apostolic missions",
    "christian ministry",
    "arome osayi",
    "remnant christian network",
    "missions",
    "evangelism",
    "apostolic order",
    "end times preparation",
    "crusades",
    "discipleship",
    "nigeria missions",
    "north america ministry",
    "medical relief",
    "church planting",
    "prayer ministry",
    "apostolic restoration",
  ],
  authors: [{ name: "RCN Missions" }, { name: "Apostle Arome Osayi", url: "https://rcnmissions.org/leadership" }],
  creator: "RCN Missions",
  publisher: "Remnant Christian Network Missions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Religion & Spirituality",
  classification: "Christian Ministry",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rcnmissions.org",
    siteName: "RCN Missions",
    title: "RCN Missions - Remnant Christian Network | Apostolic Ministry",
    description:
      "International apostolic ministry focused on restoring apostolic Christianity and preparing for Christ's return. Led by Apostle Arome Osayi.",
    images: [
      {
        url: "/og-image-rcn-missions.jpg",
        width: 1200,
        height: 630,
        alt: "RCN Missions - Apostolic Ministry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rcnmissions",
    creator: "@apostlearome",
    title: "RCN Missions - Remnant Christian Network",
    description:
      "International apostolic ministry restoring apostolic order for Christ's return. Join our global mission work.",
    images: ["/twitter-card-rcn-missions.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
  alternates: {
    canonical: "https://rcnmissions.org",
    languages: {
      "en-US": "https://rcnmissions.org",
      "en-GB": "https://rcnmissions.org/en-gb",
      fr: "https://rcnmissions.org/fr",
    },
  },
  other: {
    "msapplication-TileColor": "#be123c",
    "theme-color": "#be123c",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#be123c" />
        <meta name="msapplication-TileColor" content="#be123c" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RCN Missions" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Remnant Christian Network Missions",
              alternateName: "RCN Missions",
              url: "https://rcnmissions.org",
              logo: "https://rcnmissions.org/logo.png",
              description:
                "International apostolic ministry focused on restoring apostolic Christianity and preparing for Christ's return.",
              foundingDate: "2009",
              founder: {
                "@type": "Person",
                name: "Apostle Arome Osayi",
                jobTitle: "Senior Pastor & Founder",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Makurdi",
                addressRegion: "Benue State",
                addressCountry: "Nigeria",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+234-803-XXX-XXXX",
                contactType: "customer service",
                email: "info@rcnmissions.org",
              },
              sameAs: [
                "https://www.facebook.com/rcnmissions",
                "https://www.twitter.com/rcnmissions",
                "https://www.youtube.com/rcnmissions",
                "https://www.instagram.com/rcnmissions",
              ],
              areaServed: ["Nigeria", "North America", "Cameroon", "Chad", "Central African Republic"],
              knowsAbout: [
                "Apostolic Ministry",
                "Christian Missions",
                "Evangelism",
                "Church Planting",
                "Medical Relief",
                "Discipleship",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

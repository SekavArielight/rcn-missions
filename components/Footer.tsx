"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Heart, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Send,
  Clock,
  Users,
  Award,
  CheckCircle
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-muted via-muted/80 to-muted/60 border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground">RCN Missions</h3>
                <p className="text-sm text-muted-foreground">Remnant Christian Network</p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              Restoring apostolic order for Christ's return through international missions, 
              crusades, medical relief, and discipleship across Africa and beyond.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-lg font-bold text-primary">50+</div>
                <div className="text-xs text-muted-foreground">Mission Fields</div>
              </div>
              <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10">
                <div className="text-lg font-bold text-primary">100K+</div>
                <div className="text-xs text-muted-foreground">Lives Touched</div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Follow Our Journey</h4>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Ministry Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Ministry</h4>
            <div className="space-y-3">
              <Link 
                href="/about" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="flex items-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Our Mission
                </span>
              </Link>
              <Link 
                href="/leadership" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="flex items-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Apostolic Leadership
                </span>
              </Link>
              <Link 
                href="/missions" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="flex items-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Mission Fields
                </span>
              </Link>
              <Link 
                href="/videos" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="flex items-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Teaching Videos
                </span>
              </Link>
              <Link 
                href="/events" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="flex items-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Upcoming Events
                </span>
              </Link>
            </div>

            {/* Impact Highlights */}
            <div className="pt-4 border-t border-border">
              <h5 className="font-medium text-sm mb-3">Recent Impact</h5>
              <div className="space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span>2,000+ souls saved in Yola crusade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span>500+ patients treated in medical camp</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-primary" />
                  <span>15+ new churches planted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Resources & Support */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Resources</h4>
            <div className="space-y-3">
              <Link 
                href="/videos" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="flex items-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Sermon Library
                </span>
              </Link>
              <Link 
                href="/gallery" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="flex items-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Photo Gallery
                </span>
              </Link>
              <Link 
                href="/giving" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="flex items-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Give & Support
                </span>
              </Link>
              <Link 
                href="/contact" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="flex items-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Prayer Requests
                </span>
              </Link>
              <Link 
                href="/contact" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="flex items-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Partner With Us
                </span>
              </Link>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-border">
              <h5 className="font-medium text-sm mb-3">Quick Actions</h5>
              <div className="space-y-2">
                <Button size="sm" className="w-full text-xs">
                  <Heart className="h-3 w-3 mr-2" />
                  Request Prayer
                </Button>
                <Button variant="outline" size="sm" className="w-full text-xs bg-transparent">
                  <Users className="h-3 w-3 mr-2" />
                  Join Newsletter
                </Button>
              </div>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Stay Connected</h4>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <div className="text-sm">
                    <div className="font-medium">Nigeria Headquarters</div>
                    <div className="text-muted-foreground">Makurdi, Benue State</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">+234 (0) 803 XXX XXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">info@rcnmissions.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">Mon-Fri: 8AM-5PM WAT</span>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <Card className="bg-primary/5 border-primary/10">
              <CardContent className="p-4 space-y-3">
                <h5 className="font-medium text-sm">Get Ministry Updates</h5>
                <p className="text-xs text-muted-foreground">
                  Receive prayer requests, testimonies, and mission updates directly in your inbox.
                </p>
                <div className="space-y-2">
                  <Input 
                    placeholder="Enter your email" 
                    className="h-8 text-xs"
                  />
                  <Button size="sm" className="w-full text-xs">
                    <Send className="h-3 w-3 mr-2" />
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>

            {/* North America Office */}
            <div className="pt-4 border-t border-border">
              <h5 className="font-medium text-sm mb-2">North America Office</h5>
              <div className="text-xs text-muted-foreground space-y-1">
                <div>Houston, Texas, USA</div>
                <div>+1 (713) XXX-XXXX</div>
                <div>usa@rcnmissions.org</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>&copy; 2024 Remnant Christian Network Missions. All rights reserved.</p>
              <p className="mt-1">
                Restoring apostolic order for Christ's return • 
                <span className="text-primary font-medium"> Isaiah 60:22</span>
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

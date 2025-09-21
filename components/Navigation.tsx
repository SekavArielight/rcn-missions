"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Menu, 
  X, 
  Heart, 
  Users, 
  Globe, 
  Phone, 
  Mail, 
  ChevronDown,
  ArrowRight,
  Search,
  Bell
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavigationProps {
  className?: string
}

export default function Navigation({ className = "" }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { href: "/", label: "Home", icon: null },
    { href: "/about", label: "About", icon: null },
    { href: "/leadership", label: "Leadership", icon: null },
    { href: "/missions", label: "Missions", icon: null },
    { href: "/videos", label: "Videos", icon: null },
    { href: "/events", label: "Events", icon: null },
    { href: "/gallery", label: "Gallery", icon: null },
    { href: "/giving", label: "Give", icon: null },
    { href: "/contact", label: "Contact", icon: null },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-lg border-b border-border/50" 
        : "bg-background/90 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 border-b border-border"
    } ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-accent-foreground rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                RCN Missions
              </div>
              <div className="text-xs text-muted-foreground -mt-1">
                Remnant Christian Network
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
                {item.icon && (
                  <span className="ml-1 opacity-60 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-200">
              <Heart className="h-4 w-4 mr-2" />
              Prayer Request
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-200">
              <Users className="h-4 w-4 mr-2" />
              Partner With Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="p-2">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Bell className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-4 pb-6 space-y-2">
              {/* Mobile Navigation Links */}
              <div className="space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 group ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10 border border-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="flex items-center">
                      {item.icon && (
                        <span className="mr-3 opacity-60 group-hover:opacity-100 transition-opacity">
                          {item.icon}
                        </span>
                      )}
                      {item.label}
                    </span>
                    {isActive(item.href) && (
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    )}
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>

              {/* Mobile Action Buttons */}
              <div className="pt-4 border-t border-border space-y-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full bg-transparent hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-200"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Prayer Request
                </Button>
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Partner With Us
                </Button>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-border">
                <div className="text-sm text-muted-foreground space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+234 (0) 803 XXX XXXX</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>info@rcnmissions.org</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4" />
                    <span>Makurdi, Nigeria</span>
                  </div>
                </div>
              </div>

              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-border">
                <div className="text-sm font-medium text-foreground mb-3">Follow Us</div>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <span className="text-xs">f</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <span className="text-xs">t</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <span className="text-xs">i</span>
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                    <span className="text-xs">y</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

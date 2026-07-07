"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    {
      name: "Projects",
      path: "/projects",
      dropdown: [
        { name: "Residential", path: "/projects" },
        { name: "Commercial", path: "/projects" },
        { name: "Luxury Suites", path: "/projects" },
        { name: "All Projects", path: "/projects" },
      ],
    },
    {
      name: "Blog",
      path: "/blog",
      dropdown: [
        { name: "Latest News", path: "/blog" },
        { name: "Design Guide", path: "/blog" },
        { name: "Client Stories", path: "/blog" },
      ],
    },
    {
      name: "Pages",
      path: "#",
      dropdown: [
        { name: "About Us", path: "/about" },
        { name: "Gallery", path: "/gallery" },
        { name: "Shop", path: "/shop" },
      ],
    },
    { name: "Contact Us", path: "/contact" },
  ]

  return (
    <header
      className={cn(
        "w-full fixed top-0 left-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm py-4"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="text-xl font-bold tracking-tight text-gray-900 font-sans uppercase">
            Grow More
          </span>
          <span className="text-xl font-bold tracking-tight text-primary font-sans uppercase">
            Interior
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const hasDropdown = !!link.dropdown
            const isLinkActive = pathname === link.path

            return (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  href={link.path}
                  className={cn(
                    "flex items-center gap-1 text-sm font-semibold tracking-wide text-gray-800 hover:text-primary transition-colors py-2 font-sans",
                    isLinkActive && "text-primary"
                  )}
                >
                  {link.name}
                  {hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-200",
                        activeDropdown === link.name && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {hasDropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-50"
                      >
                        {link.dropdown?.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.path}
                            className="block px-5 py-2 text-xs font-semibold text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            )
          })}
        </nav>

        {/* Call Now & Get a Quote */}
        <div className="hidden md:flex items-center gap-6">
          {/* Phone Contact */}
          <a
            href="tel:+91123456789"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <Phone size={15} />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 font-sans">
                Call Us Now
              </span>
              <span className="text-sm font-bold text-primary font-sans">
                91+ (123) 456 789
              </span>
            </div>
          </a>

          {/* CTA Quote Button */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-primary rounded-full hover:bg-primary-dark transition-all duration-300 shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20"
          >
            Get a Quote!
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="p-2 text-gray-800 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-x-0 top-[73px] bg-white border-b border-gray-100 shadow-xl z-40 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col p-6 gap-5">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  {link.dropdown ? (
                    <>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-wider font-sans">
                        {link.name}
                      </div>
                      <div className="pl-4 flex flex-col gap-2 border-l border-gray-100">
                        {link.dropdown.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.path}
                            className="text-sm font-semibold text-gray-800 hover:text-primary py-1 font-sans"
                            onClick={toggleMenu}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.path}
                      className={cn(
                        "text-base font-bold text-gray-800 hover:text-primary py-1 font-sans",
                        pathname === link.path && "text-primary"
                      )}
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
                {/* Call Us Mobile */}
                <a
                  href="tel:+91123456789"
                  className="flex items-center gap-3 py-2"
                >
                  <Phone size={18} className="text-primary" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-semibold text-gray-500 font-sans">
                      Call Us Now
                    </span>
                    <span className="text-sm font-bold text-primary font-sans">
                      91+ (123) 456 789
                    </span>
                  </div>
                </a>

                {/* Get a Quote Mobile */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-primary rounded-full hover:bg-primary-dark transition-colors font-sans shadow-md"
                  onClick={toggleMenu}
                >
                  Get a Quote!
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar1

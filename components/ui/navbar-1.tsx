"use client" 

import * as React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, Info, Briefcase, Image as ImageIcon, ShoppingBag, Newspaper } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "../ThemeToggle"

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Info },
    { name: "Projects", path: "/projects", icon: Briefcase },
    { name: "Gallery", path: "/gallery", icon: ImageIcon },
    { name: "Shop", path: "/shop", icon: ShoppingBag },
    { name: "Blog", path: "/blog", icon: Newspaper },
  ];

  return (
    <div className="flex justify-center w-full py-6 px-4 fixed top-0 left-0 z-120">
      <div className={cn(
        "flex items-center justify-between px-6 py-2 bg-background/60 backdrop-blur-xl border border-border/20 rounded-full transition-all duration-500 w-full max-w-4xl relative z-110",
        isScrolled ? "shadow-2xl shadow-primary/5" : "shadow-none"
      )}>
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group mr-6">
            <motion.div 
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black font-serif italic text-lg border border-primary/20 transition-transform group-hover:scale-110"
              whileHover={{ rotate: 10 }}
            >
              G
            </motion.div>
            <span className="hidden sm:block text-lg font-serif font-normal tracking-[0.2em] text-foreground">
              GROWMORE
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link 
                href={link.path} 
                className={cn(
                  "text-xs tracking-widest transition-colors font-light",
                  pathname === link.path ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4 ml-6">
          <ThemeToggle />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2 text-[10px] uppercase tracking-widest text-black bg-primary rounded-full hover:bg-foreground hover:text-background transition-colors font-semibold shadow-lg shadow-primary/10"
            >
              Inquiry
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <motion.button className="flex items-center" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
            {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background/98 backdrop-blur-3xl z-100 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-8 right-10 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-8 w-8 text-foreground" />
            </motion.button>
            <div className="flex flex-col space-y-8 mt-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <Link 
                    href={link.path} 
                    className={cn(
                      "text-xl tracking-[0.2em] font-light flex items-center gap-4",
                      pathname === link.path ? "text-primary" : "text-foreground"
                    )} 
                    onClick={toggleMenu}
                  >
                    <link.icon size={24} className="text-primary" />
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-8 border-t border-border/20"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-5 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-black bg-primary rounded-full hover:bg-foreground hover:text-background transition-all shadow-xl shadow-primary/10"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar1;

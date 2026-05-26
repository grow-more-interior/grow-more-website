"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
}

interface NavBarProps {
  leftItems: NavItem[]
  rightItems: NavItem[]
  activeTab: string
  setActiveTab: (name: string) => void
  className?: string
  logo?: React.ReactNode
}

export function NavBar({ leftItems, rightItems, activeTab, setActiveTab, className, logo }: NavBarProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const renderItem = (item: NavItem) => {
    const isActive = activeTab === item.name

    return (
      <Link
        key={item.name}
        href={item.url}
        onClick={() => setActiveTab(item.name)}
        className={cn(
          "relative cursor-pointer text-sm font-light px-6 py-2 rounded-full transition-colors uppercase tracking-widest",
          "text-white/60 hover:text-(--color-primary)",
          isActive && "text-(--color-primary)",
        )}
      >
        <span>{item.name}</span>
        {isActive && (
          <motion.div
            layoutId="lamp"
            className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
            initial={false}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
              <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
              <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
              <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
            </div>
          </motion.div>
        )}
      </Link>
    )
  }

  return (
    <div
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50",
        className,
      )}
    >
      <div className="flex items-center gap-6 bg-black/40 border border-white/10 backdrop-blur-xl py-2 px-6 rounded-full shadow-2xl">
        <div className="hidden md:flex items-center gap-2">
          {leftItems.map(renderItem)}
        </div>
        
        {logo}

        <div className="hidden md:flex items-center gap-2">
          {rightItems.map(renderItem)}
        </div>
      </div>
    </div>
  )
}

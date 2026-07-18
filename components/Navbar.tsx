"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { collections } from "@/app/data/growmore";

// Design structure matching interior services
const glazedVitrified = [
  { name: "Modern Minimalist", href: "/collection/modern-minimalist" },
  { name: "Neo-Classical", href: "/collection/neo-classical" },
  { name: "Scandinavian Cozy", href: "/collection/scandinavian-cozy" },
];

const fullBodyOutdoor = [
  { name: "Corporate Excellence", href: "/collection/corporate-excellence" },
  { name: "Retail Luxe", href: "/collection/retail-luxe" },
  { name: "Industrial Loft", href: "/collection/industrial-loft" },
];

const shopBySpace = [
  { name: "Living Room", href: "/products?room=Living%20Room" },
  { name: "Bedroom", href: "/products?room=Bedroom" },
  { name: "Kitchen", href: "/products?room=Kitchen" },
  { name: "Bathroom", href: "/products?room=Bathroom" },
  { name: "Corporate Office", href: "/products?room=Corporate%20Office" },
];

const shopByLook = [
  { name: "Minimalist", href: "/products?look=Minimalist" },
  { name: "Classical Luxury", href: "/products?look=Classical%20Luxury" },
  { name: "Scandinavian", href: "/products?look=Scandinavian" },
  { name: "Industrial", href: "/products?look=Industrial" },
  { name: "Art Deco", href: "/products?look=Art%20Deco" },
  { name: "Japandi", href: "/products?look=Japandi" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isAuthDropdownOpen, setIsAuthDropdownOpen] = useState(false);

  // Desktop search states
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Mobile search states
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");
  const [mobileSearchResults, setMobileSearchResults] = useState<any[]>([]);
  const [isMobileSearching, setIsMobileSearching] = useState(false);

  // Filter search results client-side
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const delayDebounceFn = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = collections.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query) || 
        (item.tag && item.tag.toLowerCase().includes(query))
      ).map(item => ({
        id: item.slug,
        slug: item.slug,
        name: item.name,
        collection: { name: item.category },
        size: item.size,
        image: { url: item.image }
      }));
      setSearchResults(results);
      setIsSearching(false);
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  // Filter mobile search results client-side
  useEffect(() => {
    if (!mobileSearchQuery.trim()) {
      setMobileSearchResults([]);
      return;
    }

    setIsMobileSearching(true);
    const delayDebounceFn = setTimeout(() => {
      const query = mobileSearchQuery.toLowerCase();
      const results = collections.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.category.toLowerCase().includes(query) || 
        (item.tag && item.tag.toLowerCase().includes(query))
      ).map(item => ({
        id: item.slug,
        slug: item.slug,
        name: item.name,
        collection: { name: item.category },
        size: item.size,
        image: { url: item.image }
      }));
      setMobileSearchResults(results);
      setIsMobileSearching(false);
    }, 200);

    return () => clearTimeout(delayDebounceFn);
  }, [mobileSearchQuery]);

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Monitor scroll for premium compact sticky effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileDrawerOpen]);

  // Close auth dropdown on click outside
  useEffect(() => {
    if (!isAuthDropdownOpen) return;
    const closeDropdown = () => setIsAuthDropdownOpen(false);
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, [isAuthDropdownOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const closeDrawer = () => setIsMobileDrawerOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Decker: Branding, Main Navigation, Search, Auth */}
      <div
        className={`w-full bg-[#f8f9fa] border-b border-gray-200 transition-all duration-300 relative z-30 ${isScrolled ? "py-2 sm:py-3 shadow-md bg-white/95 backdrop-blur-md" : "py-4 sm:py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 xl:px-4">
          <div className="flex items-center justify-between gap-x-4 xl:gap-x-8">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center transition-transform hover:scale-[1.02]">
              <img
                src="/logo.png"
                alt="Grow More Interior"
                className="h-9 sm:h-11 md:h-12 object-contain transition-all"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center lg:space-x-3 xl:space-x-6 flex-nowrap lg:ml-6 xl:ml-12">
              <Link
                href="/"
                className={`whitespace-nowrap text-[13px] xl:text-[15px] font-semibold tracking-wide transition-all duration-200 relative py-2 ${isActive("/") ? "text-[#C9A84C]" : "text-gray-800 hover:text-[#C9A84C]"
                  }`}
              >
                Home
              </Link>
              <Link
                href="/dashain"
                className={`whitespace-nowrap text-[13px] xl:text-[15px] font-bold tracking-wide transition-all duration-200 relative py-2 flex items-center gap-1.5 ${isActive("/dashain") ? "text-red-600" : "text-red-500 hover:text-red-600"
                  }`}
              >
                Dashain Offer
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              </Link>
              <Link
                href="/about"
                className={`whitespace-nowrap text-[13px] xl:text-[15px] font-semibold tracking-wide transition-all duration-200 relative py-2 ${isActive("/about") ? "text-[#C9A84C]" : "text-gray-800 hover:text-[#C9A84C]"
                  }`}
              >
                About Us
              </Link>

              {/* Desktop Mega Menu Trigger */}
              <div
                className="relative py-2"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <button
                  className={`whitespace-nowrap flex items-center gap-1 text-[13px] xl:text-[15px] font-semibold tracking-wide transition-all duration-200 outline-none ${isActive("/products") || isActive("/collection") ? "text-[#C9A84C]" : "text-gray-800 hover:text-[#C9A84C]"
                    }`}
                >
                  Our Products
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${isMegaMenuOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Desktop Mega Menu Panel */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[800px] bg-white border border-gray-100 shadow-2xl rounded-xl p-8 z-50 transition-all duration-300 grid grid-cols-4 gap-6 origin-top ${isMegaMenuOpen
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                    }`}
                >
                  {/* Col 1: Residential Design */}
                  <div>
                    <h5 className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-4">Residential</h5>
                    <div className="flex flex-col space-y-2.5">
                      {glazedVitrified.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-[14px] font-medium text-gray-700 hover:text-[#C9A84C] transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Col 2: Commercial Design */}
                  <div>
                    <h5 className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-4">Commercial</h5>
                    <div className="flex flex-col space-y-2.5">
                      {fullBodyOutdoor.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-[14px] font-medium text-gray-700 hover:text-[#C9A84C] transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Col 3: Bespoke Space */}
                  <div>
                    <h5 className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-4">Bespoke Space</h5>
                    <div className="flex flex-col space-y-2.5">
                      {shopBySpace.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-[14px] font-medium text-gray-700 hover:text-[#C9A84C] transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Col 4: Design Style */}
                  <div>
                    <h5 className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-4">Design Style</h5>
                    <div className="flex flex-col space-y-2.5">
                      {shopByLook.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-[14px] font-medium text-gray-700 hover:text-[#C9A84C] transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/dealers"
                className={`whitespace-nowrap text-[13px] xl:text-[15px] font-semibold tracking-wide transition-all duration-200 relative py-2 ${isActive("/dealers") ? "text-[#C9A84C]" : "text-gray-800 hover:text-[#C9A84C]"
                  }`}
              >
                Dealer Locator
              </Link>
              <Link
                href="/news"
                className={`whitespace-nowrap text-[13px] xl:text-[15px] font-semibold tracking-wide transition-all duration-200 relative py-2 ${isActive("/news") ? "text-[#C9A84C]" : "text-gray-800 hover:text-[#C9A84C]"
                  }`}
              >
                News &amp; Updates
              </Link>
              <Link
                href="/certifications"
                className={`whitespace-nowrap text-[13px] xl:text-[15px] font-semibold tracking-wide transition-all duration-200 relative py-2 ${isActive("/certifications") ? "text-[#C9A84C]" : "text-gray-800 hover:text-[#C9A84C]"
                  }`}
              >
                Certifications
              </Link>
              <Link
                href="/contact"
                className={`whitespace-nowrap text-[13px] xl:text-[15px] font-semibold tracking-wide transition-all duration-200 relative py-2 ${isActive("/contact") ? "text-[#C9A84C]" : "text-gray-800 hover:text-[#C9A84C]"
                  }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Desktop Action Items */}
            <div className="hidden lg:flex items-center lg:space-x-3 xl:space-x-5 flex-shrink-0">
              {/* Search Bar */}
              <div ref={searchContainerRef} className="relative lg:w-48 xl:w-60">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4-4" />
                  </svg>
                </span>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchDropdownOpen(true);
                  }}
                  onFocus={() => setIsSearchDropdownOpen(true)}
                  placeholder="Search collections..."
                  className="w-full pl-9 pr-4 py-1.5 bg-[#f0f2f5] border border-transparent rounded-full focus:outline-none focus:border-[#C9A84C]/40 focus:bg-white text-[13px] text-gray-700 transition-all duration-200"
                />

                {/* Dropdown Results */}
                {isSearchDropdownOpen && searchQuery.trim() && (
                  <div className="absolute right-0 top-full mt-2 w-[350px] bg-white border border-gray-150 shadow-2xl rounded-xl overflow-hidden z-50 py-2">
                    {isSearching ? (
                      <div className="p-4 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-[#C9A84C]" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Searching...
                      </div>
                    ) : searchResults.length > 0 ? (
                      <div className="max-h-80 overflow-y-auto divide-y divide-gray-100">
                        {searchResults.map((product) => (
                          <Link
                            key={product.id}
                            href={`/collection/${product.slug}`}
                            onClick={() => setIsSearchDropdownOpen(false)}
                            className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors"
                          >
                            <img
                              src={product.image?.url || "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=80&h=80&q=80"}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded border border-gray-100 flex-shrink-0"
                            />
                            <div className="min-w-0 flex-1 text-left">
                              <h4 className="text-[13px] font-bold text-gray-800 truncate">{product.name}</h4>
                              <p className="text-[11px] text-[#C9A84C] font-semibold uppercase tracking-wider">{product.collection?.name}</p>
                              {product.size && <p className="text-[10px] text-gray-500 font-medium">{product.size}</p>}
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-xs text-gray-500">
                        No collections found matching "{searchQuery}"
                      </div>
                    )}
                  </div>
                )}
              </div>


            </div>

            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setIsMobileDrawerOpen(true)}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 rounded-md hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Open menu"
            >
              <span className="w-6 h-0.5 bg-gray-800 mb-1.5 transition-all"></span>
              <span className="w-6 h-0.5 bg-gray-800 mb-1.5 transition-all"></span>
              <span className="w-6 h-0.5 bg-gray-800 transition-all"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Decker (Navy Row): Categories & Catalogues Download (Desktop Only) */}
      <div className="hidden lg:block bg-[#1a1614] text-white select-none relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 xl:px-4">
          <div className="flex items-center justify-between h-11">
            {/* Category Navigation */}
            <nav className="flex items-center space-x-2 xl:space-x-4 flex-nowrap flex-1">
                <Link className="whitespace-nowrap text-[9.5px] xl:text-[11.5px] font-semibold tracking-wider hover:text-[#C9A84C] transition-colors" href="/products">All Designs</Link>
                <Link className="whitespace-nowrap text-[9.5px] xl:text-[11.5px] font-semibold tracking-wider hover:text-[#C9A84C] transition-colors" href="/products?room=Living%20Room">Living Room</Link>
                <Link className="whitespace-nowrap text-[9.5px] xl:text-[11.5px] font-semibold tracking-wider hover:text-[#C9A84C] transition-colors" href="/products?room=Bedroom">Bedroom</Link>
                <Link className="whitespace-nowrap text-[9.5px] xl:text-[11.5px] font-semibold tracking-wider hover:text-[#C9A84C] transition-colors" href="/products?room=Kitchen">Kitchen</Link>
                <Link className="whitespace-nowrap text-[9.5px] xl:text-[11.5px] font-semibold tracking-wider hover:text-[#C9A84C] transition-colors" href="/products?room=Bathroom">Bathroom</Link>
                <Link className="whitespace-nowrap text-[9.5px] xl:text-[11.5px] font-semibold tracking-wider hover:text-[#C9A84C] transition-colors" href="/products?room=Dining%20Room">Dining Room</Link>
                <Link className="whitespace-nowrap text-[9.5px] xl:text-[11.5px] font-semibold tracking-wider hover:text-[#C9A84C] transition-colors" href="/products?room=Corporate%20Office">Corporate Office</Link>
                <Link className="whitespace-nowrap text-[9.5px] xl:text-[11.5px] font-semibold tracking-wider hover:text-[#C9A84C] transition-colors" href="/products?room=Retail%20Space">Retail Space</Link>
                <Link className="whitespace-nowrap text-[9.5px] xl:text-[11.5px] font-semibold tracking-wider hover:text-[#C9A84C] transition-colors" href="/products?room=Hospitality">Hospitality</Link>
                <Link className="whitespace-nowrap text-[9.5px] xl:text-[11.5px] font-semibold tracking-wider hover:text-[#C9A84C] transition-colors" href="/products?room=Outdoor%20Terrace">Outdoor Terrace</Link>
                <Link className="whitespace-nowrap text-[9.5px] xl:text-[11.5px] font-semibold tracking-wider hover:text-[#C9A84C] transition-colors" href="/products?room=Custom%20Staircase">Custom Staircase</Link>
            </nav>

            {/* Careers Link */}
            <Link
              href="/careers"
              className="bg-[#C9A84C] hover:bg-[#a8893c] text-white transition-all duration-300 px-6 h-full flex items-center justify-center text-[11px] xl:text-[12px] font-bold tracking-widest flex-shrink-0"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Drawer Scrim & Panel) */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${isMobileDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Scrim Overlay */}
        <div
          onClick={closeDrawer}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Drawer Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[290px] sm:w-[340px] bg-white shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out origin-right ${isMobileDrawerOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Drawer Header */}
          <div className="p-4 flex items-center justify-between border-b border-gray-100">
            <Link href="/" onClick={closeDrawer}>
              <img
                src="/logo.png"
                alt="Grow More Interior"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <button
              onClick={closeDrawer}
              className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 focus:outline-none"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {/* Search */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4-4" />
                </svg>
              </span>
              <input
                type="search"
                value={mobileSearchQuery}
                onChange={(e) => setMobileSearchQuery(e.target.value)}
                placeholder="Search collections..."
                className="w-full pl-9 pr-4 py-2 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:border-[#C9A84C]/40 focus:bg-white text-sm"
              />

              {/* Mobile Search Results */}
              {mobileSearchQuery.trim() && (
                <div className="mt-2 bg-white border border-gray-150 rounded-xl overflow-hidden shadow-sm">
                  {isMobileSearching ? (
                    <div className="p-4 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-[#C9A84C]" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Searching...
                    </div>
                  ) : mobileSearchResults.length > 0 ? (
                    <div className="max-h-60 overflow-y-auto divide-y divide-gray-100">
                      {mobileSearchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/collection/${product.slug}`}
                          onClick={() => {
                            setMobileSearchQuery("");
                            closeDrawer();
                          }}
                          className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors"
                        >
                          <img
                            src={product.image?.url || "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=80&h=80&q=80"}
                            alt={product.name}
                            className="w-10 h-10 object-cover rounded border border-gray-100 flex-shrink-0"
                          />
                          <div className="min-w-0 flex-1 text-left">
                            <h4 className="text-xs font-bold text-gray-800 truncate">{product.name}</h4>
                            <p className="text-[10px] text-[#C9A84C] font-semibold uppercase tracking-wider">{product.collection?.name}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-xs text-gray-500">
                      No products found
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={closeDrawer}
                className={`text-base font-semibold transition-colors ${isActive("/") ? "text-[#C9A84C]" : "text-gray-800"
                  }`}
              >
                Home
              </Link>
              <Link
                href="/dashain"
                onClick={closeDrawer}
                className={`text-base font-bold transition-colors flex items-center gap-1.5 ${isActive("/dashain") ? "text-red-600" : "text-red-500 hover:text-red-600"
                  }`}
              >
                Dashain Offer
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              </Link>
              <Link
                href="/about"
                onClick={closeDrawer}
                className={`text-base font-semibold transition-colors ${isActive("/about") ? "text-[#C9A84C]" : "text-gray-800"
                  }`}
              >
                About Us
              </Link>

              {/* Products Accordion on Mobile */}
              <div>
                <button
                  onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                  className="w-full flex items-center justify-between text-base font-semibold text-gray-800 focus:outline-none"
                >
                  Our Products
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isMobileProductsOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Collapsible Submenu */}
                <div
                  className={`mt-2 pl-4 border-l border-gray-200 transition-all duration-300 overflow-hidden space-y-2.5 ${isMobileProductsOpen ? "max-h-[500px] opacity-100 py-1" : "max-h-0 opacity-0"
                    }`}
                >
                  {/* Subhead: Services */}
                  <div>
                    <h6 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Services</h6>
                    <div className="flex flex-col space-y-1.5 pl-1">
                      {glazedVitrified.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeDrawer}
                          className="text-sm font-medium text-gray-700 hover:text-[#C9A84C] transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                      {fullBodyOutdoor.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeDrawer}
                          className="text-sm font-medium text-gray-700 hover:text-[#C9A84C] transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Subhead: Spaces */}
                  <div className="pt-1">
                    <h6 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Design by Space</h6>
                    <div className="flex flex-col space-y-1.5 pl-1">
                      {shopBySpace.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeDrawer}
                          className="text-sm font-medium text-gray-700 hover:text-[#C9A84C] transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/dealers"
                onClick={closeDrawer}
                className={`text-base font-semibold transition-colors ${isActive("/dealers") ? "text-[#C9A84C]" : "text-gray-800"
                  }`}
              >
                Dealer Locator
              </Link>
              <Link
                href="/news"
                onClick={closeDrawer}
                className={`text-base font-semibold transition-colors ${isActive("/news") ? "text-[#C9A84C]" : "text-gray-800"
                  }`}
              >
                News &amp; Updates
              </Link>
              <Link
                href="/certifications"
                onClick={closeDrawer}
                className={`text-base font-semibold transition-colors ${isActive("/certifications") ? "text-[#C9A84C]" : "text-gray-800"
                  }`}
              >
                Certifications
              </Link>
              <Link
                href="/contact"
                onClick={closeDrawer}
                className={`text-base font-semibold transition-colors ${isActive("/contact") ? "text-[#C9A84C]" : "text-gray-800"
                  }`}
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Drawer Footer */}
          <div className="p-5 border-t border-gray-100 bg-[#f8f9fa] space-y-4">


            {/* Careers Link */}
            <Link
              href="/careers"
              onClick={closeDrawer}
              className="w-full py-3 bg-[#1a1614] hover:bg-black text-white rounded-lg flex items-center justify-center text-xs font-bold uppercase tracking-widest transition-all duration-300"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

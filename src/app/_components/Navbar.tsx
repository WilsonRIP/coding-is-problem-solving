'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { usePathname } from 'next/navigation'
import { IoMenu, IoClose } from 'react-icons/io5' // Using react-icons for menu/close icons

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // Ref to the mobile menu div for measuring height (though max-h-screen is simpler)
  // const mobileMenuRef = useRef<HTMLDivElement>(null);
  // State to control the animation class, initially set to closed
  const [mobileMenuAnimation, setMobileMenuAnimation] = useState('closed') // 'opening', 'open', 'closing', 'closed'

  const navLinks = [
    { href: '/problems', label: 'Problems' },
    { href: '/lessons', label: 'Lessons' },
    { href: '/about', label: 'About' },
  ]

  // Effect to manage animation state based on isMobileMenuOpen
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Trigger opening animation
      setMobileMenuAnimation('opening')
      // After a short delay (matching transition duration), set to 'open'
      const timer = setTimeout(() => {
        setMobileMenuAnimation('open')
      }, 300) // Match this duration to your transition duration
      return () => clearTimeout(timer)
    } else {
      // Trigger closing animation if it was previously open
      if (mobileMenuAnimation === 'open' || mobileMenuAnimation === 'opening') {
        setMobileMenuAnimation('closing')
      }
      // The 'closed' state will be set by the transition end listener or inferred from max-h-0
    }
  }, [isMobileMenuOpen, mobileMenuAnimation])

  // Handle transition end to set the state to 'closed' after closing animation
  const handleTransitionEnd = () => {
    if (!isMobileMenuOpen) {
      setMobileMenuAnimation('closed')
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close mobile menu on link click
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  // Determine mobile menu classes based on animation state
  const mobileMenuClasses = `
    bg-background/90 fixed inset-x-0 top-14 z-40 shadow-lg backdrop-blur-md sm:hidden
    overflow-hidden transition-all ease-in-out duration-300
    ${
      mobileMenuAnimation === 'opening' || mobileMenuAnimation === 'open'
        ? 'opacity-100 max-h-screen' // Open state
        : 'opacity-0 max-h-0 pointer-events-none' // Closed state
    }
  `
  // We use max-h-screen and max-h-0 to animate height dynamically.
  // pointer-events-none prevents interaction when hidden.

  return (
    <nav className="bg-background/80 fixed top-0 right-0 left-0 z-50 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-foreground hover:text-primary text-xl font-bold transition-colors duration-200"
          onClick={handleLinkClick} // Close menu if logo is clicked while menu is open
        >
          Coding is Problem Solving
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center space-x-6 sm:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative transition-colors duration-200 ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                } `}
              >
                {link.label}
                {/* Active link indicator / Hover effect */}
                <span
                  className={`bg-primary absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-in-out ${isActive ? 'w-full' : 'w-0 group-hover:w-full'} `}
                ></span>
              </Link>
            )
          })}
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center sm:hidden">
          <ThemeToggle />{' '}
          {/* Place toggle here for mobile view next to menu button */}
          <button
            onClick={toggleMobileMenu}
            className="text-foreground focus:ring-primary ml-4 transition-transform duration-200 focus:ring-2 focus:outline-none"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <IoClose className="h-6 w-6 rotate-0 transform transition-transform duration-200" />
            ) : (
              <IoMenu className="h-6 w-6 rotate-0 transform transition-transform duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {/* Render the mobile menu div always, and control visibility/animation via classes */}
      <div
        className={mobileMenuClasses}
        onTransitionEnd={handleTransitionEnd} // Listen for the end of the transition
      >
        <div className="flex flex-col items-center space-y-6 px-4 py-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`w-full rounded-md py-2 text-center text-lg font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:text-primary hover:bg-muted'
                } `}
                onClick={handleLinkClick} // Close menu on link click
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

'use client'

import React, { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid' // Using heroicons for icons

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null)

  // Effect to set initial theme from localStorage or system preference AND apply class
  useEffect(() => {
    let initialTheme = 'light' // Default assumption
    const storedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    if (storedTheme) {
      initialTheme = storedTheme
    } else if (systemPrefersDark) {
      initialTheme = 'dark'
    }

    setTheme(initialTheme)

    // Apply the initial class directly here
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, []) // Runs only once on mount

  // Effect to apply theme class to HTML tag and update localStorage when theme state changes *after* initial load
  useEffect(() => {
    // Prevent running on initial mount when theme is null
    if (theme === null) return

    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme]) // Runs when theme state changes

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  // Avoid rendering the button until the theme is determined to prevent flash of wrong icon
  if (theme === null) {
    return null
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      ) : (
        <SunIcon className="h-5 w-5 text-yellow-500" />
      )}
    </button>
  )
}

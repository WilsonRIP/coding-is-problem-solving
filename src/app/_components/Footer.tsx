import React from 'react'
import Image from 'next/image' // Keep if you use Image elsewhere, otherwise can remove
import { websiteName } from '~/data/types'

export const Footer = () => {
  // You can adjust the opacity value here (0.0 is fully transparent, 1.0 is fully opaque)
  const backgroundImageOpacity = 0.2 // Reduced opacity from 0.5 to 0.2

  return (
    <footer
      className="relative border-t border-gray-200 bg-gray-100 py-6 text-center text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
      // Removed background image styles from the footer itself
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0" // Position absolutely to cover the footer
        style={{
          backgroundImage: 'url("/black-sand.jpg")', // Corrected path to reference public directory
          backgroundSize: 'cover', // Ensures the image covers the entire element
          backgroundPosition: 'center', // Centers the background image
          backgroundRepeat: 'no-repeat', // Prevents the image from repeating
          opacity: backgroundImageOpacity, // Apply opacity to the background layer only
          zIndex: 0, // Ensure the background is behind the content
        }}
      ></div>

      {/* Content Layer */}
      {/* Added relative positioning and z-index to ensure content is above the background */}
      <div className="relative z-10 container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} {websiteName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

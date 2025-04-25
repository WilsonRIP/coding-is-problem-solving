'use client'

import React from 'react'
import { motion } from 'framer-motion' // Import motion component
import { FaCode, FaLightbulb, FaUsers } from 'react-icons/fa' // Example icons
import Link from 'next/link'

// Define animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

// Define staggered animation container
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2, // Delay between animating children
    },
  },
}

export default function AboutPage() {
  return (
    <motion.div // Wrap the entire page content for initial fade-in
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      className="container mx-auto px-4 py-12 sm:py-16" // Increased vertical padding
    >
      <motion.h1 // Animate the heading
        variants={fadeInUp} // Use the same variant
        className="text-foreground mb-8 text-center text-4xl font-extrabold sm:text-5xl" // Use theme text color, larger on mobile/sm
      >
        About Coding is Problem Solving
      </motion.h1>

      <motion.section // Wrap the main content section
        variants={containerVariants} // Use the container variant for staggered children
        initial="initial"
        whileInView="animate" // Animate when it comes into view
        viewport={{ once: true, amount: 0.2 }} // Animate once, when 20% is visible
        className="mx-auto max-w-3xl space-y-8" // Add vertical space between content blocks
      >
        {/* Mission Section */}
        <motion.div variants={fadeInUp}>
          <div className="text-primary mb-4 flex items-center space-x-3">
            <FaLightbulb className="h-8 w-8" />
            <h2 className="text-foreground text-2xl font-bold">Our Mission</h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Welcome to "Coding is Problem Solving"! Our mission is to teach
            programming not just as a technical skill, but as a powerful tool
            for thinking and solving real-world challenges. We aim to empower
            learners to approach problems methodically and creatively through
            code.
          </p>
        </motion.div>

        {/* Approach Section */}
        <motion.div variants={fadeInUp}>
          <div className="text-primary mb-4 flex items-center space-x-3">
            <FaCode className="h-8 w-8" />
            <h2 className="text-foreground text-2xl font-bold">Our Approach</h2>
          </div>
          <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
            We believe that the best way to learn coding is by doing. Instead of
            just reading theory, you'll dive head-first into carefully curated
            problems designed to build your understanding step-by-step. From
            basic arithmetic to more complex algorithms, each challenge
            reinforces key concepts and develops your problem-solving intuition.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our approach focuses on breaking down complex problems into
            manageable steps, helping you build not just code, but critical
            thinking skills that are valuable in any field.
          </p>
        </motion.div>

        {/* Audience Section (Derived from existing text) */}
        <motion.div variants={fadeInUp}>
          <div className="text-primary mb-4 flex items-center space-x-3">
            <FaUsers className="h-8 w-8" />
            <h2 className="text-foreground text-2xl font-bold">
              Who is it for?
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether you're a complete beginner taking your first steps into the
            world of code or looking to solidify your foundational knowledge and
            sharpen your problem-solving skills, we provide the resources and
            challenges to help you grow as a programmer and a problem solver.
          </p>
        </motion.div>

        {/* You could add more sections here like "Our Team", "Contact Info", etc. */}
      </motion.section>

      {/* Optional: Add a subtle call to action section */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-12 text-center"
      >
        <p className="text-foreground mb-6 text-xl font-semibold">
          Ready to start solving problems?
        </p>
        <Link
          href="/problems"
          className="text-primary-foreground bg-primary hover:bg-primary/90 focus:ring-primary inline-flex items-center rounded-md border border-transparent px-8 py-3 text-base font-medium shadow-sm transition-colors duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none"
        >
          Explore Problems
        </Link>
      </motion.div>
    </motion.div>
  )
}

'use client'

import React from 'react'
import { motion } from 'framer-motion' // Import motion component
import { LessonCard } from '~/app/_components/LessonCard' // Assuming LessonCard is styled appropriately

// Placeholder lesson data - replace with actual data later (e.g., from API/DB)
const lessons = [
  {
    title: 'Understanding Variables',
    description:
      'Learn the fundamentals of storing and using data in programming.',
    slug: 'understanding-variables',
    tags: ['Beginner', 'Core Concepts'],
  },
  {
    title: 'Conditional Logic (If/Else)',
    description: 'Master how to make decisions and control program flow.',
    slug: 'conditional-logic',
    tags: ['Beginner', 'Control Flow'],
  },
  {
    title: 'Introduction to Loops',
    description: 'Repeat actions efficiently and process collections of data.',
    slug: 'introduction-to-loops',
    tags: ['Beginner', 'Control Flow', 'Repetition'],
  },
  {
    title: 'Working with Arrays',
    description: 'Organize and manipulate lists of items.',
    slug: 'working-with-arrays',
    tags: ['Beginner', 'Data Structures'],
  },
  {
    title: 'Functions: Building Blocks',
    description: 'Write reusable blocks of code for better organization.',
    slug: 'functions-building-blocks',
    tags: ['Beginner', 'Core Concepts'],
  },
  {
    title: 'Basic Input and Output',
    description: 'Interact with the user and display information.',
    slug: 'basic-input-output',
    tags: ['Beginner', 'Core Concepts'],
  },
]

// Define animation variants for fade-in and slight slide-up
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

// Define staggered animation container for the grid
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1, // Adjust delay between card animations
      delayChildren: 0.2, // Optional: Delay the start of the staggered animation
    },
  },
}

export default function LessonsPage() {
  return (
    <motion.div // Wrap the entire page content for potential initial animation
      initial="initial"
      animate="animate"
      variants={fadeInUp} // Apply initial fade-in to the whole page wrapper
      className="container mx-auto px-4 py-8 sm:py-12" // Add padding and center container
    >
      {/* Page Title and Description Section */}
      <div className="mb-8 text-center md:mb-12">
        {' '}
        {/* Centered text block */}
        <motion.h1 // Animate the heading
          variants={fadeInUp} // Uses the same variant, will inherit stagger/delay if parent uses it
          className="text-foreground mb-4 text-3xl font-extrabold sm:text-4xl" // Enhanced styling
        >
          Explore Our Lessons
        </motion.h1>
        <motion.p // Animate the description
          variants={fadeInUp} // Uses the same variant
          className="text-muted-foreground text-lg leading-relaxed" // Enhanced styling
        >
          Dive into fundamental programming concepts and build your
          problem-solving skills step-by-step through our curated lessons.
        </motion.p>
      </div>

      {/* Lessons Grid */}
      <motion.div // Wrap the grid for scroll-triggered staggered animation
        variants={containerVariants} // Use the container variant
        initial="initial" // Set initial state
        whileInView="animate" // Animate when the grid is in view
        viewport={{ once: true, amount: 0.1 }} // Animate once, when 10% of the grid is visible
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" // Existing grid classes
      >
        {lessons.map((lesson) => (
          <motion.div // Wrap each LessonCard with motion.div
            key={lesson.slug}
            variants={fadeInUp} // Each card uses the fadeInUp variant, inheriting stagger from parent
          >
            <LessonCard
              title={lesson.title}
              description={lesson.description}
              slug={lesson.slug}
              tags={lesson.tags}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

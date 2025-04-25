'use client'

import React from 'react'
import { motion } from 'framer-motion' // Import motion component
import Link from 'next/link' // Use Link for navigation
// Assuming 'Problem' type and 'problems' data are exported from this path
import { type Problem, problems } from '~/data/problemData'

// Define the missing properties based on usage in the component
// Assuming 'id' also exists as it's used for the key
interface ProblemExtras {
  id: string | number // Add id as it's used for the key
  slug: string
  tags?: string[] // Add tags, marked as optional based on the conditional check
}

// Create a new type that includes the original Problem properties plus the extras
// This tells TypeScript that the problems we are working with here WILL have these properties
type ProblemWithSlugAndTags = Problem & ProblemExtras

// Helper to group problems by difficulty, using the new extended type
// We assume the incoming 'problems' array actually conforms to 'ProblemWithSlugAndTags[]'
const groupProblemsByDifficulty = (problemsList: ProblemWithSlugAndTags[]) => {
  return problemsList.reduce(
    (acc, problem) => {
      const difficulty =
        problem.difficulty as ProblemWithSlugAndTags['difficulty'] // Assert difficulty type if needed
      if (!acc[difficulty]) {
        acc[difficulty] = []
      }
      acc[difficulty]?.push(problem)
      return acc
    },
    {} as Record<
      ProblemWithSlugAndTags['difficulty'],
      ProblemWithSlugAndTags[] | undefined
    > // Use extended type for the return value
  )
}

// Define animation variants for fade-in and slight slide-up
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

// Define staggered animation container for lists
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.08, // Adjust delay between list item animations
      // delayChildren: 0.1, // Optional: Delay the start of the staggered animation
    },
  },
}

export default function ProblemsPage() {
  // Cast the imported problems array to our extended type
  const problemsWithExtras = problems as ProblemWithSlugAndTags[]
  const groupedProblems = groupProblemsByDifficulty(problemsWithExtras)

  // Define the desired order of difficulties
  const difficulties: Problem['difficulty'][] = [
    // Use original Problem difficulty type here if that's the source of truth for enum/union
    'Beginner',
    'Intermediate',
    'Strings & Arrays', // Assuming these are valid difficulty types
    'Functions', // Assuming these are valid difficulty types
    'Advanced',
  ]
  // Note: Ensure the strings here match the actual 'difficulty' values in your problemData

  return (
    <motion.div // Wrap the entire page content for potential initial animation
      initial="initial"
      animate="animate"
      variants={fadeInUp} // Apply initial fade-in to the whole page wrapper
      className="container mx-auto px-4 py-8 sm:py-12" // Add padding and center container
    >
      {/* Page Title and Description Section */}
      <div className="mb-10 text-center md:mb-14">
        {' '}
        {/* Centered text block */}
        <motion.h1 // Animate the heading
          variants={fadeInUp}
          className="text-foreground mb-4 text-4xl font-extrabold sm:text-5xl" // Enhanced styling
        >
          Coding Problems
        </motion.h1>
        <motion.p // Animate the description
          variants={fadeInUp}
          className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed" // Enhanced styling
        >
          Sharpen your coding skills by tackling problems grouped by difficulty
          and topic. Choose your challenge!
        </motion.p>
      </div>

      {/* Difficulty Sections */}
      {difficulties.map((difficulty) => {
        // Use the extended type for problemsInSection
        const problemsInSection: ProblemWithSlugAndTags[] | undefined =
          groupedProblems[difficulty]

        // Only render the section if there are problems for this difficulty
        if (!problemsInSection || problemsInSection.length === 0) {
          return null
        }

        return (
          <motion.section // Wrap each difficulty section for scroll animation
            key={difficulty}
            variants={fadeInUp} // Animates the section block (heading + ul container)
            initial="initial"
            whileInView="animate" // Animate when the section is in view
            viewport={{ once: true, amount: 0.1 }} // Animate once, when 10% is visible
            className="mb-12 last:mb-0" // Add bottom margin, remove on the last section
          >
            {/* Difficulty Heading */}
            <motion.h2 // Animate the heading within the section
              variants={fadeInUp}
              className="text-foreground border-primary-light dark:border-primary-dark mb-6 border-b-2 pb-3 text-3xl font-bold" // Enhanced border/color styling
            >
              {difficulty}
            </motion.h2>

            {/* Problems Grid */}
            <motion.ul // Wrap the grid for staggered animation of list items
              variants={containerVariants} // Stagger children within this list
              initial="initial" // Start children from initial state
              whileInView="animate" // Trigger children animation when ul is in view (redundant if parent animates, but good practice)
              viewport={{ once: true, amount: 0.05 }} // Animate once, when 5% is visible
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" // Existing grid classes
            >
              {problemsInSection.map(
                (
                  problem: ProblemWithSlugAndTags // Explicitly type problem here
                ) => (
                  <motion.li // Wrap each problem card (li) with motion.li
                    key={problem.id} // id is now typed
                    variants={fadeInUp} // Each card uses the fadeInUp variant, inheriting stagger
                    className="border-border bg-card hover:border-primary cursor-pointer rounded-lg border p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-md" // Enhanced styling and hover effect
                  >
                    {/* Use Link for navigation - slug is now typed */}
                    <Link href={`/problems/${problem.slug}`} className="block">
                      <h3 className="text-card-foreground mb-2 text-xl font-semibold">
                        {problem.title}
                      </h3>
                      <p className="text-muted-foreground text-base">
                        {problem.description}
                      </p>
                      {/* Optional: Display tags - tags is now typed */}
                      {problem.tags && problem.tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {/* Explicitly type tag parameter */}
                          {problem.tags.map((tag: string) => (
                            <span
                              key={tag} // Using tag as key assumes tags are unique strings per problem
                              className="bg-primary/10 text-primary border-primary/20 rounded-full border px-2 py-0.5 text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </Link>
                  </motion.li>
                )
              )}
            </motion.ul>
          </motion.section>
        )
      })}
    </motion.div>
  )
}

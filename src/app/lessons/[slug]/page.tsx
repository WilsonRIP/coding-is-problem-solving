import { notFound } from 'next/navigation'

// Placeholder lesson data - Should match the data in ../page.tsx or come from a shared source/API
// In a real app, fetch this data based on the slug
const lessons = [
  {
    title: 'Understanding Variables',
    description: 'Learn the fundamentals of storing and using data.',
    slug: 'understanding-variables',
    tags: ['Beginner', 'Core Concepts'],
    content: 'Variables are like containers... (Full lesson content goes here)',
  },
  {
    title: 'Conditional Logic (If/Else)',
    description: 'Making decisions in your code.',
    slug: 'conditional-logic',
    tags: ['Beginner', 'Control Flow'],
    content:
      'Sometimes you need your program to do different things... (Full lesson content goes here)',
  },
  {
    title: 'Introduction to Loops',
    description: 'Repeating actions efficiently.',
    slug: 'introduction-to-loops',
    tags: ['Beginner', 'Control Flow', 'Repetition'],
    content:
      'Loops help you avoid writing the same code over and over... (Full lesson content goes here)',
  },
]

interface LessonPageProps {
  params: {
    slug: string
  }
}

// Optional: Generate static paths if you know all lesson slugs beforehand
// export async function generateStaticParams() {
//   return lessons.map((lesson) => ({
//     slug: lesson.slug,
//   }));
// }

export default function LessonPage({ params }: LessonPageProps) {
  const { slug } = params
  const lesson = lessons.find((l) => l.slug === slug)

  if (!lesson) {
    notFound() // Show a 404 page if the lesson slug doesn't exist
  }

  return (
    <article className="prose dark:prose-invert lg:prose-xl max-w-none">
      {/* Apply prose styles for markdown-like content rendering */}
      <h1 className="text-primary mb-4 text-4xl font-bold">{lesson.title}</h1>

      <div className="mb-6 flex flex-wrap gap-2">
        {lesson.tags?.map((tag) => (
          <span
            key={tag}
            className="bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">Explanation</h2>
        <p>{lesson.content}</p>
        {/* More detailed explanation, code examples, etc. */}
      </section>

      <section className="bg-muted/50 mb-8 rounded border p-4">
        <h2 className="mb-3 text-2xl font-semibold">Problem</h2>
        <p>(Problem statement will go here...)</p>
        {/* Interactive code editor or problem description */}
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">Solution Approach</h2>
        <p>(Hints or steps for solving the problem...)</p>
        {/* Collapsible solution or hints */}
      </section>
    </article>
  )
}

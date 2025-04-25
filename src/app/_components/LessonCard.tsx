import Link from 'next/link'

interface LessonCardProps {
  title: string
  description: string
  slug: string // URL path for the lesson
  tags?: string[]
}

export function LessonCard({
  title,
  description,
  slug,
  tags,
}: LessonCardProps) {
  return (
    <Link
      href={`/lessons/${slug}`}
      className="bg-background hover:border-primary block rounded-lg border p-6 shadow transition-shadow hover:shadow-md"
    >
      <h3 className="text-primary mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-secondary mb-4">{description}</p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-muted text-muted-foreground rounded px-2 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  )
}

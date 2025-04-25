// app/page.tsx

import { websiteShortName } from '~/data/types'

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold sm:text-5xl">
        Welcome to {websiteShortName}!
      </h1>
      <p className="text-muted-foreground mb-8 max-w-3xl text-lg sm:text-xl">
        Master programming by tackling real-world challenges head-on.
      </p>
      <p className="text-muted-foreground max-w-2xl text-base sm:text-lg">
        Our approach focuses on breaking down complex problems into manageable
        steps, helping you build not just code, but critical thinking skills.
      </p>
      {/* Placeholder for future content/call to action */}
    </div>
  )
}

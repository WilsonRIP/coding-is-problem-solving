import '~/styles/globals.css'

import { type Metadata } from 'next'
import { Geist } from 'next/font/google'

import { TRPCReactProvider } from '~/trpc/react'
import { Navbar } from '~/app/_components/Navbar'
import { Footer } from '~/app/_components/Footer'

export const metadata: Metadata = {
  title: 'Coding is Problem Solving',
  description: 'Learn coding through problem-solving.',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} flex min-h-screen flex-col`}
      suppressHydrationWarning
    >
      <body className="flex flex-grow flex-col">
        <Navbar />
        <TRPCReactProvider>
          <main className="container mx-auto flex-grow p-4">{children}</main>
        </TRPCReactProvider>
        <Footer />
      </body>
    </html>
  )
}

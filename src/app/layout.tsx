import type { Metadata } from 'next'
import './globals.css'
import { inter } from './settings'

export const metadata: Metadata = { title: 'MyIMDB', description: 'Movies app' }

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="http://localhost:3000/favicon.ico" />
      </head>
      <body
        className={`${inter.className} bg-red bg-gray-50 font-mono text-gray-900 dark:bg-gray-800 dark:text-gray-50`}
      >
        {children}
      </body>
    </html>
  )
}

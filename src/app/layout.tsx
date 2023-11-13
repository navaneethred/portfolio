import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Portfolio | Navaneeth Krishna',
  description: 'A portfolio websites for Navaneeth Krishna',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="bg-slate-300/20">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}

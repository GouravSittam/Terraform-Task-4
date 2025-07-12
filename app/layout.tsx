import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Terraform-Task-4',
  description: 'Terraform-Task-4',
  generator: 'Terraform-Task-4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

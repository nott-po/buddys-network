export const metadata = {
  title: "Buddy's Network - Admin Panel",
  description: 'Panel administracyjny',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}

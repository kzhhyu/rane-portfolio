export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-[var(--bg)]">
      {children}
    </div>
  )
}
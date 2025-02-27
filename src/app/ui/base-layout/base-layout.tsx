import Nav from '../nav/nav'

export default function BaseLayout({
  children,
  enableButton,
}: {
  children: React.ReactNode
  enableButton?: boolean
}) {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav enableButton={enableButton ?? false} />
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-5 text-sm">
        {children}
      </div>
    </main>
  )
}

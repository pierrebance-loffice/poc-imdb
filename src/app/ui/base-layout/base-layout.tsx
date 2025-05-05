import Nav from '@app/ui/nav/nav'

export default function BaseLayout({ children, enableButton }: { children: React.ReactNode; enableButton?: boolean }) {
  return (
    <main className="flex flex-col gap-4">
      <Nav enableButton={enableButton ?? false} />
      <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-5 text-sm">{children}</div>
      <footer className="text-center">MyIMDB {new Date().getFullYear()}</footer>
    </main>
  )
}

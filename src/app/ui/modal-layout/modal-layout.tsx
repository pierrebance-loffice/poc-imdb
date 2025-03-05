'use client'

export default function ModalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full w-full items-center">
      <div className="mx-auto flex max-w-4xl items-baseline rounded-2xl bg-white shadow-xl dark:bg-zinc-600">
        <div className="grow p-4">{children}</div>
      </div>
    </div>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import ThemeMode from '@/app/ui/theme-mode/theme-mode'
import Logo from '../../../../assets/logo.svg'
import MovieIcon from '../../../../assets/movie-icon.svg'

export default function Nav({ enableButton }: { enableButton: boolean }) {
  return (
    <nav className="flex items-center gap-3 bg-zinc-300 dark:bg-zinc-800">
      <Image
        src={Logo}
        width={50}
        alt="logo"
        color="gray"
        className="logo ml-2 dark:invert"
        priority
      />
      <span className="text-2xl drop-shadow">MyIMDB</span>

      <div className="grow"></div>

      {enableButton && (
        <Link
          href="/"
          className="ms-auto flex items-center gap-2 rounded-full bg-gray-200 p-2 text-sm hover:bg-gray-50 hover:text-blue-400 dark:bg-slate-400 hover:dark:bg-gray-600"
        >
          <Image
            src={MovieIcon}
            width={24}
            alt="logo"
            color="gray"
            className="logo ml-2 dark:invert"
            priority
          />
          Retour à la liste
        </Link>
      )}

      <ThemeMode />
    </nav>
  )
}

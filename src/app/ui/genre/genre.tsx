export default function Genre({ name, className }: { name: string; className: string }) {
  return (
    <div
      key={`genre-${name.toLowerCase()}`}
      className={`whitespace-nowrap rounded-full bg-gray-400 text-center text-xl text-gray-50 dark:bg-black dark:text-gray-200 ${className} `}
    >
      {name}
    </div>
  )
}

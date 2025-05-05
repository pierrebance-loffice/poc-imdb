import Genre from '@app/ui/genre/genre'

export default async function DiscoveryGenres({ genres, classNames }: { genres: string[]; classNames?: string }) {
  return (
    <div className={`${classNames ?? ''}`}>
      {genres.map((name) => (
        <Genre key={name} name={name} className="mr-1 mt-1 inline-block p-1 text-xs" />
      ))}
    </div>
  )
}

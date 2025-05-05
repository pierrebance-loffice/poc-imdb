import Image from 'next/image'
import Link from 'next/link'
import { shuffle } from 'radash'
import { Person } from '@app/lib/service/models/person'
import { ImageNotSupported, Star } from '@mui/icons-material'
import { Chip } from '@mui/material'

export default function PersonCard({
  person,
  compact,
  personRole,
}: {
  person: Person
  compact: boolean
  personRole?: string
}) {
  const size1 = compact ? 'text-xl' : 'text-4xl'
  const size2 = compact ? 'text-lg' : 'text-xl'
  const size3 = compact ? 'text-sm' : 'text-lg'
  const size4 = compact ? 'text-xs' : 'text-sm'

  const widthPic = compact ? 200 : 300
  const heightPic = compact ? 300 : 450

  return (
    <>
      <h1 className={size1}>
        {person.name}{' '}
        {person.knownForDepartment ? (
          <Chip
            label={person.knownForDepartment}
            size="medium"
            className="bg-gray-400 text-gray-50 dark:bg-black dark:text-gray-200"
          />
        ) : null}
      </h1>

      {!!personRole && (
        <div className="flex items-center text-blue-500">
          <Star />
          <span className={size2}>{personRole}</span>
        </div>
      )}

      <div className="flex gap-4">
        <div className="flex flex-col" style={{ minWidth: widthPic }}>
          {!!person?.profilePath && (
            <Image src={person.profilePath.big} alt="photo" className="rounded" height={heightPic} width={widthPic} />
          )}
          {!person?.profilePath && (
            <div
              data-testid="no-photo"
              className="flex justify-center bg-gray-400 dark:bg-gray-900"
              style={{ height: heightPic, width: widthPic }}
            >
              <ImageNotSupported className="self-center text-6xl dark:text-gray-200" />
            </div>
          )}
        </div>

        <div className={`flex flex-col gap-2 ${size3}`}>
          <div className="inline-block">
            <span className="font-bold">
              {person.birthday.toLocaleString(process.env.API_LANG, {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </span>
            <span className="italic"> {person.placeOfBirth}</span>
          </div>
          {!!person.biography && (
            <div className="overflow-y-auto" style={{ maxHeight: 400 }}>
              <span className="font-bold">Biographie</span>
              <span> - {person.biography}</span>
            </div>
          )}

          {!compact && (
            <>
              {person.homepage ? (
                <Link href={person.homepage} className={`${size4} text-blue-500 underline hover:text-blue-800`}>
                  Lien vers le site de la personne
                </Link>
              ) : null}

              {!!person.imdbId && (
                <Link
                  href={`https://www.imdb.com/name/${person.imdbId}`}
                  className={`${size4} text-blue-500 underline hover:text-blue-800`}
                >
                  Lien vers la page IMDB de la personne
                </Link>
              )}

              {!!person.images.length && (
                <>
                  <h3 className="font-xl mt-4">Images</h3>
                  <div className="inline items-start gap-2">
                    {shuffle(person.images)
                      .slice(0, 16)
                      .map((image, index) => (
                        <Image
                          data-testid="photo-mini"
                          src={image.small}
                          key={`person-${person.id}-image-${index}`}
                          width={100}
                          height={150}
                          alt={person.name}
                          className="m-2 inline rounded"
                        />
                      ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}

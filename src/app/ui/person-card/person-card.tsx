import Image from 'next/image'
import Link from 'next/link'
import { shuffle } from 'radash'
import { Person } from '@/app/lib/service/models/person'
import { ImageNotSupported, Star } from '@mui/icons-material'
import { Chip } from '@mui/material'

export default function PersonCard({
  person,
  compact,
  role,
}: {
  person: Person
  compact: boolean
  role?: string
}) {
  return (
    <>
      <h1 className="text-4xl">
        {person.name}{' '}
        {person.knownForDepartment ? (
          <Chip
            label={person.knownForDepartment}
            size="medium"
            className="bg-gray-400  text-xl text-gray-50 dark:bg-black dark:text-gray-200"
          />
        ) : null}
      </h1>

      {!!role && (
        <div className="flex items-center text-blue-500">
          <Star />
          <span className="text-xl italic">{role}</span>
        </div>
      )}

      <div className="flex gap-4">
        <div className="flex flex-col" style={{ minWidth: '300px' }}>
          {!!person?.profilePath && (
            <Image
              src={person.profilePath.big}
              alt="photo"
              className="rounded"
              height={450}
              width={300}
              style={{ minWidth: '300px' }}
            />
          )}
          {!person?.profilePath && (
            <div
              className="flex justify-center bg-gray-400 dark:bg-gray-900"
              style={{ height: 450, width: 300 }}
            >
              <ImageNotSupported className="self-center text-6xl dark:text-gray-200" />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 text-lg">
          <div className="inline-block">
            <span className="font-bold">
              {person.birthday.toLocaleString(
                process.env.API_LANG,
                { day: '2-digit', month: '2-digit', year: 'numeric' }
              )}
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
                <Link
                  href={person.homepage}
                  className="text-sm text-blue-500 underline hover:text-blue-800"
                >
                  Lien vers le site de la personne
                </Link>
              ) : null}

              <Link
                href={`https://www.imdb.com/name/${person.imdbId}`}
                className="text-sm text-blue-500 underline hover:text-blue-800"
              >
                Lien vers la page IMDB de la personne
              </Link>

              {!!person.images.length && (
                <>
                  <h3 className="font-xl mt-4">Images</h3>
                  <div className="inline items-start gap-2">
                    {shuffle(person.images)
                      .slice(0, 16)
                      .map((image, index) => (
                        <Image
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

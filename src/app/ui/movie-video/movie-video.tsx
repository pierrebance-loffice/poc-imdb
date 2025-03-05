import { Video } from '@app/lib/service/models/video'

export default function MovieVideo({ video }: { video: Video }) {
  return (
    <iframe
      width="280"
      height="158"
      src={`https://www.youtube.com/embed/${video.key}`}
      title={video.name}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="rounded"
    ></iframe>
  )
}

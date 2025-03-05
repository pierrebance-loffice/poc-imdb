'use client'

import Modal from '@app/ui/modal/modal'
import MovieCardSkeleton from '@app/ui/skeletons/movie-card/movie-card'

export default function MovieModalSkeleton() {
  return (
    <Modal>
      <MovieCardSkeleton />
    </Modal>
  )
}

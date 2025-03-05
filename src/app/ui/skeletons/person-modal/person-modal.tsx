'use client'

import Modal from '@app/ui/modal/modal'
import PersonCardSkeleton from '@app/ui/skeletons/person-card/person-card'

export default function PersonModalSkeleton() {
  return (
    <Modal>
      <PersonCardSkeleton />
    </Modal>
  )
}

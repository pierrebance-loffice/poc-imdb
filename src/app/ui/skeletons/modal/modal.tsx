'use client'

import { Modal, Skeleton } from '@mui/material'

export default function ModalSkeleton({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Modal open>
      <>
        <Skeleton variant="circular" width={80} height={80} />
        {children}
      </>
    </Modal>
  )
}

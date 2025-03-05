'use client'

import ModalLayout from '@app/ui/modal-layout/modal-layout'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { Backdrop, Modal } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'

export default function MyModal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [open, setOpen] = useState(true)
  const closeModal = useCallback(() => {
    setOpen(false)
    router.back()
  }, [router])

  return (
    <>
      <Modal
        data-testid="movie-modale"
        color="white"
        className="items-center"
        open={open}
        onClose={closeModal}
      >
        <ModalLayout>
          <button
            data-testid="btn-close-movie-modal"
            className="ml-auto"
            onClick={closeModal}
          >
            <HighlightOffIcon
              className="text-blue-500 hover:text-black"
              fontSize="large"
            />
          </button>
          {children}
        </ModalLayout>
      </Modal>
      <Backdrop open={open} onClick={closeModal}></Backdrop>
    </>
  )
}

'use client'

import ModalLayout from '@app/ui/modal-layout/modal-layout'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { Modal as MuiModal } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'

export default function Modal({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  const router = useRouter()
  const [open, setOpen] = useState(true)
  const closeModal = useCallback(() => {
    setOpen(false)
    router.back()
  }, [router])

  return (
    <>
      <MuiModal
        data-testid="movie-modale"
        className="items-center"
        open={open}
        onClose={closeModal}
      >
        <>
          <ModalLayout>
            <div
              className="flex flex-col gap-2"
              style={{ minWidth: 800, maxHeight: 700 }}
            >
              <div
                className="flex justify-between"
                style={{ minWidth: 800, maxHeight: 700 }}
              >
                {!!title && <h2 className="grow">{title}</h2>}
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
              </div>
              {children}
            </div>
          </ModalLayout>
        </>
      </MuiModal>
    </>
  )
}

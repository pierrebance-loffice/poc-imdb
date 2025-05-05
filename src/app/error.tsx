'use client'

import { Alert } from '@mui/material'
import Modal from './ui/modal/modal'

export default function Error({ error }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <Modal title="Une erreur est survenue">
      <Alert color="error" severity="error" variant="filled">
        {error.message}
      </Alert>
    </Modal>
  )
}

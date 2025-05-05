'use client'

import { GridView, ViewList } from '@mui/icons-material'
import { Divider } from '@mui/material'

const Icon = ({ selected, type }: { selected: boolean; type: 'grid' | 'list' }) => {
  const ModeIcon = type === 'list' ? ViewList : GridView
  return <ModeIcon className={`m-1 self-center rounded-full p-1 ${selected ? ' bg-amber-300' : ''}`} fontSize="large" />
}

export default function ViewMode(props: { mode: 'grid' | 'list'; onChange: () => void }) {
  const { mode, onChange } = props

  return (
    <button className={`m-2 flex gap-2 rounded-full border bg-slate-300 p-1`} onClick={onChange}>
      <Icon type="list" selected={mode === 'list'} />
      <Divider orientation="vertical" flexItem />
      <Icon type="grid" selected={mode === 'grid'} />
    </button>
  )
}

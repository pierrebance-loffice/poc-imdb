'use client'

import {
  Alert,
  CircularProgress,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useDiscoveries } from '@/app/hooks/discoveries'
import DiscoveriesGrid from '@/app/ui/discoveries-grid/discoveries-grid'
import DiscoveriesList from '@/app/ui/discoveries-list/discoveries-list'
import ModeSwitcher from '@/app/ui/mode-switcher/mode-switcher'

export default function Discoveries() {
  const [mode, setMode] = useState<'list' | 'grid'>('grid')

  const [apiPage, setApiPage] = useState(1)
  const [displayPage, setDisplayPage] = useState(1)

  const [apiSorting, setApiSorting] = useState('popularity.desc')

  const { error, loading, discoveries } = useDiscoveries(apiPage, apiSorting)

  const onChangeMode = useCallback(
    () => setMode(mode === 'grid' ? 'list' : 'grid'),
    [mode]
  )

  const displayedDiscoveries = useMemo(() => {
    const isFirstPageInApiPage = displayPage % 2 !== 0
    return (discoveries?.results || []).slice(
      isFirstPageInApiPage ? 0 : 10,
      isFirstPageInApiPage ? 10 : 20
    )
  }, [discoveries, displayPage])

  const handlePaginationChange = useCallback(
    (event: ChangeEvent<unknown>, value: number) => {
      const newApiPage = Math.floor((1 + value) / 2)
      if (displayPage !== value) {
        if (newApiPage !== apiPage) {
          setApiPage(newApiPage)
        }
        setDisplayPage(value)
      }
    },
    [apiPage, displayPage]
  )

  if (loading) {
    return (
      <div className="flex w-full p-4">
        <CircularProgress className="mx-auto" />
      </div>
    )
  }

  if (error)
    return (
      <Alert severity="error" className="m-4">
        Une erreur est survenue
      </Alert>
    )

  if (!displayedDiscoveries.length || !discoveries)
    return <Alert severity="info">Aucun film</Alert>

  const handleSortingChange = (event: SelectChangeEvent<unknown>) =>
    setApiSorting(String(event.target.value))

  return (
    <div className="mb-4 mt-4 flex flex-col justify-between gap-5">
      <h1 className="text-4xl">Les plus populaires</h1>

      <div className="flex items-center justify-end rounded bg-zinc-300">
        <Select
          value={apiSorting}
          title="Trier par"
          onChange={handleSortingChange}
          className="rounded-full"
        >
          <MenuItem value="popularity.desc">
            Du plus populaire au moins populaire
          </MenuItem>
          <MenuItem value="popularity.asc">
            Du moins populaire au plus populaire
          </MenuItem>
          <MenuItem value="title.desc">Ordre alphabétique croissant</MenuItem>
          <MenuItem value="title.asc">Ordre alphabétique décroissant</MenuItem>
        </Select>

        <ModeSwitcher mode={mode} onChange={onChangeMode} />
      </div>

      {mode === 'grid' ? (
        <DiscoveriesGrid discoveries={displayedDiscoveries} />
      ) : (
        <DiscoveriesList discoveries={displayedDiscoveries} />
      )}

      <Pagination
        count={discoveries.total_pages * 2}
        page={displayPage}
        onChange={handlePaginationChange}
        showFirstButton
        showLastButton
        siblingCount={1}
        boundaryCount={1}
        className="self-center rounded-full bg-zinc-300 p-2 text-white"
      />
    </div>
  )
}

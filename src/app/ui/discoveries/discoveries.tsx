'use client'

import {
  Alert,
  CircularProgress,
  Pagination,
  SelectChangeEvent,
} from '@mui/material'
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from 'react'
import DiscoveriesGrid from '@/app/ui/discoveries-grid/discoveries-grid'
import DiscoveriesList from '@/app/ui/discoveries-list/discoveries-list'
import ViewMode from '@/app/ui/view-mode/view-mode'
import { fetchDiscoveries } from '@/app/actions'
import { PaginatedDiscoveries } from '@/app/lib/service/models/discovery'
import SortingSelector from '../sorting-selector/sorting-selector'

type Props = {
  discoveries: PaginatedDiscoveries
  sorting: string
  apiPage: number
  displayPage: number
}

export default function Discoveries(props: Props) {
  const [discoveries, setDiscoveries] = useState(props.discoveries)
  const [mode, setMode] = useState<'grid' | 'list'>('grid')
  const [apiPage, setApiPage] = useState(props.apiPage)
  const [displayPage, setDisplayPage] = useState(props.displayPage)
  const [sorting, setSorting] = useState(props.sorting)

  const onSortingChange = (event: SelectChangeEvent<unknown>) => {
    setSorting(String(event.target.value))
  }

  const onPaginationChange = useCallback((event: ChangeEvent<unknown>, value: number) => {
    const newApiPage = Math.floor((1 + value) / 2)
      if (displayPage !== value) {
        if (newApiPage !== apiPage) {
          setApiPage(newApiPage)
        }
        setDisplayPage(value)
      }
  }, [apiPage, displayPage])

  const onViewModeChange = useCallback(
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


  const [isPending, startTransition] = useTransition()
  
  useEffect(() => {
    startTransition(async () => {
      const newDiscoveries = await fetchDiscoveries(apiPage, sorting)
      setDiscoveries(newDiscoveries)
    })
  }, [apiPage, sorting])


  if (isPending) {
    return (
      <div className="flex w-full p-4">
        <CircularProgress className="mx-auto" />
      </div>
    )
  }

  if (!discoveries.results.length)
    return <Alert severity="info">Aucun film</Alert>

  return (
    <div className="mb-4 mt-4 flex flex-col justify-between gap-5">
      <h1 className="text-4xl">Les plus populaires</h1>

      <div className="flex items-center justify-end rounded bg-zinc-300">
        <SortingSelector sorting={sorting} onChange={onSortingChange} />
        <ViewMode mode={mode} onChange={onViewModeChange} />
      </div>

      {mode === 'grid' ? (
        <DiscoveriesGrid discoveries={displayedDiscoveries} />
      ) : (
        <DiscoveriesList discoveries={displayedDiscoveries} />
      )}

      <Pagination
        count={discoveries.total_pages * 2}
        page={displayPage}
        onChange={onPaginationChange}
        showFirstButton
        showLastButton
        siblingCount={1}
        boundaryCount={1}
        className="self-center rounded-full bg-zinc-300 p-2 text-white"
      />
    </div>
  )
}

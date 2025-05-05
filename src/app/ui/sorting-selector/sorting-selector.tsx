import { MenuItem, Select, SelectChangeEvent } from '@mui/material'

export default function SortingSelector({
  sorting,
  onChange,
}: {
  sorting: string
  onChange: (event: SelectChangeEvent<unknown>) => void
}) {
  return (
    <Select value={sorting} title="Trier par" onChange={onChange} className="rounded-full">
      <MenuItem value="popularity.desc">Du plus populaire au moins populaire</MenuItem>
      <MenuItem value="popularity.asc">Du moins populaire au plus populaire</MenuItem>
      <MenuItem value="title.desc">Ordre alphabétique croissant</MenuItem>
      <MenuItem value="title.asc">Ordre alphabétique décroissant</MenuItem>
    </Select>
  )
}

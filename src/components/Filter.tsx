import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Box,
} from "@mui/material";

type FilterProps = {
  filter: string;
  onFilterChange: (filter: string) => void;
};

const Filter = ({ filter, onFilterChange }: FilterProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onFilterChange(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, marginRight: 2 }}>
      <FormControl fullWidth variant="outlined">
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select
          labelId="filter-label"
          id="filter_id"
          value={filter}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value="none">None</MenuItem>
          <MenuItem value="name_asc">Name (A to Z)</MenuItem>
          <MenuItem value="createdAt">Date Joined</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;

import React, { ChangeEvent, useState } from "react";
import { TextField, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query); // Trigger search on button click
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", minWidth: 120, marginRight: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSearchClick}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
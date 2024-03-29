import { InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, ReactNode } from "react";

export interface SearchInputProps {
  placeholder: string;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  SearchIcon?: ReactNode;
  handleClickSearch?: () => void;
}

function SearchInput({
  placeholder,
  value,
  handleChange,
  SearchIcon,
  handleClickSearch,
}: SearchInputProps) {
  return (
    <TextField
      variant="outlined"
      color="primary"
      focused
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" onClick={handleClickSearch}>
            {SearchIcon}
          </InputAdornment>
        ),
      }}
      inputProps={{
        style: {
          padding: "10px 12px",
        },
      }}
    />
  );
}

export default SearchInput;

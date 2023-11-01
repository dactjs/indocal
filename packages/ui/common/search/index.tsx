import type { TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useDebouncedCallback } from "use-debounce";

const DEFAULT_DELAY = 500;

export type SearchProps = Omit<TextFieldProps, "onChange" | "InputProps"> & {
  delay?: number;
  onChange?: (value: string) => void;
};

export function Search({
  delay,
  onChange,
  ...rest
}: SearchProps): React.ReactElement {
  const handleChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (onChange) onChange(event.target.value);
    },
    delay || DEFAULT_DELAY
  );

  return (
    <TextField
      placeholder="Buscar..."
      onChange={handleChange}
      InputProps={{ endAdornment: <SearchIcon /> }}
      {...rest}
    />
  );
}

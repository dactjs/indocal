"use client";

import { ToggleButton } from "@mui/material";
import {
  Tune as SearchSettingsIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";

export function SearchSettings(): React.ReactElement {
  return (
    <ToggleButton value="search-settings" size="small">
      <SearchSettingsIcon />
      <ArrowDropDownIcon />
    </ToggleButton>
  );
}

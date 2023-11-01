"use client";

import { ToggleButton } from "@mui/material";
import {
  SupportAgent as TechniciansIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";

export function TechniciansFilter(): React.ReactElement {
  return (
    <ToggleButton value="technicians" size="small">
      <TechniciansIcon />
      <ArrowDropDownIcon />
    </ToggleButton>
  );
}

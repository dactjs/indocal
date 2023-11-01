"use client";

import { IconButton, Tooltip } from "@mui/material";
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";

import { useColorMode } from "../color-mode-provider";

export function ToggleColorModeButton(): React.ReactElement {
  const { mode, toggleMode } = useColorMode();

  const message =
    mode === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <Tooltip title={message}>
      <IconButton
        color="inherit"
        aria-label="Toggle Color Mode"
        onClick={toggleMode}
      >
        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}

"use client";

import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";

import { ColorModeProvider, useColorMode } from "../color-mode-provider";

export interface ThemeProviderProps {
  children: React.ReactElement;
}

function ThemeProvider({ children }: ThemeProviderProps): React.ReactElement {
  const { mode } = useColorMode();

  const theme = createTheme({ palette: { mode } });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      <GlobalStyles
        styles={{
          "*": {
            "&::-webkit-scrollbar": {
              width: 7.5,
              height: 7.5,
              backgroundColor: "hsla(0, 0%, 0%, 0.05)",
            },

            "&::-webkit-scrollbar-track": {
              borderRadius: 2.5,
              backgroundColor: "hsla(0, 0%, 0%, 0.05)",
            },

            "&::-webkit-scrollbar-thumb": {
              borderRadius: 2.5,
              backgroundColor: "steelblue",
            },
          },
        }}
      />

      {children}
    </MuiThemeProvider>
  );
}

function ThemeProviderWrapper({
  children,
}: ThemeProviderProps): React.ReactElement {
  return (
    <ColorModeProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ColorModeProvider>
  );
}

export { ThemeProviderWrapper as ThemeProvider };

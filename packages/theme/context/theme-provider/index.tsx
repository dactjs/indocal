"use client";

import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import { esES as coreEsES } from "@mui/material/locale";
import { esES as dataGridEsES } from "@mui/x-data-grid/locales";
import { esES as pickersEsES } from "@mui/x-date-pickers/locales";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../config";

import { ColorModeProvider, useColorMode } from "../color-mode-provider";

export interface ThemeProviderProps {
  children: React.ReactElement;
}

function ThemeProvider({ children }: ThemeProviderProps): React.ReactElement {
  const { mode } = useColorMode();

  const theme = createTheme(
    {
      palette: {
        mode,
        primary: { main: PRIMARY_COLOR },
        secondary: { main: SECONDARY_COLOR },
      },
    },
    dataGridEsES,
    pickersEsES,
    coreEsES
  );

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

"use client";

import type { Reducer } from "react";
import { useReducer, useContext, createContext } from "react";
import type { PaletteMode } from "@mui/material";

///////////
// State //
///////////

interface ColorModeProviderState {
  mode: PaletteMode;
}

interface ColorModeProviderAction {
  type: "TOGGLE_MODE";
}

const reducer: Reducer<ColorModeProviderState, ColorModeProviderAction> = (
  state,
  action
): ColorModeProviderState => {
  switch (action.type) {
    case "TOGGLE_MODE": {
      return {
        ...state,
        mode: state.mode === "dark" ? "light" : "dark",
      };
    }
  }
};

const initialState: ColorModeProviderState = {
  mode: "dark",
};

/////////////
// Context //
/////////////

export interface ColorModeContextValue {
  mode: PaletteMode;
  toggleMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextValue>({
  mode: initialState.mode,
  toggleMode: () => undefined,
});

export interface ColorModeProviderProps {
  children: React.ReactElement;
}

export function ColorModeProvider({
  children,
}: ColorModeProviderProps): React.ReactElement {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleToggleMode = (): void => {
    dispatch({ type: "TOGGLE_MODE" });
  };

  return (
    <ColorModeContext.Provider
      value={{
        mode: state.mode,
        toggleMode: handleToggleMode,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

export function useColorMode(): ColorModeContextValue {
  return useContext(ColorModeContext);
}

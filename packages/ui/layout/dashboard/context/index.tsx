"use client";

import type { Reducer } from "react";
import { useReducer, useContext, createContext } from "react";

///////////
// State //
///////////

interface DashboardProviderState {
  isDrawerOpen: boolean;
}

type DashboardProviderAction =
  | { type: "OPEN_DRAWER" }
  | { type: "CLOSE_DRAWER" };

const reducer: Reducer<DashboardProviderState, DashboardProviderAction> = (
  state,
  action
): DashboardProviderState => {
  switch (action.type) {
    case "OPEN_DRAWER": {
      return {
        ...state,
        isDrawerOpen: true,
      };
    }

    case "CLOSE_DRAWER": {
      return {
        ...state,
        isDrawerOpen: false,
      };
    }
  }
};

const initialState: DashboardProviderState = {
  isDrawerOpen: true,
};

/////////////
// Context //
/////////////

export interface DashboardContextValue {
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const DashboardContext = createContext<DashboardContextValue>({
  isDrawerOpen: initialState.isDrawerOpen,
  openDrawer: () => undefined,
  closeDrawer: () => undefined,
});

export interface DashboardProviderProps {
  children: React.ReactElement;
}

export function DashboardProvider({
  children,
}: DashboardProviderProps): React.ReactElement {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOpenDrawer = (): void => {
    dispatch({ type: "OPEN_DRAWER" });
  };

  const handleCloseDrawer = (): void => {
    dispatch({ type: "CLOSE_DRAWER" });
  };

  return (
    <DashboardContext.Provider
      value={{
        isDrawerOpen: state.isDrawerOpen,
        openDrawer: handleOpenDrawer,
        closeDrawer: handleCloseDrawer,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard(): DashboardContextValue {
  return useContext(DashboardContext);
}

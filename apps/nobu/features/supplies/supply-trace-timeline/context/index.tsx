"use client";

import type { Reducer } from "react";
import { useReducer, useContext, createContext } from "react";

import type { SupplyTrace } from "@indocal/schemas";

///////////
// State //
///////////

interface SupplyTraceTimelineState {
  selectedTrace: SupplyTrace | null;
}

type SupplyTraceTimelineAction =
  | {
      type: "SELECT_TRACE";
      payload: SupplyTrace;
    }
  | {
      type: "UNSELECT_TRACE";
    };

const reducer: Reducer<SupplyTraceTimelineState, SupplyTraceTimelineAction> = (
  state,
  action
): SupplyTraceTimelineState => {
  switch (action.type) {
    case "SELECT_TRACE": {
      return {
        ...state,
        selectedTrace: action.payload,
      };
    }

    case "UNSELECT_TRACE": {
      return {
        ...state,
        selectedTrace: null,
      };
    }
  }
};

const initialState: SupplyTraceTimelineState = {
  selectedTrace: null,
};

/////////////
// Context //
/////////////

export interface SupplyTraceTimelineContextValue {
  selectedTrace: SupplyTrace | null;
  selectTrace: (trace: SupplyTrace) => void;
  unselectTrace: () => void;
}

export const SupplyTraceTimelineContext =
  createContext<SupplyTraceTimelineContextValue>({
    selectedTrace: initialState.selectedTrace,
    selectTrace: () => undefined,
    unselectTrace: () => undefined,
  });

export interface SupplyTraceTimelineProviderProps {
  children: React.ReactElement;
}

export function SupplyTraceTimelineProvider({
  children,
}: SupplyTraceTimelineProviderProps): React.ReactElement {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelectTrace = (trace: SupplyTrace): void => {
    dispatch({ type: "SELECT_TRACE", payload: trace });
  };

  const handleUnselectTrace = (): void => {
    dispatch({ type: "UNSELECT_TRACE" });
  };

  return (
    <SupplyTraceTimelineContext.Provider
      value={{
        selectedTrace: state.selectedTrace,
        selectTrace: handleSelectTrace,
        unselectTrace: handleUnselectTrace,
      }}
    >
      {children}
    </SupplyTraceTimelineContext.Provider>
  );
}

export function useSupplyTraceTimeline(): SupplyTraceTimelineContextValue {
  return useContext(SupplyTraceTimelineContext);
}

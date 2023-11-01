"use client";

import type { Reducer } from "react";
import { useReducer, useContext, createContext } from "react";

import type { User, Ticket, TicketStatus } from "@indocal/schemas";

///////////
// State //
///////////

interface ClientDynamicTicketListState {
  selectedStatus: TicketStatus[];
  selectedTechnicians: User[];
  selectedTickets: Ticket[];
}

type ClientDynamicTicketListAction =
  | {
      type: "SET_STATUS";
      status: TicketStatus[];
    }
  | {
      type: "SET_TECHNICIANS";
      technicians: User[];
    }
  | {
      type: "SELECT_TICKET";
      payload: Ticket;
    }
  | {
      type: "UNSELECT_TICKET";
      payload: Ticket;
    };

const reducer: Reducer<
  ClientDynamicTicketListState,
  ClientDynamicTicketListAction
> = (state, action): ClientDynamicTicketListState => {
  switch (action.type) {
    case "SET_STATUS": {
      return {
        ...state,
        selectedStatus: action.status,
      };
    }

    case "SET_TECHNICIANS": {
      return {
        ...state,
        selectedTechnicians: action.technicians,
      };
    }

    case "SELECT_TICKET": {
      return {
        ...state,
        selectedTickets: state.selectedTickets.concat(action.payload),
      };
    }

    case "UNSELECT_TICKET": {
      return {
        ...state,
        selectedTickets: state.selectedTickets.filter(
          (ticket) => ticket.id !== action.payload.id
        ),
      };
    }
  }
};

const initialState: ClientDynamicTicketListState = {
  selectedStatus: [],
  selectedTechnicians: [],
  selectedTickets: [],
};

/////////////
// Context //
/////////////

export interface ClientDynamicTicketListContextValue {
  selectedStatus: TicketStatus[];
  setStatus: (status: TicketStatus[]) => void;

  selectedTechnicians: User[];
  setTechnicians: (technicians: User[]) => void;

  selectedTickets: Ticket[];
  selectTicket: (ticket: Ticket) => void;
  unselectTicket: (ticket: Ticket) => void;
}

export const ClientDynamicTicketListContext =
  createContext<ClientDynamicTicketListContextValue>({
    selectedStatus: initialState.selectedStatus,
    setStatus: () => undefined,

    selectedTechnicians: initialState.selectedTechnicians,
    setTechnicians: () => undefined,

    selectedTickets: initialState.selectedTickets,
    selectTicket: () => undefined,
    unselectTicket: () => undefined,
  });

export interface ClientDynamicTicketListProviderProps {
  children: React.ReactElement;
}

export function ClientDynamicTicketListProvider({
  children,
}: ClientDynamicTicketListProviderProps): React.ReactElement {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSetStatus = (status: TicketStatus[]): void => {
    dispatch({ type: "SET_STATUS", status });
  };

  const handleSetTechnicians = (technicians: User[]): void => {
    dispatch({ type: "SET_TECHNICIANS", technicians });
  };

  const handleSelectTicket = (ticket: Ticket): void => {
    dispatch({ type: "SELECT_TICKET", payload: ticket });
  };

  const handleUnselectTicket = (ticket: Ticket): void => {
    dispatch({ type: "UNSELECT_TICKET", payload: ticket });
  };

  return (
    <ClientDynamicTicketListContext.Provider
      value={{
        selectedStatus: state.selectedStatus,
        setStatus: handleSetStatus,

        selectedTechnicians: state.selectedTechnicians,
        setTechnicians: handleSetTechnicians,

        selectedTickets: state.selectedTickets,
        selectTicket: handleSelectTicket,
        unselectTicket: handleUnselectTicket,
      }}
    >
      {children}
    </ClientDynamicTicketListContext.Provider>
  );
}

export function useClientDynamicTicketList(): ClientDynamicTicketListContextValue {
  return useContext(ClientDynamicTicketListContext);
}

"use client";

import { Stack, Divider } from "@mui/material";

import { NoData, Search } from "@indocal/ui";
import type { Ticket } from "@indocal/schemas";

import { ClientDynamicTicketListProvider } from "./context";
import {
  StatusFilters,
  TechniciansFilter,
  TicketItem,
  SearchSettings,
  Pagination,
} from "./components";

interface ClientDynamicTicketListProps {
  tickets: Ticket[];
}

function ClientDynamicTicketList({
  tickets,
}: ClientDynamicTicketListProps): React.ReactElement {
  return (
    <Stack
      spacing={1}
      divider={<Divider flexItem />}
      sx={{ height: "100%", overflow: "hidden" }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={0.5}
          divider={<Divider flexItem orientation="vertical" />}
        >
          <StatusFilters />
          <TechniciansFilter />
        </Stack>

        <Search size="small" />
      </Stack>

      {tickets.length < 0 && <NoData message="Sin tickets" />}

      {tickets.length > 0 && (
        <Stack spacing={1.5} sx={{ height: "100%", overflow: "auto" }}>
          {tickets.map((ticket) => (
            <TicketItem key={ticket.id} ticket={ticket} />
          ))}
        </Stack>
      )}

      {tickets.length > 0 && (
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", md: "space-between" }}
          alignItems="center"
          spacing={1}
        >
          <SearchSettings />
          <Pagination count={tickets.length} />
        </Stack>
      )}
    </Stack>
  );
}

interface ClientDynamicTicketListWrapperProps {
  tickets: Ticket[];
}

function ClientDynamicTicketListWrapper({
  tickets,
}: ClientDynamicTicketListWrapperProps): React.ReactElement {
  return (
    <ClientDynamicTicketListProvider>
      <ClientDynamicTicketList tickets={tickets} />
    </ClientDynamicTicketListProvider>
  );
}

export type { ClientDynamicTicketListWrapperProps as ClientDynamicTicketListProps };
export { ClientDynamicTicketListWrapper as ClientDynamicTicketList };

"use client";

import { useRouter } from "next/navigation";
import { Paper, Stack, Typography, Checkbox, Tooltip } from "@mui/material";

import type { Ticket } from "@indocal/schemas";
import {
  getShortId,
  translateTicketStatus,
  TicketStatus,
} from "@indocal/schemas";

import { PAGES } from "~/constants";

import { useClientDynamicTicketList } from "../context";

export interface TicketItemProps {
  ticket: Ticket;
}

export function TicketItem({ ticket }: TicketItemProps): React.ReactElement {
  const router = useRouter();

  const { selectedTickets, selectTicket, unselectTicket } =
    useClientDynamicTicketList();

  const colorByStatus = {
    [TicketStatus.UNASSIGNED]: "default",
    [TicketStatus.ASSIGNED]: "info",
    [TicketStatus.IN_PROGRESS]: "warning",
    [TicketStatus.RESOLVED]: "success",
    [TicketStatus.CLOSED]: "success",
    [TicketStatus.CANCELLED]: "error",
  } as const;

  const title = [
    getShortId(ticket.id),
    translateTicketStatus(ticket.status),
    ticket.service.name,
    ticket.service.category.name,
  ].join(" - ");

  const description = [
    "Enviado por",
    ticket.sentBy.name,
    "el",
    new Date(ticket.createdAt).toLocaleString("es-do"),
  ].join(" ");

  const isSelected = selectedTickets.some(({ id }) => id === ticket.id);

  const handleClick = (): void => {
    router.push(`${PAGES.TICKETS}/${ticket.id}`);
  };

  const handleSelect = (): void => {
    if (isSelected) {
      unselectTicket(ticket);
    } else {
      selectTicket(ticket);
    }
  };

  return (
    <Tooltip title={ticket.issue}>
      <Paper
        onClick={handleClick}
        sx={{
          padding: 2,
          transition: "background-color 0.2s ease-in-out",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: (theme) => theme.palette.action.hover,
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Stack>
            <Typography
              fontWeight="bolder"
              color={colorByStatus[ticket.status]}
            >
              {title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </Stack>

          <Checkbox
            checked={isSelected}
            onChange={handleSelect}
            onClick={(event) => {
              event.stopPropagation();
            }}
          />
        </Stack>
      </Paper>
    </Tooltip>
  );
}

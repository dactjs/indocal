import type { TicketTrace } from "@indocal/schemas";

import { DCRUZ, DPASCUAL } from "../users";

export const TICKET = {
  id: "1",
  status: "UNASSIGNED",
  issue: `Problema ${1}`,
  solution: null,
};

export const TICKET_TRACES_MOCK: TicketTrace[] = [
  {
    id: "1",
    type: "RECEPTION",
    ticket: TICKET,
    madeBy: DCRUZ,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    type: "ASSIGNMENT",
    ticket: TICKET,
    madeBy: DCRUZ,
    destination: DCRUZ,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    type: "TRANSFER",
    ticket: TICKET,
    madeBy: DCRUZ,
    origin: DCRUZ,
    destination: DPASCUAL,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    type: "OPENED",
    ticket: TICKET,
    madeBy: DCRUZ,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "5",
    type: "RESOLVED",
    ticket: TICKET,
    madeBy: DCRUZ,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "6",
    type: "CLOSED",
    ticket: TICKET,
    madeBy: DCRUZ,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "7",
    type: "CANCELLED",
    ticket: TICKET,
    madeBy: DCRUZ,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

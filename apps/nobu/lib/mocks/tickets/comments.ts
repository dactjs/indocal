import type { TicketComment } from "@indocal/schemas";

import { DCRUZ, DPASCUAL } from "../users";

const TICKET = {
  id: "1",
  issue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  solution: null,
};

export const TICKET_COMMENT_1: TicketComment = {
  id: "1",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ticket: TICKET,
  writtenBy: DCRUZ,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const TICKET_COMMENT_2: TicketComment = {
  id: "2",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ticket: TICKET,
  writtenBy: DPASCUAL,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const TICKET_COMMENTS_MOCK: TicketComment[] = [
  TICKET_COMMENT_1,
  TICKET_COMMENT_2,
];

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus];

export const TicketStatus = {
  UNASSIGNED: "UNASSIGNED",
  ASSIGNED: "ASSIGNED",
  IN_PROGRESS: "IN_PROGRESS",
  RESOLVED: "RESOLVED",
  CLOSED: "CLOSED",
  CANCELLED: "CANCELLED",
} as const;

export const TICKET_STATUS_TUPLE: [TicketStatus, ...TicketStatus[]] = [
  TicketStatus.UNASSIGNED,
  TicketStatus.ASSIGNED,
  TicketStatus.IN_PROGRESS,
  TicketStatus.RESOLVED,
  TicketStatus.CLOSED,
  TicketStatus.CANCELLED,
];

////////////////
// Re-exports //
////////////////

export * from "./traces";

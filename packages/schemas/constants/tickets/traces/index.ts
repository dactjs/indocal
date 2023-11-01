export type TicketTraceType =
  (typeof TicketTraceType)[keyof typeof TicketTraceType];

export const TicketTraceType = {
  RECEPTION: "RECEPTION",
  ASSIGNMENT: "ASSIGNMENT",
  TRANSFER: "TRANSFER",
  OPENED: "OPENED",
  RESOLVED: "RESOLVED",
  CLOSED: "CLOSED",
  CANCELLED: "CANCELLED",
} as const;

export const TICKET_TRACE_TYPE_TUPLE: [TicketTraceType, ...TicketTraceType[]] =
  [
    TicketTraceType.RECEPTION,
    TicketTraceType.ASSIGNMENT,
    TicketTraceType.TRANSFER,
    TicketTraceType.OPENED,
    TicketTraceType.RESOLVED,
    TicketTraceType.CLOSED,
    TicketTraceType.CANCELLED,
  ];

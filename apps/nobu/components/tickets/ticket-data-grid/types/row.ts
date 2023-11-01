import type { Ticket } from "@indocal/schemas";

export type TicketDataGridRow = Pick<
  Ticket,
  "id" | "status" | "service" | "assignedTo" | "createdAt" | "updatedAt"
>;

import type { TicketServiceCategory } from "@indocal/schemas";

export const SOFTWARE_CATEGORY: TicketServiceCategory = {
  id: "1",
  name: "Software",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const HARDWARE_CATEGORY: TicketServiceCategory = {
  id: "2",
  name: "Hardware",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const TICKET_SERVICE_CATEGORIES_MOCK: TicketServiceCategory[] = [
  SOFTWARE_CATEGORY,
  HARDWARE_CATEGORY,
];

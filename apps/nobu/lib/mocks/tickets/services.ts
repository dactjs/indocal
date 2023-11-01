import type { TicketService } from "@indocal/schemas";

import { SOFTWARE_CATEGORY, HARDWARE_CATEGORY } from "./categories";

export const SOFTWARE_INSTALLATION_SERVICE: TicketService = {
  id: "1",
  name: "Instalación de software",
  category: SOFTWARE_CATEGORY,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const PRINTER_INSTALLATION_SERVICE: TicketService = {
  id: "2",
  name: "Instalación de impresora",
  category: HARDWARE_CATEGORY,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const TICKET_SERVICES_MOCK: TicketService[] = [
  SOFTWARE_INSTALLATION_SERVICE,
  PRINTER_INSTALLATION_SERVICE,
];

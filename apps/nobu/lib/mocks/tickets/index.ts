import type { Ticket } from "@indocal/schemas";

import { DCRUZ, DPASCUAL } from "../users";

import {
  SOFTWARE_INSTALLATION_SERVICE,
  PRINTER_INSTALLATION_SERVICE,
} from "./services";

const TICKETS_MOCK: Ticket[] = [];

for (let i = 0; i < 300; i++) {
  TICKETS_MOCK.push({
    id: String(i + 1),
    status: "UNASSIGNED",
    issue: `Problema ${i + 1}`,
    solution: null,
    service:
      i % 2 === 0
        ? SOFTWARE_INSTALLATION_SERVICE
        : PRINTER_INSTALLATION_SERVICE,
    assignedTo: null,
    sentBy: i % 2 === 0 ? DCRUZ : DPASCUAL,
    createdAt: getRandomDate().toISOString(),
    updatedAt: getRandomDate().toISOString(),
  });
}

export { TICKETS_MOCK };

// Función para generar una fecha aleatoria en la misma semana
function getRandomDate(): Date {
  const startOfWeek = new Date();

  const currentYear = startOfWeek.getFullYear();
  const currentMonth = startOfWeek.getMonth();
  const currentDay = startOfWeek.getDate();

  const endOfWeek = new Date(currentYear, currentMonth, currentDay + 7);

  const diff = endOfWeek.getTime() - startOfWeek.getTime();
  const salt = Math.round(Math.random() * diff);

  const date = new Date(startOfWeek.getTime() + salt);

  // La hora debe estar entre las 7:00 y las 17:00
  const startHour = 7;
  const endHour = 17;

  date.setHours(startHour + Math.round(Math.random() * (endHour - startHour)));

  // Mes random
  const month = Math.round(Math.random() * 11);

  date.setMonth(month);

  return date;
}

////////////////
// Re-exports //
////////////////

export * from "./services";
export * from "./categories";
export * from "./comments";
export * from "./ticket-traces";

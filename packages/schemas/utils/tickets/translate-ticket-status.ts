import { TicketStatus } from "../../constants";

export function translateTicketStatus(status: TicketStatus): string {
  const translations: Record<TicketStatus, string> = {
    [TicketStatus.UNASSIGNED]: "Sin asignar",
    [TicketStatus.ASSIGNED]: "Asignado",
    [TicketStatus.IN_PROGRESS]: "En progreso",
    [TicketStatus.RESOLVED]: "Resuelto",
    [TicketStatus.CLOSED]: "Cerrado",
    [TicketStatus.CANCELLED]: "Cancelado",
  };

  return translations[status] || status;
}

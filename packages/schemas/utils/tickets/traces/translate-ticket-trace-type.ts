import { TicketTraceType } from "../../../constants";

export function translateTicketTraceType(type: TicketTraceType): string {
  const translations: Record<TicketTraceType, string> = {
    [TicketTraceType.RECEPTION]: "Recepción",
    [TicketTraceType.ASSIGNMENT]: "Asignación",
    [TicketTraceType.TRANSFER]: "Transferencia",
    [TicketTraceType.OPENED]: "Apertura",
    [TicketTraceType.RESOLVED]: "Resolución",
    [TicketTraceType.CLOSED]: "Cierre",
    [TicketTraceType.CANCELLED]: "Cancelación",
  };

  return translations[type] || type;
}

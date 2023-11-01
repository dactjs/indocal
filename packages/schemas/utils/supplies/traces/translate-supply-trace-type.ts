import { SupplyTraceType } from "../../../constants";

export function translateSupplyTraceType(type: SupplyTraceType): string {
  const translations: Record<SupplyTraceType, string> = {
    [SupplyTraceType.INPUT]: "Entrada",
    [SupplyTraceType.ASSIGNMENT]: "Asignación",
    [SupplyTraceType.TRANSFER]: "Transferencia",
    [SupplyTraceType.UNASSIGNMENT]: "Desasignación",
    [SupplyTraceType.REPAIR]: "Reparación",
    [SupplyTraceType.OUTPUT]: "Descargo",
  };

  return translations[type] || type;
}

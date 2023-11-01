import type { Supply } from "@indocal/schemas";

export type SupplyDataGridRow = Pick<
  Supply,
  "id" | "brand" | "model" | "serial"
>;

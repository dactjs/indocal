export type SupplyTraceType =
  (typeof SupplyTraceType)[keyof typeof SupplyTraceType];

export const SupplyTraceType = {
  INPUT: "INPUT",
  ASSIGNMENT: "ASSIGNMENT",
  TRANSFER: "TRANSFER",
  UNASSIGNMENT: "UNASSIGNMENT",
  REPAIR: "REPAIR",
  OUTPUT: "OUTPUT",
} as const;

export const SUPPLY_TRACE_TYPE_TUPLE: [SupplyTraceType, ...SupplyTraceType[]] =
  [
    SupplyTraceType.INPUT,
    SupplyTraceType.ASSIGNMENT,
    SupplyTraceType.TRANSFER,
    SupplyTraceType.OUTPUT,
    SupplyTraceType.OUTPUT,
  ];

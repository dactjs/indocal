import type { SupplyTrace } from "@indocal/schemas";

import { DCRUZ, DPASCUAL } from "../users";

export const GALAXY = {
  id: "2",
  brand: "Samsung",
  model: "Galaxy S10",
  serial: "1234567890",
  assignedTo: null,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const SUPPLY_TRACES_MOCK: SupplyTrace[] = [
  {
    id: "1",
    type: "INPUT",
    supply: GALAXY,
    madeBy: DCRUZ,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    type: "ASSIGNMENT",
    supply: GALAXY,
    madeBy: DCRUZ,
    destination: DCRUZ,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    type: "TRANSFER",
    supply: GALAXY,
    madeBy: DCRUZ,
    origin: DCRUZ,
    destination: DPASCUAL,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    type: "UNASSIGNMENT",
    supply: GALAXY,
    madeBy: DCRUZ,
    origin: DPASCUAL,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "5",
    type: "REPAIR",
    supply: GALAXY,
    madeBy: DCRUZ,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "6",
    type: "INPUT",
    supply: GALAXY,
    madeBy: DCRUZ,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "7",
    type: "OUTPUT",
    supply: GALAXY,
    madeBy: DCRUZ,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

import type { SupplyTrace } from "@indocal/schemas";

import { SUPPLY_TRACES_MOCK } from "~/lib";

import { ClientLastSupplyTraces } from "./client";

export async function ServerLastSupplyTraces(): Promise<React.ReactElement> {
  // TODO: Fetch data from the server
  const traces = await new Promise<SupplyTrace[]>((resolve) => {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      resolve(SUPPLY_TRACES_MOCK);
    }, delay);
  });

  return <ClientLastSupplyTraces traces={traces} />;
}

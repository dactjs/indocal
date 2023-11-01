import type { SupplyTrace } from "@indocal/schemas";

import { SUPPLY_TRACES_MOCK } from "~/lib";

import { ClientSupplyTraceTimeline } from "./client";

export interface ServerSupplyTraceTimelineProps {
  supplyId: string;
}

export async function ServerSupplyTraceTimeline({
  supplyId,
}: ServerSupplyTraceTimelineProps): Promise<React.ReactElement> {
  // TODO: Fetch data from the server
  const traces = await new Promise<SupplyTrace[]>((resolve) => {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      const filtered = SUPPLY_TRACES_MOCK.filter(
        ({ supply }) => supply.id === supplyId
      );

      resolve(filtered);
    }, delay);
  });

  return <ClientSupplyTraceTimeline traces={traces} />;
}

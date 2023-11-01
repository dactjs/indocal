import { Suspense } from "react";

import { TicketsPerMonthChartSkeleton } from "~/components";

import { ServerGeneralTicketsPerMonthChart } from "./server";

export function GeneralTicketsPerMonthChart(): React.ReactElement {
  return (
    <Suspense fallback={<TicketsPerMonthChartSkeleton />}>
      <ServerGeneralTicketsPerMonthChart />
    </Suspense>
  );
}

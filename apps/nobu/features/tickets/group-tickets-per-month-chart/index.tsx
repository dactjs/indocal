import { Suspense } from "react";

import { TicketsPerMonthChartSkeleton } from "~/components";

import { ServerGroupTicketsPerMonthChart } from "./server";

export function GroupTicketsPerMonthChart(): React.ReactElement {
  return (
    <Suspense fallback={<TicketsPerMonthChartSkeleton />}>
      <ServerGroupTicketsPerMonthChart />
    </Suspense>
  );
}

import { Suspense } from "react";

import { TicketsPerMonthChartSkeleton } from "~/components";

import { ServerUserTicketsPerMonthChart } from "./server";

export function UserTicketsPerMonthChart(): React.ReactElement {
  return (
    <Suspense fallback={<TicketsPerMonthChartSkeleton />}>
      <ServerUserTicketsPerMonthChart />
    </Suspense>
  );
}

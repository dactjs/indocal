import { Suspense } from "react";

import { WeekActivityChartSkeleton } from "~/components";

import { ServerCurrentWeekActivityChart } from "./server";

export function CurrentWeekActivityChart(): React.ReactElement {
  return (
    <Suspense fallback={<WeekActivityChartSkeleton />}>
      <ServerCurrentWeekActivityChart />
    </Suspense>
  );
}

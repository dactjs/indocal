import { Suspense } from "react";

import { ServerLastSupplyTraces } from "./server";
import { LastSupplyTracesSkeleton } from "./skeleton";

export function LastSupplyTraces(): React.ReactElement {
  return (
    <Suspense fallback={<LastSupplyTracesSkeleton />}>
      <ServerLastSupplyTraces />
    </Suspense>
  );
}

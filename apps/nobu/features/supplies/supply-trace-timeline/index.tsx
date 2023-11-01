import { Suspense } from "react";

import { ServerSupplyTraceTimeline } from "./server";
import { SupplyTraceTimelineSkeleton } from "./skeleton";

export interface SupplyTraceTimelineProps {
  supplyId: string;
}

export function SupplyTraceTimeline({
  supplyId,
}: SupplyTraceTimelineProps): React.ReactElement {
  return (
    <Suspense fallback={<SupplyTraceTimelineSkeleton />}>
      <ServerSupplyTraceTimeline supplyId={supplyId} />
    </Suspense>
  );
}

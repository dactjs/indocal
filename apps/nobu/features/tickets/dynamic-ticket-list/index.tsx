import { Suspense } from "react";

import { ServerDynamicTicketList } from "./server";
import { DynamicTicketListSkeleton } from "./skeleton";

export function DynamicTicketList(): React.ReactElement {
  return (
    <Suspense fallback={<DynamicTicketListSkeleton />}>
      <ServerDynamicTicketList />
    </Suspense>
  );
}

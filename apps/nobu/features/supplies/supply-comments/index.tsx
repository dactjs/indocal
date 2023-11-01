import { Suspense } from "react";

import { ServerSupplyComments } from "./server";
import { SupplyCommentsSkeleton } from "./skeleton";

export interface SupplyCommentsProps {
  supplyId: string;
}

export function SupplyComments({
  supplyId,
}: SupplyCommentsProps): React.ReactElement {
  return (
    <Suspense fallback={<SupplyCommentsSkeleton />}>
      <ServerSupplyComments supplyId={supplyId} />
    </Suspense>
  );
}

import { Suspense } from "react";

import { ServerSupplyCard } from "./server";
import { SupplyCardSkeleton } from "./skeleton";

export interface SupplyCardProps {
  supplyId: string;
}

export function SupplyCard({ supplyId }: SupplyCardProps): React.ReactElement {
  return (
    <Suspense fallback={<SupplyCardSkeleton />}>
      <ServerSupplyCard supplyId={supplyId} />
    </Suspense>
  );
}

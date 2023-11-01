import { Suspense } from "react";

import { ServerTicketCard } from "./server";
import { TicketCardSkeleton } from "./skeleton";

export interface TicketCardProps {
  ticketId: string;
}

export function TicketCard({ ticketId }: TicketCardProps): React.ReactElement {
  return (
    <Suspense fallback={<TicketCardSkeleton />}>
      <ServerTicketCard ticketId={ticketId} />
    </Suspense>
  );
}

import { Suspense } from "react";

import { ServerTicketComments } from "./server";
import { TicketCommentsSkeleton } from "./skeleton";

export interface TicketCommentsProps {
  ticketId: string;
}

export function TicketComments({
  ticketId,
}: TicketCommentsProps): React.ReactElement {
  return (
    <Suspense fallback={<TicketCommentsSkeleton />}>
      <ServerTicketComments ticketId={ticketId} />
    </Suspense>
  );
}

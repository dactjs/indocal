import { Suspense } from "react";

import { ServerTicketTraceTimeline } from "./server";
import { TicketTraceTimelineSkeleton } from "./skeleton";

export interface TicketTraceTimelineProps {
  ticketId: string;
}

export function TicketTraceTimeline({
  ticketId,
}: TicketTraceTimelineProps): React.ReactElement {
  return (
    <Suspense fallback={<TicketTraceTimelineSkeleton />}>
      <ServerTicketTraceTimeline ticketId={ticketId} />
    </Suspense>
  );
}

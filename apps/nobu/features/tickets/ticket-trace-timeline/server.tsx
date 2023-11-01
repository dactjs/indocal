import type { TicketTrace } from "@indocal/schemas";

import { TICKET_TRACES_MOCK } from "~/lib";

import { ClientTicketTraceTimeline } from "./client";

export interface ServerTicketTraceTimelineProps {
  ticketId: string;
}

export async function ServerTicketTraceTimeline({
  ticketId,
}: ServerTicketTraceTimelineProps): Promise<React.ReactElement> {
  // TODO: Fetch data from the server
  const traces = await new Promise<TicketTrace[]>((resolve) => {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      const filtered = TICKET_TRACES_MOCK.filter(
        ({ ticket }) => ticket.id === ticketId
      );

      resolve(filtered);
    }, delay);
  });

  return <ClientTicketTraceTimeline traces={traces} />;
}

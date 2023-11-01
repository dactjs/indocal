import type { TicketComment } from "@indocal/schemas";

import { TICKET_COMMENTS_MOCK } from "~/lib";

import { ClientTicketComments } from "./client";

export interface ServerTicketCommentsProps {
  ticketId: string;
}

export async function ServerTicketComments({
  ticketId,
}: ServerTicketCommentsProps): Promise<React.ReactElement> {
  // TODO: Fetch data from the server
  const comments = await new Promise<TicketComment[]>((resolve) => {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      const filtered = TICKET_COMMENTS_MOCK.filter(
        ({ ticket }) => ticket.id === ticketId
      );

      resolve(filtered);
    }, delay);
  });

  return <ClientTicketComments comments={comments} />;
}

import type { Ticket } from "@indocal/schemas";

import { TICKETS_MOCK } from "~/lib";

import { ClientTicketCard } from "./client";

export interface ServerTicketCardProps {
  ticketId: string;
}

export async function ServerTicketCard({
  ticketId,
}: ServerTicketCardProps): Promise<React.ReactElement> {
  // TODO: Fetch data from the server
  const ticket = await new Promise<Ticket | null>((resolve) => {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      const target = TICKETS_MOCK.find(({ id }) => id === ticketId);

      resolve(target || null);
    }, delay);
  });

  return <ClientTicketCard ticket={ticket} />;
}

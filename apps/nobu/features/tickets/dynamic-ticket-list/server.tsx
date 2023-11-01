import type { Ticket } from "@indocal/schemas";

import { TICKETS_MOCK } from "~/lib";

import { ClientDynamicTicketList } from "./client";

export async function ServerDynamicTicketList(): Promise<React.ReactElement> {
  // TODO: Fetch data from the server
  const tickets = await new Promise<Ticket[]>((resolve) => {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      resolve(TICKETS_MOCK);
    }, delay);
  });

  return <ClientDynamicTicketList tickets={tickets} />;
}

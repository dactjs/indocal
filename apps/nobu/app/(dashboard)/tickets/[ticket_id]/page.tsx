import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Unstable_Grid2 as Grid } from "@mui/material";

import { Widget } from "@indocal/ui";
import type { Ticket } from "@indocal/schemas";
import { getShortId } from "@indocal/schemas";

import { TICKETS_MOCK } from "~/lib";
import {
  TicketCard,
  TicketTraceTimeline,
  TicketComments,
  UserCard,
} from "~/features";

interface TicketPageParams {
  ticket_id: string;
}

interface TicketPageProps {
  params: TicketPageParams;
}

export function generateMetadata({ params }: TicketPageProps): Metadata {
  return { title: `Ticket ${getShortId(params.ticket_id)}` };
}

export default async function TicketPage({
  params,
}: TicketPageProps): Promise<React.ReactElement> {
  // TODO: Fetch data from the server
  const ticket = await new Promise<Ticket | null>((resolve) => {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      const target = TICKETS_MOCK.find(({ id }) => id === params.ticket_id);

      resolve(target || null);
    }, delay);
  });

  if (!ticket) notFound();

  return (
    <Container fixed sx={{ paddingY: 2 }}>
      <Grid container spacing={1}>
        <Grid xs={12} md={6}>
          <Widget>
            <TicketCard ticketId={ticket.id} />
          </Widget>
        </Grid>

        <Grid xs={12} md={6}>
          <Widget>
            <TicketTraceTimeline ticketId={ticket.id} />
          </Widget>
        </Grid>

        <Grid xs={12} md={7}>
          <Widget>
            <TicketComments ticketId={ticket.id} />
          </Widget>
        </Grid>

        <Grid xs={12} md={5}>
          <Widget>
            <UserCard userId={ticket.sentBy.id} />
          </Widget>
        </Grid>
      </Grid>
    </Container>
  );
}

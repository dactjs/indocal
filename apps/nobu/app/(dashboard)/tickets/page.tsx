import type { Metadata } from "next";
import { Container } from "@mui/material";

import { Widget } from "@indocal/ui";

import { DynamicTicketList } from "~/features";

export const metadata: Metadata = {
  title: "Tickets",
};

export default function TicketsPage(): React.ReactElement {
  return (
    <Container fixed sx={{ height: "100%", padding: 2 }}>
      <Widget disableDefaultSize sx={{ height: "100%" }}>
        <DynamicTicketList />
      </Widget>
    </Container>
  );
}

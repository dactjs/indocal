import type { Metadata } from "next";
import { Container, Unstable_Grid2 as Grid } from "@mui/material";

import { GeneralTicketsPerMonthChart } from "~/features";

import { Widget } from "@indocal/ui";

export const metadata: Metadata = {
  title: "Analíticas generales",
};

export default function GeneralAnalyticsPage(): React.ReactElement {
  return (
    <Container fixed sx={{ paddingY: 2 }}>
      <Grid container spacing={1}>
        <Grid xs={12}>
          <Widget>
            <GeneralTicketsPerMonthChart />
          </Widget>
        </Grid>
      </Grid>
    </Container>
  );
}

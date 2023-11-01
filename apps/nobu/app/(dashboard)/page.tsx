import type { Metadata } from "next";
import { Container, Unstable_Grid2 as Grid } from "@mui/material";

import { Widget } from "@indocal/ui";

import { CurrentWeekActivityChart, LastSupplyTraces } from "~/features";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage(): React.ReactElement {
  return (
    <Container fixed sx={{ paddingY: 2 }}>
      <Grid container spacing={1}>
        <Grid xs={12} md={8}>
          <Widget>
            <CurrentWeekActivityChart />
          </Widget>
        </Grid>

        <Grid xs={12} md={4}>
          <Widget>
            <LastSupplyTraces />
          </Widget>
        </Grid>
      </Grid>
    </Container>
  );
}

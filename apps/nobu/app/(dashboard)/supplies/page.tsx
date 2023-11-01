import type { Metadata } from "next";
import { Container, Unstable_Grid2 as Grid } from "@mui/material";

import { Widget } from "@indocal/ui";

import { DynamicSupplyDataGrid, LastSupplyTraces } from "~/features";

export const metadata: Metadata = {
  title: "Recursos",
};

export default function SuppliesPage(): React.ReactElement {
  return (
    <Container fixed sx={{ paddingY: 2 }}>
      <Grid container spacing={1}>
        <Grid xs={12} md={8}>
          <Widget>
            <DynamicSupplyDataGrid />
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

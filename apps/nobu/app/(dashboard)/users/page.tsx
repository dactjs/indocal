import type { Metadata } from "next";
import { Container, Unstable_Grid2 as Grid } from "@mui/material";

import { Widget } from "@indocal/ui";

import { DynamicUserDataGrid, GroupList } from "~/features";

export const metadata: Metadata = {
  title: "Usuarios",
};

export default function UsersPage(): React.ReactElement {
  return (
    <Container fixed sx={{ paddingY: 2 }}>
      <Grid container spacing={1}>
        <Grid xs={12} md={8}>
          <Widget>
            <DynamicUserDataGrid />
          </Widget>
        </Grid>

        <Grid xs={12} md={4}>
          <Widget>
            <GroupList />
          </Widget>
        </Grid>
      </Grid>
    </Container>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Unstable_Grid2 as Grid } from "@mui/material";

import { Widget } from "@indocal/ui";
import type { Supply } from "@indocal/schemas";
import { getShortId } from "@indocal/schemas";

import { SUPPLIES_MOCK } from "~/lib";
import {
  SupplyCard,
  SupplyTraceTimeline,
  SupplyComments,
  UserCard,
} from "~/features";

interface SupplyPageParams {
  supply_id: string;
}

interface SupplyPageProps {
  params: SupplyPageParams;
}

export function generateMetadata({ params }: SupplyPageProps): Metadata {
  return { title: `Recurso ${getShortId(params.supply_id)}` };
}

export default async function SupplyPage({
  params,
}: SupplyPageProps): Promise<React.ReactElement> {
  // TODO: Fetch data from the server
  const supply = await new Promise<Supply | null>((resolve) => {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      const target = SUPPLIES_MOCK.find(({ id }) => id === params.supply_id);

      resolve(target || null);
    }, delay);
  });

  if (!supply) notFound();

  if (supply.assignedTo) {
    return (
      <Container fixed sx={{ paddingY: 2 }}>
        <Grid container spacing={1}>
          <Grid xs={12} md={5}>
            <Widget>
              <SupplyCard supplyId={supply.id} />
            </Widget>
          </Grid>

          <Grid xs={12} md={7}>
            <Widget>
              <SupplyTraceTimeline supplyId={supply.id} />
            </Widget>
          </Grid>

          <Grid xs={12} md={7}>
            <Widget>
              <SupplyComments supplyId={supply.id} />
            </Widget>
          </Grid>

          <Grid xs={12} md={5}>
            <Widget>
              <UserCard userId={supply.assignedTo.id} />
            </Widget>
          </Grid>
        </Grid>
      </Container>
    );
  }

  return (
    <Container fixed sx={{ paddingY: 2 }}>
      <Grid container spacing={1}>
        <Grid xs={12} md={5}>
          <Widget>
            <SupplyCard supplyId={supply.id} />
          </Widget>
        </Grid>

        <Grid xs={12} md={7}>
          <Widget>
            <SupplyTraceTimeline supplyId={supply.id} />
          </Widget>
        </Grid>

        <Grid xs={12}>
          <Widget>
            <SupplyComments supplyId={supply.id} />
          </Widget>
        </Grid>
      </Grid>
    </Container>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Unstable_Grid2 as Grid } from "@mui/material";

import { Widget } from "@indocal/ui";
import type { User } from "@indocal/schemas";
import { getShortId } from "@indocal/schemas";

import { USERS_MOCK } from "~/lib";
import {
  UserCard,
  DynamicUserTicketDataGrid,
  DynamicUserSupplyDataGrid,
  UserGroupList,
} from "~/features";

interface UserPageParams {
  user_id: string;
}

interface UserPageProps {
  params: UserPageParams;
}

export function generateMetadata({ params }: UserPageProps): Metadata {
  return { title: `Usuario ${getShortId(params.user_id)}` };
}

export default async function UserPage({
  params,
}: UserPageProps): Promise<React.ReactElement> {
  // TODO: Fetch data from the server
  const user = await new Promise<User | null>((resolve) => {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      const target = USERS_MOCK.find(({ id }) => id === params.user_id);

      resolve(target || null);
    }, delay);
  });

  if (!user) notFound();

  return (
    <Container fixed sx={{ paddingY: 2 }}>
      <Grid container spacing={1}>
        <Grid xs={12} md={5}>
          <Widget>
            <UserCard userId={user.id} />
          </Widget>
        </Grid>

        <Grid xs={12} md={7}>
          <Widget>
            <DynamicUserTicketDataGrid userId={user.id} />
          </Widget>
        </Grid>

        <Grid xs={12} md={7}>
          <Widget>
            <DynamicUserSupplyDataGrid userId={user.id} />
          </Widget>
        </Grid>

        <Grid xs={12} md={5}>
          <Widget>
            <UserGroupList userId={user.id} />
          </Widget>
        </Grid>
      </Grid>
    </Container>
  );
}

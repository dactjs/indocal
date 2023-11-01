import type { User } from "@indocal/schemas";

import { USERS_MOCK } from "~/lib";

import { ClientUserCard } from "./client";

export interface ServerUserCardProps {
  userId: string;
}

export async function ServerUserCard({
  userId,
}: ServerUserCardProps): Promise<React.ReactElement> {
  // TODO: Fetch data from the server
  const user = await new Promise<User | null>((resolve) => {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      const target = USERS_MOCK.find(({ id }) => id === userId);

      resolve(target || null);
    }, delay);
  });

  return <ClientUserCard user={user} />;
}

import type { UserGroup } from "@indocal/schemas";

import { GROUPS_MOCK } from "~/lib";
import { GroupList } from "~/components";

export interface ServerUserGroupListProps {
  userId: string;
}

export async function ServerUserGroupList({
  userId,
}: ServerUserGroupListProps): Promise<React.ReactElement> {
  // TODO: Fetch data from the server
  const groups = await new Promise<UserGroup[]>((resolve) => {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      const filtered = GROUPS_MOCK.filter(({ id }) => id === userId);

      resolve(filtered);
    }, delay);
  });

  return <GroupList title="Grupos a los que pertenece" groups={groups} />;
}

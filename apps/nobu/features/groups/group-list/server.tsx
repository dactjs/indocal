import type { UserGroup } from "@indocal/schemas";

import { GROUPS_MOCK } from "~/lib";
import { GroupList } from "~/components";

export async function ServerGroupList(): Promise<React.ReactElement> {
  // TODO: Fetch data from the server
  const groups = await new Promise<UserGroup[]>((resolve) => {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      resolve(GROUPS_MOCK);
    }, delay);
  });

  return <GroupList title="Grupos" groups={groups} />;
}

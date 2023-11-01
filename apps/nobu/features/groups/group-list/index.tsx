import { Suspense } from "react";

import { GroupListSkeleton } from "~/components";

import { ServerGroupList } from "./server";

export function GroupList(): React.ReactElement {
  return (
    <Suspense fallback={<GroupListSkeleton />}>
      <ServerGroupList />
    </Suspense>
  );
}

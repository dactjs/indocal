import { Suspense } from "react";

import { GroupListSkeleton } from "~/components";

import { ServerUserGroupList } from "./server";

export interface UserGroupListProps {
  userId: string;
}

export function UserGroupList({
  userId,
}: UserGroupListProps): React.ReactElement {
  return (
    <Suspense fallback={<GroupListSkeleton />}>
      <ServerUserGroupList userId={userId} />
    </Suspense>
  );
}

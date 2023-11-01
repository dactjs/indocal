import { Suspense } from "react";

import { ServerUserCard } from "./server";
import { UserCardSkeleton } from "./skeleton";

export interface UserCardProps {
  userId: string;
}

export function UserCard({ userId }: UserCardProps): React.ReactElement {
  return (
    <Suspense fallback={<UserCardSkeleton />}>
      <ServerUserCard userId={userId} />
    </Suspense>
  );
}

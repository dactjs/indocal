import type { SupplyComment } from "@indocal/schemas";

import { SUPPLY_COMMENTS_MOCK } from "~/lib";

import { ClientSupplyComments } from "./client";

export interface ServerSupplyCommentsProps {
  supplyId: string;
}

export async function ServerSupplyComments({
  supplyId,
}: ServerSupplyCommentsProps): Promise<React.ReactElement> {
  // TODO: Fetch data from the server
  const comments = await new Promise<SupplyComment[]>((resolve) => {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      const filtered = SUPPLY_COMMENTS_MOCK.filter(
        ({ supply }) => supply.id === supplyId
      );

      resolve(filtered);
    }, delay);
  });

  return <ClientSupplyComments comments={comments} />;
}

import type { Supply } from "@indocal/schemas";

import { SUPPLIES_MOCK } from "~/lib";

import { ClientSupplyCard } from "./client";

export interface ServerSupplyCardProps {
  supplyId: string;
}

export async function ServerSupplyCard({
  supplyId,
}: ServerSupplyCardProps): Promise<React.ReactElement> {
  // TODO: Fetch data from the server
  const supply = await new Promise<Supply | null>((resolve) => {
    const delay = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      const target = SUPPLIES_MOCK.find(({ id }) => id === supplyId);

      resolve(target || null);
    }, delay);
  });

  return <ClientSupplyCard supply={supply} />;
}

import { SUPPLIES_MOCK } from "~/lib";
import { SupplyDataGrid } from "~/components";

export interface DynamicUserSupplyDataGridProps {
  userId: string;
}

export function DynamicUserSupplyDataGrid({
  userId,
}: DynamicUserSupplyDataGridProps): React.ReactElement {
  // TODO: Fetch data from the server
  const filtered = SUPPLIES_MOCK.filter(
    ({ assignedTo }) => assignedTo && assignedTo.id === userId
  );

  const title = `Recursos asignados (${filtered.length})`;

  return <SupplyDataGrid title={title} supplies={filtered} />;
}

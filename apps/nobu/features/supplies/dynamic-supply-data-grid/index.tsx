import { SUPPLIES_MOCK } from "~/lib";
import { SupplyDataGrid } from "~/components";

export function DynamicSupplyDataGrid(): React.ReactElement {
  const title = `Recursos (${SUPPLIES_MOCK.length})`;

  // TODO: Fetch data from the server
  return <SupplyDataGrid title={title} supplies={SUPPLIES_MOCK} />;
}

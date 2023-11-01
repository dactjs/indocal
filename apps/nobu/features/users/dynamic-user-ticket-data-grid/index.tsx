import { TICKETS_MOCK } from "~/lib";
import { TicketDataGrid } from "~/components";

export interface DynamicUserTicketDataGridProps {
  userId: string;
}

export function DynamicUserTicketDataGrid({
  userId,
}: DynamicUserTicketDataGridProps): React.ReactElement {
  // TODO: Fetch data from the server
  const filtered = TICKETS_MOCK.filter(({ sentBy }) => sentBy.id === userId);

  const title = `Tickets enviados (${filtered.length})`;

  return <TicketDataGrid title={title} tickets={filtered} />;
}

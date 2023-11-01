import { USERS_MOCK } from "~/lib";
import { UserDataGrid } from "~/components";

export function DynamicUserDataGrid(): React.ReactElement {
  const title = `Usuarios (${USERS_MOCK.length})`;

  // TODO: Fetch data from the server
  return <UserDataGrid title={title} users={USERS_MOCK} />;
}

import { Dashboard } from "@indocal/ui";

import { navigation } from "./_config";

interface DashboardLayoutProps {
  children: React.ReactElement;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps): React.ReactElement {
  return <Dashboard navigation={navigation}>{children}</Dashboard>;
}

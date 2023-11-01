import { Box } from "@mui/material";

import { DashboardProvider } from "./context";
import {
  DashboardAppBar,
  DashboardDrawer,
  DashboardContent,
} from "./components";
import type { Navigation } from "./types";

interface DashboardProps {
  drawerHeader?: React.ReactElement;
  navigation: Navigation;
  drawerFooter?: React.ReactElement;
  children: React.ReactElement;
}

function Dashboard({
  drawerHeader,
  navigation,
  drawerFooter,
  children,
}: DashboardProps): React.ReactElement {
  return (
    <Box sx={{ display: "flex" }}>
      <DashboardAppBar />

      <DashboardDrawer
        header={drawerHeader}
        navigation={navigation}
        footer={drawerFooter}
      />

      <DashboardContent>{children}</DashboardContent>
    </Box>
  );
}

interface DashboardWrapperProps {
  drawerHeader?: React.ReactElement;
  navigation: Navigation;
  drawerFooter?: React.ReactElement;
  children: React.ReactElement;
}

function DashboardWrapper({
  drawerHeader,
  navigation,
  drawerFooter,
  children,
}: DashboardWrapperProps): React.ReactElement {
  return (
    <DashboardProvider>
      <Dashboard
        drawerHeader={drawerHeader}
        navigation={navigation}
        drawerFooter={drawerFooter}
      >
        {children}
      </Dashboard>
    </DashboardProvider>
  );
}

export { DashboardWrapper as Dashboard };
export type { DashboardWrapperProps as DashboardProps };

////////////////
// Re-exports //
////////////////

export * from "./config";
export * from "./types";

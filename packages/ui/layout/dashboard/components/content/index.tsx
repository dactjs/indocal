import { Box } from "@mui/material";

import { APP_BAR_HEIGHT } from "../../config";

export interface DashboardContentProps {
  children: React.ReactElement;
}

export function DashboardContent({
  children,
}: DashboardContentProps): React.ReactElement {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: APP_BAR_HEIGHT, overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: `calc(100vh - ${APP_BAR_HEIGHT})`,
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

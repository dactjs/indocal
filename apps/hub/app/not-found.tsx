import { Box } from "@mui/material";

import { NotFound } from "@indocal/ui";

export default function RootNotFound(): React.ReactElement {
  return (
    <Box
      sx={{
        display: "grid",
        placeContent: "center",
        placeItems: "center",
        width: "100vw",
        height: "100vh",
        padding: 4,
        overflow: "auto",
      }}
    >
      <NotFound />
    </Box>
  );
}

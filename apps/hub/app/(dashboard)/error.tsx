"use client";

import { Box, Button } from "@mui/material";
import { RestartAlt as ResetIcon } from "@mui/icons-material";

import { ErrorInfo } from "@indocal/ui";

export interface DashboardErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function DashboardError({
  error,
  reset,
}: DashboardErrorProps): React.ReactElement {
  const handleReset = (): void => {
    reset();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <ErrorInfo error={error} />

      <Button
        variant="contained"
        size="small"
        color="primary"
        endIcon={<ResetIcon />}
        onClick={handleReset}
      >
        Volver a intentar
      </Button>
    </Box>
  );
}

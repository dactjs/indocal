"use client";

import { Box, Button } from "@mui/material";
import { RestartAlt as ResetIcon } from "@mui/icons-material";

import { ErrorInfo } from "@indocal/ui";

export interface RootErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RootError({
  error,
  reset,
}: RootErrorProps): React.ReactElement {
  const handleReset = (): void => {
    reset();
  };

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
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
    </Box>
  );
}

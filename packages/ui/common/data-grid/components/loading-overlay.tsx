"use client";

import { LinearProgress } from "@mui/material";
import { GridLoadingOverlay, useGridApiContext } from "@mui/x-data-grid";

export function DataGridLoadingOverlay(): React.ReactElement {
  const { current } = useGridApiContext();

  return current.getRowsCount() ? <LinearProgress /> : <GridLoadingOverlay />;
}

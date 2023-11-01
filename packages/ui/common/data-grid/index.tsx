"use client";

import { Paper, Stack, Divider, Typography } from "@mui/material";
import type { DataGridProps as MuiDataGridProps } from "@mui/x-data-grid";
import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";

import {
  DataGridToolbar,
  DataGridLoadingOverlay,
  DataGridNoRowsOverlay,
} from "./components";

export interface DataGridProps
  extends Omit<
    MuiDataGridProps,
    | "disableColumnFilter"
    | "disableColumnSelector"
    | "disableDensitySelector"
    | "disableColumnMenu"
    | "disableRowSelectionOnClick"
    | "components"
    | "componentsProps"
    | "slots"
    | "slotProps"
  > {
  title: string;
}

export function DataGrid({
  title,
  ...rest
}: DataGridProps): React.ReactElement {
  return (
    <Stack
      component={Paper}
      divider={<Divider flexItem />}
      sx={{ height: "100%" }}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{ height: 50, paddingX: 2 }}
      >
        <Typography
          variant="h6"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
            lineClamp: 1,
            textOverflow: "ellipsis",
            overflow: "hidden",
            wordBreak: "break-word",
          }}
        >
          {title}
        </Typography>
      </Stack>

      <Stack sx={{ height: "calc(100% - 50px)" }}>
        <MuiDataGrid
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          disableColumnMenu
          disableRowSelectionOnClick
          slots={{
            toolbar: DataGridToolbar,
            loadingOverlay: DataGridLoadingOverlay,
            noRowsOverlay: DataGridNoRowsOverlay,
            noResultsOverlay: DataGridNoRowsOverlay,
          }}
          sx={{ border: "none" }}
          {...rest}
        />
      </Stack>
    </Stack>
  );
}

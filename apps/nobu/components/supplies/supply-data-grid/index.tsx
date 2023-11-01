"use client";

import NextLink from "next/link";
import { Paper, Stack, IconButton } from "@mui/material";
import {
  Launch as ViewDetailsIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import type { GridColDef, GridRowsProp } from "@mui/x-data-grid";

import { DataGrid } from "@indocal/ui";
import type { Supply } from "@indocal/schemas";
import { getShortId } from "@indocal/schemas";

import { PAGES } from "~/constants";

import type { SupplyDataGridRow } from "./types";

export interface SupplyDataGridProps {
  title: string;
  supplies: Supply[];
}

export function SupplyDataGrid({
  title,
  supplies,
}: SupplyDataGridProps): React.ReactElement {
  const columns: GridColDef<SupplyDataGridRow>[] = [
    {
      field: "actions",
      headerName: "Acciones",
      headerAlign: "center",
      align: "center",
      width: 150,
      sortable: false,
      disableExport: true,
      renderCell: ({ id }) => (
        <Stack direction="row" spacing={0.25}>
          <IconButton
            LinkComponent={NextLink}
            href={`${PAGES.SUPPLIES}/${id}`}
            size="small"
          >
            <ViewDetailsIcon />
          </IconButton>

          <IconButton size="small">
            <EditIcon />
          </IconButton>

          <IconButton size="small">
            <DeleteIcon color="error" />
          </IconButton>
        </Stack>
      ),
    },
    {
      field: "id",
      headerName: "ID",
      headerAlign: "center",
      align: "center",
      minWidth: 100,
      flex: 1,
      valueGetter: ({ row }) => getShortId(row.id),
    },
    {
      field: "brand",
      headerName: "Marca",
      headerAlign: "center",
      align: "center",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "model",
      headerName: "Modelo",
      headerAlign: "center",
      align: "center",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "serial",
      headerName: "Número de serie",
      headerAlign: "center",
      align: "center",
      minWidth: 225,
      flex: 1,
    },
  ];

  const rows: GridRowsProp<SupplyDataGridRow> = supplies.map(
    ({ id, brand, model, serial }) => ({
      id,
      brand,
      model,
      serial,
    })
  );

  return (
    <Paper sx={{ height: "100%" }}>
      <DataGrid title={title} rows={rows} columns={columns} />
    </Paper>
  );
}

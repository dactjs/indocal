"use client";

import NextLink from "next/link";
import { Paper, Stack, IconButton, Chip } from "@mui/material";
import { Launch as ViewDetailsIcon } from "@mui/icons-material";
import type { GridColDef, GridRowsProp } from "@mui/x-data-grid";

import { DataGrid } from "@indocal/ui";
import type { Ticket } from "@indocal/schemas";
import {
  getShortId,
  translateTicketStatus,
  TicketStatus,
} from "@indocal/schemas";

import { PAGES } from "~/constants";

import type { TicketDataGridRow } from "./types";

export interface TicketDataGridProps {
  title: string;
  tickets: Ticket[];
}

export function TicketDataGrid({
  title,
  tickets,
}: TicketDataGridProps): React.ReactElement {
  const colorByStatus = {
    [TicketStatus.UNASSIGNED]: "default",
    [TicketStatus.ASSIGNED]: "info",
    [TicketStatus.IN_PROGRESS]: "warning",
    [TicketStatus.RESOLVED]: "success",
    [TicketStatus.CLOSED]: "success",
    [TicketStatus.CANCELLED]: "error",
  } as const;

  const columns: GridColDef<TicketDataGridRow>[] = [
    {
      field: "actions",
      headerName: "Acciones",
      headerAlign: "center",
      align: "center",
      width: 100,
      sortable: false,
      disableExport: true,
      renderCell: ({ id }) => (
        <Stack direction="row" spacing={0.25}>
          <IconButton
            LinkComponent={NextLink}
            href={`${PAGES.TICKETS}/${id}`}
            size="small"
          >
            <ViewDetailsIcon />
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
      field: "service",
      headerName: "Servicio",
      headerAlign: "center",
      align: "center",
      minWidth: 300,
      flex: 1,
      valueGetter: ({ row }) =>
        `${row.service.name} - ${row.service.category.name}`,
    },
    {
      field: "status",
      headerName: "Estado",
      headerAlign: "center",
      align: "center",
      minWidth: 200,
      flex: 1,
      valueGetter: ({ row }) => translateTicketStatus(row.status),
      renderCell: ({ value, row }) => (
        <Chip
          size="small"
          label={String(value)}
          color={colorByStatus[row.status]}
        />
      ),
    },
    {
      field: "assignedTo",
      headerName: "Soporte asignado",
      headerAlign: "center",
      align: "center",
      minWidth: 200,
      flex: 1,
      valueGetter: ({ row }) =>
        row.assignedTo ? row.assignedTo.name : "Sin asignar",
    },
    {
      field: "createdAt",
      headerName: "Fecha de creación",
      headerAlign: "center",
      align: "center",
      minWidth: 225,
      flex: 1,
      valueFormatter: ({ value }) => new Date(value).toLocaleString("es-do"),
    },
    {
      field: "updatedAt",
      headerName: "Ultima actualización",
      headerAlign: "center",
      align: "center",
      minWidth: 225,
      flex: 1,
      valueFormatter: ({ value }) => new Date(value).toLocaleString("es-do"),
    },
  ];

  const rows: GridRowsProp<TicketDataGridRow> = tickets.map(
    ({ id, status, service, assignedTo, createdAt, updatedAt }) => ({
      id,
      status,
      service,
      assignedTo,
      createdAt,
      updatedAt,
    })
  );

  return (
    <Paper sx={{ height: "100%" }}>
      <DataGrid title={title} rows={rows} columns={columns} />
    </Paper>
  );
}

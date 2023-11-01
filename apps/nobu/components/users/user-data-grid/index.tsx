"use client";

import NextLink from "next/link";
import { Paper, Stack, IconButton, Chip } from "@mui/material";
import {
  Launch as ViewDetailsIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import type { GridColDef, GridRowsProp } from "@mui/x-data-grid";

import { DataGrid } from "@indocal/ui";
import type { User } from "@indocal/schemas";
import { getShortId, translateUserStatus, UserStatus } from "@indocal/schemas";

import { PAGES } from "~/constants";

import type { UserDataGridRow } from "./types";

export interface UserDataGridProps {
  title: string;
  users: User[];
}

export function UserDataGrid({
  title,
  users,
}: UserDataGridProps): React.ReactElement {
  const colorByStatus = {
    [UserStatus.ENABLED]: "success",
    [UserStatus.DISABLED]: "warning",
  } as const;

  const columns: GridColDef<UserDataGridRow>[] = [
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
            href={`${PAGES.USERS}/${id}`}
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
      field: "name",
      headerName: "Nombre",
      headerAlign: "center",
      align: "center",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "username",
      headerName: "Usuario",
      headerAlign: "center",
      align: "center",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "email",
      headerName: "Correo electrónico",
      headerAlign: "center",
      align: "center",
      minWidth: 250,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Estado",
      headerAlign: "center",
      align: "center",
      minWidth: 175,
      flex: 1,
      valueGetter: ({ row }) => translateUserStatus(row.status),
      renderCell: ({ value, row }) => (
        <Chip
          size="small"
          label={String(value)}
          color={colorByStatus[row.status]}
        />
      ),
    },
  ];

  const rows: GridRowsProp<UserDataGridRow> = users.map(
    ({ id, username, email, name, status }) => ({
      id,
      username,
      email,
      name,
      status,
    })
  );

  return (
    <Paper sx={{ height: "100%" }}>
      <DataGrid title={title} rows={rows} columns={columns} />
    </Paper>
  );
}

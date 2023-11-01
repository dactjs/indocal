"use client";

import NextLink from "next/link";
import {
  Paper,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  Launch as ViewDetailsIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

import { NotFound } from "@indocal/ui";
import type { Supply } from "@indocal/schemas";

import { PAGES } from "~/constants";

export interface ClientSupplyCardProps {
  supply: Supply | null;
}

export function ClientSupplyCard({
  supply,
}: ClientSupplyCardProps): React.ReactElement {
  if (!supply) {
    return (
      <Paper sx={{ height: "100%" }}>
        <NotFound
          caption="Recurso no encontrado"
          description="El servidor web no pudo encontrar el recurso solicitado"
        />
      </Paper>
    );
  }

  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardHeader
        subheader="Detalles del recurso"
        action={
          <Tooltip title="Ver detalles">
            <IconButton
              LinkComponent={NextLink}
              href={`${PAGES.SUPPLIES}/${supply.id}`}
              size="small"
            >
              <ViewDetailsIcon />
            </IconButton>
          </Tooltip>
        }
      />

      <CardContent
        sx={{
          height: "100%",
          overflowY: "auto",
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemText primary="Marca" secondary={supply.brand} />
          </ListItem>

          <ListItem disablePadding>
            <ListItemText primary="Modelo" secondary={supply.model} />
          </ListItem>

          <ListItem disablePadding>
            <ListItemText primary="Número de serie" secondary={supply.serial} />
          </ListItem>

          <ListItem disablePadding>
            <ListItemText
              primary="Fecha de creación"
              secondary={new Date(supply.createdAt).toLocaleString("es-do")}
            />
          </ListItem>

          <ListItem disablePadding>
            <ListItemText
              primary="Última actualización"
              secondary={new Date(supply.updatedAt).toLocaleString("es-do")}
            />
          </ListItem>
        </List>
      </CardContent>

      <CardActions sx={{ justifyContent: "center", marginTop: "auto" }}>
        <Tooltip title="Editar">
          <IconButton size="small">
            <EditIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Eliminar">
          <IconButton size="small">
            <DeleteIcon color="error" />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

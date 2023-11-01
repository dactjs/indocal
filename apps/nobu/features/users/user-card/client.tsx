"use client";

import NextLink from "next/link";
import {
  Paper,
  Stack,
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
  QueryStats as ViewAnalyticsIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

import { NotFound } from "@indocal/ui";
import type { User } from "@indocal/schemas";
import { translateUserStatus, translateUserRole } from "@indocal/schemas";

import { ENV, PAGES } from "~/constants";

export interface ClientUserCardProps {
  user: User | null;
}

export function ClientUserCard({
  user,
}: ClientUserCardProps): React.ReactElement {
  const analyticsUrl = new URL(PAGES.USER_ANALYTICS, ENV.NEXT_PUBLIC_SITE_URL);

  if (!user) {
    return (
      <Paper sx={{ height: "100%" }}>
        <NotFound
          caption="Usuario no encontrado"
          description="El servidor web no pudo encontrar el usuario solicitado"
        />
      </Paper>
    );
  }

  analyticsUrl.searchParams.append("user", user.id);

  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardHeader
        subheader="Detalles del usuario"
        action={
          <Stack direction="row" spacing={0.25}>
            <Tooltip title="Ver analíticas">
              <IconButton
                LinkComponent={NextLink}
                href={analyticsUrl.toString()}
                size="small"
              >
                <ViewAnalyticsIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Ver detalles">
              <IconButton
                LinkComponent={NextLink}
                href={`${PAGES.USERS}/${user.id}`}
                size="small"
              >
                <ViewDetailsIcon />
              </IconButton>
            </Tooltip>
          </Stack>
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
            <ListItemText primary="Usuario" secondary={user.username} />
          </ListItem>

          <ListItem disablePadding>
            <ListItemText primary="Nombre" secondary={user.name} />
          </ListItem>

          <ListItem disablePadding>
            <ListItemText primary="Correo electrónico" secondary={user.email} />
          </ListItem>

          <ListItem disablePadding>
            <ListItemText
              primary="Estado"
              secondary={translateUserStatus(user.status)}
            />
          </ListItem>

          <ListItem disablePadding>
            <ListItemText
              primary="Roles"
              secondary={new Intl.ListFormat("es-do").format(
                user.roles.map((role) => translateUserRole(role))
              )}
            />
          </ListItem>

          <ListItem disablePadding>
            <ListItemText
              primary="Fecha de creación"
              secondary={new Date(user.createdAt).toLocaleString("es-do")}
            />
          </ListItem>

          <ListItem disablePadding>
            <ListItemText
              primary="Última actualización"
              secondary={new Date(user.updatedAt).toLocaleString("es-do")}
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

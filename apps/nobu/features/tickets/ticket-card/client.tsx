"use client";

import NextLink from "next/link";
import {
  Paper,
  Stack,
  Divider,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  Launch as ViewDetailsIcon,
  Assignment as TakeIcon,
  AssignmentInd as AssignIcon,
  CheckCircle as CloseIcon,
  Cancel as CancelIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

import { NotFound } from "@indocal/ui";
import type { Ticket } from "@indocal/schemas";
import { getShortId } from "@indocal/schemas";

import { PAGES } from "~/constants";

export interface ClientTicketCardProps {
  ticket: Ticket | null;
}

export function ClientTicketCard({
  ticket,
}: ClientTicketCardProps): React.ReactElement {
  if (!ticket) {
    return (
      <Paper sx={{ height: "100%" }}>
        <NotFound
          caption="Ticket no encontrado"
          description="El servidor web no pudo encontrar el ticket solicitado"
        />
      </Paper>
    );
  }

  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardHeader
        subheader={`Ticket ID: ${getShortId(ticket.id)}`}
        action={
          <Tooltip title="Ver detalles">
            <IconButton
              LinkComponent={NextLink}
              href={`${PAGES.TICKETS}/${ticket.id}`}
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
        <Stack spacing={1} divider={<Divider flexItem />}>
          <Typography variant="h6" fontWeight="bolder" color="warning.main">
            {`${ticket.service.category.name} - ${ticket.service.name}`}
          </Typography>

          {/* TODO: add <ReadOnlyRichText /> */}
          <Typography>{ticket.issue}</Typography>

          {/* TODO: add solution with <ReadOnlyRichText /> */}
          {Boolean(ticket.solution) && (
            <Typography>{ticket.solution}</Typography>
          )}
        </Stack>
      </CardContent>

      <CardActions sx={{ justifyContent: "center", marginTop: "auto" }}>
        <Tooltip title="Tomar">
          <IconButton size="small">
            <TakeIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Asignar">
          <IconButton size="small">
            <AssignIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Cerrar">
          <IconButton size="small">
            <CloseIcon color="success" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Cancelar">
          <IconButton size="small">
            <CancelIcon color="error" />
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

"use client";

import NextLink from "next/link";
import {
  Paper,
  List,
  ListSubheader,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Input as InputIcon,
  AssignmentInd as AssignmentIcon,
  SwapHoriz as TransferIcon,
  AssignmentReturn as UnassignmentIcon,
  Hardware as RepairIcon,
  Output as OutputIcon,
} from "@mui/icons-material";

import { NoData } from "@indocal/ui";
import type { SupplyTrace } from "@indocal/schemas";
import { SupplyTraceType } from "@indocal/schemas";

import { PAGES } from "~/constants";

interface ClientLastSupplyTracesProps {
  traces: SupplyTrace[];
}

export function ClientLastSupplyTraces({
  traces,
}: ClientLastSupplyTracesProps): React.ReactElement {
  const icons: Record<SupplyTraceType, React.ReactElement> = {
    [SupplyTraceType.INPUT]: <InputIcon color="success" />,
    [SupplyTraceType.ASSIGNMENT]: <AssignmentIcon color="warning" />,
    [SupplyTraceType.TRANSFER]: <TransferIcon color="info" />,
    [SupplyTraceType.UNASSIGNMENT]: <UnassignmentIcon color="action" />,
    [SupplyTraceType.REPAIR]: <RepairIcon color="disabled" />,
    [SupplyTraceType.OUTPUT]: <OutputIcon color="error" />,
  };

  return (
    <Paper sx={{ height: "100%", overflowY: "auto" }}>
      {traces.length > 0 ? (
        <List dense disablePadding>
          <ListSubheader>Últimos movimientos de inventario</ListSubheader>

          {traces.map((trace) => {
            const supply = `${trace.supply.brand} ${trace.supply.model}`;

            const timestamp = new Date(trace.createdAt);

            return (
              <ListItem key={trace.id} divider disableGutters>
                <ListItemButton
                  LinkComponent={NextLink}
                  href={`${PAGES.SUPPLIES}/${trace.supply.id}`}
                >
                  <ListItemIcon>{icons[trace.type]}</ListItemIcon>

                  <ListItemText
                    primary={supply}
                    secondary={timestamp.toLocaleString("es-do")}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <NoData message="Sin movimientos" />
      )}
    </Paper>
  );
}

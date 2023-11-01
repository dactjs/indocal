"use client";

import { Stack, Dialog, DialogTitle, DialogContent } from "@mui/material";
import { ArrowForward as ArrowRightIcon } from "@mui/icons-material";

import { SupplyTraceType } from "@indocal/schemas";

import { useSupplyTraceTimeline } from "../context";

import { SupplyCard } from "./supply-card";
import { UserCard } from "./user-card";

export function SupplyTraceDetailsDialog(): React.ReactNode {
  const { selectedTrace, unselectTrace } = useSupplyTraceTimeline();

  const handleClose = (): void => {
    unselectTrace();
  };

  if (!selectedTrace) return null;

  return (
    <Dialog open={Boolean(selectedTrace)} onClose={handleClose}>
      <DialogTitle>Detalles del movimiento</DialogTitle>

      <DialogContent dividers>
        <Stack justifyContent="center" alignItems="center" spacing={2}>
          <SupplyCard supply={selectedTrace.supply} />

          {selectedTrace.type === SupplyTraceType.ASSIGNMENT && (
            <UserCard title="Destino" user={selectedTrace.destination} />
          )}

          {selectedTrace.type === SupplyTraceType.TRANSFER && (
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <UserCard title="Origen" user={selectedTrace.origin} />

              <ArrowRightIcon />

              <UserCard title="Destino" user={selectedTrace.destination} />
            </Stack>
          )}

          {selectedTrace.type === SupplyTraceType.UNASSIGNMENT && (
            <UserCard title="Origen" user={selectedTrace.origin} />
          )}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

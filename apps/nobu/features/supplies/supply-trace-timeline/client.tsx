"use client";

import {
  Paper,
  Stack,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import {
  AddCircle as AddIcon,
  Input as InputIcon,
  AssignmentInd as AssignmentIcon,
  SwapHoriz as TransferIcon,
  AssignmentReturn as UnassignmentIcon,
  Hardware as RepairIcon,
  Output as OutputIcon,
} from "@mui/icons-material";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
} from "@mui/lab";

import { NoData } from "@indocal/ui";
import type { SupplyTrace } from "@indocal/schemas";
import { translateSupplyTraceType, SupplyTraceType } from "@indocal/schemas";

import { SupplyTraceTimelineProvider, useSupplyTraceTimeline } from "./context";
import { SupplyTraceDetailsDialog } from "./components";

interface ClientSupplyTraceTimelineProps {
  traces: SupplyTrace[];
}

function ClientSupplyTraceTimeline({
  traces,
}: ClientSupplyTraceTimelineProps): React.ReactElement {
  const { selectTrace } = useSupplyTraceTimeline();

  const icons: Record<SupplyTraceType, React.ReactElement> = {
    [SupplyTraceType.INPUT]: <InputIcon color="success" />,
    [SupplyTraceType.ASSIGNMENT]: <AssignmentIcon color="warning" />,
    [SupplyTraceType.TRANSFER]: <TransferIcon color="info" />,
    [SupplyTraceType.UNASSIGNMENT]: <UnassignmentIcon color="action" />,
    [SupplyTraceType.REPAIR]: <RepairIcon color="disabled" />,
    [SupplyTraceType.OUTPUT]: <OutputIcon color="error" />,
  };

  const handleSelectTrace = (trace: SupplyTrace) => () => {
    selectTrace(trace);
  };

  return (
    <>
      <SupplyTraceDetailsDialog />

      <Paper sx={{ height: "100%" }}>
        <AppBar position="static" sx={{ borderRadius: "inherit" }}>
          <Stack
            component={Toolbar}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
          >
            <Typography fontWeight="bolder">Trazabilidad</Typography>

            <IconButton size="small">
              <AddIcon />
            </IconButton>
          </Stack>
        </AppBar>

        <Stack sx={{ height: "calc(100% - 64px)", overflowY: "auto" }}>
          {traces.length > 0 ? (
            <Timeline>
              {traces.map((trace) => (
                <TimelineItem key={trace.id}>
                  <TimelineOppositeContent>
                    <Typography fontWeight="bolder">
                      {translateSupplyTraceType(trace.type)}
                    </Typography>

                    <Typography variant="caption" color="text.secondary">
                      {new Date(trace.createdAt).toLocaleString("es-do")}
                    </Typography>
                  </TimelineOppositeContent>

                  <TimelineSeparator>
                    <TimelineConnector />

                    <TimelineDot variant="outlined">
                      <IconButton
                        size="small"
                        onClick={handleSelectTrace(trace)}
                      >
                        {icons[trace.type]}
                      </IconButton>
                    </TimelineDot>

                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent sx={{ paddingX: 2, paddingY: 1.5 }}>
                    <Typography fontWeight="bolder">Realizado por:</Typography>

                    <Typography variant="caption" color="text.secondary">
                      {trace.madeBy.name}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          ) : (
            <NoData message="Sin movimientos" />
          )}
        </Stack>
      </Paper>
    </>
  );
}

interface ClientSupplyTraceTimelineWrapperProps {
  traces: SupplyTrace[];
}

function ClientSupplyTraceTimelineWrapper({
  traces,
}: ClientSupplyTraceTimelineWrapperProps): React.ReactElement {
  return (
    <SupplyTraceTimelineProvider>
      <ClientSupplyTraceTimeline traces={traces} />
    </SupplyTraceTimelineProvider>
  );
}

export type { ClientSupplyTraceTimelineWrapperProps as ClientSupplyTraceTimelineProps };
export { ClientSupplyTraceTimelineWrapper as ClientSupplyTraceTimeline };

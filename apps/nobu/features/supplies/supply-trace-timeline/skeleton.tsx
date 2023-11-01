"use client";

import { Paper, Stack, AppBar, Toolbar, Skeleton } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
} from "@mui/lab";

export function SupplyTraceTimelineSkeleton(): React.ReactElement {
  const MOCK = [1, 2, 3, 4];

  return (
    <Paper sx={{ height: "100%" }}>
      <AppBar position="static" sx={{ borderRadius: "inherit" }}>
        <Stack
          component={Toolbar}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Skeleton variant="rounded" width={175} height={16} />
        </Stack>
      </AppBar>

      <Stack sx={{ height: "calc(100% - 64px)", overflowY: "auto" }}>
        <Timeline>
          {MOCK.map((item) => (
            <TimelineItem key={item}>
              <TimelineOppositeContent>
                <Skeleton height={24} />
                <Skeleton height={14} />
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector />

                <TimelineDot variant="outlined">
                  <Skeleton variant="circular" width={34} height={34} />
                </TimelineDot>

                <TimelineConnector />
              </TimelineSeparator>

              <TimelineContent sx={{ paddingX: 2, paddingY: 1.5 }}>
                <Skeleton height={24} />
                <Skeleton height={14} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Stack>
    </Paper>
  );
}

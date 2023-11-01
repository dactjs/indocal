import { Paper, Stack, Divider, Typography, Skeleton } from "@mui/material";

export function TicketsPerMonthChartSkeleton(): React.ReactElement {
  return (
    <Paper sx={{ height: "100%", padding: 2, overflow: "hidden" }}>
      <Stack spacing={1} divider={<Divider flexItem />} sx={{ height: "100%" }}>
        <Typography>
          <Skeleton />
        </Typography>

        <Skeleton variant="rectangular" height="100%" />
      </Stack>
    </Paper>
  );
}

import { Paper, Stack, Skeleton } from "@mui/material";

export function LastSupplyTracesSkeleton(): React.ReactElement {
  const MOCK = [1, 2, 3, 4, 5];

  return (
    <Paper sx={{ height: "100%", overflow: "hidden" }}>
      <Skeleton variant="rectangular" height={48} />

      {MOCK.map((item) => (
        <Stack
          key={item}
          direction="row"
          alignItems="center"
          spacing={4}
          sx={{
            padding: 2,
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <Skeleton variant="circular" width={36} height={30} />

          <Stack width="100%" spacing={0.5}>
            <Skeleton variant="rounded" height={18} />
            <Skeleton variant="rounded" height={14} />
          </Stack>
        </Stack>
      ))}
    </Paper>
  );
}

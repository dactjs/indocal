import { Paper, Stack, Skeleton } from "@mui/material";

export function SupplyCardSkeleton(): React.ReactElement {
  const MOCK = [1, 2, 3, 4];

  return (
    <Paper sx={{ height: "100%", overflow: "hidden" }}>
      <Stack sx={{ height: "100%" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          sx={{ minHeight: 58.5, paddingLeft: 2, paddingRight: 1 }}
        >
          <Skeleton variant="rounded" width={175} height={16} />
          <Skeleton variant="circular" width={34} height={34} />
        </Stack>

        <Stack
          spacing={2.5}
          sx={{
            height: "100%",
            paddingX: 2,
            paddingY: 3,
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          {MOCK.map((item) => (
            <Stack key={item} width="100%" spacing={1}>
              <Skeleton variant="rounded" height={16} />
              <Skeleton variant="rounded" height={12} />
            </Stack>
          ))}
        </Stack>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          sx={{ minHeight: 50, marginTop: "auto" }}
        >
          <Skeleton variant="circular" width={34} height={34} />
          <Skeleton variant="circular" width={34} height={34} />
        </Stack>
      </Stack>
    </Paper>
  );
}

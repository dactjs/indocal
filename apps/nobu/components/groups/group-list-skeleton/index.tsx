import { Paper, Stack, Skeleton } from "@mui/material";

export function GroupListSkeleton(): React.ReactElement {
  const MOCK = [1, 2, 3, 4, 5];

  return (
    <Paper sx={{ height: "100%", overflow: "hidden" }}>
      <Skeleton variant="rectangular" height={48} />

      {MOCK.map((item) => (
        <Stack
          key={item}
          spacing={1}
          sx={{
            padding: 2,
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <Skeleton variant="rounded" height={16} />
          <Skeleton variant="rounded" height={12} />
        </Stack>
      ))}
    </Paper>
  );
}

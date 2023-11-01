import { Paper, Stack, Divider, Typography, Skeleton } from "@mui/material";

export function DynamicTicketListSkeleton(): React.ReactElement {
  const MOCK = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Stack
      spacing={1}
      divider={<Divider flexItem />}
      sx={{ height: "100%", overflow: "hidden" }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={0.5}
          divider={<Divider flexItem orientation="vertical" />}
        >
          <Stack
            direction="row"
            divider={<Divider flexItem orientation="vertical" />}
          >
            <Skeleton
              variant="rectangular"
              width={38}
              height={38}
              sx={{ borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }}
            />

            <Skeleton variant="rectangular" width={38} height={38} />
            <Skeleton variant="rectangular" width={38} height={38} />
            <Skeleton variant="rectangular" width={38} height={38} />
            <Skeleton variant="rectangular" width={38} height={38} />

            <Skeleton
              variant="rectangular"
              width={38}
              height={38}
              sx={{ borderTopRightRadius: 4, borderBottomRightRadius: 4 }}
            />
          </Stack>

          <Skeleton
            variant="rectangular"
            width={60}
            height={38}
            sx={{ borderRadius: 1 }}
          />
        </Stack>

        <Skeleton variant="rounded" width={245} height={38} />
      </Stack>

      <Stack spacing={1.5} sx={{ height: "100%", overflow: "hidden" }}>
        {MOCK.map((item) => (
          <Paper key={item} sx={{ padding: 2, paddingRight: 4 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Stack sx={{ width: "100%" }}>
                <Typography fontWeight="bolder">
                  <Skeleton />
                </Typography>

                <Typography variant="body2">
                  <Skeleton />
                </Typography>
              </Stack>

              <Skeleton variant="rectangular" width={20} height={20} />
            </Stack>
          </Paper>
        ))}
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={{ xs: "center", md: "space-between" }}
        alignItems="center"
        spacing={1}
      >
        <Skeleton
          variant="rectangular"
          width={60}
          height={38}
          sx={{ borderRadius: 1 }}
        />

        <Stack direction="row" spacing={0.5}>
          <Skeleton variant="rounded" width={32} height={32} />

          <Skeleton variant="rounded" width={32} height={32} />
          <Skeleton variant="rounded" width={32} height={32} />
          <Skeleton variant="rounded" width={32} height={32} />
          <Skeleton variant="rounded" width={32} height={32} />
          <Skeleton variant="rounded" width={32} height={32} />

          <Skeleton variant="rounded" width={32} height={32} />

          <Skeleton variant="rounded" width={32} height={32} />

          <Skeleton variant="rounded" width={32} height={32} />
        </Stack>
      </Stack>
    </Stack>
  );
}

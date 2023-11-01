import {
  Paper,
  Stack,
  Divider,
  AppBar,
  Toolbar,
  Typography,
  Skeleton,
} from "@mui/material";

export function TicketCommentsSkeleton(): React.ReactElement {
  return (
    <Paper sx={{ height: "100%", overflow: "hidden" }}>
      <AppBar position="static" sx={{ borderRadius: "inherit" }}>
        <Stack
          component={Toolbar}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Typography fontWeight="bolder">
            <Skeleton width={200} />
          </Typography>

          <Skeleton variant="circular" width={24} height={24} />
        </Stack>
      </AppBar>

      <Stack divider={<Divider flexItem />} sx={{ paddingX: 2 }}>
        <Skeleton height={75} />
        <Skeleton height={75} />
        <Skeleton height={75} />
        <Skeleton height={75} />
      </Stack>
    </Paper>
  );
}

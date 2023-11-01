import { Backdrop, CircularProgress } from "@mui/material";

export default function RootLoading(): React.ReactElement {
  return (
    <Backdrop open>
      <CircularProgress />
    </Backdrop>
  );
}

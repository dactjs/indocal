import type { Metadata } from "next";
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "Logs",
};

export default function LogsPage(): React.ReactElement {
  return (
    <Container fixed sx={{ paddingY: 2 }}>
      <h1>Logs</h1>
    </Container>
  );
}

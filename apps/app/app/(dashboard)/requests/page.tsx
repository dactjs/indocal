import type { Metadata } from "next";
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "Historial de solicitudes",
};

export default function RequestsPage(): React.ReactElement {
  return (
    <Container fixed sx={{ paddingY: 2 }}>
      <h1>Historial de solicitudes</h1>
    </Container>
  );
}

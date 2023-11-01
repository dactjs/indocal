import type { Metadata } from "next";
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "Listado de servicios",
};

export default function ServicesPage(): React.ReactElement {
  return (
    <Container fixed sx={{ paddingY: 2 }}>
      <h1>Listado de servicios</h1>
    </Container>
  );
}

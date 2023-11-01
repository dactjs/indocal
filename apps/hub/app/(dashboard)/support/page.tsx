import type { Metadata } from "next";
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "Soporte técnico",
};

export default function SupportPage(): React.ReactElement {
  return (
    <Container fixed sx={{ paddingY: 2 }}>
      <h1>Soporte técnico</h1>
    </Container>
  );
}

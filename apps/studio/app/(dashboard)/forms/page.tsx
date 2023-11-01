import type { Metadata } from "next";
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "Formularios",
};

export default function FormsPage(): React.ReactElement {
  return (
    <Container fixed sx={{ paddingY: 2 }}>
      <h1>Formularios</h1>
    </Container>
  );
}

import type { Metadata } from "next";
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "Librería de archivos",
};

export default function UploadsPage(): React.ReactElement {
  return (
    <Container fixed sx={{ paddingY: 2 }}>
      <h1>Librería de archivos</h1>
    </Container>
  );
}

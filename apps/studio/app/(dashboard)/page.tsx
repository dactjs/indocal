import type { Metadata } from "next";
import { Container, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage(): React.ReactElement {
  return (
    <Container
      fixed
      sx={{
        display: "grid",
        placeContent: "center",
        height: "100%",
        paddingY: 2,
      }}
    >
      <Typography variant="h4" align="center" fontWeight="bolder">
        Bienvenido a tu dashboard 💻
      </Typography>

      <Typography variant="body1" align="center" color="text.secondary">
        Para comenzar, selecciona una opción del menú lateral.
      </Typography>
    </Container>
  );
}

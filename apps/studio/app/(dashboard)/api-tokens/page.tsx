import type { Metadata } from "next";
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "API Tokens",
};

export default function ApiTokensPage(): React.ReactElement {
  return (
    <Container fixed sx={{ paddingY: 2 }}>
      <h1>API Tokens</h1>
    </Container>
  );
}

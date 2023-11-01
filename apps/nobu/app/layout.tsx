import type { Metadata } from "next";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeRegistry } from "@indocal/theme";

export const metadata: Metadata = {
  title: "INDOCAL",
  description: "INDOCAL - Nobu",
};

interface RootLayoutProps {
  children: React.ReactElement;
}

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>

      <body>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}

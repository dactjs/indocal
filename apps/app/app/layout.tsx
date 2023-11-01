import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { ThemeRegistry } from "@indocal/theme";

const roboto = Roboto({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "INDOCAL",
  description: "INDOCAL - App",
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

      <body className={roboto.className}>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}

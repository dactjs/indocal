import type { BoxProps } from "@mui/material";
import { Box } from "@mui/material";

import { WIDGET_HEIGHT } from "./config";

export interface WidgetProps extends BoxProps {
  disableDefaultSize?: boolean;
  children: React.ReactElement;
}

export function Widget({
  disableDefaultSize,
  children,
  ...rest
}: WidgetProps): React.ReactElement {
  return (
    <Box {...(!disableDefaultSize && { height: WIDGET_HEIGHT })} {...rest}>
      {children}
    </Box>
  );
}

////////////////
// Re-exports //
////////////////

export * from "./config";

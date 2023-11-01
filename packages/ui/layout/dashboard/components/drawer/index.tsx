"use client";

import { Fragment } from "react";
import type { CSSObject } from "@mui/material";
import { Box, Drawer, List, useTheme, useMediaQuery } from "@mui/material";

import { useDashboard } from "../../context";
import { APP_BAR_HEIGHT, DRAWER_WIDTH } from "../../config";
import type { Navigation } from "../../types";
import { NavigationType } from "../../types";

import { NavigationItem, NavigationMenu } from "./components";

export interface DashboardDrawerProps {
  header?: React.ReactElement;
  navigation: Navigation;
  footer?: React.ReactElement;
}

export function DashboardDrawer({
  header,
  navigation,
  footer,
}: DashboardDrawerProps): React.ReactElement {
  const { isDrawerOpen } = useDashboard();

  const theme = useTheme();

  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  const isOpen = isDrawerOpen && isMediumScreen;
  const isClosed = !isDrawerOpen || !isMediumScreen;

  const openedMixin = (): CSSObject => ({
    width: DRAWER_WIDTH,
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  });

  const closedMixin = (): CSSObject => ({
    width: `calc(${theme.spacing(7)} + 1px)`,
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      sx={{
        boxSizing: "border-box",
        flexShrink: 0,
        width: DRAWER_WIDTH,
        whiteSpace: "nowrap",
        ...(isOpen && {
          ...openedMixin(),
          "& .MuiDrawer-paper": openedMixin(),
        }),
        ...(isClosed && {
          ...closedMixin(),
          "& .MuiDrawer-paper": closedMixin(),
        }),
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: APP_BAR_HEIGHT,
          padding: theme.spacing(0, 1),
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        {header}
      </Box>

      <List>
        {navigation.map((child) => (
          <Fragment key={child.label}>
            {child.type === NavigationType.ITEM && (
              <NavigationItem item={child} />
            )}

            {child.type === NavigationType.MENU && (
              <NavigationMenu menu={child} />
            )}
          </Fragment>
        ))}
      </List>

      <Box sx={{ marginTop: "auto" }}>{footer}</Box>
    </Drawer>
  );
}

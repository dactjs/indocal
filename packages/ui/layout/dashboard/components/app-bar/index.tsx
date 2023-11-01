"use client";

import {
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as CloseIcon,
} from "@mui/icons-material";

import { useDashboard } from "../../context";
import { APP_BAR_HEIGHT, DRAWER_WIDTH } from "../../config";

export function DashboardAppBar(): React.ReactElement {
  const { isDrawerOpen, openDrawer, closeDrawer } = useDashboard();

  const theme = useTheme();

  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  const isOpen = isDrawerOpen && isMediumScreen;

  return (
    <AppBar
      position="fixed"
      sx={{
        height: APP_BAR_HEIGHT,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(Boolean(isOpen) && {
          width: `calc(100% - ${DRAWER_WIDTH})`,
          marginLeft: DRAWER_WIDTH,
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }}
    >
      <Toolbar>
        {Boolean(isMediumScreen) && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label={
              isDrawerOpen
                ? "Cerrar menú de navegación"
                : "Abrir menú de navegación"
            }
            onClick={isDrawerOpen ? closeDrawer : openDrawer}
          >
            {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}

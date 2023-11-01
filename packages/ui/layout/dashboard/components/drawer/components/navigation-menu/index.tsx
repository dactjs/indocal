"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";

import { useDashboard } from "../../../../context";
import { ROOT_PATHS } from "../../../../config";
import type { NavigationMenu } from "../../../../types";

import { NavigationItem } from "../navigation-item";

export interface NavigationMenuProps {
  menu: NavigationMenu;
}

export function NavigationMenu({
  menu,
}: NavigationMenuProps): React.ReactElement {
  const pathname = usePathname();

  const { isDrawerOpen } = useDashboard();

  const theme = useTheme();

  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  const isOpen = isDrawerOpen && isMediumScreen;

  const active = menu.items.some((item) => ROOT_PATHS.includes(item.href))
    ? menu.items.some((item) => item.href === pathname)
    : menu.items.some((item) => pathname.startsWith(item.href));

  const [expanded, setExpanded] = useState(true);

  const handleExpand = (): void => {
    setExpanded((prev) => !prev);
  };

  if (isOpen) {
    return (
      <>
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            selected={active}
            onClick={handleExpand}
            sx={{
              justifyContent: "initial",
              minHeight: 48,
              paddingX: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                justifyContent: "center",
                minWidth: 0,
                marginRight: 2,
              }}
            >
              {menu.icon}
            </ListItemIcon>

            <ListItemText sx={{ whiteSpace: "pre-wrap" }}>
              {menu.label}
            </ListItemText>

            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
        </ListItem>

        <Collapse unmountOnExit timeout="auto" in={expanded}>
          <List disablePadding>
            {menu.items.map((item) => (
              <NavigationItem key={item.label} nested item={item} />
            ))}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <>
      {menu.items.map((item) => (
        <NavigationItem key={item.label} item={item} />
      ))}
    </>
  );
}

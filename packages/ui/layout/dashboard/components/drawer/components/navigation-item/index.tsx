"use client";

import { usePathname } from "next/navigation";
import NextLink from "next/link";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { useDashboard } from "../../../../context";
import { ROOT_PATHS } from "../../../../config";
import type { NavigationItem } from "../../../../types";

export interface NavigationItemProps {
  item: NavigationItem;
  nested?: boolean;
}

export function NavigationItem({
  item,
  nested,
}: NavigationItemProps): React.ReactElement {
  const pathname = usePathname();

  const { isDrawerOpen } = useDashboard();

  const theme = useTheme();

  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  const isOpen = isDrawerOpen && isMediumScreen;

  const active = ROOT_PATHS.includes(item.href)
    ? item.href === pathname
    : pathname.startsWith(item.href);

  const nestedColor = nested ? theme.palette.text.secondary : "inherit";

  return (
    <Tooltip arrow placement="right" title={isOpen ? null : item.label}>
      <ListItem disablePadding sx={{ display: "block" }}>
        <ListItemButton
          LinkComponent={NextLink}
          href={item.href}
          sx={{
            justifyContent: isOpen ? "initial" : "center",
            minHeight: 48,
            paddingX: nested ? 4 : 2.5,
            color: active ? theme.palette.secondary.main : nestedColor,
          }}
        >
          <ListItemIcon
            sx={{
              justifyContent: "center",
              minWidth: 0,
              marginRight: isOpen ? 2 : "auto",
              color: active ? theme.palette.secondary.main : nestedColor,
            }}
          >
            {item.icon}
          </ListItemIcon>

          {Boolean(isOpen) && (
            <ListItemText sx={{ whiteSpace: "pre-wrap" }}>
              {item.label}
            </ListItemText>
          )}
        </ListItemButton>
      </ListItem>
    </Tooltip>
  );
}

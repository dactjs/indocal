"use client";

import NextLink from "next/link";
import {
  Paper,
  List,
  ListSubheader,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { NoData } from "@indocal/ui";
import type { UserGroup } from "@indocal/schemas";

import { ENV, PAGES } from "~/constants";

interface GroupListProps {
  title: string;
  groups: UserGroup[];
}

export function GroupList({
  title,
  groups,
}: GroupListProps): React.ReactElement {
  return (
    <Paper sx={{ height: "100%", overflowY: "auto" }}>
      {groups.length > 0 ? (
        <List dense disablePadding>
          <ListSubheader>{title}</ListSubheader>

          {groups.map((group) => {
            const analyticsUrl = new URL(
              PAGES.GROUP_ANALYTICS,
              ENV.NEXT_PUBLIC_SITE_URL
            );

            analyticsUrl.searchParams.append("group", group.id);

            return (
              <ListItem key={group.id} divider disableGutters>
                <ListItemButton
                  LinkComponent={NextLink}
                  href={analyticsUrl.toString()}
                >
                  <ListItemText
                    primary={group.name}
                    secondary={group.description}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <NoData message="Sin grupos" />
      )}
    </Paper>
  );
}

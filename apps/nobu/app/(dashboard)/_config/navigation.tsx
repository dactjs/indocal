import {
  Dashboard as DashboardIcon,
  ConfirmationNumber as TicketsIcon,
  Devices as SuppliesIcon,
  ManageAccounts as UsersIcon,
  Analytics as AnalyticsIcon,
  SpaceDashboard as GeneralAnalyticsIcon,
  GroupWork as GroupAnalyticsIcon,
  Person as UserAnalyticsIcon,
} from "@mui/icons-material";

import type { Navigation } from "@indocal/ui";
import { NavigationType } from "@indocal/ui";

import { PAGES } from "~/constants";

export const navigation: Navigation = [
  {
    type: NavigationType.ITEM,
    icon: <DashboardIcon />,
    label: "Resumen",
    href: PAGES.OVERVIEW,
  },
  {
    type: NavigationType.ITEM,
    icon: <TicketsIcon />,
    label: "Tickets",
    href: PAGES.TICKETS,
  },
  {
    type: NavigationType.ITEM,
    icon: <SuppliesIcon />,
    label: "Inventario",
    href: PAGES.SUPPLIES,
  },
  {
    type: NavigationType.ITEM,
    icon: <UsersIcon />,
    label: "Usuarios",
    href: PAGES.USERS,
  },
  {
    type: NavigationType.MENU,
    icon: <AnalyticsIcon />,
    label: "Analíticas",
    items: [
      {
        type: NavigationType.ITEM,
        icon: <GeneralAnalyticsIcon />,
        label: "Generales",
        href: PAGES.GENERAL_ANALYTICS,
      },
      {
        type: NavigationType.ITEM,
        icon: <GroupAnalyticsIcon />,
        label: "Por grupo",
        href: PAGES.GROUP_ANALYTICS,
      },
      {
        type: NavigationType.ITEM,
        icon: <UserAnalyticsIcon />,
        label: "Por usuario",
        href: PAGES.USER_ANALYTICS,
      },
    ],
  },
];

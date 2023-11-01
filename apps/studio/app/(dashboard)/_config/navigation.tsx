import {
  Dashboard as DashboardIcon,
  ShoppingCart as ServicesIcon,
  Feed as FormsIcon,
  SnippetFolder as UploadsIcon,
  ManageAccounts as UsersPanelControl,
  Key as ApiTokensIcon,
  Groups as UsersIcon,
  GroupWork as GroupsIcon,
  History as LogsIcon,
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
    icon: <ServicesIcon />,
    label: "Servicios",
    href: PAGES.SERVICES,
  },
  {
    type: NavigationType.ITEM,
    icon: <FormsIcon />,
    label: "Formularios",
    href: PAGES.FORMS,
  },
  {
    type: NavigationType.ITEM,
    icon: <UploadsIcon />,
    label: "Librería de archivos",
    href: PAGES.UPLOADS,
  },
  {
    type: NavigationType.MENU,
    icon: <UsersPanelControl />,
    label: "Control de usuarios",
    items: [
      {
        type: NavigationType.ITEM,
        icon: <ApiTokensIcon />,
        label: "API Tokens",
        href: PAGES.API_TOKENS,
      },
      {
        type: NavigationType.ITEM,
        icon: <UsersIcon />,
        label: "Usuarios",
        href: PAGES.USERS,
      },
      {
        type: NavigationType.ITEM,
        icon: <GroupsIcon />,
        label: "Grupos",
        href: PAGES.GROUPS,
      },
      {
        type: NavigationType.ITEM,
        icon: <LogsIcon />,
        label: "Logs",
        href: PAGES.LOGS,
      },
    ],
  },
];

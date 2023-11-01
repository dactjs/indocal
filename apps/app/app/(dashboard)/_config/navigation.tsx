import {
  Dashboard as DashboardIcon,
  ShoppingCart as ServicesIcon,
  ListAlt as ServiceListIcon,
  History as RequestHistoryIcon,
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
    type: NavigationType.MENU,
    icon: <ServicesIcon />,
    label: "Servicios",
    items: [
      {
        type: NavigationType.ITEM,
        icon: <ServiceListIcon />,
        label: "Listado de servicios",
        href: PAGES.SERVICES,
      },
      {
        type: NavigationType.ITEM,
        icon: <RequestHistoryIcon />,
        label: "Historial de solicitudes",
        href: PAGES.REQUESTS,
      },
    ],
  },
];

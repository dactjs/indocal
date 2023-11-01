import {
  Dashboard as DashboardIcon,
  SupportAgent as SupportIcon,
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
    icon: <SupportIcon />,
    label: "Soporte técnico",
    href: PAGES.SUPPORT,
  },
];

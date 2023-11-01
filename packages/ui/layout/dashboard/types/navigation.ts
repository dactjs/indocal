export type NavigationType =
  (typeof NavigationType)[keyof typeof NavigationType];

export const NavigationType = {
  ITEM: "ITEM",
  MENU: "MENU",
} as const;

export interface NavigationItem {
  type: typeof NavigationType.ITEM;
  icon: React.ReactElement;
  label: string;
  href: string;
}

export interface NavigationMenu {
  type: typeof NavigationType.MENU;
  icon: React.ReactElement;
  label: string;
  items: NavigationItem[];
}

export type Navigation = (NavigationItem | NavigationMenu)[];

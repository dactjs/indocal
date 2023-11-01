import type { UserGroup } from "@indocal/schemas";

export const TI_GROUP: UserGroup = {
  id: "1",
  name: "TI",
  description: "Grupo de TI",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const DEV_GROUP: UserGroup = {
  id: "2",
  name: "Devs",
  description: "Grupo de desarrolladores",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const GROUPS_MOCK: UserGroup[] = [TI_GROUP, DEV_GROUP];

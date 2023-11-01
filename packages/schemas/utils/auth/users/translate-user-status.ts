import { UserStatus } from "../../../constants";

export function translateUserStatus(status: UserStatus): string {
  const translations: Record<UserStatus, string> = {
    [UserStatus.ENABLED]: "Habilitado",
    [UserStatus.DISABLED]: "Desabilitado",
  };

  return translations[status] || status;
}

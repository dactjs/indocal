import { ApiTokenStatus } from "../../../constants";

export function translateApiTokenStatus(status: ApiTokenStatus): string {
  const translations: Record<ApiTokenStatus, string> = {
    [ApiTokenStatus.ENABLED]: "Habilitado",
    [ApiTokenStatus.DISABLED]: "Desabilitado",
  };

  return translations[status] || status;
}

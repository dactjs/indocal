import { ApiTokenType } from "../../../constants";

export function translateApiTokenType(type: ApiTokenType): string {
  const translations: Record<ApiTokenType, string> = {
    [ApiTokenType.ANON]: "Anónimo",
    [ApiTokenType.SERVICE]: "Servicio",
  };

  return translations[type] || type;
}

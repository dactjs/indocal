import { UserRole } from "../../../constants";

export function translateUserRole(role: UserRole): string {
  const translations: Record<UserRole, string> = {
    [UserRole.STUDIO_USER]: "Super usuario",

    [UserRole.HUB_USER]: "Colaborador estándar",

    [UserRole.APP_USER]: "Usuario estándar",

    [UserRole.NOBU_GUEST]: "Nobu (Invitado)",
    [UserRole.NOBU_USER]: "Soporte Técnico (Usuario)",
    [UserRole.NOBU_ADMIN]: " Soporte Técnico (Administrador)",
  };

  return translations[role] || role;
}

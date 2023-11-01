import type { Jwt } from "@indocal/schemas";

export interface AuthenticatedRequest extends Request {
  user: Jwt;
}

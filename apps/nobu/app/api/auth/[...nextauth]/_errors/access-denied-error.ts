export class AccessDeniedError extends Error {
  constructor() {
    super("Not authorized to access this application");
  }
}

export class MissingCredentialsError extends Error {
  constructor() {
    super("Missing credentials");
  }
}

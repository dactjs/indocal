import type { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import { default as CredentialsProvider } from "next-auth/providers/credentials";

import { ENV, PAGES } from "~/constants";

import { MissingCredentialsError, AccessDeniedError } from "./_errors";

import type { SignInByCredentialsData, Session } from "@indocal/schemas";
import { UserRole } from "@indocal/schemas";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) throw new MissingCredentialsError();

        const session = await signIn({
          username: credentials.username,
          password: credentials.password,
        });

        const validRoles: UserRole[] = [
          UserRole.STUDIO_USER,
          UserRole.NOBU_ADMIN,
          UserRole.NOBU_USER,
          UserRole.NOBU_GUEST,
        ];

        if (!session.user.roles.some((role) => validRoles.includes(role)))
          throw new AccessDeniedError();

        return session;

        return null;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      const session = user as unknown as Session;

      if (session) {
        token.user = session.user;
        token.access_token = session.access_token;
      }

      return token;
    },
    session({ session, token }) {
      session.user = token.user;

      return session;
    },
  },
  // TODO: Fix this
  // events: {
  //   session({ token, session }) {
  //     setCookie({ res }, TOKEN_KEY, token.access_token, {
  //       path: "/",
  //       expires: new Date(session.expires),
  //     });
  //   },
  //   signOut() {
  //     destroyCookie({ res }, TOKEN_KEY, {
  //       path: "/",
  //     });
  //   },
  // },
  pages: {
    signIn: PAGES.SIGN_IN,
    error: PAGES.SIGN_IN,
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

async function signIn({
  username,
  password,
}: SignInByCredentialsData): Promise<Session> {
  const url = new URL("/auth/local/sign-in", ENV.NEXT_PUBLIC_API_URL);

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });

  const data = (await response.json()) as Session;

  return data;
}

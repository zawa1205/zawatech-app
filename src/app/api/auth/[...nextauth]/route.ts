import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

declare module "next-auth" {
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string | null;
  }
  interface Session {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
    };
    expires: string;
  }
}

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_AUTH_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_AUTH_CLIENT_SECRET ?? "",
      profile(profile) {
        const role =
          profile.email === process.env.ADMIN_MAIL_ADDRESS ? "admin" : "guest";

        return {
          id: profile.id.toString(),
          name: profile.name ?? profile.login,
          email: profile.email,
          image: profile.avatar_url,
          role: role,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.role = typeof token.role === "string" ? token.role : null;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };

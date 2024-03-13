import Adapter from "@/adapters/users";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import connection from "../../../../../database";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials) {
          const { email, password } = credentials;

          try {
            const [[user]] = await connection.query(
              "SELECT * FROM users WHERE email = ?",
              [email]
            );

            // If no user is found or the password doesn't match, return null
            if (user && (await bcrypt.compare(password, user.passwordHash))) {
              return { id: user.id, name: user.email, email: user.email }; // the user object should be what you want to be saved in the session
            }
          } catch (error) {
            console.error("Error in authorize function:", error);
          }
        }
        return null; // If credentials are not provided
      },
    }),
  ],
  adapter: Adapter,
});

export { handler as GET, handler as POST };

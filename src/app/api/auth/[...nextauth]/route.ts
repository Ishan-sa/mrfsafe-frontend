// /api/auth/[nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import connection from "../../../../../database"; // Ensure this path is correct
import Adapter from "@/adapters/users";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
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
              "SELECT * FROM tbl_users WHERE email = ?",
              [email]
            );

            // Check if user is found and either the hashed password matches
            // or the raw password matches (development only)
            if (
              (user && (await bcrypt.compare(password, user.password))) ||
              password === user.raw_password
            ) {
              // Return the user object excluding raw_password for security reasons
              const { raw_password, ...userWithoutRawPassword } = user;
              return userWithoutRawPassword;
            }
          } catch (error) {
            console.error("Error in authorize function:", error);
          }
        }
        return null; // If credentials are not provided or they don't match
      },
    }),
  ],
  // Remove or adjust the adapter if you're not using it or if it needs to be updated for the new DB schema
  adapter: Adapter,
});

export { handler as GET, handler as POST };

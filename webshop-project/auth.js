import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const credentialsConfig = CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: { label: "Email", type: "email", placeholder: "email@example.com" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    try {
      const response = await fetch("http://localhost:5000/api/Auth/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Backend Login Error:", errorData);
        throw new Error("Invalid credentials");
      }

      const data = await response.json();

      if (data.token) {
        return { id: data.user.id, name: data.user.username, email: data.user.email, token: data.token };
      }

      console.warn("Authorize function: No token received");
      return null;
    } catch (error) {
      console.error("Frontend Authorize Error:", error);
      throw new Error("Authentication failed");
    }
  },
});

const config = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    credentialsConfig,
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.token = user.token;
        console.log("User:", user);
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.token = token.token;
      session.user.name = token.name;
      return session;
    },
  },
  pages: {
    signIn: "/login", // Optional: Custom login page
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);

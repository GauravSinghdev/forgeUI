import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: string;
      id: string;
      provider: string
    } & DefaultSession["user"];
  }

  interface User {
    role: string;
  }
}

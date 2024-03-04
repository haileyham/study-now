import { connectDB } from "@/lib/utils/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    })
  ],
  secret: process.env.NEXTAUTH_JWT_SECRET,
  adapter: MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 
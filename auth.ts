import type { NextAuthConfig } from "next-auth"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from "./db/db.config";
import bcrypt from 'bcryptjs'

export const authConfig = {
    providers: [GithubProvider, GoogleProvider, CredentialsProvider({
        name: "Credentials",
        credentials: {
            email: {},
            username: {},
            password: {}
        },
        async authorize(credentials: Record<"email" | "username" | "password", string> | any): Promise<any | null>
        {

            const user = await prisma.user.findFirst({
                where: {
                    email: credentials?.email
                }
            })
            if (!user)
            {
                return null
            }

            const isPasswordMatch = await bcrypt.compare(credentials?.password, user.password!)
            if (!isPasswordMatch)
            {
                return null
            }
            return user

        }
    }),

    ],
    callbacks: {
        async session({ session })
        {
            const dbUser = await prisma.user.findFirst({
                where: {
                    email: session.user.email
                }
            })
            session.user.id = dbUser?.id!
            return session;
        },

        async signIn({ profile, credentials, user, account })
        {

            try
            {

                if (account?.provider === 'credentials') return true
                const databaseUser = await prisma.user.findFirst({
                    where: {
                        email: user.email!
                    }
                })
                if (databaseUser)
                {
                    return true
                }

                await prisma.user.create({
                    data: {
                        email: user.email!,
                        username: user.name!,
                        profilePicture: user.image,
                        credentialProvider: account?.provider!
                    }
                })
                return true
            } catch (error)
            {
                console.log(error)
                return false
            }
        }
        , async redirect({ url, baseUrl })
        {

            return baseUrl
        }
    },
} satisfies NextAuthConfig

export const {
    handlers,
    auth,
    signOut
} = NextAuth(authConfig)

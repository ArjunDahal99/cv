
import prisma from "@/db/db.config";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials'



export const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId:
                "936095275055-dplhj5u9cbfecs29h2o7eg2akf92q4n1.apps.googleusercontent.com",
            clientSecret: "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",
        }),
        GithubProvider({
            clientId: "5cd9f82a03464c7d5f79",
            clientSecret: "94f6a19bf0b7ba717e99b1cc3c9130811d060ea3",
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "email:",
                    type: "email",
                    placeholder: "your-cool-username"
                },
                username: {
                    label: "username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials: Record<"email" | "username" | "password", string> | undefined): Promise<any | null>
            {
                console.log(credentials)
            }
        })
    ],

    callbacks: {
        async session({ session })
        {
            console.log(session)
            
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
                // console.log(user)
                // const databaseUser = await prisma.user.findFirst({
                //     where: {
                //         email: user.email!
                //     }
                // })
                // if (databaseUser)
                // {
                //     return true
                // }

                // await prisma.user.create({
                //     data: {
                //         email: user.email!,
                //         username: user.name!,
                //         password: user.image!,

                //     }
                // })
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
});


export { handler as GET, handler as POST };
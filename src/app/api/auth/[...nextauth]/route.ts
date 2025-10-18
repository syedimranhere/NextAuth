import { log } from "console";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [

        GoogleProvider({

            //@ts-ignore
            clientId: process.env.GOOGLE_ID,
            //@ts-ignore
            clientSecret: process.env.GOOGLE_SECRET,


        }),

    ],
    callbacks: {
        // @ts-ignore
        async signIn({ user, account, profile }) {
            console.log("SIGNED CALLED")
            return true
        },
        // @ts-ignore
        async session({ session, token, user }) {
            console.log("SESSION CALLED")
            return {
                session,
                courses: ['imran']
            }
        }

    },
    secret: process.env.NEXTAUTH_SECRET,
}


//this below is the handler for the api/auth/callback route
// @ts-ignore
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
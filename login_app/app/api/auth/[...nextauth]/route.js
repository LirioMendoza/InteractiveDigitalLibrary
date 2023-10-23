import NextAuth from "next-auth"
import LinkedInProvider from "next-auth/providers/linkedin";

const authOptions = {

  providers: [

    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET
    })
    
  ]
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_WEB_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_WEB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session: async ({ session, user }) => {
      // Add the user's Firebase UID to the session
      session.user.uid = user.uid;
      return session;
    },
  },
});
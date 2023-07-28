import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  pages: {
    signIn: '/login',
  },
  secret: 'Rahasia',
  callbacks: {
    jwt: async ({ token, user }) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.jwt = user ? (user as any).access_token || '' : '';
        token.id = user ? user.id || '' : '';
        token.role = user ? (user as any).role || '' : '';
      }
      return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
      (session as any).role = token.role;
      (session as any).uid = token.id;
      return Promise.resolve(session);
    },
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'Credentials',
      async authorize(credentials: any) {
        const data = {
          email: credentials.email,
          password: credentials.password,
        }
        const res = await fetch('http://localhost:6969/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
        const user = await res.json()
        if (user.data.id) {
          const u = {
            id: user.data.id,
            name: user.data.nama,
            email: user.data.email,
            access_token: user.data.access_token,
            refresh_token: user.data.refresh_token,
            role: user.data.Role.nama_role
          };
          return u;
        }
        else {
          return null
        }
      },
    }),
  ],
})

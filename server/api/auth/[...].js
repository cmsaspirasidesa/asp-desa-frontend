import CredentialsProvider from 'next-auth/providers/credentials'
import {NuxtAuthHandler} from '#auth'

export default NuxtAuthHandler({
  pages: {
    signIn: '/login',
  },
  secret: 'Rahasia',
  providers: [
    CredentialsProvider.default({
      name: 'Credentials',
      async authorize(credentials) {
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
        if (user) {
          return user.data
        }
        else {
          return null
        }
      },
    }),
  ],
})

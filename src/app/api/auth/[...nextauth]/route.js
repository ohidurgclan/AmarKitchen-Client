import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
const handler = NextAuth({
providers: [
CredentialsProvider({
  name: 'Credentials',
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" }
  },
  async authorize(credentials) {
    try {
      const res = await fetch("http://localhost:5085/v1/auth/login", {
        method: 'POST',
        body: JSON.stringify({
          email: credentials?.email,
          password: credentials?.password,
        }),
        headers: { "Content-Type": "application/json" }
      })

      const responseData = await res.json()
      console.log("Auth Response Data:", responseData);

      // Based on your screenshot, the user info is in responseData.data.user
      if (res.ok && responseData.success) {
        return {
          ...responseData.data.user,
          accessToken: responseData.data.token,
          id: responseData.data.user.user_id   
        }
      }
      
      return null
    } catch (error) {
      return null
    }
  }
})
]
})

export { handler as GET, handler as POST }
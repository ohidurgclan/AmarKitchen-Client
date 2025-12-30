import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "example@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    // 1. Fetch from your local API
                    const res = await fetch("http://localhost:5085/v1/auth/login", {
                        method: 'POST',
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        }),
                        headers: { "Content-Type": "application/json" }
                    });
                    const responseData = await res.json();
                    // 2. Check if API response is successful
                    if (res.ok && responseData.success) {
                        const user = responseData.data.user;
                        const token = responseData.data.token;
                        // 3. Return a user object that NextAuth expects
                        // We map 'user_id' to 'id' and 'user_name' to 'name'
                        return {
                            id: user.user_id,
                            name: user.user_name,
                            email: user.email,
                            role: user.role,
                            accessToken: token, // Attaching the JWT from your backend
                        };
                    }
                    // Return null if credentials or API check fails
                    return null;
                } catch (error) {
                    console.error("Authorization Error:", error);
                    return null;
                }
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            // When user logs in, transfer details from 'user' to the 'token'
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.role = user.role;
                token.accessToken = user.accessToken;
            }
            return token;
        },
        async session({ session, token }) {
            // Make details available to the client side via useSession()
            if (token) {
                session.user.id = token.id;
                session.user.name = token.name;
                session.user.role = token.role;
                session.accessToken = token.accessToken;
            }
            return session;
        }
    },
    // Optional: Use JWT strategy for session persistence
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};
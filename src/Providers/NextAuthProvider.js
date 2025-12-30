"use client";
import { SessionProvider } from "next-auth/react"
import { use } from "react"

export default function NextAuthProvider({children}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
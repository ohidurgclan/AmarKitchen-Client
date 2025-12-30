import React from 'react'
import { signOut } from "next-auth/react"
const SignOutButton = () => {
  return (
    <>
        <button className="border border-orange-500 bg-white text-orange-600 text-sm font-semibold px-4 py-2 rounded-md hover:bg-orange-50 transition" onClick={() => signOut()}>Log Out</button>
    </>
  )
}

export default SignOutButton
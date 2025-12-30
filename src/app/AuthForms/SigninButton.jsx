import React from 'react'
import { signIn } from "next-auth/react"
const SigninButton = () => {
  return (
    <>
        <button className="border border-orange-500 bg-white text-orange-600 text-sm font-semibold px-4 py-2 rounded-md hover:bg-orange-50 transition" onClick={() => signIn()}>Login</button>
    </>
  )
}

export default SigninButton
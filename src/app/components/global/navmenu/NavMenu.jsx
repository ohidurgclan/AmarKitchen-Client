'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavMenu() {
  return (
    <>
      <div className="navbar bg-auto shadow-sm px-30">
        {/* Logo */}
        <div className="navbar-start">
          <Link href="/">
            <Image
              alt="Amarkitchen"
              src="/assets/amarkitchen-logo.png"
              width={140}
              height={80}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-end sm:hidden md:flex">
          <ul className="menu menu-horizontal gap-10">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-end md:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/register">Register</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavMenu
'use client'

import {
  Activity,
  BookUser,
  Home,
  Phone,
  Users,
  CalendarCheck,
} from 'lucide-react'
import Link from 'next/link'

export default function NavItems() {
  return (
    <>
      <li>
        <Link href="/">
          <Home size={18} />
          Home
        </Link>
      </li>
      <li>
        <Link href="/activity">
          <Activity size={18} />
          Activity
        </Link>
      </li>

      <li>
        <Link href="/committee">
          <Users size={18} />
          Committee
        </Link>
      </li>
      <li>
        <Link href="events">
          <CalendarCheck size={18} />
          Events
        </Link>
      </li>
      <li>
        <Link href="about-us">
          <BookUser size={18} />
          About Us
        </Link>
      </li>
      <li>
        <Link href="contact">
          <Phone size={18} />
          Contact
        </Link>
      </li>
    </>
  )
}

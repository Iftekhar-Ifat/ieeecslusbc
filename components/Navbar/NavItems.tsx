"use client";

import { Home } from "lucide-react";
import Link from "next/link";

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
          <Home size={18} />
          Activity
        </Link>
      </li>

      <li>
        <Link href="/committee">
          <Home size={18} />
          Committee
        </Link>
      </li>
      <li>
        <Link href="about-us">
          <Home size={18} />
          About Us
        </Link>
      </li>
      <li>
        <Link href="contact">
          <Home size={18} />
          Contact
        </Link>
      </li>
    </>
  );
}

"use-client";
import Image from "next/image";
import Logo from "@/public/assets/logo_light.png";
import { User } from "lucide-react";
import NavItems from "./NavItems";
export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex w-full justify-between">
        <div className="navbar-start">
          <Image src={Logo} alt="logo" width={150} />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavItems />
          </ul>
        </div>
        <div className="flex navbar-end">
          <div className="btn btn-ghost">
            <User />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <NavItems />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

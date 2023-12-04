import Logo from "@/public/assets/logo_light.png";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-[#045C99] text-base-content rounded">
      <nav>
        <Image src={Logo} alt="logo" width={170} />
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a className="p-2 border-2 rounded-full">
            <Facebook size={20} color="white" />
          </a>
          <a className="p-2 border-2 rounded-full">
            <Youtube size={20} color="white" />
          </a>
          <a className="p-2 border-2 rounded-full">
            <Linkedin size={20} color="white" />
          </a>
        </div>
      </nav>
      <aside>
        <p className="text-xl text-white font-normal">
          Copyright © 2023 All Rights Reserved by IEEE CS LU SB Chapter
        </p>
      </aside>
    </footer>
  );
}

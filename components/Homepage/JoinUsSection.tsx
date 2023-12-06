"use client";

import React from "react";
import image from "@/public/assets/Banner_2.jpg";
import Image from "next/image";
export default function JoinUsSection() {
  return (
    <div className="relative">
      <Image src={image} style={{ objectFit: "contain" }} alt="hero-img" />
      <div className="bg-[#045C9966] flex flex-col gap-2 justify-center items-center absolute top-0 h-full w-full text-white">
        <p className="text-xl text-[#e7dfd1] font-normal sm:px-2 lg:px-[200px] text-center">
          Have you decided? What now?
        </p>
        <h2 className="text-[54px] font-bold capitalize text-[#F9A41A]">
          Join us now
        </h2>
        <button className="bg-[#045C99] rounded-xl px-8 py-2 text-white hover:text-[#045C99] hover:bg-white font-bold text-2xl">
          Join
        </button>
      </div>
    </div>
  );
}

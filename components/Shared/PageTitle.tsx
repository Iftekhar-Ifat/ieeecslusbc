import Image, { StaticImageData } from "next/image";
import React from "react";

type PageTitleType = {
  title: string;
  image: StaticImageData;
};

export default function PageTitle({ title, image }: PageTitleType) {
  return (
    <div className="relative">
      <Image src={image} style={{ objectFit: "contain" }} alt="hero-img" />
      <div className="bg-[#045C9966] flex flex-col gap-2 justify-center items-center absolute top-0 h-full w-full text-white">
        <h2 className="text-5xl font-bold capitalize">{title}</h2>
      </div>
    </div>
  );
}

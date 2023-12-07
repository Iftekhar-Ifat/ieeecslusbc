import Image from 'next/image'
import React from 'react'

export default function PageTitle({ Title, image }) {
    return (
        <div className="relative">
            <Image src={image} style={{ objectFit: "contain" }} alt="hero-img" />
            <div className="bg-[#045C9966] flex flex-col gap-2 justify-center items-center absolute top-0 h-full w-full text-white">
                <h2 className="text-5xl font-bold capitalize">{Title}</h2>
            </div>
        </div>
    )
} 

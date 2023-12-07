"use client"
import Image from 'next/image'
import React from 'react'
import journeyimage_1 from '@/public/assets/Activity_1.jpg'
export default function OurJourney() {
    return (
        <div className="mb-16">
            <h1 className="text-4xl text-[#045C99] font-bold text-center mb-3 capitalize">
                Our journey
            </h1>
            <div className="relative grid grid-rows-1 md:grid-cols-2 h-auto gap-6">
                <div className="w-full h-auto grid">
                    <p className="mt-3 py-6 text-xl text-justify text-[#000] self-center sm:mt-4">The IEEE Computer Society is a professional organization dedicated to advancing the field of computer science and technology. As a part of the Institute of Electrical and Electronics Engineers (IEEE), the Computer Society serves as a global platform for researchers, practitioners, and educators in the computing domain. Established in 1946, it has played a pivotal role in shaping the evolution of computing and information technology.The society provides a wide range of resources and services, including conferences, publications, and educational programs, to foster knowledge sharing and collaboration within the computer science community. It publishes numerous journals, magazines, and conference proceedings, showcasing the latest research and developments in areas such as artificial intelligence, cybersecurity, software engineering, and more.</p>
                </div>
                <div className="w-full h-auto grid grid-cols-2 grid-rows-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 md:gap-y-12 md:gap-x-4 lg:gap-4 py-6">
                    <div className="w-full md:h-3/4 col-span-1 row-start-1 row-end-3 self-end aspect-[2/3] max-h-full max-w-full hidden lg:block">
                        <div className="aspect-[2/3]">
                            <Image className="inset-0 h-full w-full object-cover rounded-md" src={journeyimage_1} alt="" />
                        </div>
                    </div>
                    <div className="relative top-4 md:top-4 max-h-3/4 col-span-1 md:row-start-1 md:row-end-2 self-end grid">
                        <div className="aspect-[2/3]">
                            <Image className="inset-0 h-full w-full object-cover rounded-md" src={journeyimage_1} alt="" />
                        </div>
                    </div>
                    <div className="relative -top-4 md:top-4 max-h-3/4 col-span-1 md:row-start-2 md:row-end-3 self-start grid">
                        <div className="aspect-[2/3]">
                            <Image className="inset-0 h-full w-full object-cover rounded-md" src={journeyimage_1} alt="" />
                        </div>
                    </div>
                    <div className="relative -top-4 md:-top-4 max-h-3/4 col-span-1 md:row-start-1 row-end-2 self-end grid">
                        <div className="aspect-[2/3]">
                            <Image className="inset-0 h-full w-full object-cover rounded-md" src={journeyimage_1} alt="" />
                        </div>
                    </div>
                    <div className="relative top-4 md:-top-4 max-h-3/4 col-span-1 md:row-start-2 md:row-end-3 self-start grid">
                        <div className="aspect-[2/3]">
                            <Image className="inset-0 h-full w-full object-cover rounded-md" src={journeyimage_1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

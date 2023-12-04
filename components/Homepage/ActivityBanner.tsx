import Image from 'next/image'
import React from 'react'
import image_1 from '@/public/assets/Activity_1.jpg'
import image_2 from "@/public/assets/Activity_2.jpg"
import image_3 from "@/public/assets/Activity_3.jpg"
export default function ActivityBanner() {
    return (
        <div className="carousel w-full h-[440px] mt-3">
            <div id="slide1" className="carousel-item relative w-full">
                <Image src={image_1} alt="" className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <Image src={image_2} alt="" className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <Image src={image_3} alt="" className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* <div id="slide4" className="carousel-item relative w-full">
                <Image src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" alt="" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    )
}

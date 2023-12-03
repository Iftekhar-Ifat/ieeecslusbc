"use-client";
import Bannerimg_1 from '@/public/assets/Banner_1.jpg'
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className='relative'>
      <Image src={Bannerimg_1} alt="" style={{ height: "520px" }} />
      <div className='bg-[#045C9966] flex flex-col gap-2 justify-center items-center absolute top-0 h-full text-white'>
        <h2 className='text-[54px] font-bold capitalize'>Hello visitors</h2>
        <p className='text-xl font-normal sm:px-2 lg:px-[200px] text-center'>We are are IEEE Computer society LU SB Chapter. We started our journey at year 0000 with a target to XXXXXXXXXXX. And we are close to our goals everyday, little by little.</p>
        <div className='flex gap-3 mt-3'>
          <button className='bg-[#045C99] rounded-xl px-6 py-2 text-white hover:text-[#045C99] hover:bg-white font-bold'>Learn more</button>
          <button className='bg-[#F9A41A] rounded-xl px-6 py-2 text-white hover:text-[#045C99] hover:bg-white font-bold'>Create account</button>
        </div>
      </div>
    </div>
  )
}

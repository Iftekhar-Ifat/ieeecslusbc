"use-client";
import AchivementIcon_1 from '@/public/assets/icon _researchgate square_.svg'
import AchivementIcon_2 from '@/public/assets/Vector.svg'
import AchivementIcon_3 from '@/public/assets/icon _photo camera_.svg'
import AchivementIcon_4 from '@/public/assets/icon _best practices_.svg'
import AchivementIcon_5 from '@/public/assets/icon _international_.svg'
import Image from "next/image";
export default function AchievementSection() {
  return <div className="mb-[65px] mx-6 lg:mx-40">
    <h1 className="text-4xl text-[#045C99] font-bold text-center mb-3">Achievements</h1>

    <div className="flex flex-col lg:flex-row gap-2">

      <div className="card sm:w-4/4 lg:w-1/4 bg-[rgb(4,92,153)] shadow-xl">
        <figure className="px-10 pt-10">
          <Image src={AchivementIcon_1} alt="" />
        </figure>
        <div className="card-body items-center text-center text-white">
          <h2 className="text-2xl font-bold">Research papers</h2>
          <p>15 accepted papers + <br /> 10 on going papers+</p>
        </div>
      </div>

      <div className="card sm:w-4/4 lg:w-1/4 bg-[#045C99] shadow-xl">
        <figure className="px-10 pt-10">
          <Image src={AchivementIcon_2} alt="" />
        </figure>
        <div className="card-body items-center text-center text-white">
          <h2 className="text-2xl font-bold">Competitive Programming</h2>
          <p>IEEE Xtream-14, Champion , Bangladesh Section</p>
        </div>
      </div>

      <div className="card sm:w-4/4 lg:w-1/4 bg-[#045C99] shadow-xl">
        <figure className="px-10 pt-10">
          <Image src={AchivementIcon_3} alt="" />
        </figure>
        <div className="card-body items-center text-center text-white">
          <h2 className="text-2xl font-bold">Photo Contest</h2>
          <p>IEEE Day Photo Contest Winner 2023- Technical Section</p>
        </div>
      </div>

      <div className="card sm:w-4/4 lg:w-1/4 bg-[#045C99] shadow-xl">
        <figure className="px-10 pt-10">
          <Image src={AchivementIcon_4} alt="" />
        </figure>
        <div className="card-body items-center text-center text-white">
          <h2 className="text-2xl font-bold">Best Student Branch</h2>
          <p>Best Student Branch 2022 in XYZ Category</p>
        </div>
      </div>

      <div className="card sm:w-4/4 lg:w-1/4 bg-[#045C99] shadow-xl">
        <figure className="px-10 pt-10">
          <Image src={AchivementIcon_5} alt="" />
        </figure>
        <div className="card-body items-center text-center text-white">
          <h2 className="text-2xl font-bold">International Conference</h2>
          <p>Our Advisor joining the re-known conference in Malaysiay</p>
        </div>
      </div>

    </div>
  </div>;
}

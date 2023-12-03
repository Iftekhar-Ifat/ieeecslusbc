"use-client";

import ActivityBanner from "./ActivityBanner";
import { Microscope } from 'lucide-react'
import AchivementIcon_1 from '@/public/assets/icon _researchgate square_.svg'
import AchivementIcon_2 from '@/public/assets/Vector.svg'
import AchivementIcon_3 from '@/public/assets/icon _photo camera_.svg'
import AchivementIcon_4 from '@/public/assets/icon _best practices_.svg'
import AchivementIcon_5 from '@/public/assets/icon _international_.svg'
import Image from "next/image";
export default function ActivitySection() {
  return (
    <div className="mb-[65px] mx-6 lg:mx-40">
      <h1 className="text-4xl text-[#045C99] font-bold text-center">Our Activities</h1>
      <ActivityBanner />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 items-center justify-center">

        <div className="max-w-sm p-4 bg-[#045C991C] border border-gray-200 rounded-lg shadow">
          <Microscope size={40} />
          <a href="#">
            <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 ">Research bootcamp</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">We are the first university to organize online research bootcamp for students and teachers xxxxxxxxx</p>
        </div>

        <div className="max-w-sm p-4 bg-[#045C991C] border border-gray-200 rounded-lg shadow">
          <Microscope size={40} />
          <a href="#">
            <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 ">Workshop</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">We have organized many workshops now to help the students increase their skills and xxxxxxxxxxxxxxxxxxx</p>
        </div>

        <div className="max-w-sm p-4 bg-[#045C991C] border border-gray-200 rounded-lg shadow">
          <Microscope size={40} />
          <a href="#">
            <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 ">Development bootcamp</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">We are the first university to organize online research bootcamp for students and teachers xxxxxxxxx</p>
        </div>

        <div className="max-w-sm p-4 bg-[#045C991C] border border-gray-200 rounded-lg shadow">
          <Microscope size={40} />
          <a href="#">
            <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 ">Seminar and webinars</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">We are the first university to organize online research bootcamp for students and teachers xxxxxxxxx</p>
        </div>

        <div className="max-w-sm p-4 bg-[#045C991C] border border-gray-200 rounded-lg shadow">
          <Microscope size={40} />
          <a href="#">
            <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 ">Social Services</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">We are the first university to organize online research bootcamp for students and teachers xxxxxxxxx</p>
        </div>

        <div className="max-w-sm p-4 bg-[#045C991C] border border-gray-200 rounded-lg shadow">
          <Microscope size={40} />
          <a href="#">
            <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 ">Election</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">We are the first university to organize online research bootcamp for students and teachers xxxxxxxxx</p>
        </div>

      </div>

    </div>
  )
}

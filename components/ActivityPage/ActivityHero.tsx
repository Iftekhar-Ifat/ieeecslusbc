"use client";

import Image from "next/image";
import PageTitle from "../Shared/PageTitle";
import ActivitypageHeroimage from '@/public/assets/ActivityBanner.jpg'
import Actvity_1img from '@/public/assets/Activity_1.jpg'
import { ArrowRight } from 'lucide-react';
export default function ActivityHero() {
  return (
    <div>
      <PageTitle Title={"Our Activities"} image={ActivitypageHeroimage} />
      <div className="sm:mx-0 lg:mx-24 px-4 lg:px-0 mt-6">
        {/* {Research section } */}
        <h3 className="text-xl text-[#045C99] font-bold mb-3 capitalize">Research</h3>
        {/* { cards} */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-4">
          <div className="card w-fit bg-base-100 shadow-xl">
            <figure><Image src={Actvity_1img} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">Developing Advanced Security Professionals</h2>
              <p>Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.</p>
            </div>
          </div>

          <div className="card w-fit bg-base-100 shadow-xl">
            <figure><Image src={Actvity_1img} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">Developing Advanced Security Professionals</h2>
              <p>Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.</p>
            </div>
          </div>

          <div className="card w-fit bg-base-100 shadow-xl">
            <figure><Image src={Actvity_1img} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">Developing Advanced Security Professionals</h2>
              <p>Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-ghost">See more <ArrowRight /> </button>
        </div>
        <div className="divider"></div>
        {/* {Android section } */}
        <h3 className="text-xl text-[#045C99] font-bold mb-3 capitalize">Android</h3>
        {/* { cards} */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-4">
          <div className="card w-fit bg-base-100 shadow-xl">
            <figure><Image src={Actvity_1img} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">Flutter Bootcamp 2022</h2>
              <p>Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.</p>
            </div>
          </div>

          <div className="card w-fit bg-base-100 shadow-xl">
            <figure><Image src={Actvity_1img} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">Flutter Bootcamp 2022</h2>
              <p>Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.</p>
            </div>
          </div>

          <div className="card w-fit bg-base-100 shadow-xl">
            <figure><Image src={Actvity_1img} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">Flutter Bootcamp 2022</h2>
              <p>Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-ghost">See more <ArrowRight /> </button>
        </div>
      </div>
    </div>
  )
}

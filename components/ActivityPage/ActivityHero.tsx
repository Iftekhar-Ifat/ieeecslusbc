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
      <div className="mx-24 mt-6">
        {/* {Research section } */}
        <h3 className="text-xl text-[#045C99] font-bold mb-3 capitalize">Research</h3>
        {/* { cards} */}
        <div className="flex sm:flex-col md:flex-row justify-between items-center gap-5 mb-4">
          <div className="card w-fit bg-base-100 shadow-xl">
            <figure><Image src={Actvity_1img} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">Developing Advanced Security Professionals</h2>
              <p>Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read more</button>
              </div>
            </div>
          </div>

          <div className="card w-fit bg-base-100 shadow-xl">
            <figure><Image src={Actvity_1img} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">Developing Advanced Security Professionals</h2>
              <p>Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read more</button>
              </div>
            </div>
          </div>

          <div className="card w-fit bg-base-100 shadow-xl">
            <figure><Image src={Actvity_1img} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">Developing Advanced Security Professionals</h2>
              <p>Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        {/* {Android section } */}
        <h3 className="text-xl text-[#045C99] font-bold mb-3 capitalize">Android</h3>
        {/* { cards} */}
        <div className="flex flex-row justify-between items-center gap-5 mb-4">
          <div className="card w-fit bg-base-100 shadow-xl">
            <figure><Image src={Actvity_1img} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">Flutter Bootcamp 2022</h2>
              <p>Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-ghost">Read more <ArrowRight /> </button>
              </div>
            </div>
          </div>

          <div className="card w-fit bg-base-100 shadow-xl">
            <figure><Image src={Actvity_1img} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">Flutter Bootcamp 2022</h2>
              <p>Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read more</button>
              </div>
            </div>
          </div>

          <div className="card w-fit bg-base-100 shadow-xl">
            <figure><Image src={Actvity_1img} alt="" /></figure>
            <div className="card-body">
              <h2 className="card-title">Flutter Bootcamp 2022</h2>
              <p>Digital advanced security stands at the forefront of safeguarding modern technological ecosystems against evolving cyber threats. This multifaceted approach encompasses cutting-edge.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

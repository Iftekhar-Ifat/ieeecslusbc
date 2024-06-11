import React from 'react'
import { featuredActivityCardData } from '../data/FeaturedActivityCardData'
import Image from 'next/image'

export default function FeaturedEvents() {
  return (
    <>
      {featuredActivityCardData.map((section) => (
        <div key={section.id} className="my-6">
          <h3 className="text-3xl text-[#045C99] font-bold capitalize">
            {section.type}
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 my-4">
            {section.card_data.map((card) => (
              <div key={card.id} className="card w-fit bg-base-100 shadow-xl">
                <figure>
                  <Image src={card.image_url} alt="card-img" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{card.title}</h2>
                  <p>{card.subtitle}</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-ghost">Read more</button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button className="btn btn-ghost">Read more</button>
          </div>
        </div>
      ))}
    </>
  )
}

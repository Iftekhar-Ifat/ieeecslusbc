import FeaturedEvents from '@/components/Events/FeaturedEvents'
import React from 'react'

export default function index() {
  return (
    <div className="mx-6 lg:mx-52">
      <h1 className="flex justify-center my-2 text-[#045C99] font-bold capitalize text-6xl">
        Events
      </h1>
      <FeaturedEvents />
    </div>
  )
}

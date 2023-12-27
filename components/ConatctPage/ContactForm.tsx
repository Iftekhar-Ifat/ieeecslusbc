'use client'
import React from 'react'
import { MapPin, Phone, Facebook, Linkedin, Youtube, Mail } from 'lucide-react'

export default function ContactForm() {
  const HandleSubmit = (e) => {
    e.preventDefault()
    alert('clicked')
  }
  return (
    <div className="mx-6 lg:mx-52">
      <div>
        <h1 className="mt-6 font-bold text-5xl text-[#045C99] ">
          Get in touch
        </h1>
        <p className="text-gray-500 font-normal text-xl mt-4">
          For any inquiries, feedback or collaboration opportunities, we are
          here to listen and respond. Feel free to use the contact form provided
          below, and our friendly team will get back to you promptly. We look
          forward to connecting with you.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-6 bg-gray-200 shadow-md rounded-md">
        <div className="bg-[#045C99] h-full px-3 py-12 text-white space-y-4">
          <h2 className="font-bold text-xl">Contact information</h2>
          <p className="text-gray-300">
            If you have any inquiry about our student branch, let us know.
          </p>
          <div className="flex flex-col items-center">
            <p className="inline-flex gap-3 text-[15px]">
              <MapPin size={30} /> Leading University. Ragibnagar, Sylhet,
              Bangladesh.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="inline-flex gap-3 text-[15px]">
              <Phone size={25} /> +880123123123
            </p>
            <p className="inline-flex gap-3 text-[15px]">
              <Mail size={25} /> ieeelusbc@gmail.com
            </p>
          </div>
          <div className="grid grid-flow-col justify-evenly">
            <a className="p-2">
              <Facebook size={20} color="white" />
            </a>
            <a className="p-2">
              <Youtube size={20} color="white" />
            </a>
            <a className="p-2">
              <Linkedin size={20} color="white" />
            </a>
          </div>
        </div>

        <div className="col-span-2">
          <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
            <h3 className="text-lg font-medium text-gray-500">
              Send us a message
            </h3>
            <form
              className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              onSubmit={HandleSubmit}
            >
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-500"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-500 shadow-sm focus:border-[#045C99] focus:ring-[#045C99]"
                    type="text"
                    name="first-name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-500"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-500 shadow-sm focus:border-[#045C99] focus:ring-[#045C99]"
                    type="text"
                    name="last-name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-500"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-500 shadow-sm focus:border-[#045C99] focus:ring-[#045C99]"
                    type="email"
                    name="email"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Phone
                  </label>
                  <span id="phone-optional" className="text-sm text-gray-500">
                    Optional
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-500 shadow-sm focus:border-[#045C99] focus:ring-[#045C99]"
                    aria-describedby="phone-optional"
                    type="text"
                    name="phone"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-500"
                >
                  Subject
                </label>
                <div className="mt-1">
                  <input
                    id="subject"
                    className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-500 shadow-sm focus:border-[#045C99] focus:ring-[#045C99]"
                    type="text"
                    name="subject"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-500"
                  >
                    Message
                  </label>
                  <span id="message-max" className="text-sm text-gray-500">
                    Max. 500 characters
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-500 shadow-sm focus:border-[#045C99] focus:ring-[#045C99]"
                    aria-describedby="message-max"
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2 sm:flex sm:justify-end">
                <button className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[#045C99] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#045C99] focus:outline-none focus:ring-2 focus:ring-[#045C99] focus:ring-offset-2 sm:w-auto">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

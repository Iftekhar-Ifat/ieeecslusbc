import FirstSection from '@/components/AboutusPage/FirstSection'
import React from 'react'

export default function aboutus() {
    return (
        <div className='w-full'>
            <div className="bg-[#045C9966] py-10 mb-6">
                <h1 className="flex justify-center my-2 text-white font-bold capitalize text-4xl">
                    Know More About US
                </h1>
            </div>
            <FirstSection />
        </div>
    )
}

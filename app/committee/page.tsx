import React from 'react'
import AllCommitteeSection from '@/components/CommitteePage/AllCommitteeSection'
import Allmembers from '@/components/CommitteePage/Allmembers'
export default function page() {
    return (
        <div className='w-full'>
            <h1 className="flex justify-center my-2 text-[#045C99] font-bold capitalize text-6xl">
                committee
            </h1>
            <div className="mx-6 lg:mx-52 mb-4">
                <AllCommitteeSection />
            </div>
            <Allmembers />
        </div>

    )
}

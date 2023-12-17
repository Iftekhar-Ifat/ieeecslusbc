'use client'

import Members from '@/components/CommitteePage/Members'
import Sessions from '@/components/CommitteePage/Sessions'
import { CommitteeData } from '@/components/data/CommitteeData'
import { useState } from 'react'
export default function Committee() {
  const committeeData = CommitteeData.sort((a, b) =>
    b.session.localeCompare(a.session)
  )

  const [selectedSession, setSelectedSession] = useState(
    committeeData[0].session
  )
  return (
    <div className="w-full">
      <h1 className="flex justify-center my-2 text-[#045C99] font-bold capitalize text-6xl">
        committee
      </h1>
      <div>
        <div className="mt-10">
          <Sessions
            sessionData={CommitteeData}
            selectedSession={selectedSession}
            setSelectedSession={setSelectedSession}
          />
          <div className="bg-[#045C9966] rounded-md py-10 mb-[-20px]">
            <h1 className="flex justify-center my-2 text-white font-bold capitalize text-4xl">
              Our members
            </h1>
          </div>
        </div>
        <div className="mx-6 lg:mx-52">
          <Members selectedSession={selectedSession} />
        </div>
      </div>
    </div>
  )
}

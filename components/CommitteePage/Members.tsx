'use client'

import MembersCard from './MembersCard'
import MemberCategory from './MemberCategory'
import { useState } from 'react'

export default function Members({ selectedSession }: any) {
  const [memberCategory, setMemberCategory] = useState('advisors')
  return (
    <div className="mb-3">
      <MemberCategory
        memberCategory={memberCategory}
        setMemberCategory={setMemberCategory}
      />
      <div className="mx-6 lg:mx-52 my-10 grid grid-cols-2 gap-4 justify-between items-center">
        <MembersCard
          selectedSession={selectedSession}
          memberCategory={memberCategory}
        />
      </div>
    </div>
  )
}

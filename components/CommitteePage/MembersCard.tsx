'use client'

import Image from 'next/image'
import React from 'react'
import MemberImg from '@/public/assets/Members/advisor - kohinoor sir.png'
import { Facebook, Linkedin, Youtube } from 'lucide-react'
import { CommitteeData } from '@/components/data/CommitteeData'
export default function MembersCard({ selectedSession, memberCategory }: any) {
  // TODO: will fetch data using page params
  return (
    <>
      {CommitteeData.map((committee) =>
        committee.session === selectedSession
          ? committee.data.map((data) =>
              data.type === memberCategory
                ? data.members.map((member) => (
                    <div
                      key={member.id}
                      className="card w-96 bg-gray-300 shadow-xl border border-[#045C99]"
                    >
                      <figure className="px-4 pt-10">
                        <Image
                          src={MemberImg}
                          alt="Shoes"
                          className="rounded-full"
                        />
                      </figure>
                      <div className="card-body items-center text-center">
                        <h2 className="card-title">{member.designation}</h2>
                        <h2 className="text-xl font-bold text-[#045C99]">
                          {member.name}
                        </h2>
                        <p>{member.description}</p>
                        <div className="card-actions">
                          <button className="btn btn-circle btn-accent">
                            <Facebook size={20} color="white" />
                          </button>
                          <button className="btn btn-circle btn-accent">
                            <Linkedin size={20} color="white" />
                          </button>
                          <button className="btn btn-circle btn-accent">
                            <Youtube size={20} color="white" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                : null
            )
          : null
      )}
    </>
  )
}

import React from 'react'
import MembersCard from './MembersCard'

export default function Allmembers() {
    return (
        <div className='mb-3'>
            <div className='bg-[#045C9966] rounded-md py-10 mb-[-20px]'>
                <h1 className="flex justify-center my-2 text-white font-bold capitalize text-4xl">
                    Our members
                </h1>
            </div>
            <div className='mx-6 lg:mx-52'>
                <div role="tablist" className="tabs tabs-boxed">
                    <button role="tab" className="tab">Advisor</button>
                    <a role="tab" className="tab tab-active">Ex-com</a>
                    <a role="tab" className="tab">Executives</a>
                    <a role="tab" className="tab">Volunteers</a>
                    <a role="tab" className="tab">Past Teams</a>
                </div>
            </div>
            <div className='mx-6 lg:mx-52 mt-6 grid grid-cols-2 gap-4 justify-between items-center'>
                <MembersCard />
                <MembersCard />
                <MembersCard />
            </div>
        </div>
    )
}

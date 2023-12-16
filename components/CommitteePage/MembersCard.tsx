import Image from 'next/image'
import React from 'react'
import MemberImg from '@/public/assets/Members/advisor - kohinoor sir.png'
import { Facebook, Linkedin, Youtube } from "lucide-react";
export default function MembersCard() {
    return (
        <div className="card w-96 bg-gray-300 shadow-xl border border-[#045C99]">
            <figure className="px-4 pt-10">
                <Image src={MemberImg} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Advisor </h2>
                <h2 className='text-xl font-bold text-[#045C99]'>Md. Saidur Rahman Kohinoor</h2>
                <p>“I want to grow this society at that level where it will get international recognition and hope every member will contribute from their end”</p>
                <div className="card-actions">
                    <button className="btn btn-circle btn-accent"><Facebook size={20} color="white" /></button>
                    <button className="btn btn-circle btn-accent"><Linkedin size={20} color="white" /></button>
                    <button className="btn btn-circle btn-accent"><Youtube size={20} color="white" /></button>
                </div>
            </div>
        </div>
    )
}

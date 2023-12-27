import React from 'react'
import img from '@/public/assets/Activity_1.jpg'
import Image from 'next/image'
export default function FirstSection() {
    return (
        <div className='mx-6 lg:mx-44 grid grid-cols-6 gap-5'>
            <div className='col-span-3'>
                <Image src={img} alt='' className='h-fit rounded-md' />
            </div>
            <div className='col-span-3'>
                <p className=''>The IEEE Computer Society LU SB Chapter, established in 2017 by the Department of Computer Science and Engineering at Leading University, is a dynamic community fostering the growth of skillful students in the ever-evolving field of computing. With a mission to empower its 400 members, the chapter is committed to providing a platform for knowledge exchange, skill development, and networking opportunities. By organizing workshops, seminars, and events, the society aims to enhance technical proficiency, encourage innovation, and pave the way for students to build robust professional networks. Through its comprehensive initiatives, the IEEE Computer Society LU SB Chapter is dedicated to preparing its members for a successful and fulfilling career in the world of computer science.The IEEE Computer Society LU SB Chapter, established in 2017 by the Department of Computer Science and Engineering at Leading University, is a dynamic community fostering the growth of skillful students in the ever-evolving field of computing. With a mission to empower its 400 members, the chapter is committed to providing a platform for knowledge exchange, skill development, and networking opportunities. By organizing workshops, seminars, and events, the society aims to enhance technical proficiency, encourage innovation, and pave the way for students to build robust professional networks. Through its comprehensive initiatives, the IEEE Computer Society LU SB Chapter is dedicated to preparing its members for a successful and fulfilling career in the world of computer science.</p>
                <div className='mt-3'>
                    <h2 className='text-xl font-bold'>400+ Active Members</h2>
                    <p className='text-gray-500'>Get connected with students from the department of cse who are passionate</p>
                </div>
                <div className='mt-3'>
                    <h2 className='text-xl font-bold'>Best Student Branch In Multiple Category</h2>
                    <p className='text-gray-500'>We were selected best student branch in this and that category</p>
                </div>
                <div className='mt-3 mb-4'>
                    <h2 className='text-xl font-bold'>Achievement In National Programming Competition</h2>
                    <p className='text-gray-500'>Get connected with students from the department of cse who are passionate</p>
                </div>
            </div>
        </div>
    )
}

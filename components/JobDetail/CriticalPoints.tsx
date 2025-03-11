import { Banknote, CalendarClock } from 'lucide-react'
import React from 'react'

function CriticalPoints() {
    return (
        <>
            <div className='flex max-lg:flex-col max-lg:items-start justify-between items-center  mx-8'>
                <div className='flex gap-x-4'>
                    <Banknote className='text-slate-500' />
                    <span className='tracking-tighter'>$40,000 a year</span>
                </div>
                <div className='flex gap-x-2'>
                    <CalendarClock className='text-slate-500' />
                    <span className='tracking-tighter'>{`Date Posted: 10, Jan 2025 (5 days ago)`}</span>
                </div>
            </div>
            <hr className='my-4 bg-slate-300 w-xs 2xl:w-md mx-auto h-[2px]' />
            {/* salary, perks, bullet points, last active, response time   */}
            <div className='mx-8 my-4'>
                <ul className='list-disc list-outside w-fit pl-6 overflow-auto'>
                    <li id="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li id="">Expedita voluptatum nihil maxime, ullam doloribus eos ut corporis sunt in animi rerum distinctio,</li>
                    <li id=""> facilis nobis unde pariatur quod incidunt at repellendus?</li>
                </ul>
            </div>
        </>
    )
}

export default CriticalPoints
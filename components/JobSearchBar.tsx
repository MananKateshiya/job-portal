"use client"
import { SearchIcon, BriefcaseBusiness, MapPin } from 'lucide-react'
import React, { useState } from 'react'

function JobSearchBar() {

    const [job, setJob] = useState('');
    const [location, setLocation] = useState('');


    const handleSubmit = () => {

    }
    
    return (
        <div className='flex justify-between items-center w-3xl mx-auto mb-4 rounded-md bg-white border-2 border-gray-300 focus-within:ring-2 focus-within:ring-amber-500 transition'>
            <div className='flex flex-grow '>
                <div className='flex items-center'>
                    <BriefcaseBusiness size={24} className='mx-2 text-slate-500' />
                    <input
                        type="text"
                        placeholder='Search Jobs'
                        className='px-4 py-2 text-lg outline-none border-transparent border-b-4 focus:border-b-4 focus:border-amber-600 rounded-r-none placeholder:text-center placeholder:text-base placeholder:tracking-tight transition duration-300 ease-in-out'
                        onChange={(e) => setJob(e.target.value)}
                        value={job}
                    />
                </div>

                <div className='border-l border-slate-300 my-2 mx-2'></div>

                <div className='flex items-center grow-1'>
                    <MapPin size={24} className='mx-2 text-slate-500' />
                    <input
                        type="text"
                        placeholder='Search City, Country or remote'
                        className='w-full px-4 py-2 text-lg outline-none  border-transparent border-b-4 focus:border-b-4 focus:border-amber-600 placeholder:text-center placeholder:text-base placeholder:tracking-tight transition duration-300 ease-in-out'
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                    />
                </div>
            </div>

            <button
                className='bg-amber-500 text-white py-3.5 px-4 rounded-md hover:bg-amber-600 transition'

            >
                <SearchIcon size={20} />
            </button>
        </div>
    )
}

export default JobSearchBar

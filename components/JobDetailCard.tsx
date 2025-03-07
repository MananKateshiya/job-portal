
import { Building2, MapPinned } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import BookMarkButton from './BookMarkButton';

function JobDetailCard({ id, special }: { id: string, special: boolean }) {


  return (
    <div className='flex-col m-2 p-2 rounded-md shadow-fine bg-slate-200 cursor-pointer'>
      {/* Company logo & Bookmark */}
      <div className='flex justify-between px-6 w-full  items-center'>
        <div className='flex justify-around items-center gap-x-4'>
          <Link href={'/company/${id}'} className='border-2 border-blue-500 shadow-sm rounded-full'>
            <img src="https://banner2.cleanpng.com/20190228/qby/kisspng-google-logo-google-account-g-suite-google-images-g-icon-archives-search-png-1713904157115.webp" alt="Google" width={36} height={36} className='rounded-full' />
          </Link>
          <h1 className='text-xl font-bold'>Sr. System Architect</h1>
        </div>
        {/*  */}
        <BookMarkButton id="1" />
      </div>

      {/* Job Details */}
      {/* Job Title, Company, Address, salary, perks, bullet points, last active, response time */}
      <div className="flex justify-between items-center mx-8 my-2">
        <div className="flex items-center">
          <Building2 size={24} />
          <div className={`${special ? "animated-water-border p-2 relative mx-2" : "p-2"}`}>
            <h1 className="relative z-10 tracking-tight text-md select-none line-clamp-2">Google Inc.</h1>
          </div>
        </div>
        {/*  */}
        <div className="flex items-center">
          <MapPinned />
          <h1 className="tracking-tight ml-2">Silicon Valley, California</h1>
        </div>
      </div>

    </div>
  )
}

export default JobDetailCard
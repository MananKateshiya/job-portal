import React, { Suspense } from 'react'
import CriticalJobInfo from './JobDetail/CriticalJobInfo';
import Link from 'next/link';
import BookMarkButton from './BookMarkButton';
import CriticalPoints from './JobDetail/CriticalPoints';
import { JobDetail } from '@/models/JobDetailModel';

function JobDetailCard({ id, data, special }: { id: string | undefined, data: JobDetail, special?: boolean }) {
  // await new Promise(resolve => setTimeout(resolve, 2000));

  return (
    <div className='flex-col m-2 p-2 rounded-md shadow-fine bg-slate-200  cursor-pointer'>
      {/* Company logo & Bookmark */}
      <div className='flex justify-between px-6 w-full items-center'>
        <div className='flex justify-around items-center gap-x-4'>
          <Link href={`/company/${id}`} className='border-2 border-blue-500 shadow-sm rounded-full'>
            <img src="https://banner2.cleanpng.com/20190228/qby/kisspng-google-logo-google-account-g-suite-google-images-g-icon-archives-search-png-1713904157115.webp" alt="Google" width={36} height={36} className='rounded-full' />
          </Link>
          <h1 className='text-xl font-bold'>{data.job_title}</h1>
        </div>
        {/*  */}
        <BookMarkButton id="1" />
      </div>

      <CriticalJobInfo id={data._id} data={data} special={true} />

      {/* Job Details */}
      <Suspense fallback={<span>Loading...</span>}>
        <CriticalPoints data={data} points={data.details} />
      </Suspense>
    </div>
  )
}

export default JobDetailCard
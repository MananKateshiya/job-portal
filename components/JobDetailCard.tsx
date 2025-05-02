import React, { Suspense } from 'react'
import Link from 'next/link';
import BookMarkButton from './BookMarkButton';
import { JobDetail } from '@/models/JobDetailModel';
import { Banknote, Building2, CalendarClock, MapPinned } from 'lucide-react';
import { convertDate } from '@/lib/helper';

type JobDetailCardProps = {
  id: string | undefined;
  data: JobDetail;
  href?: string;
  className?: string;
  onClick?: React.MouseEventHandler;
}

const JobDetailCard = React.forwardRef<HTMLDivElement, JobDetailCardProps>(
  ({ id, data, href, className, onClick, ...props }, ref) => {

    // await new Promise(resolve => setTimeout(resolve, 2000));

    return (
      <div
        ref={ref}
        onClick={onClick}
        className={`flex-col m-2 p-2 rounded-md shadow-fine bg-slate-200 cursor-pointer ${className || ''}`}
        {...props}
      >
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

        <div className="flex max-lg:flex-col max-lg:items-start justify-between items-center mx-8 my-2">
          <div className="flex items-center">
            <Building2 size={24} className='text-slate-500' />
            <div className={`${data.special ? "animated-water-border p-2 relative mx-2" : "p-2"}`}>
              <h1 className="relative z-10 tracking-tight text-md select-none line-clamp-2">{data.company}</h1>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center">
            <MapPinned className='text-slate-500' />
            <h1 className="tracking-tight ml-2">{data.location}</h1>
          </div>
        </div>

        {/* Job Details */}
        <Suspense fallback={<span>Loading...</span>}>
          <div className='flex max-lg:flex-col max-lg:items-start justify-between items-center mx-8'>
            <div className='flex gap-x-4'>
              <Banknote className='text-slate-500' />
              <span className='tracking-tighter'>{data.salary}</span>
            </div>
            <div className='flex gap-x-2'>
              <CalendarClock className='text-slate-500' />
              <span className='tracking-tighter'>{`Date posted: ${convertDate(data.createdAt)}`}</span>
            </div>
          </div>
          <hr className='my-4 bg-slate-300 mx-4 h-[2px]' />
          <div className='mx-8 my-4'>
            <ul className='list-disc list-outside w-fit pl-6 overflow-auto'>
              {data.details?.map((category, index) => (
                <li key={index} className='py-2'>
                  <h3 className='font-semibold'>{category.name}</h3>
                  <ul>
                    {category.points
                      .filter(p => p.isSelected)
                      .map((point, pointIndex) => (
                        <li key={pointIndex}>{point.point}</li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </Suspense>
      </div>
    )
  })

JobDetailCard.displayName = 'JobDetailCard';
export default JobDetailCard
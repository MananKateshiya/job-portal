import JobDetailCard from '@/components/JobDetailCard'
import { getCriticalInfo } from '@/lib/JobCardDetails/getCriticalInfo';
import { JobDetail, PaginatedResponse } from '@/models/JobDetailModel';

import React, { Suspense } from 'react'

async function Home() {

  const jobData:PaginatedResponse = await getCriticalInfo();
 
  return (
    <main className='w-full mx-auto'>
      <div className=' border-2 border-amber-500'>
        <h1 className='justify-center p-2 text-center items-center text-2xl font-extrabold'>Job Portal</h1>
      </div>

      <div className='flex justify-between'>
        <section className='flex-col w-full  xl:max-w-1/3'>
          {jobData?.Jobs?.map((job) => ( 
            <Suspense key={job._id} fallback={<div>Loading job...</div>}>
              <JobDetailCard id={job._id} data={job} special={job.special} />
            </Suspense>
          )) || <p>No jobs found</p>}
        </section>
        <section className='hidden lg:inline lg:max-w-full grow-1'>

        </section>
      </div>
    </main>
  )
}

export default Home
import JobDetailCard from '@/components/JobDetailCard'
import JobSearchBar from '@/components/JobSearchBar';
import { getCriticalInfo } from '@/lib/JobCardDetails/getCriticalInfo';
import { PaginatedResponse } from '@/models/JobDetailModel';
import React, { Suspense } from 'react'

async function Home() {



  const jobData: PaginatedResponse = await getCriticalInfo();
  return (
    <main className='w-full mx-auto'>
      <div>
        <JobSearchBar />
      </div>
      <div className='flex justify-between'>
        <section className='flex-col w-full xl:max-w-3xl'>
       
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
import JobCard from '@/components/JobCard';
import JobDetailCard from '@/components/JobDetailCard'
import JobSearchBar from '@/components/JobSearchBar';
import LinkContainer from '@/components/LinkContainer';
import { getCriticalInfo } from '@/lib/JobCardDetails/getCriticalInfo';
import { PaginatedResponse } from '@/models/JobDetailModel';
import React, { Suspense } from 'react'

async function Home({
  searchParams,
}: {
  searchParams: { selectedJob?: string }
}) {

  const { selectedJob } = await searchParams || '';
  const jobData: PaginatedResponse = await getCriticalInfo();

  return (
    <main className='w-full mx-auto'>
      <div>
        <JobSearchBar />
      </div>
      <div className='flex justify-between'>
        <section className='flex-col w-full xl:max-w-[576px]'>

          <Suspense fallback={<div>Loading jobs...</div>}>
            {jobData?.Jobs?.map((job) => (
              <LinkContainer
                key={job._id}
                href={`/?selectedJob=${job._id}`}

              >
                <JobDetailCard id={job._id} data={job} special={job.special} />
              </LinkContainer>
            )) || <p>No jobs found</p>}
          </Suspense>
        </section>

        <section className='w-full text-justify tracking-tight m-2 rounded-md shadow-fine bg-slate-200 cursor-pointer hidden lg:flex'>
          <div className='bg-slate-200 p-4 h-screen sticky top-0 overflow-y-auto scrollbar-hidden' >
            {selectedJob &&
              <JobCard selectedJobId={selectedJob} />
            }
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
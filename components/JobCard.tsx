import loading from '@/app/(root)/loading';
import { getDetails } from '@/lib/JobCardDetails/getCriticalInfo'
import React, { Suspense } from 'react'

async function JobCard({ selectedJobId }: { selectedJobId?: string }) {
    const job = await getDetails(selectedJobId as string);
    return (
      
        <div className='flex flex-col'>
            <h1>{job.job_title}</h1>
        </div>

    )
}

export default JobCard
import { JobDetail } from '@/models/JobDetailModel';
import React from 'react'

async function JobCard({ selectedJobId }: { selectedJobId?: JobDetail }) {


    return (
        <div className='w-full mx-auto'>
            <h1>{selectedJobId?.job_title}</h1>
            <p>{selectedJobId?._id}</p>
        </div>
    )



}

export default JobCard
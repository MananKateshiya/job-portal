import JobDetailCard from '@/components/JobDetailCard';
import { getDetails } from '@/lib/JobCardDetails/getCriticalInfo'
import React from 'react'

async function page({ params }: { params: { id: string } }) {

    const { id } = await params;
    const jobDetails = await getDetails(id);


    return (
        <div className='flex-col'>
            <h2>{id}</h2>
            <JobDetailCard id={jobDetails._id} data={jobDetails} special={jobDetails.special} />
        </div>
    )
}

export default page
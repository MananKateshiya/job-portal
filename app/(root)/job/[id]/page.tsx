
import JobDetailCard from '@/components/JobDetailCard';
import { getDetails } from '@/lib/JobCardDetails/getCriticalInfo'
import React from 'react'

async function page({ params }: { params: { id: string } }) {


    const { id } = await params;
    const jobDetails = await getDetails(id);

    return (
        <div className='flex-col'>
            {
                !jobDetails._id ? (
                    <div>No Jobs Found</div>
                ) : (
                    <div>
                        <JobDetailCard id={jobDetails._id} data={jobDetails} />
                    </div>

                )
            }
        </div>
    )
}

export default page
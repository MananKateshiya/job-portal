'use client'
import React, { useEffect, useState } from 'react'
import { getCriticalInfo } from '@/lib/JobCardDetails/getCriticalInfo'
import { JobDetail } from '@/models/JobDetailModel';

async function JobDetailStaging() {

    const [jobs, setJobs] = useState<JobDetail[]>();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobData = await getCriticalInfo(page, limit);
                setJobs(jobData.Jobs);

            } catch (error: any) {
                console.error(error.message)
            }

        }
        fetchJobs();
    }, [page, limit])


    return (
        <div>
         <h1>JobDetailStaging</h1>
        </div>
    )
}

export default JobDetailStaging
import React from 'react'
import { Building2, MapPinned } from 'lucide-react'
import { JobDetail } from '@/models/JobDetailModel'

function CriticalJobInfo({ id, data, special }: { id: string | undefined, data: JobDetail, special: boolean }) {
    return (
        <>
            <div className="flex max-lg:flex-col max-lg:items-start justify-between items-center mx-8 my-2">
                <div className="flex items-center">
                    <Building2 size={24} className='text-slate-500' />
                    <div className={`${special ? "animated-water-border p-2 relative mx-2" : "p-2"}`}>
                        <h1 className="relative z-10 tracking-tight text-md select-none line-clamp-2">{data.company}</h1>
                    </div>
                </div>
                {/*  */}
                <div className="flex items-center">
                    <MapPinned className='text-slate-500' />
                    <h1 className="tracking-tight ml-2">{data.location}</h1>
                </div>
            </div>
        </>
    )
}

export default CriticalJobInfo
import { JobDetail } from '@/models/JobDetailModel'
import { Banknote, CalendarClock } from 'lucide-react'
import React from 'react'
import { format, differenceInDays } from 'date-fns';

async function CriticalPoints({ data, points }: { data: JobDetail, points: JobDetail['details'] }) {

    const convertDate = (date: any) => {
        try {
            const createdAt = new Date(date);
            const now = new Date();

            const formattedDate = format(createdAt, 'd, MMM yyyy');

            const daysAgo = differenceInDays(now, createdAt);
            const daysAgoText = daysAgo >= 0 ? `(${daysAgo} day${daysAgo === 1 ? '' : 's'} ago)` : '(in the future)';

            const displayDate = `${formattedDate} ${daysAgoText}`;

            return displayDate;

        } catch (error: any) {
            console.error("Error converting Date: ", error);
        }
    }

    return (
        <>
            <div className='flex max-lg:flex-col max-lg:items-start justify-between items-center mx-8'>
                <div className='flex gap-x-4'>
                    <Banknote className='text-slate-500' />
                    <span className='tracking-tighter'>{data.salary}</span>
                </div>
                <div className='flex gap-x-2'>
                    <CalendarClock className='text-slate-500' />
                    <span>{`Date posted: ${convertDate(data.createdAt)}`}</span>
                </div>
            </div>
            <hr className='my-4 bg-slate-300 mx-4 h-[2px]' />
            {/* salary, perks, bullet points, last active, response time   */}
            <div className='mx-8 my-4'>
                <ul className='list-disc list-outside w-fit pl-6 overflow-auto'>
                    {points.map((point) => (
                        point.points.map((p) => (
                            <li key={point.category_id}>{p}</li>
                        ))
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CriticalPoints
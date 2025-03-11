import JobDetailCard from '@/components/JobDetailCard'
import React from 'react'

function Home() {
  return (
    <main className='w-full mx-auto'>
      <div className=' border-2 border-amber-500'>
        <h1 className='justify-center p-2 text-center items-center text-2xl font-extrabold'>Job Portal</h1>
      </div>

      <div className='flex'>
        <section className='flex-col w-full  lg:max-w-1/3'>
          <JobDetailCard id='1' special={true} />
          <JobDetailCard id='2' special={true} />
          <JobDetailCard id='3' special={true} />
          <JobDetailCard id='4' special={true} />
        </section>

        <section className='hidden lg:inline lg:max-w-full'>
          <JobDetailCard id='4' special={true} />
        </section>
      </div>
    </main>
  )
}

export default Home
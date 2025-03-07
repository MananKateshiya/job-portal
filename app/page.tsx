import JobDetailCard from '@/components/JobDetailCard'
import React from 'react'

function Home() {
  return (
    <main className='w-full mx-auto'>
      <div className=' border-2 border-amber-500'>
        <h1 className='justify-center p-2 text-center items-center text-2xl font-extrabold'>Job Portal</h1>
      </div>

      <section className='flex-col w-full md:max-w-1/2'>
        <JobDetailCard id='1' special={true}/>
      </section>
    </main>
  )
}

export default Home
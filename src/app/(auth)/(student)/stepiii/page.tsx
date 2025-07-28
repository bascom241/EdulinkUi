import React from 'react'
import { Skeleton2 } from '@/utils/skeleton'
import FormIII from '@/components/registerForm/formiii'
const StepIII = () => {
   return (
        <main className='flex gap-12 justify-center items-center w-full px-16 py-10 h-screen'>
            <Skeleton2 />
            <FormIII />
        </main>
    )
}

export default StepIII

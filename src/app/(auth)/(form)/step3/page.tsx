import React from 'react'
import Form3 from '@/components/registerForm/form3'
import { Skeleton3 } from '@/utils/skeleton'
const Step3 = () => {
    return (
        <main className='flex gap-12 justify-center items-center w-full px-16 py-10 h-screen'>
            <Skeleton3/>
            <Form3/>
        </main>
    )
}

export default Step3

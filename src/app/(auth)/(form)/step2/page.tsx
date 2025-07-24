"use client"
import React from 'react'
import { Skeleton2 } from '@/utils/skeleton'
import Form2 from '@/components/registerForm/form2'
const Step2 = () => {
    return (
        <main className='flex gap-12 justify-center items-center w-full px-16 py-10 h-screen'>
            <Skeleton2 />
            <Form2 />
        </main>
    )
}

export default Step2

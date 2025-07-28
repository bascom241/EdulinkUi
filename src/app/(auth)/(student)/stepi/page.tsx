"use client"
import React from 'react'
import { Skeleton2 } from '@/utils/skeleton'
import FormI from '@/components/registerForm/formi'
const StepII = () => {
    return (
        <main className='flex gap-12 justify-center items-center w-full px-16 py-10 h-screen'>
            <Skeleton2 />
            <FormI />
        </main>
    )
}

export default StepII

"use client"
import React from 'react'
import Form1 from '@/components/registerForm/form1'
import { Skeleton1 } from '@/utils/skeleton'
const Step1 = () => {
    return (
        <main className='flex gap-12 justify-center items-center w-full px-16 py-10 h-screen'>
            <Skeleton1 />
            <Form1 />
        </main>
    )
}

export default Step1

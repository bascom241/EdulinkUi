"use client"
import React from 'react'
import Form1 from '@/components/registerForm/form1'
import { Skeleton1 } from '@/utils/skeleton'
const Step1 = () => {
    return (
        <main className='flex gap-2'>
            <Skeleton1 />
            <Form1 />
        </main>
    )
}

export default Step1

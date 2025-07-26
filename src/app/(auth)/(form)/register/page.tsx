import React from 'react'
import { Skeleton4 } from '@/utils/skeleton'
import Form0 from '@/components/registerForm/form0'
const Step0 = () => {
  return (
    <main className=' flex  gap-12 justify-center items-center w-full px-16 py-10 h-screen'>
      <Skeleton4 />
      <Form0/>
    </main>
  )
}

export default Step0

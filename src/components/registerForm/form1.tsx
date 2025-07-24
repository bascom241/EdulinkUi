"use client"
import React from 'react'

import FormInput from '../ui/FormInput'
import { multiForm } from '@/store/multiForm'
import FormButton from '../ui/FormButton'
import { useRouter } from 'next/navigation'
const Form1 = () => {

    const { handleChange, data, goToNextPage, goToPrevPage, maxFormLength} = multiForm();

    const router = useRouter();
    const handeNextPageRouting = () => {
        router.push("/step2")
    }
    
    return (
        <section className='w-full sm:w-[70%] flex flex-col items-center justify-center gap-4'>
            <h1>Security Credentials</h1>
            <FormInput
                handleChange={handleChange}
                inputPlaceholder="bascode@gmail.com"
                inputName='email'
                inputValue={data.email}
                labelValue='Email'
                selectInput={false}
            />
            <FormInput
                handleChange={handleChange}
                inputPlaceholder='5 Characters Min'
                inputName='password'
                inputValue={data.password}
                labelValue='Password'
                selectInput={false}
            />
            <FormInput
                handleChange={handleChange}
                inputPlaceholder='Must Be the Same with The Password'
                inputName='confirmPassword'
                inputValue={data.confirmPassword}
                labelValue='Confirm Password'
                selectInput={false}
            />

          
            <FormButton
                buttonText={"Next"}
                flexLayout='flex items-center justify-center mt-8'
                width={100}
                next={handeNextPageRouting}
            />
        </section>
    )
}

export default Form1

"use client"
import React from 'react'

import FormInput from '../ui/FormInput'
import { multiForm } from '@/store/multiForm'
import FormButton from '../ui/FormButton'


import { usePageRouter } from '../../../hooks/useRouter'
const Form0 = () => {

    const { handleChange, data, goToNextPage, goToPrevPage, maxFormLength } = multiForm();

    const { handlePageRouting } = usePageRouter()

    return (
        <section className='w-full sm:w-[70%] flex flex-col items-center justify-center gap-4'>

            <FormInput
                labelValue="Select Role(Click to select)"
                box
                inputName="student" // This is just for consistency
                inputValue={data.student} // pass current state
                handleChange={handleChange}
            />
            <FormButton
            buttonText={"Get Started"}
                flexLayout='flex items-center justify-center mt-2'
                spacing="px-4 py-3"
                width={70}
                next={()=> handlePageRouting("/step1")}
            />

        </section>
    )
}

export default Form0

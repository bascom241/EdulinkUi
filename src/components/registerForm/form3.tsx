"use client"
import React from 'react'
import FormInput from '../ui/FormInput'
import FormButton from '../ui/FormButton'
import { usePageRouter } from '../../../hooks/useRouter'
import { multiForm } from '@/store/multiForm'

const Form3 = () => {

    const { handleChange, data } = multiForm();
    const { handlePageRouting } = usePageRouter();

    return (
        <main className='w-full sm:w-[70%] flex flex-col items-center justify-center gap-4'>
            <h1>Personnal Qualificaions</h1>

            <FormInput
                handleChange={handleChange}
                inputName="certificate"
                inputValue={data.certificate}
                labelValue="Certificate"
                fileInput
            />

            <FormInput
                handleChange={handleChange}
                inputName="governmentId"
                inputValue={data.governmentId}
                labelValue="GovernmentId or National Id"
                fileInput
            />
            <p className="text-sm text-gray-600 text-center max-w-md mt-4 leading-6">
                By signing up, you agree to our <span className="text-blue-600 underline cursor-pointer">Terms of Use</span> and <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>.
                All documents and personal data provided are securely stored and protected. We’re committed to maintaining your privacy and building trust through transparency.
            </p>
            <FormButton
                buttonText={"Send Verification Code"}
                flexLayout='flex items-center justify-center mt-8 '
                spacing="px-8 py-3"
                width={100}
                next={() => handlePageRouting("/step2")}
            />
        </main>
    )
}

export default Form3

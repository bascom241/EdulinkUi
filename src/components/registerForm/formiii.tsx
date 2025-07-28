"use client"
import React from 'react'
import FormButton from '../ui/FormButton'
import { multiForm } from '@/store/multiForm'
import { usePageRouter } from '../../../hooks/useRouter'
const FormIII = () => {

    const { data } = multiForm();
    const { handlePageRouting } = usePageRouter()


    return (
        <main className='w-full sm:w-[70%] flex flex-col items-center justify-center gap-4'>

            <p className="text-sm text-gray-600 text-center max-w-md mt-4 leading-6">
                By signing up, you agree to our <span className="text-blue-600 underline cursor-pointer">Terms of Use</span> and <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>.
                All documents and personal data provided are securely stored and protected. We’re committed to maintaining your privacy and building trust through transparency.
            </p>
            <FormButton
                buttonText={"Send Verification Code"}
                flexLayout='flex items-center justify-center'
                spacing='px-6 py-4'
                width={100}
                next={() => handlePageRouting("/final")}
            />
        </main>
    )
}

export default FormIII

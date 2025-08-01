"use client"
import React from 'react'
import FormInput from '../ui/FormInput'
import FormButton from '../ui/FormButton'
import { multiForm } from '@/store/multiForm'
import { usePageRouter } from '../../../hooks/useRouter'

const FormII = () => {
    const { handleChange, data } = multiForm();

    const { handlePageRouting } = usePageRouter()



    return (
        <main className='w-full sm:w-[70%] flex flex-col items-center justify-center gap-4'>
            <div className='w-full flex items-center justify-between'>
                <div>
                    <h1 className='text-xl  font-bold'>Personal Information</h1>
                </div>




            </div>

            <div className='flex gap-3 w-full'>
                <FormInput
                    handleChange={handleChange}
                    inputName="TeachingLevel"
                    inputValue={data.TeachingLevel}
                    labelValue='Learning Level *'
                    selectInput={true}
                    selectOptionValue={[
                        { level: "Primary" },
                        { level: "Secondary" },
                        { level: "Tertiary" }
                    ]}
                />

            </div>

            <div className='flex w-full gap-5'>
                <FormInput
                    handleChange={handleChange}
                    inputName="teachingSubjects"
                    inputValue={data.teachingSubjects}
                    labelValue='Subjects Of Interest *'
                    selectInput={true}
                    multiSelect={true}
                    selectOptionValue={[
                        { val: "Mathematics" },
                        { val: "English" },
                        { val: "Biology" },
                        { chem: "Chemistry" },
                        { phy: "Physics" },
                        { lit: "Literature" },
                        { gov: "Government" }
                    ]}
                />
                {data.teachingSubjects.length > 0 && (
                    <div className="w-full mt-4">
                        <p className="font-semibold ">Selected Subjects:</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {data.teachingSubjects.map((subj) => (
                                <span
                                    key={subj}
                                    className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm"
                                >
                                    {subj}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

            </div>

            <div className='flex w-full '>
                <FormInput
                    handleChange={handleChange}
                    inputName="shortBio"
                    inputValue={data.shortBio}
                    labelValue='Short Bio *'
                    textarea={true}
                    inputPlaceholder='Short Bio'
                />
            </div>



            <div>
                <FormButton
                    buttonText={"Next"}
                    flexLayout='flex items-center justify-center'
                    spacing='px-6 py-1'
                    width={100}
                    next={() => handlePageRouting("/stepiii")}
                />
            </div>
        </main>
    )
}

export default FormII

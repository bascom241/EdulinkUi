"use client"
import React from 'react'
import FormInput from '../ui/FormInput'
import FormButton from '../ui/FormButton'
import { multiForm } from '@/store/multiForm'
const Form2 = () => {
    const { handleChange, data } = multiForm();

    return (
        <section className='w-full sm:w-[70%] flex flex-col items-center justify-center gap-4'>
            <h1>Personal Details</h1>
            <FormInput
                handleChange={handleChange}
                inputName="TeachingLevel"
                inputValue={data.TeachingLevel}
                labelValue='Teaching Level'
                selectInput={true}
                selectOptionValue={[
                    { level: "Primary" },
                    { level: "Secondary" },
                    { level: "Tertiary" }
                ]}
            />
            <FormInput
                handleChange={handleChange}
                inputName="teachingSubjects"
                inputValue={data.teachingSubjects}
                labelValue='Subjects You Teach'
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
                    <p className="font-semibold">Selected Subjects:</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {data.teachingSubjects.map((subj) => (
                            <span
                                key={subj}
                                className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm"
                            >
                                {subj}
                            </span>
                        ))}
                    </div>
                </div>
            )}
            {/* <FormInput
                handleChange={handleChange}

                inputName='noOfStudents'
                inputValue={data.noOfStudents}
                labelValue='No of Students'
            /> */}
        </section>
    )
}

export default Form2

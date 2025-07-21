import React from 'react'
import { FormData } from '@/store/multiForm'
interface InputProps {
    inputPlaceholder: string
    inputName: string
    inputValue: string | number
    handleChange: (field: keyof FormData , value :string) => void
    icon?: any
    labelValue: string
}
const FormInput: React.FC<InputProps> = ({ inputPlaceholder, inputName, inputValue, handleChange, icon, labelValue }) => {
    return (

        <div className='flex flex-col gap-2'>
            <label className=''>
                {labelValue}
            </label>
            <div className={`${icon ? "relative" : ""} flex gap-3 `}>
                <input
                    className='flex items-center px-6 py-2 border-2 '
                    placeholder={inputPlaceholder}
                    name={inputName}
                    value={inputValue}
                    onChange={(e) => handleChange(inputName as keyof FormData, e.target.value)}
                />

                {icon && (<div className='absolute top-0 left-1'>
                    {icon}
                </div>
                )}

            </div>
        </div>
    )
}

export default FormInput

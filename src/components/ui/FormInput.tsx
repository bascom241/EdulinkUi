import React from 'react'
import { FormData } from '@/store/multiForm'

type SelectValueData = {
    [key: string]: string;
};
interface InputProps {
    inputPlaceholder?: string
    inputName?: string
    inputValue: string | number | string[]
    handleChange: (field: keyof FormData, value: string | string[]) => void
    icon?: any
    labelValue: string
    selectInput?: boolean
    selectOptionValue?: SelectValueData[]
    multiSelect?: boolean

}
const FormInput: React.FC<InputProps> = ({ inputPlaceholder, inputName, inputValue, handleChange, icon, labelValue, selectInput, selectOptionValue, multiSelect }) => {
    return (

        <div className='flex flex-col gap-1 w-full'>
            <label className='font-roboto font-semibold font-sans'>
                {labelValue}
            </label>

            {
                selectInput ? <div>
                    <select
                        className={`w-full px-4 py-3 border-2 rounded-xl bg-white border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    ${multiSelect ? 'h-40 overflow-y-auto' : ''}`}
                        name={inputName}
                        value={inputValue}
                        multiple={multiSelect}
                        onChange={(e) => {
                            const selected = Array.from(e.target.selectedOptions).map(option => option.value);
                            handleChange(inputName as keyof FormData, multiSelect ? selected : e.target.value);
                        }}
                    >
                        {!multiSelect && <option value="">Select an option</option>}
                        {selectOptionValue?.map((optionObj, idx) =>
                            Object.entries(optionObj).map(([key, value]) =>
                                value ? (
                                    <option key={`${key}-${idx}`} value={value}>
                                        {value}
                                    </option>
                                ) : null
                            )
                        )}
                    </select>

                </div> :
                    <div className={`${icon ? "relative" : ""} flex gap-3 w-full`}>
                        <input
                            className='flex items-center px-6 py-3 border-2 w-full rounded-xl border-gray-500 bg-gray-100 '
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
            }

        </div>
    )
}

export default FormInput

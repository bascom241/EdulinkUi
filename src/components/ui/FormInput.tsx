import React, { useState } from 'react'
import { FormData } from '@/store/multiForm'
import { MultiFormProps } from '@/store/multiForm';
import { multiForm } from '@/store/multiForm';
import { UserPen, GraduationCap } from 'lucide-react';
type SelectValueData = {
  [key: string]: string;
};

interface InputProps {
  inputPlaceholder?: string
  inputName?: string
  inputValue: string | number | string[] | File | null | boolean
  handleChange: (field: keyof FormData, value: string | string[] | File | boolean | null) => void
  icon?: any
  labelValue: string
  selectInput?: boolean
  selectOptionValue?: SelectValueData[]
  multiSelect?: boolean
  textarea?: boolean
  fileInput?: boolean
  box?: boolean
}

const FormInput: React.FC<InputProps> = ({
  inputPlaceholder,
  inputName,
  inputValue,
  handleChange,
  icon,
  labelValue,
  selectInput,
  selectOptionValue,
  multiSelect,
  textarea,
  fileInput,
  box
}) => {

  const [preview, setPreview] = useState<string | null>(null);

  const { data } = multiForm()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file))
      handleChange(inputName as keyof FormData, file)
    }
  }

  return (
    <div className={`flex flex-col gap-1 w-full ${box && "items-center "} `}>
      <label className={`font-roboto font-semibold font-sans ${box && "mb-4 "}`}>
        {labelValue}
      </label>

      {selectInput ? (
        <div>
          <select
            className={`w-full px-4 py-3 border-2 rounded-xl bg-white border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              ${multiSelect ? 'h-40 overflow-y-auto' : ''}`}
            name={inputName}
            value={inputValue as string}
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
        </div>
      ) : textarea ? (
        <textarea
          className='w-full px-4 py-3 border-2 rounded-xl border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          placeholder={inputPlaceholder}
          name={inputName}
          value={inputValue as string}
          onChange={(e) => handleChange(inputName as keyof FormData, e.target.value)}
          rows={5}
        />
      ) : box ? (
        <div className="flex flex-col gap-4 items-center">
          <div
            className={`border-2 flex items-center justify-center rounded-xl p-6 w-60 h-48 cursor-pointer ${data.student ? "border-blue-500 bg-blue-100" : "border-gray-300"
              }`}
            onClick={() => {
              handleChange("student", true);
              handleChange("teacher", false);
            }}
          >
            <div className='flex flex-col items-center justify-center gap-2'>
              <UserPen size={64} color={` ${data.student ? "#037bfc" : "#787c7d"}`} />
              <p className={`font-bold ${data.student ? "text-[#037bfc]" : "text-[#787c7d]"}`}>Student</p>
            </div>
          </div>
          <div
            className={`border-2 flex items-center justify-center rounded-xl w-60 h-48 p-6  cursor-pointer ${data.teacher ? "border-blue-500 bg-blue-100" : "border-gray-300"
              }`}
            onClick={() => {
              handleChange("teacher", true);
              handleChange("student", false);
            }}
          >
            <div className='flex flex-col items-center justify-center gap-2'>
              <GraduationCap size={64} color={` ${data.teacher ? "#037bfc" : "#787c7d"}`} />
              <p className={`font-bold ${data.teacher ? "text-[#037bfc]" : "text-[#787c7d]"}`}>Teacher</p>
            </div>

          </div>
        </div>
      ) : fileInput ? (
        <div className='flex flex-col gap-2'>
          <input
            type='file'
            name={inputName}
            onChange={handleFileChange}
            className='w-full border-2 px-4 py-3 rounded-xl bg-white border-gray-300 text-gray-700'
          />

          {preview && (
            <div className='relative '>
              {(inputValue as File)?.type?.startsWith('image') ? (
                <img
                  src={preview}
                  alt='Preview'
                  className='w-12 h-12 rounded-2xl  border mt-2'
                />
              ) : (
                <a
                  href={preview}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 underline mt-1'
                >
                  Preview File
                </a>
              )}

              <button
                onClick={() => {
                  setPreview(null)
                  handleChange(inputName as keyof FormData, null)
                }}
                className='absolute top-0 left-8 text-sm'
              >
                ❌
              </button>
            </div>


          )}
        </div>
      )
        : (
          <div className={`${icon ? "relative" : ""} flex gap-3 w-full`}>
            <input
              className='flex items-center px-6 py-3 border-2 w-full rounded-xl border-gray-500 bg-gray-100 '
              placeholder={inputPlaceholder}
              name={inputName}
              value={inputValue as string}
              onChange={(e) => handleChange(inputName as keyof FormData, e.target.value)}
            />
            {icon && (
              <div className='absolute top-0 left-1'>
                {icon}
              </div>
            )}
          </div>
        )}
    </div>
  )
}

export default FormInput

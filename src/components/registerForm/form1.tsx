import React from 'react'
import FormInput from '../ui/FormInput'
import { multiForm } from '@/store/multiForm'
const Form1 = () => {

    const { handleChange, data } = multiForm();

    return (
        <section>
            <div>
                <FormInput
                handleChange={handleChange}
                inputPlaceholder='Email'
                inputName='email'
                inputValue={data.email}
                labelValue='Email'
                />
            </div>
               <div>
                <FormInput
                handleChange={handleChange}
                inputPlaceholder='Password'
                inputName='password'
                inputValue={data.password}
                labelValue='Password'
                />
            </div>

            <div>

            </div>
        </section>
    )
}

export default Form1

"use client"
import React from 'react'
interface ButtonProps {
    buttonText: string
    flexLayout?: string
    width:number 
    next:() => void
}
const FormButton = ({ buttonText, flexLayout, width, next }: ButtonProps) => {
    return (

        <div className={`${flexLayout && flexLayout} w-full`}>
            <button  
            onClick={()=> next()}
             style={{ width: `${width}%` }}
            className={`  bg-blue-950 px-8  py-3 rounded-xl border-2 border-blue-950 text-white hover:text-blue-950 hover:bg-white transition duration-300 `}>
                {buttonText}
            </button>
        </div>
    )
}

export default FormButton

// This global state help me persist Form Data Accross Different Pages
import { create } from "zustand";

export interface FormData {
    email: string
    password : string
    confirmPassword:string
    firstName:string
    lastName:string
    userType: string
    purpose: string
    noOfStudents:number
    educationType:string // Home Lesson Teacher To Manage Students // Take Exams for Student 
    age:number
    country: string
    phoneNumber:string
}

interface MultiFormProps {
    data: FormData
    handleChange: (field: keyof FormData, value :string) => void
}

export const multiForm = create<MultiFormProps>((set) => ({
    data: {
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        userType: "",
        purpose: "",
        noOfStudents: 0,
        educationType: "",
        age: 0,
        country: "",
        phoneNumber: ""
    },
    handleChange: (field, value) =>
        set((state) => ({
            data: {
                ...state.data,
                [field]: field === "noOfStudents" || field === "age" ? Number(value) : value
            }
        }))
}))
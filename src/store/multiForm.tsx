// This global state help me persist Form Data Accross Different Pages
import { create } from "zustand";
import toast from "react-hot-toast";
export interface FormData {
    student:boolean
    teacher:boolean
    email: string
    password: string
    confirmPassword: string
    firstName: string
    lastName: string
    phoneNumber: string, 
    teachingSubjects:string [], 
    TeachingLevel: string,
    shortBio: string,
    yearsOfExperience: string, 
    certificate: File | null, 
    governmentId: string, 
    socialLinks: string,
    backAccount:string 
}

export interface MultiFormProps {
    data: FormData
    handleChange: (field: keyof FormData, value: string | string[] | File | boolean | null ) => void
    currentStep: number
    maxFormLength: number
    goToNextPage: (page: string) => void
    goToPrevPage: (page: string) => void;
    validateInput: () => void

}

export const multiForm = create<MultiFormProps>((set, get) => ({
    currentStep: 0,
    maxFormLength: 4,
    data: {
        student:false,
        teacher:false,
        email: "", // Required
        password: "", // Required
        confirmPassword: "", // Required
        firstName: "", // Required
        lastName: "", // Required
        phoneNumber: "", // Required
        teachingSubjects: [], // Required
        TeachingLevel: "", // Required (waec // neco // jamb // home teacher // private school teacher)
        shortBio: "", // Required
        yearsOfExperience: "", // Required
        certificate:  null, // Optional
        governmentId: "", // Optional
        socialLinks: "", // optional
        backAccount: "" // Required 

    },
    handleChange: (field, value) =>
        set((state) => ({
            data: {
                ...state.data,
                [field]: field === "teachingSubjects" ? Array.isArray(value) ? value  : [value] : value
            }
        })),

    goToNextPage: (page: string) => {
        if (get().maxFormLength <= 4)
            set((state) => ({
                currentStep: state.currentStep + 1
            }))

    },
    goToPrevPage: (page: string) => {
        if (get().currentStep > 0)
            set((state) => ({
                currentStep: state.currentStep - 1
            }))
    },

    validateInput: () => {
        const requiredItems = [
            "email",
            "password",
            "confirmPassword",
            "firstName",
            "lastName",
            "teachingSubjects",
            "TeachingLevel",
            "shortBio",
            "yearsOfExperience",
            "backAccount"
        ];
        const data = get().data;
        const missingFields = requiredItems.filter((item) => {
            const value = data[item as keyof typeof data];
            return value === "" || value === undefined || value === null
        });
        return missingFields;
    }


}))
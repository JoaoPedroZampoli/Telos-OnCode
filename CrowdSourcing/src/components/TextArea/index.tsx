'use client'

import { twMerge } from "tailwind-merge"

type TextAreaProps = {
    label?: string,
    labelClassName?: string,
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const TextArea = ({label, className, labelClassName, ...props}: TextAreaProps) =>{
    const defaultTextAreaClasses = 'flex-grow px-3 rounded-lg focus: border-none py-2 text-sm outline-0'
    const defaultLabelClasses = 'block mb-2 text-sm font-bold text-gray-600'
    const mergedLabelClasses = twMerge(defaultLabelClasses, labelClassName)

    return(
        <div className="mb-6">
            <label className={mergedLabelClasses}>{label}</label>
            <div className="flex items-center border border-sub rounded-lg">
                <textarea {...props} className={`${defaultTextAreaClasses} ${className}`}></textarea>
            </div>
        </div>
    )
}

export default TextArea
'use client'

import { twMerge } from "tailwind-merge"

type SelectOption = {
    value: string,
    text: string
}

type SelectProps = {
    label?: string,
    labelClassName?: string,
    subDescription?: string,
    options: SelectOption[]
} & React.SelectHTMLAttributes<HTMLSelectElement>

const Select = ({ subDescription, labelClassName, options, label, ...props}: SelectProps) =>{
    const defaultLabelClasses = 'block mb-2 text-sm font-bold text-gray-600'
    const mergedLabelClasses = twMerge(defaultLabelClasses, labelClassName)
    const defaultSelectClass = 'flex-grow px-3 rounded-lg focus: border-none py-2 text-sm outline-0'

    return(
        <div className="mb-6">
            <label className={mergedLabelClasses}>{label}</label>
            <label>{subDescription}</label>
            <div className="flex items-center border border-sub rounded-lg bg-white">
                <select id="votingTime" className={`bg-white border text-gray-900 ${defaultSelectClass}`}>
                    {options.map((option, index) => <option value={option.value}>
                            {option.text}
                        </option>)}
                </select>
            </div>
        </div>
    )
}

export default Select
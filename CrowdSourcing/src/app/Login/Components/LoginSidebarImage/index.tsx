'use client'
import handsImage from "@/assets/HandsImage.jpg"

export default function LoginSidebarImage(){
    return(
        <div className="hidden lg:block lg:w-[480px] bg-black">
            <img className='object-cover h-full w-full' src={handsImage.src} alt="Mãos unidas"/>
        </div>
    )
}
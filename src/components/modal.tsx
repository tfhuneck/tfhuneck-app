'use client'

import { useRouter } from "next/navigation";

export default function ImageModal({ children }: { children: React.ReactNode })  {
    const router = useRouter()

    return(
        <div onClick={() => router.back()} data-dialog-backdrop="dialog" data-dialog-backdrop-close="true" className="cursor-pointer fixed inset-0 z-50 grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
            <div className="flex justify-center items-center w-screen"> 
                <div className="relative sm:max-h-screen aspect-square">
                    {children}
                </div>
            </div>
        </div>  
    )
}



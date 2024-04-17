import Image from 'next/image'



const Loading = () => {

    return (
        <>
            <div className='h-screen w-screen flex flex-col items-center justify-center'>
                <div className='grid grid-cols-2 items-center justify-center '>
                <div className='col-span-1 border-r-2 border-slate-500 dark:border-slate-300 pr-10'>
                    <Image
                    className="relative"
                    src="/images/tfh.png"
                    alt="tfh"
                    width={250}
                    height={250}
                    priority
                    />
                </div>
                <div className='col-span-1 pl-10'>
                    <Image
                    className="animate-spin-slow"
                    src="/images/tfh_pebbles.svg"
                    alt="Next.js Logo"
                    width={150}
                    height={150}
                    priority
                    />
                
                </div>
                </div>
            </div>
        </>
    )
}

export default Loading;
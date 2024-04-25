"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Portfolio from '../components/Portfolio';
import consignmentPage from '@/lib/consignment';
import scraper from '@/lib/scrape';
import ork from '@/lib/ork';
import supergroomers from '@/lib/supergoomers';

export default function Home() {
    
    const portfolioRef = useRef<any>();

    const scrollToPort = () => {
        portfolioRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "center",
        });
    };

    return (
        <main className="w-screen">
            <div
                className="flex sm:snap-always sm:snap-center items-center min-h-fit tall:h-95vh flex-col justify-between px-10 pb-10 sm:ml-10 sm:mr-20 rounded-3xl mt-6
                bg-gradient-to-tl from-slate-950/20 to-slate-50/20 dark:from-slate-50/10 dark:to-slate-900/10 dark:bg-opacity-10 
                border-opacity-50 border-l-slate-300 border-l shadow-3d dark:drop-shadow-dark transition-all"
            >
                <Image
                    className="relative mt-8 tall:mt-16"
                    src="/images/tfh.png"
                    alt="tfh"
                    width={250}
                    height={250}
                    priority
                />
                <div className="grid grid-cols-3 ">
                    <div className="col-span-3 sm:col-span-2 flex flex-col justify-center items-start order-2 sm:order-1">
                        <div className="sm:text-7xl text-3xl font-thin mt-10 drop-shadow-xl text-left tracking-tighter leading-relaxed inset-0">
                            <span className="text-viking-500">Bringing </span>
                            Visons to Life
                        </div>
                        <div className="sm:text-2xl text-lg font-normal mt-2 sm:mt-8 sm:mx-2 drop-shadow-xl text-left break-normal max-w-2xl tracking-wide ">
                            <span className="text-viking-800 dark:text-viking-300">
                                Building{" "}
                            </span>
                            intuitive and effective solutions with beautiful design to meet
                            demanding ideas
                        </div>
                    </div>
                    <div className="col-span-3 sm:col-span-1 order-1 sm:order-2">
                        <Image
                        className="relative drop-shadow-lg align-bottom float-right"
                        src="/images/tfh_profile_1.png"
                        alt="TF Huneck Portrait"
                        width={450}
                        height={450}
                        priority
                        />
                    </div>
                </div>
                <div className="md:grid grid-cols-3 lg:mt-10">
                    <Link className="flex pt-8 col-span-1 sm:px-8 lg:px-10 items-start" href={"/repos"}>
                        <button className="h-16 w-52 min-w-40 flex rounded-xl shadow-3d border-opacity-50 border-l-slate-300 border-l  text-viking-700 dark:text-viking-500 hover:scale-105 hover:-translate-y-2 active:scale-95 hover:text-whiskey-800 dark:hover:text-whiskey-500 items-center justify-center">
                            View My Repos
                        </button>
                    </Link>
                    <div onClick={scrollToPort} className="flex pt-8 col-span-1 items-center sm:px-8 lg:px-10 ">
                        <button className="h-16 w-52 min-w-40 flex rounded-xl shadow-3d border-opacity-50 border-l-slate-300 border-l  text-viking-700 dark:text-viking-500 hover:scale-105 hover:-translate-y-2 active:scale-95 hover:text-whiskey-800 dark:hover:text-whiskey-500 items-center justify-center">
                                View My Work
                            {/* <div className="row-span-2 self-end align-baseline ">
                            </div>
                            <div className="row-span-1 flex self-start justify-center items center h-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                    />
                                </svg>
                            </div> */}
                        </button>
                    </div>
                    <Link className="flex pt-8 col-span-1 sm:px-8 lg:px-10 items-start" href={"/about"}>
                        <button className="h-16 w-52 min-w-40 flex rounded-xl shadow-3d border-opacity-50 border-l-slate-300 border-l  text-viking-700 dark:text-viking-500 hover:scale-105 hover:-translate-y-2 active:scale-95 hover:text-whiskey-800 dark:hover:text-whiskey-500 items-center justify-center">
                            About Me
                        </button>
                    </Link>
                </div>
            </div>
            <div 
                className='sm:snap-always sm:snap-center' 
                id='portfolio' 
                ref={portfolioRef}
            >
                < Portfolio
                    data={consignmentPage}
                    title='Dynamic Portal SPA for Consignment Service'
                />
            </div>
            <div className='sm:snap-always sm:snap-center '>
                < Portfolio
                    data={scraper}
                    title='Cross Platform Price Scraping Desktop Application'
                />
            </div>
            <div className='sm:snap-always sm:snap-center'>
                < Portfolio
                    data={ork}
                    title='Dynamic SPA Landing Page for Restaurant'
                />
            </div>
            <div className='sm:snap-always sm:snap-center'>
                < Portfolio
                    data={supergroomers}
                    title='Startup Market Test Prototype'
                />
            </div>
            <br />
        </main>
    );
}

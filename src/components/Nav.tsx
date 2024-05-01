"use client"

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Switch from "./ThemeSwitch";

const Nav = () => {

    const [ navOpen, setNavOpen ]   = useState(false);
    const navBackground             = useRef<HTMLDivElement>(null)
    const navBtn1                   = useRef<HTMLDivElement>(null)
    const navBtn2                   = useRef<HTMLDivElement>(null)
    const navBtn3                   = useRef<HTMLDivElement>(null)
    const navBackgrndClass          = navOpen ? 'nav-backdrop transform-gpu w-full backdrop-blur-sm h-full bg-gradient-to-l from-stone-950 to-transparent fixed z-20 duration-500' : 'nav-backdrop transform-gpu w-full backdrop-blur-sm h-full bg-gradient-to-l from-stone-950 to-transparent fixed z-20 translate-x-full duration-500'
    const navBtn1Class              = navOpen ? 'w-9 h-0.5 rounded-l-md rounded-r-lg bg-gradient-to-br from-viking-300 to-viking-900 mb-2 nav-btn nav1-open translate-y-2.5 rotate-135' : 'w-9 h-0.5 rounded-l-md rounded-r-lg bg-gradient-to-br from-viking-300 to-viking-900 mb-2  nav1-close';
    const navBtn2Class              = navOpen ? 'w-9 h-0.5 rounded-l-md rounded-r-lg  bg-gradient-to-br from-viking-300 to-viking-900 mb-2 nav-btn opacity-0 duration-500' : 'w-9 h-0.5 rounded-l-md rounded-r-lg  bg-gradient-to-br from-viking-300 to-viking-900 mb-2 duration-500';
    const navBtn3Class              = navOpen ? 'w-9 h-0.5 rounded-l-md rounded-r-lg bg-gradient-to-br from-viking-300 to-viking-900 mb-2 nav-btn  nav3-open -translate-y-2.5 rotate-45' : 'w-9 h-0.5 rounded-l-md rounded-r-lg bg-gradient-to-br from-viking-300 to-viking-900 mb-2 nav3-close';

    const handleNav = () => {
        setNavOpen(!navOpen)
    }

    return (
        <>
            <div 
                className={navBackgrndClass}
                id="nav-backdrop"
                ref={navBackground}
            >
                <div className="grid grid-cols-2 h-screen transform-gpu">
                    <div className="col"></div>
                    <div className="col flex flex-col items-center justify-center">
                        <ul className="text-3xl font-thin tracking-wider text-slate-50 leading-10">
                            <li className="my-4 hover:scale-110">
                                <Link onClick={handleNav} href={'/home'}>Home</Link>
                            </li>
                            <li className="my-4 hover:scale-110">
                                <Link onClick={handleNav} href={'/about'}>About</Link>
                            </li>
                            <li className="my-4 hover:scale-110">
                                <Link onClick={handleNav} href={'/repos'}>Repos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='nav fixed right-1 sm:right-2 top-7 z-50' onClick={handleNav}>
                <div 
                    className= 'nav-btns cursor-pointer hover:scale-125 hover:drop-shadow-dark p-3 drop-shadow-lg items-center justify-center duration-500'
                    id="nav"
                >
                    <div 
                        className={navBtn1Class}
                        id="nav-btn-1"
                        ref={navBtn1}
                    >
                    </div>
                    <div 
                        className={navBtn2Class}
                        id="nav-btn-2"
                        ref={navBtn2}
                    >
                    </div>
                    <div 
                        className={navBtn3Class}
                        id="nav-btn-3"
                        ref={navBtn3}
                    >
                    </div>
                </div>
            </div>
            <Switch />
        </>
    )
}

export default Nav;
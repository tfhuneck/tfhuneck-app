'use client'

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";


function Switch() {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);
    
    useEffect(() => setMounted(true), []);
    useEffect(() => console.log(theme), [theme, setTheme]);

    if (!mounted) return (
        <div className='nav fixed right25 sm:right-2 bottom-4 z-50 hover:scale-110'>
        </div>
    );

    if (mounted && theme === 'light') return (

        <div className='nav fixed right-2 sm:right-5 bottom-6 z-50 hover:scale-110 cursor-pointer' onClick={() => setTheme('dark')}>
            <img src='/images/dark.svg' />
        </div>
    );

    if (mounted && theme === 'dark') return (

        <div className='nav fixed right-2 sm:right-5 bottom-6 z-50 hover:scale-110 cursor-pointer' onClick={() => setTheme('light')}>
            <img src='/images/light.svg' className="text-slate-200" />
        </div>
    );
}

export default Switch;

'use client'

import Image from "next/image";
import { useReducer, useEffect, useState, useRef, use } from "react";
import Link from "next/link";

enum ACTION { 
  INIT    = 'init',
  PAUSE   = 'pause',
  ACTIVE  = 'active',
  ROTATE  = 'rotate',
  RESET   = 'reset',
  SELECT  = 'select',
}

const reducer = (state: any, action: any) => {
  switch(action.type){
    case ACTION.INIT:
      return{
        ...state,
        counter: 0, 
        active: false, 
        display: action.setDisplay,
      }
    case ACTION.PAUSE:
      return{
        ...state,
        counter: 0, 
        active: false, 
        display: state.display,
      }
    case ACTION.ACTIVE:
      return{
        ...state,
        counter: 0, 
        active: true, 
        display: action.setDisplay,
      }
    case ACTION.ROTATE:
      return {
        ...state,
        counter: action.setCounter, 
        active: true, 
        display: action.setDisplay,
       }
    case ACTION.RESET:
      return{
        ...state,
        counter: action.setCounter, 
        active: true, 
        display: action.setDisplay,
      }
    case ACTION.SELECT: 
      return{
        ...state,
        counter: action.setCounter, 
        active: true, 
        display: action.setDisplay,
      }
  }
}

const Portfolio = (props: any) => {
  
  // content data
  const content                 = props.data;

  // References to access slide elements and track rotation trigger
  const slides                  = useRef<any>([]);
  const elementRef              = useRef<any>(null);
  const slideContainer          = useRef<any>(null);
  const scrollTracker           = useRef(0)
  const timerId                 = useRef<String>();
  const [ trigger, setTrigger ] = useState(0);

  // reducer to control states displaying content
  const initState               = {counter: 0, active: false, display: null}
  const [ state, dispatch ]     = useReducer(reducer, initState);

  // intialize function
  useEffect(() => {
    dispatch({type: 'init', setDisplay : slides.current[0]})
  }, [slides, slides.current]);

  // function to oberseve elment coming into field of view and activating slide rotation
  useEffect(() => {
    const observer = new IntersectionObserver((el) => {
      const element = el[0]
      if (element.isIntersecting ) { 
        dispatch({type: 'active', setDisplay : slides.current[0], })
        scrollTracker.current = 0 
        slideContainer.current.scroll({
          left: 0,
          top: scrollTracker.current,
          behavior: 'smooth',
        })
        console.log('element is active')
        timerId.current = String(setTimeout(() => setTrigger(trigger +1), 20000))
        console.log('timer set', timerId.current)
      } 
      else{
        dispatch({type: 'pause', })
        clearTimeout(String(timerId.current));
      } 
    })
    observer.observe(elementRef.current)
  } ,[])

  // loop function to call dispatch and change the content 
  const runRotate = async () => {
    if(state?.counter == content.length -1 ){
      try{ 
        dispatch({type: 'reset', setCounter : 0, setDisplay : slides.current[0], })
        scrollTracker.current = 0 
        slideContainer.current.scroll({
          left: 0,
          top: scrollTracker.current,
          behavior: 'smooth',
        })
      }catch(err){
        console.log(err)
      }
    }
    else{
      try{ 
        dispatch({type: 'rotate', setCounter : state?.counter + 1, setDisplay: slides.current[state?.counter+1]})
        console.log(state?.display.offsetHeight)
        scrollTracker.current = scrollTracker.current + Number(state?.display.offsetHeight)
        slideContainer.current.scroll({
          left: 0,
          top: scrollTracker.current,
          behavior: 'smooth',
        })
      }catch(err){
        console.log(err)
      }
    }

    // check for rotation condition to retrigger recursion
    if(state?.active) {
      timerId.current = String(setTimeout(() => setTrigger(trigger +1), 20000))
      console.log(timerId.current )
      console.log('timer set', timerId.current)
    }
  }
  
  // selecting indivdual element, canceling current loop and starting new loop after 20s
  const selectElement = async(e: any) => {
    try{
      clearTimeout(String(timerId.current));
      let scrollValues = slides.current.map((i:any) => i.offsetHeight)
      let scrollLength = scrollValues.slice(0,e)
      let scrollTo = scrollLength.length === 0 ? 0 : scrollLength.length === 1 ? slides.current[0].offsetHeight : scrollLength.reduce((a:any,b:any) => a + b);
      dispatch({type: 'select', setCounter : Number(e), setDisplay : slides.current[Number(e)] })
      scrollTracker.current = e * 500;
        slideContainer.current.scroll({
          left: 0,
          top: scrollTo,
          behavior: 'smooth',
      })
    }catch(err){
      console.log(err)
    }
  }

  // triggering the carousel loop 
  useEffect(() => {
    console.log(trigger)
    if(state?.active){ 
      runRotate();
    }
  }, [trigger, setTrigger]);
  
  return (
    <div 
      ref={elementRef}
      className='flex flex-col justify-between 
        bg-gradient-to-tl from-slate-950/20 to-slate-50/20 dark:from-slate-50/10 dark:to-slate-900/10 dark:bg-opacity-10  
        sm:ml-10 sm:mr-20 mt-8 p-10 rounded-3xl border-opacity-50 border-t-slate-300 border-t border-l-slate-300 
        border-l shadow-3d dark:drop-shadow-dark transition-all min-h-750 max-h-95-s'
    >
      <div className="text-4xl font-light mb-16 flex text-left float-left text-viking-500">
        {props.title}
      </div>
      <div className="container grid grid-cols-7 gap-2 min-h-500 overflow-y-hidden">
        <div className="col-span-1 px-2 min-w-max border-r-2 border-slate-300" key={'portfolio-title'}> 
          {content && content.map((i:any, key:number) => {
            const titleClass = key === state?.counter ? 'title-active text-xl mb-6 hover:scale-110 cursor-pointer' : 'title-passive text-md mb-6 hover:scale-110 cursor-pointer'
            return (
                <div 
                  key={`title-${key}`}
                  id={`title-${key}`} 
                  className={titleClass} 
                  onClick={() => selectElement(key)}
                > 
                  {i.title}
                </div>
            )
          })}
        </div>
        <div 
          className="col-span-6 min-h-550 overflow-y-hidden pb-32 mb-20"
          ref={slideContainer}
        >
          {content.map((i:any, key:number) =>{
            // Slides styling variable 
            const displaySlide = key === state?.counter ? 'container grid grid-cols-6 gap-2 min-h-500 h-fit max-h-fit transition-all opacity-100 duration-1000' : 'container grid grid-cols-6 gap-2 min-h-500 transition-all opacity-0 duration-1000';
            return(
                <div 
                  id={`slide-${key}`} 
                  key={`slidr-${key}`} 
                  ref={(n) => (slides.current[key] = n)}
                  className={displaySlide} 
                >
                  <div className="col-span-2 font-light text-md"id="portfolio-tex" >
                    <div className="text-4xl font-semibold mb-2 text-slate-700 dark:text-slate-400 ml-4">
                      {i.title}  
                    </div>
                    <ul className="ml-4 text-sm">
                      <li className="mb-2">
                        {i.text.p1}  
                      </li>
                      <li className="mb-2">
                        {i.text.p2}
                      </li>
                      <li className="mb-2">
                        {i.text.p3}
                      </li>
                      <li className="mb-2">
                        {i.text.p4}
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-4 flex flex-col items-center transition-all hover:scale-105"
                      id="portfolio-image"
                    > 
                    <Link href={`/portfolio/${i.img}`}>
                      <Image
                        className="aspect-auto"
                        src={`${i.img}`}
                        alt="portfolio work"
                        width={550}
                        height={550}
                        priority
                      />
                    </Link>
                  </div>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
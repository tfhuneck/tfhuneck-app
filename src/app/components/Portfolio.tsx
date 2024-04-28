'use client'

import Image from "next/image";
import { useReducer, useEffect, useState, useRef, use } from "react";
import { usePathname } from 'next/navigation'
import Link from "next/link";

const initState               = {counter: 0, active: false, display: null}

enum ACTION { 
  INIT    = 'init',
  PAUSE   = 'pause',
  ACTIVE  = 'active',
  ROTATE  = 'rotate',
  RESET   = 'reset',
  SELECT  = 'select',
}

interface ActionType {
  type: ACTION,
  setDisplay: HTMLElement | null,
  setCounter: Number,
}

const reducer = (state: typeof initState, action: ActionType): typeof initState => {
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
        counter: Number(action.setCounter), 
        active: true, 
        display: action.setDisplay,
       }
    case ACTION.RESET:
      return{
        ...state,
        counter: Number(action.setCounter), 
        active: true, 
        display: action.setDisplay,
      }
    case ACTION.SELECT: 
      return{
        ...state,
        counter: Number(action.setCounter), 
        active: true, 
        display: action.setDisplay,
      }
  }
}

const Portfolio = (props: {data: object[], title:string}) => {

  // Get route for Image Modal Link
  const pathname = usePathname()
  const currentRoute = String(pathname)
  
  // content data
  const content                 = props.data;

  // References to access slide elements and track rotation trigger
  const slides                  = useRef<any>([]);
  const elementRef              = useRef<HTMLDivElement>(null);
  const slideContainer          = useRef<HTMLDivElement>(null);
  const scrollTracker           = useRef<number>(0)
  const timerId                 = useRef<number>();
  const [ trigger, setTrigger ] = useState<number>(0);

  // reducer to control states displaying content
  const [ state, dispatch ]     = useReducer(reducer, initState);

  // intialize function
  useEffect(() => {
    return dispatch({
      type: ACTION.INIT, setDisplay: slides.current[0],
      setCounter: 0
    });
  }, [slides, slides.current]);

  // function to oberseve elment coming into field of view and activating slide rotation
  useEffect(() => {
    const observer = new IntersectionObserver((el) => {
      const element = el[0]
      if (element.isIntersecting ) { 
        dispatch({
          type: ACTION.ACTIVE, setDisplay: slides.current[0],
          setCounter: 0,
        })
        scrollTracker.current = 0 
        const animationKeyframes = {
          transform : `translateY(-${scrollTracker.current}px)`
        }
        const animationTimimg = 500
        slideContainer.current?.animate(animationKeyframes, animationTimimg)
        setTimeout(() => {
           if(slideContainer.current){
            slideContainer.current.style.transform = `translateY(-${scrollTracker.current}px)`
            }
          }, 500)
          
        // console.log('element is active')
        timerId.current = Number(setTimeout(() => setTrigger(trigger +1), 20000))
        // console.log('timer set', timerId.current)
      } 
      else{
        dispatch({
          type: ACTION.PAUSE,
          setDisplay: state.display,
          setCounter: 0,
        })
        clearTimeout(String(timerId.current));
      } 
    })
    if (elementRef.current) { 
      observer.observe(elementRef.current);
    }
  } ,[])

  // loop function to call dispatch and change the content 
  const runRotate = async () => {
    if(state?.counter == content.length -1 ){
      dispatch({type: ACTION.RESET, setCounter : 0, setDisplay : slides.current[0], })
      scrollTracker.current = 0 
      const animationKeyframes = {
        transform : `translateY(-${scrollTracker.current}px)`
      }
      const animationTimimg = 500
      slideContainer.current?.animate(animationKeyframes, animationTimimg)
      setTimeout(() =>{ 
        if(slideContainer.current) {
          slideContainer.current.style.transform = `translateY(-${scrollTracker.current}px)`
        }
    }, 500)
    }
    else{
      dispatch({type: ACTION.ROTATE, setCounter : state?.counter + 1, setDisplay: slides.current[state?.counter+1]})
      // console.log(state?.display.offsetHeight)
      scrollTracker.current = scrollTracker.current + Number(state.display?.offsetHeight)
      const animationKeyframes = {
        transform : `translateY(-${scrollTracker.current}px)`
      }
      const animationTimimg = 500
      slideContainer.current?.animate(animationKeyframes, animationTimimg)
      setTimeout(() =>{ 
        if(slideContainer.current) {
          slideContainer.current.style.transform = `translateY(-${scrollTracker.current}px)`
        }
    }, 500)
    }

    // check for rotation condition to retrigger recursion
    if(state?.active) {
      timerId.current = Number(setTimeout(() => setTrigger(trigger +1), 20000))
      // console.log(timerId.current )
      // console.log('timer set', timerId.current)
    }
  }
  
  // selecting indivdual element, canceling current loop and starting new loop after 20s
  const selectElement = async(e: any) => {
    await clearTimeout(String(timerId.current));
    let scrollValues = slides.current.map((i:any) => i.offsetHeight)
    let scrollLength = scrollValues.slice(0,e)
    let scrollTo = scrollLength.length === 0 ? 0 : scrollLength.length === 1 ? slides.current[0].offsetHeight : scrollLength.reduce((a:any,b:any) => a + b);
    dispatch({type: ACTION.SELECT, setCounter : Number(e), setDisplay : slides.current[Number(e)] })
    scrollTracker.current = e * 500;
    const animationKeyframes = {
      transform : `translateY(-${scrollTo}px)`
    }
    const animationTimimg = 500

    slideContainer.current?.animate(animationKeyframes, animationTimimg)
    setTimeout(() =>{
      if(slideContainer.current){
        slideContainer.current.style.transform = `translateY(-${scrollTo}px)`
      }
  }, 500)
  }

  // triggering the carousel loop 
  useEffect(() => {
    // console.log(trigger)
    if(state?.active){ 
      runRotate();
    }
  }, [trigger, setTrigger]);
  
  return (
    <div 
      ref={elementRef}
      className='flex flex-col justify-between 
        bg-gradient-to-tl from-slate-950/20 to-slate-50/20 dark:from-slate-50/10 dark:to-slate-900/10 dark:bg-opacity-10  
        md:ml-10 lg:mr-20 mt-8 p-4 sm:p-10 rounded-3xl border-opacity-50 border-t-slate-300 border-t border-l-slate-300 
        border-l shadow-3d dark:drop-shadow-dark transition-all h-120 sm:min-h-750 sm:h-screen md:max-h-95-s'
    >
      <div className="text-xl md:text-4xl font-light mb-4 lg:mb-16 flex text-left float-left text-viking-500">
        {props.title}
      </div>
      <div className="container lg:grid lg:grid-cols-7 gap-2 min-h-500 overflow-y-hidden">
        <div className="grid grid-cols-auto-fit-150 lg:block lg:grid-col-1 lg:col-span-1 pb-2 sm:pb-0 sm:px-2 min-w-max border-b-2 border-opacity-20 lg:border-opacity-100 lg:border-b-0 lg:border-r-2 border-slate-300" key={'portfolio-title'}> 
          {content && content.map((i:any, key:number) => {
            const titleClass = key === state?.counter ? 'text-viking-500 md:text-xl md:mb-6 lg:hover:scale-110 cursor-pointer' : 'text-slate-400 md:text-md md:mb-6 lg:hover:scale-110 cursor-pointer'
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
          className="col-span-6 min-h-550 overflow-y-hidden pt-2 sm:pt-0 pb-32 mb-20"
        >
          <div  ref={slideContainer} >
            {content.map((i:any, key:number) =>{

              // Slides styling variable 
              const displaySlide = key === state?.counter ? 'container grid md:grid-cols-6 md:gap-2 min-h-500 h-fit max-h-fit transition-all opacity-100 duration-1000' : 'container grid md:grid-cols-6 md:gap-2 min-h-500 transition-all opacity-0 duration-1000';
              
              return(
                  <div 
                    id={`slide-${key}`} 
                    key={`slidr-${key}`} 
                    ref={(n) => (slides.current[key] = n)}
                    className={displaySlide} 
                  >
                    <div className="col-span-2 font-light text-md"id="portfolio-tex" >
                      <div className="text-xl lg:text-4xl font-semibold md:mb-2 text-slate-700 dark:text-slate-400 ml-4">
                        {i.title}  
                      </div>
                      <ul className="ml-4 text-xs lg:text-sm">
                        <li className="lg:mb-2">
                          {i.text.p1}  
                        </li>
                        <li className="lg:mb-2">
                          {i.text.p2}
                        </li>
                        <li className="lg:mb-2">
                          {i.text.p3}
                        </li>
                        <li className="lg:mb-2">
                          {i.text.p4}
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-4 flex flex-col items-start object-contain p-2 sm:p-0 md:items-center transition-all hover:scale-105"
                        id="portfolio-image"
                      > 
                      <Link href={`${currentRoute}${i.img}`}>
                        <Image
                          className="aspect-square"
                          src={`${i.img}`}
                          alt={`${i.img}`}
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
    </div>
  )
}

export default Portfolio;
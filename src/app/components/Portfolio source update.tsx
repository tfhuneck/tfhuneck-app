'use client'

import Image from "next/image";
import { useReducer, useEffect, useState } from "react";
 
enum ACTION {
  ROTATE  = 'rotate',
  RESET   = 'reset',
  SELECT  = 'select'
}

const reducer = (state: any, action: any) => {
  switch(action.type){
    case ACTION.ROTATE:
      return {
        counter: action.increment,
        displayText: action.valueText,
        displayImg: action.valueImg
       }
    case ACTION.RESET:
      return{
        counter: 0,
        displayText: action.valueText,
        displayImg: action.valueImg
      }
    case ACTION.SELECT: 
      return{
        counter: action.select,
        displayText: action.valueText,
        displayImg: action.valueImg
      }
  }
}

const Portfolio = (props: any) => {
  
  let content       = props.data;
  const initState   = {counter: 0, displayText: content[0].text, displayImg: content[0].img}

  // reducer to control states displaying content
  const [ state, dispatch ]             = useReducer(reducer, initState);
  
  // states to control automatic carousel loop 
  const [ startRotate, setStartRotate ] = useState(true);
  const [ reTrigger, setReTrigger ]     = useState(0);
  const [ timerId, setTimerId ]         = useState()
  let timer: any;
  
  // initializing counter to incrament through content array
  let newCount: number = 0;

  // loop function to call dispatch and change the content 
  const runRotate = async () => {
    newCount            = state?.counter;
    const textElement   = document.querySelector('#portfolio-text');
    const imageElement  = document.querySelector('#portfolio-image');

    if(newCount == content.length -1 ){
      newCount = 0
      // await textElement?.classList.add('element-transition');
      // await imageElement?.classList.add('element-transition');
      dispatch({type: 'reset', valueText: content[0].text, valueImg: content[0].img})
      // setTimeout(() =>  
      // , 500)
     
      // setTimeout(() => {
      //   textElement?.classList.remove('element-transition');
      //   imageElement?.classList.remove('element-transition');
      // }, 2500);
    }
    else{
      newCount ++;
      // await textElement?.classList.add('element-transition');
      // await imageElement?.classList.add('element-transition');
      dispatch({type: 'rotate', increment: newCount, valueText: content[newCount].text, valueImg: content[newCount].img})
      // setTimeout(() => 
      // , 500)
      
      // setTimeout(() => {
      //   textElement?.classList.remove('element-transition');
      //   imageElement?.classList.remove('element-transition');
      // }, 2500);
    }

    // check for rotation condition to retrigger recursion
    if(startRotate) {
      timer = setTimeout(() => setReTrigger(reTrigger + 1), 15000)
      setTimerId(timer)
    }
    return timer;
  }
  
  // retriggering the carousel loop 
  useEffect(() => {
    console.log('rotate trigered')
    runRotate();
  }, [reTrigger]);

  // selecting indivdual element, canceling current loop and starting new loop after 20s
  const selectElement = async(e: any) => {
    clearTimeout(timerId);
    setStartRotate(false);
    const textElement   = document.querySelector('#portfolio-text');
    const imageElement  = document.querySelector('#portfolio-image');
    await textElement?.classList.add('element-transition');
    await imageElement?.classList.add('element-transition');
    setTimeout(() => dispatch({type: 'select', select: e, valueText: content[e].text, valueImg: content[e].img}), 500)

    setTimeout(() => {
      textElement?.classList.remove('element-transition');
      imageElement?.classList.remove('element-transition');
    }, 2000);
    timer = setTimeout(() => {
      setReTrigger(reTrigger + 1);
      setTimerId(timer);
      setStartRotate(true);
    }, 30000)
  }
  

  return (
    <div className='flex items-center flex-col justify-between 
      bg-gradient-to-tl from-slate-950/20 to-slate-50/20 dark:from-slate-50/10 dark:to-slate-900/10 dark:bg-opacity-10  
      sm:ml-10 sm:mr-28 mt-8 p-10 rounded-3xl border-opacity-50 border-t-slate-300 border-t border-l-slate-300 
      border-l shadow-3d dark:drop-shadow-dark transition-all'
    >
      <div className="text-2xl font-light mt-10 mb-10 flex text-left float-left ">
        {props.title}
      </div>
      <div className="container grid grid-cols-7 gap-2 min-h-500">
        <div className="col-span-1 " > 
          {content && content.map((i:any, key: number) => {
            let titleClass = key == state?.counter ? ' mb-6 hover:scale-110 cursor-pointer title-active text-xl' : 'mb-6 hover:scale-110 cursor-pointer title-passive text-md'
            return (
              <>
                <div className={titleClass} id={`title-${key}`} onClick={() => selectElement(key)}>
                  {i.title}
                </div>
              </>
            )
          })}
        </div>
        <div className="col-span-2 font-light text-md"id="portfolio-text" >
          <div className="text-4xl font-semibold mb-2">
            {content[state?.counter].title}  
          </div>
          <ul>
            <li className="mb-2">
              {state?.displayText.p1}  
            </li>
            <li className="mb-2">
              {state?.displayText.p2}
            </li>
            <li className="mb-2">
              {state?.displayText.p3}
            </li>
            <li className="mb-2">
              {state?.displayText.p4}
            </li>
          </ul>
        </div>
        <div className="col-span-4 flex flex-col items-end transition-all hover:scale-105"
          id="portfolio-image"
        > 
          <Image
            className="aspect-auto"
            src={`${state?.displayImg}`}
            alt="portfolio work"
            width={600}
            height={500}
            sizes="(min-height: 500px)"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
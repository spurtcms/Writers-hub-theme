'use client'
import React, { useEffect } from 'react'
import { useState, useRef } from "react";
import { fetchGraphQl } from '../api/graphicql';
import Image from 'next/image';

function Navbar({categories,catNo,setCatNo}) {

    let scrl = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);
    
    const slide = (shift) => {
      scrl.current.scrollLeft += shift;
      setscrollX(scrollX + shift);
  
      if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth
      ) {
        setscrolEnd(true);
      } else {
        setscrolEnd(false);
      }
    };
    const scrollCheck = () => {
      setscrollX(scrl.current.scrollLeft);
      if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth
      ) {
        setscrolEnd(true);
      } else {
        setscrolEnd(false);
      }
    };
    useEffect(()=>{
        if(scrl.current){
            if (
                Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
                scrl.current.offsetWidth
              ) {
                setscrolEnd(true);
              } else {
              
                setscrolEnd(false);
              }
        }
    },[scrl])


  return (
    <div className="flex flex-nowrap flex-row gap-x-2 pb-4 my-10 justify-start  relative">


{scrollX !== 0 && (
        <button
          onClick={() => slide(-50)}
          class="w-2 h-2 absolute top-[0.625rem] left-[-1.438rem]"
        >
          <Image src="/img/arrow-left-colour.svg" alt="arrow-left" width={15}
                  height={15}
                  priority />
        </button>
     )} 

   
  
        {categories?.categoriesList?.categories&&<>
        <ul ref={scrl} onScroll={scrollCheck} className='flex flex-nowrap flex-row gap-x-2 justify-start items-center overflow-scroll scrollbar-style'>
            <li onClick={()=>setCatNo(0)} className={`whitespace-nowrap px-6 py-2 rounded-3xl border font-base  leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500 cursor-pointer ${catNo==0?'border-cyan-500 text-primary':'border-gray-200 text-gray-600'}`}> All</li>
          {categories?.categoriesList?.categories?.map((data,index)=>(
                <li key={index} onClick={()=>setCatNo(data.id)} className={`whitespace-nowrap px-6 py-2 rounded-3xl border font-base  leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500 cursor-pointer ${catNo===data.id?'border-cyan-500 text-primary':'border-gray-200 text-gray-600'}`}> {data.categoryName} </li>
          
   ))}
  </ul>
  </>

 }
  
  {!scrolEnd && (<>
    {console.log(scrolEnd,"9798kj")}
        <button
          onClick={() => slide(+50)}
          class="w-2 h-2 absolute top-[0.625rem] right-[-1.438rem]"
        >
         <Image src="/img/arrow-right-colour.svg" alt="arrow-right" width={15}
                  height={15}
                  priority />
        </button>
        </> )}
        {/* <a   className={colorChangeAll==false?activeClass:inactiveClass} onClick={()=>handleCatagory("All")}> All </a>
        {categories?.categoriesList?.categories?.map((cdata,ind)=>(
          <a  className={colorChangeSpecific==false&&catNo===cdata.id?activeClass:inactiveClass} onClick={()=>handleCatagory(cdata)}>{cdata?.categoryName}</a>))} */}
          {/* <a href="javascript:void(0)" className="whitespace-nowrap px-6 py-2 rounded-3xl border border-color font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> Articles </a>
          <a href="javascript:void(0)" className="whitespace-nowrap px-6 py-2 rounded-3xl border border-color font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> Blogs </a>
          <a href="javascript:void(0)" className="whitespace-nowrap px-6 py-2 rounded-3xl border border-color font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> Career </a>
          <a href="javascript:void(0)" className="whitespace-nowrap px-6 py-2 rounded-3xl border border-color font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> Automation </a>
          <a href="javascript:void(0)" className="whitespace-nowrap px-6 py-2 rounded-3xl border border-color font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> Managing </a>
          <a href="javascript:void(0)" className="whitespace-nowrap px-6 py-2 rounded-3xl border border-color font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> Engineering </a>
          <a href="javascript:void(0)" className="whitespace-nowrap px-6 py-2 rounded-3xl border border-color font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> Soft Skills </a>
          <a href="javascript:void(0)" className="whitespace-nowrap px-6 py-2 rounded-3xl border border-color font-base text-gray-600 leading-4 hover:text-white hover:bg-gray-500 hover:border-gray-500"> Design </a> */}
        </div>
  )
}

export default Navbar
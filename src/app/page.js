'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchGraphQl} from "./api/graphicql";
import {GET_POSTS_QUERY_ALL_LIST, GET_POSTS_QUERY_CATEGORY, GET_POSTS_QUERY_SPECIFIC_LIST } from "./api/query";
import Link from "next/link";
import moment from "moment";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "./components/Navbar";
import Post from "./components/Post";



export default function Home() {
  const [postes,setPostes]=useState([])
  const [categories,setCategories]=useState([])
  const [colorChangeAll,setColorChangeAll]=useState(false)
  const [colorChangeSpecific,setColorChangeSpecific]=useState(true)
  const [catNo,setCatNo]=useState(0)
  let currentOffset = 0;
  const searchParams = useSearchParams()

  
  useEffect(()=>{
    let varPos
    if(catNo==0){
      // const params = new URLSearchParams(searchParams.toString())
      // params.set('query',"")
      // window.history.pushState(null, '', `?${''}`)
      varPos={ "limit": 10, "offset": 0}
    }else{
      // const params = new URLSearchParams(searchParams.toString())
      // params.set('query', catNo)
      // window.history.pushState(null, '', `?${params.toString()}`)
      varPos={ "limit": 10, "offset": 0,"categoryId":catNo}
    }
   
    let variable_category={"limit": 10, "offset":0,"hierarchylevel": 0}
    fetchGraphQl(setPostes,GET_POSTS_QUERY_ALL_LIST,varPos,) 
    if(catNo==0){
      fetchGraphQl(setCategories,GET_POSTS_QUERY_CATEGORY,variable_category,)
    } 
    
  },[catNo])


  return (


<>
      {/* <Header/> */}
      <main className="container min-h-screen mx-auto max-w-screen-xl md:lg-0 px-4">
       
       <Navbar categories={categories} catNo={catNo} setCatNo={setCatNo}/>
        {/* nav */}

        <Post postes={postes}/>
        {/* post */}


    
      </main>
    </>



  );
}

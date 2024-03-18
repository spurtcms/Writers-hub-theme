'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { fetchGraphQl} from "./api/graphicql";
import {GET_POSTS_QUERY_ALL_LIST, GET_POSTS_QUERY_CATEGORY, GET_POSTS_QUERY_SPECIFIC_LIST } from "./api/query";
import Link from "next/link";
import moment from "moment";
// import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "./components/Navbar";
import Post from "./components/Post";



export default function Home() {
  const [postes,setPostes]=useState([])
  const [categories,setCategories]=useState([])
  const [catNo,setCatNo]=useState(0)
  const [loader,setLoader]=useState(true)
  const [catLoader,setCatLoader]=useState(true)
  const [offset,setOffset]=useState(0)
  // const searchParams = useSearchParams()


  
  useEffect(()=>{
    let varPos
    if(catNo==0){
      // const params = new URLSearchParams(searchParams.toString())
      // params.set('',"")
      // window.history.pushState(null, '', `?${''}`)
      varPos={ "limit": 5, "offset": offset}
      fetchGraphQl(handleLoad,GET_POSTS_QUERY_ALL_LIST,varPos,setLoader) 
    }else{
      // const params = new URLSearchParams(searchParams.toString())
      // params.set('query', catNo)
      // window.history.pushState(null, '', `?${params.toString()}`)
      
      varPos={ "limit": 5, "offset": offset,"categoryId":catNo}
      fetchGraphQl(handleLoad,GET_POSTS_QUERY_ALL_LIST,varPos,setLoader) 
    }
   
    let variable_category={"limit": 10, "offset":0,"hierarchylevel": 0}
    
    if(catNo==0){
      
      fetchGraphQl(setCategories,GET_POSTS_QUERY_CATEGORY,variable_category,setCatLoader)
    } 
  },[catNo,offset])

  useEffect(()=>{
 
  },[])

const handleLoad=(data)=>{

let postesArr=postes.concat(data?.channelEntriesList?.channelEntriesList)

setPostes(postesArr)
// setOffset(5+offset)
}
console.log(postes,"87hj")
  const handleScroll = (e) => {

    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {  
      setOffset(offset+5) 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);


  return (


<>
      {/* <Header/> */}
      <main className="container min-h-screen mx-auto max-w-screen-xl md:lg-0 px-4" >

       <Navbar categories={categories} catNo={catNo} setCatNo={setCatNo} catLoader={catLoader} setPostes={setPostes} setOffset={setOffset}/>
        {/* nav */}

        <Post postes={postes} loader={loader}/>
        {/* post */}


    
      </main>
    </>



  );
}

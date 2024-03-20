'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchGraphQl } from "../api/graphicql";
import { GET_POSTS_QUERY_ALL_LIST, GET_POSTS_QUERY_CATEGORY } from "../api/query";
import Navbar from "./Navbar";
import Post from "./Post";
import NavbarSkeleton from "../utilities/skeleton/NavbarSkeleton";

function HomeComp() {
    const [postes,setPostes]=useState([])
    const [categories,setCategories]=useState([])
    const [catNo,setCatNo]=useState(null)
    const [loader,setLoader]=useState(true)
    const [catLoader,setCatLoader]=useState(true)
    const [offset,setOffset]=useState(0)
    const [scrollX, setscrollX] = useState(0);
    const searchParams = useSearchParams()
    const catgoId=searchParams.get("catgoId")
    

  
    useEffect(()=>{
      let varPos
      if(catgoId==null){
        varPos={ "limit": 5, "offset": offset}
        fetchGraphQl(handleLoad,GET_POSTS_QUERY_ALL_LIST,varPos,setLoader) 
      }else{
        setCatNo(catgoId)
        varPos={ "limit": 5, "offset": offset,"categoryId":catgoId}
        fetchGraphQl(handleLoad,GET_POSTS_QUERY_ALL_LIST,varPos,setLoader) 
      }



      let variable_category={"limit": 10, "offset":0,"hierarchylevel": 0}
    
        
        fetchGraphQl(setCategories,GET_POSTS_QUERY_CATEGORY,variable_category,setCatLoader)
 
    },[catgoId,offset])



  const handleLoad=(data)=>{
  
  let postesArr=postes.concat(data?.channelEntriesList?.channelEntriesList)
  
  setPostes(postesArr)
  }

  console.log(postes,"jkjkjk")
  
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

        {catLoader==true?<div className="flex flex-nowrap flex-row gap-x-2 pb-4 my-10 justify-start  relative">

        <NavbarSkeleton/>
        </div>:
         <Navbar categories={categories} catNo={catNo} setCatNo={setCatNo}  setPostes={setPostes} setOffset={setOffset} searchParams={searchParams}  scrollX={scrollX} setscrollX={setscrollX}/>}
          {/* nav */}
  
          <Post postes={postes} loader={loader} catNo={catNo} scrollX={scrollX}/>
          {/* post */}
  
  
      
        </main>
      </>
  
  
  
    );
}

export default HomeComp
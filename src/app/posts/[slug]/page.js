'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import moment from "moment";
import { fetchGraphQl } from "@/app/api/graphicql";
import { GET_POSTS_QUERY_SINGLE } from "@/app/api/query";
import DetailPageSkeleton from "@/app/utilities/skeleton/DetailPageSkeleton";


export default function Detail({params}) {
  const {slug}=params
  
  const [postesSingle,setPostesSingle]=useState([])
  const [loader,setLoader]=useState(true)

  
  useEffect(()=>{
    let varSingle={ "channelEntryId":slug }
    fetchGraphQl(setPostesSingle,GET_POSTS_QUERY_SINGLE,varSingle,setLoader)
  },[])

  const imageLoader = ({src}) => {
    return src
  }
 
  
  return (

    <>
    {loader==true?<>
    
    <DetailPageSkeleton/>
    </>:<>
      
      <div className="container min-h-screen mx-auto max-w-screen-xl md:lg-0 px-4">

        <div className="my-10">
          

          <div className="flex justify-start flex-wrap items-center gap-x-4">
          <a href={"/"} ><img src="/img/back-arrow.png"/></a>
            <p className="text-base text-tag-color">{moment(postesSingle?.channelEntryDetail?.createdOn).format("MMMM DD, YYYY")}</p>
            <p className="text-base text-tag-color">1 min read</p>
            <p className="text-base text-tag-color">views 1245</p>
            <a href="javascrip:void(0)" className="text-base text-primary">{postesSingle?.channelEntryDetail?.authorDetails?.FirstName}{" "}{postesSingle?.channelEntryDetail?.authorDetails?.LastName}</a>
           
            <div className="px-2 py-1 text-base text-secondary bg-secondary rounded-md">{postesSingle?.channelEntryDetail?.categories[0].at(-1).categoryName}</div>
          </div>
          <div className="pl-8">
          <h1 className="sm:text-4xl text-3xl text-dark font-medium my-5">{postesSingle?.channelEntryDetail?.title}</h1>              
          
          <div className="block my-5">
              <Image
                loader={imageLoader}
                src={postesSingle?.channelEntryDetail?.coverImage}
                alt="spurtCMS card image"
                className="dark:invert"
                width={10000}
                height={10000}
                priority
              />
          </div>  
          <p className="text-base font-normal text-grey" dangerouslySetInnerHTML={{
            __html:postesSingle?.channelEntryDetail?.description.replace("display:flex","display:block")
          }}></p>
        
        </div>



        </div>

        

      </div></>}
    </>
    
  );
}

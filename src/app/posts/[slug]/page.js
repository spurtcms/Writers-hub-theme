'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
// import { fetchGraphQlSingleData } from "@/app/api/graphicql";
import moment from "moment";
import { fetchGraphQl } from "@/app/api/graphicql";
import { GET_POSTS_QUERY_SINGLE } from "@/app/api/query";


export default function Detail({params}) {
  const {slug}=params
  
  const [postesSingle,setPostesSingle]=useState([])
  useEffect(()=>{
    let varSingle={ "channelEntryId":slug }
    fetchGraphQl(setPostesSingle,GET_POSTS_QUERY_SINGLE,varSingle)
  },[])

  const imageLoader = ({src}) => {
    return src
  }
 
  
  return (

    <>
      
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

          {/* <h3 className="text-2xl text-dark font-medium mb-3">Managing Backpressure in Akka Streams</h3>
          <p className="text-lg text-grey font-normal leading-normal mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qii uid dubitas igitur mutare principia naturae? Ita multo esse sanguine profuso in laetitia et in sace victoria est mortuus. Esse Omnia contraria, quos etiam insanos esse vultis. Ita multo esse sanguine profuso in laetitia et in victoria est mortuus. </p>

          <h3 className="text-2xl text-dark font-medium mb-3">Coping with Slow Consumers</h3>
          <p className="text-lg text-grey font-normal leading-normal mb-6">Sometimes you might encounter slow consumers that cannot process elements as fast as they are emitted. In such cases, time-based backpressure strategies like throttle can be useful:</p>

          <p className="text-lg text-grey font-normal leading-normal mb-3">
            val elementsPerSecond = 1 <br /> 
            Source(1 to 100)   <br /> 
            &nbsp;&nbsp; .throttle(elementsPerSecond, 1.second)   <br /> 
            &nbsp;&nbsp; .runWith(Sink.foreach(println))
          </p>

          <p className="text-lg text-grey font-normal leading-normal mb-6">The throttle method limits the number of elements passing downstream per time unit, thereby ensuring that your consumer is not overwhelmed.</p>

          <h3 className="text-2xl text-dark font-medium mb-3">Tackling Resource Saturation with Backpressure Strategies</h3>
          <p className="text-lg text-grey font-normal leading-normal mb-6">In cases where buffering and throttling are insufficient, you might need to consider backpressure strategies that adaptively control the flow based on resource saturation. One such strategy is the use of conflate, which combines elements during high load periods:</p>

          <p className="text-lg text-grey font-normal leading-normal mb-3">
            val elementsPerSecond = 1 <br /> 
            Source(1 to 100)   <br /> 
            &nbsp;&nbsp; .throttle(elementsPerSecond, 1.second)   <br /> 
            &nbsp;&nbsp; .runWith(Sink.foreach(println))
          </p>

          <p className="text-lg text-grey font-normal leading-normal mb-6">This approach allows your stream to adapt its processing rate dynamically based on current system load, preventing resource exhaustion.</p> */}

        </div>

        

      </div>
    </>
    
  );
}

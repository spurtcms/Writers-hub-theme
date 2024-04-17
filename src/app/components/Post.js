import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PostSkeleton from '../utilities/skeleton/PostSkeleton'

function Post({postes,loader,catNo,scrollX}) {

  let arr=[2,9,10,36,43,9,6,3,4,5,11,7,4,8,3,5,6,2,45,9,22,77,78,18,97,22,48,6,45,68,65,40,50,31,80,7,39,72,84,72,22,66,84,14,58,11,42,7,72,87,39,79,18,18,9,84,18,45,50,43,90,87,62,65,97,97,21,96,39,7,79,68,35,39,89,43,86,5]
const imageLoader = ({src}) => {
  return src
}
  return (
   <>
   {loader==true?<>
   <PostSkeleton/></>:<>
   {postes?.map((data,index)=>(
         <>
         {data?.coverImage==""||data?.coverImage==null||data?.coverImage==undefined&&<>
        <div>
        
          <div className="flex justify-start flex-wrap items-center gap-x-4">
            <p className="text-base text-tag-color text-current">{moment(data?.createdOn).format("MMMM DD, YYYY")}</p>           
            <p className="text-base text-tag-color text-current">{arr[index]} min read</p>
            <p className="text-base text-tag-color text-current">views {data?.viewCount}</p>
            <a href="javascrip:void(0)" className="text-base text-primary">{data?.authorDetails?.FirstName}{" "}{data?.authorDetails?.LastName}</a>
            <div className="px-2 py-1 text-base text-secondary bg-secondary rounded-md">{data?.categories[0].at(-1).categoryName}</div>
          </div>
          <Link href={catNo==null?`/posts/${data?.slug}`:`/posts/${data?.slug}?catgoId=${catNo}&scroll=${scrollX}`} className="block mt-2 mb-4 hover:underline" onClick={()=>{localStorage.setItem("id",arr[index])}}>
            <h1 className="sm:text-5xxl text-4xl text-dark font-medium">{data?.title}</h1>              
          </Link>
          <p className="text-base font-light text-current" dangerouslySetInnerHTML={{
            __html: data?.description.replace("display:flex","display:block")
          }}></p>
          
        </div>

        <div className="border-b border-color block my-8"></div></>}
        
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-16 gap-y-4">
          <div className="col-span-2 row-start-2 sm:row-start-1">
            <div className="flex justify-start flex-wrap items-center gap-x-4">
              <p className="text-xss text-tag-color text-current">{moment(data?.createdOn).format("MMMM DD, YYYY")}</p>
              <p className="text-xss text-tag-color text-current">{arr[index]} min read</p>
              <p className="text-xss text-tag-color text-current">views {data?.viewCount}</p>
              <Link href={catNo==null?`/posts/${data?.slug}`:`/posts/${data?.slug}?catgoId=${catNo}&scroll=${scrollX}`} className="text-xss text-primary" onClick={()=>{localStorage.setItem("id",arr[index])}}>{data?.authorDetails?.FirstName}{" "}{data?.authorDetails?.LastName}</Link>
              
              <div className="px-2 py-1 text-xss text-secondary bg-secondary rounded-md">{data?.categories.length!=0?data?.categories[0].at(-1).categoryName:""}</div>
            </div>
            <Link href={catNo==null?`/posts/${data?.slug}`:`/posts/${data?.slug}?catgoId=${catNo}&scroll=${scrollX}`} className="block mt-2 mb-4 hover:underline" onClick={()=>{localStorage.setItem("id",arr[index])}}>
              <h1 className="text-3xxl text-dark font-medium leading-8">{data?.title}</h1>              
            </Link>
            <p className="text-base text-current font-light line-clamp-5 " dangerouslySetInnerHTML={{
            __html: data?.description.replace("display:flex","display:block")
          }}></p>
          </div>
          <div className="row-start-1 sm:row-start-1" key={data?.slug}>
            <Link href={catNo==null?`/posts/${data?.slug}`:`/posts/${data?.slug}?catgoId=${catNo}&scroll=${scrollX}`} onClick={()=>{localStorage.setItem("id",arr[index])}}>
              <Image
              loader={imageLoader}
                src={data?.coverImage}
                alt="spurtCMS card image"
                // className="dark:invert"
                width={1000}
                height={1000}
                priority
              />
            </Link>
          </div>
        </div>

        <div className="border-b border-color block my-8"></div>
        </>))}</>}
   </>
  )
}

export default Post
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Post({postes}) {

console.log(postes,"kjnjhj")
const imageLoader = ({src}) => {
  return src
}
  return (
   <>
   {postes?.channelEntriesList?.channelEntriesList?.map((data,index)=>(
         <> {console.log(data,"9jjd")}
         {data.coverImage==""||data.coverImage==null||data.coverImage==undefined&&<>
        <div>
        
          <div className="flex justify-start flex-wrap items-center gap-x-4">
            <p className="text-base text-tag-color">{moment(data.createdOn).format("MMMM DD, YYYY")}</p>
            <p className="text-base text-tag-color">1 min read</p>
            <p className="text-base text-tag-color">views 1245</p>
            <a href="javascrip:void(0)" className="text-base text-primary">{}</a>
            <div className="px-2 py-1 text-base text-secondary bg-secondary rounded-md">Recruiting</div>
          </div>
          <Link href={`/posts/${data.id}`} className="block mt-2 mb-4 hover:underline">
            <h1 className="sm:text-5xxl text-4xl text-dark font-medium">{data?.title}</h1>              
          </Link>
          <p className="text-base font-light text-grey" dangerouslySetInnerHTML={{
            __html: data?.description.replace("display:flex","display:block")
          }}></p>
          
        </div>

        <div className="border-b border-color block my-8"></div></>}
        
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-16 gap-y-4">
          <div className="col-span-2 row-start-2 sm:row-start-1">
            <div className="flex justify-start flex-wrap items-center gap-x-4">
              <p className="text-xss text-tag-color">{moment(data.createdOn).format("MMMM DD, YYYY")}</p>
              <p className="text-xss text-tag-color">1 min read</p>
              <p className="text-xss text-tag-color">views 1245</p>
              <Link href={`/posts/${data.id}`}  className="text-xss text-primary">{data?.authorDetails?.FirstName}{" "}{data?.authorDetails?.LastName}</Link>
              
              <div className="px-2 py-1 text-xss text-secondary bg-secondary rounded-md">{data?.categories[0].at(-1).categoryName}</div>
            </div>
            <Link href={`/posts/${data.id}`} className="block mt-2 mb-4 hover:underline">
              <h1 className="text-3xxl text-dark font-medium leading-8">{data?.title}</h1>              
            </Link>
            <p className="text-base font-light text-grey line-clamp-5 " dangerouslySetInnerHTML={{
            __html: data?.description.replace("display:flex","display:block")
          }}></p>
          </div>
          <div className="row-start-1 sm:row-start-1" key={data.id}>
            <Link href={`/posts/${data.id}`}>
              <Image
              loader={imageLoader}
                src={data?.coverImage}
                alt="spurtCMS card image"
                className="dark:invert"
                width={1000}
                height={1000}
                priority
              />
            </Link>
          </div>
        </div>

        <div className="border-b border-color block my-8"></div>
        </>))}
   </>
  )
}

export default Post
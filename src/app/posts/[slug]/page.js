import { fetchGraphQLDa } from "@/app/api/graphicql";
import { GET_POSTS_QUERY_SINGLE } from "@/app/api/query";
import PostSingleData from "@/app/components/PostSingleData";





 export async function generateMetadata({params}) {

  let varSingle={ "slug":params?.slug }
  let postSingle = await fetchGraphQLDa(GET_POSTS_QUERY_SINGLE,varSingle)
 let title=postSingle?.data?.channelEntryDetail?.metaTitle
 let description=postSingle?.data?.channelEntryDetail?.metaDescription
  return {
    title,
    description,
  };
 
}

export default function Detail({params}) {

 
  
  return (

    <>
      <PostSingleData params={params}/>
    </>
    
  );
}

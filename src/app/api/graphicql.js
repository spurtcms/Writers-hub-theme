import axiosInstance from "./axios";


async function fetchGraphQLData(GET_POSTS_QUERY_LIST,varPos) {
  try {
    const response = await axiosInstance.post('', {
      query: GET_POSTS_QUERY_LIST,
      variables: varPos
    });
// console.log(response,'34343434');
    return response.data; 
  } catch (error) {
    console.error('Error fetching GraphQL data:', error);
    throw error; // Re-throw the error for handling elsewhere if needed
  }
}

export const fetchGraphQl = async (setPostes,GET_POSTS_QUERY_LIST,varPos) => {
  try {
    const entries = await fetchGraphQLData(GET_POSTS_QUERY_LIST,varPos);
    // console.log(entries, 'entries');
    // return entries;
    setPostes(entries.data)
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error; // Re-throw the error for handling elsewhere if needed
  }
};

// async function fetchGraphQLDataSingle(id) {
//   try {
//     const response = await axiosInstance.post('', {
//       query: GET_POSTS_QUERY_SINGLE,
//       variables: { "channelEntryId":id }
//     });
// // console.log(response,'34343434');
//     return response.data; 
//   } catch (error) {
//     console.error('Error fetching GraphQL data:', error);
//     throw error; // Re-throw the error for handling elsewhere if needed
//   }
// }

// export const fetchGraphQlSingleData = async (setPostesSingle,slug) => {
//   try {
//     const entries = await fetchGraphQLDataSingle(slug);
//     // console.log(entries, 'entries');
//     // return entries;
//     setPostesSingle(entries.data)
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//     throw error; // Re-throw the error for handling elsewhere if needed
//   }
// };

// async function fetchGraphQLCategoryData () {
//   try {
//     const response = await axiosInstance.post('', {
//       query: GET_POSTS_QUERY_CATEGORY,
//       variables: { "limit": 10, "offset":0, "hierarchylevel":0 }
//     });
// // console.log(response,'34343434');
//     return response.data; 
//   } catch (error) {
//     console.error('Error fetching GraphQL data:', error);
//     throw error; // Re-throw the error for handling elsewhere if needed
//   }
// }

// export const fetchGraphQlCategory = async (setCategories) => {
//   try {
//     const entries = await fetchGraphQLCategoryData();
//     // console.log(entries, 'entries');
//     // return entries;
//     setCategories(entries.data)
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//     throw error; // Re-throw the error for handling elsewhere if needed
//   }
// };











































// const GET_POSTS_QUERY = `query($channelId: Int,$channelEntryId: Int,$categoryId: Int,$limit: Int,$offset: Int){
//     channelEntriesList(channelId: $channelId,channelEntryId: $channelEntryId,categoryId: $categoryId, limit: $limit,offset: $offset){
//       channelEntryList{
//         channelEntryList{
//           id
//           title
//           slug
//           description
//           userId
//           channelId
//           status
//           isActive
//           isDeleted
//           deletedBy
//           deletedOn
//           createdOn
//           createdBy
//           modifiedBy
//           modifiedOn
//           coverImage
//           thumbnailImage
//           metaTitle
//           metaDescription
//           keyword
//           categoriesId
//           relatedArticles
//           categories{
//             id
//             categoryName
//             parentId
//             modifiedOn
//           }
//         }
//         count
//       }
//       channelEntry{
//         id
//         title
//         slug
//         description
//         userId
//         channelId
//         status
//         isActive
//         isDeleted
//         deletedBy
//         deletedOn
//         createdOn
//         createdBy
//         modifiedBy
//         modifiedBy
//         modifiedOn
//         coverImage
//         thumbnailImage
//         metaTitle
//         metaDescription
//         keyword
//         categoriesId
//         relatedArticles
//         categories{
//             id
//             categoryName
//             parentId
//             modifiedOn
//           }
//       }
//     }
//   }
// `;

// async function fetchGraphQLData(id) {
//   try {
//     const response = await axiosInstance.post('', {
//       query: GET_POSTS_QUERY,
//       variables: { "limit": 10, "offset":0,channelEntryId:id }
//     });
// // console.log(response,'34343434');
//     return response.data; 
//   } catch (error) {
//     console.error('Error fetching GraphQL data:', error);
//     throw error; // Re-throw the error for handling elsewhere if needed
//   }
// }

// export const fetchGraphQl = async (setPostes,slug) => {
//   try {
//     const entries = await fetchGraphQLData(slug);
//     // console.log(entries, 'entries');
//     // return entries;
//     setPostes(entries.data)
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//     throw error; // Re-throw the error for handling elsewhere if needed
//   }
// };



export const GET_POSTS_QUERY_ALL_LIST = `query ChannelEntriesList(
  $commonFilter: Filter
  $sort: Sort
  $entryFilter: EntriesFilter
  $AdditionalData: EntriesAdditionalData
  ){
    ChannelEntriesList(commonFilter:$commonFilter,sort:$sort,entryFilter:$entryFilter,AdditionalData:$AdditionalData){
      channelEntriesList{
        id
        title
        slug
        description
        userId
        channelId
        status
        isActive
        createdOn
        createdBy
        modifiedBy
        modifiedOn
        coverImage
        categoriesId
        featuredEntry
        viewCount
        readingTime
        categories{
          categoryName
        }
        authorDetails{
          firstName
          lastName
          email
          mobileNo
        }
      }
    }  
  }`


// `query($channelId: Int,$categoryId: Int,$limit: Int!,$offset: Int!,$requireData:RequireData){
//     channelEntriesList(channelId:$channelId,categoryId:$categoryId,limit:$limit,offset:$offset,requireData:$requireData){
//       channelEntriesList{
//         id
//         title
//         slug
//         description
//         userId
//         channelId
//         status
//         isActive
//         coverImage
//         categoriesId
//         viewCount
//         readingTime
//         createdOn
//         featuredEntry
//         categories{
//           categoryName
//         }
//         authorDetails{
//           FirstName
//           LastName
//           Email
//           MobileNo
//         }
//       }
//     }
//   }
//   `;
  
  export const GET_POSTS_QUERY_SPECIFIC_LIST = `query($channelId: Int,$categoryId: Int,$limit: Int!,$offset: Int!){
    channelEntriesList(channelId:$channelId,categoryId:$categoryId,limit:$limit,offset:$offset){
      channelEntriesList{
        id
        title
        slug
        description
        userId
        channelId
        status
        isActive
        coverImage
        categoriesId
        featuredEntry
        createdOn
        categories{
          categoryName
        }
      }
    }
  }
  `;
  
  export const GET_POSTS_QUERY_CATEGORY = ` query CategoryList($categoryFilter: CategoryFilter
    $commonFilter: Filter){
      CategoryList(categoryFilter:$categoryFilter, 
        commonFilter:$commonFilter){
        categorylist{
          id
          categoryName
          categorySlug
          description
          imagePath
          createdOn
          createdBy
          modifiedOn
          modifiedBy
          parentId
          tenantId
        },
        count
      }
    }`
  
  // `query categoryList($limit: Int
  //   $offset: Int $categoryGroupId: Int $categoryGroupSlug: String
  //   $hierarchyLevel: Int $checkEntriesPresence: Int ){
  //     categoriesList(limit:$limit,offset:$offset,
  //       categoryGroupId:$categoryGroupId,
  //       categoryGroupSlug:$categoryGroupSlug, 
  //       hierarchyLevel:$hierarchyLevel,
  //       checkEntriesPresence:$checkEntriesPresence){
  //       categories{
  //         id
  //         categoryName
  //         categorySlug
  //         description
  //         imagePath
  //         createdOn
  //         createdBy
  //         modifiedOn
  //         modifiedBy
  //         parentId
  //       }
  //       count
  //     }
  //   }
  // `;
    
  
  export const GET_POSTS_QUERY_SINGLE = `query ChannelEntryDetail(
  $id: Int
  $slug: String
  $AdditionalData: EntriesAdditionalData
  ){
    ChannelEntryDetail(id:$id,slug:$slug,
      AdditionalData:$AdditionalData){
      id
      title
      slug
      description
      userId
      channelId
      status
      isActive
      createdOn
      createdBy
      modifiedBy
      modifiedOn
      coverImage
      metaTitle
      metaDescription
      categoriesId
      viewCount
      readingTime
      categories{
          categoryName
        }
        authorDetails{
          firstName
          lastName
          email
          mobileNo
        }
    }
  }
  `
  
  
  // `query($slug: String!){
  //   channelEntryDetail(slug:$slug){
  //       id
  //       title
  //       metaTitle
  //       metaDescription
  //       slug
  //       description
  //       userId
  //       channelId
  //       status
  //       isActive
  //       coverImage
  //       viewCount
  //       readingTime
  //       categoriesId
  //       createdOn
  //       categories{
  //         categoryName
  //       }
  //       authorDetails{
  //         FirstName
  //         LastName
  //         Email
  //         MobileNo
  //       }
  //     }
  //   }
  // `;
  
  export const GET_COUNT =`mutation UpdateEntryViewCount($id: Int){
    UpdateEntryViewCount(id:$id){
      count
      status
    }
  }`



//    `mutation($entryId:Int!){
//     updateChannelEntryViewCount(
//     entryId:$entryId
//       )
// }
//   `;
  
export const GET_POSTS_QUERY_ALL_LIST = `query($channelId: Int,$categoryId: Int,$limit: Int!,$offset: Int!){
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
        viewCount
        readingTime
        createdOn
        featuredEntry
        categories{
          categoryName
        }
        authorDetails{
          FirstName
          LastName
          Email
          MobileNo
        }
      }
    }
  }
  `;
  
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
  
  export const GET_POSTS_QUERY_CATEGORY = `query($hierarchylevel: Int!){
    categoriesList(hierarchyLevel: $hierarchylevel){
      categories{
        id
        categoryName
        categorySlug
        parentId
      }
    }
  }
  `;
  
  
  export const GET_POSTS_QUERY_SINGLE = `query($slug: String!){
    channelEntryDetail(slug:$slug){
        id
        title
        metaTitle
        metaDescription
        slug
        description
        userId
        channelId
        status
        isActive
        coverImage
        viewCount
        readingTime
        categoriesId
        createdOn
        categories{
          categoryName
        }
        authorDetails{
          FirstName
          LastName
          Email
          MobileNo
        }
      }
    }
  `;
  
  export const GET_COUNT = `mutation($entryId:Int!){
    updateChannelEntryViewCount(
    entryId:$entryId
      )
}
  `;
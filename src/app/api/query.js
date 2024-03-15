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
          ProfileImage
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
        authorDetails{
          FirstName
          LastName
          Email
          MobileNo
          ProfileImage
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
  
  
  export const GET_POSTS_QUERY_SINGLE = `query($channelEntryId: Int!){
    channelEntryDetail(channelEntryId:$channelEntryId){
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
        createdOn
        categories{
          categoryName
        }
        authorDetails{
          FirstName
          LastName
          Email
          MobileNo
          ProfileImage
        }
      }
    }
  `;
  
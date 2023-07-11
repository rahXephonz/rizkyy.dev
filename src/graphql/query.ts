export const postQuery = `
  query PostQuery($first: Int, $skip: Int) {
    postsConnection(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      edges {
        node {
          id
          excerpt
          title
          slug
          createdAt
          categories {
            name
            slug
          }
          thumbnailImage{
            fileName
            url
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        pageSize
      }
    }
    authors {
      photo {
        url
        fileName
      }
    }
  }
`;

export const postDetailQuery = `
  query PostDetailQuery($slug: String) {
    post(where: {slug: $slug}) {
      content
      title
      slug
      excerpt
      createdAt
      thumbnailImage {
        fileName
        url
      }
      author {
        name
        photo {
          url
          fileName
        }
      }
      categories {
        name
        slug
      }
    }
  }
`;

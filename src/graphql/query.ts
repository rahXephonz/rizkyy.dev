export const codeQuery = `
  query CodeQuery($first: Int, $skip: Int) {
    codesConnection(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;

export const postQuery = `
  query PostQuery($first: Int, $skip: Int) {
    postsConnection(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      edges {
        node {
          id
          excerpt
          title
          slug
          content
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

export const codeDetailQuery = `
  query CodeDetailQuery($slug: String) {
    code(where: {slug: $slug}) {
      title
      slug
      content
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

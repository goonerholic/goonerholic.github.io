/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query BlogIndex {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `);

  // blog page
  const postPerPage = 5;
  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);
  Array.from({ length: numPages }).forEach((_, index) => {
    actions.createPage({
      path: index === 0 ? '/posts' : `/posts/${index + 1}`,
      component: require.resolve('./src/templates/PostList.tsx'),
      context: {
        limit: postPerPage,
        skip: index * postPerPage,
        numPages,
        currentPage: index + 1,
      },
    });
  });

  // single post
};

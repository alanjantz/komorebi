const path = require('path');
const _ = require('lodash');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
    });
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    const separtorIndex = slug.indexOf('--') ? slug.indexOf('--') : 0;
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;

    if (source !== 'parts') {
      createNodeField({
        node,
        name: `slug`,
        value: `${separtorIndex ? '/' : ''}${slug.substring(shortSlugStart)}`,
      });
    }
    createNodeField({
      node,
      name: `prefix`,
      value: separtorIndex ? slug.substring(1, separtorIndex) : '',
    });
    createNodeField({
      node,
      name: `source`,
      value: source,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/Post/post.tsx');
    const tagTemplate = path.resolve('src/templates/Tag/tag.tsx');
    const savedTemplate = path.resolve('src/templates/Saved/saved.tsx');
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [fields___prefix], order: DESC }
              limit: 1000
              filter: { frontmatter: { draft: { ne: true } } }
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                    prefix
                    source
                  }
                  frontmatter {
                    title
                    tags
                  }
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;

        /* Cria um lista de tags */
        const tagSet = new Set();
        items.forEach((edge) => {
          const {
            node: {
              frontmatter: { tags },
            },
          } = edge;

          if (tags && tags !== null) {
            tags.forEach((tag) => tagSet.add(tag));
          }
        });

        /* Cria as p??ginas de tag */
        const tagList = Array.from(tagSet);
        tagList.forEach((tag) => {
          createPage({
            path: `/tag/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          });
        });

        /* Cria a p??gina de posts */
        const posts = items.filter(
          (item) => item.node.fields.source === 'posts',
        );
        posts.forEach(({ node }, index) => {
          const { slug, source } = node.fields;
          createPage({
            path: slug,
            component: postTemplate,
            context: {
              slug,
              source,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
              previous: index === 0 ? null : posts[index - 1].node,
            },
          });
        });

        /* Cria as p??ginas de itens salvos */
        const savedPosts = items.filter(
          (item) => item.node.fields.source === 'posts',
        );
        savedPosts.forEach(({ node }) => {
          const { slug, source } = node.fields;
          createPage({
            path: `/saved`,
            component: savedTemplate,
            context: {
              slug,
              source,
            },
          });
        });
      }),
    );
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

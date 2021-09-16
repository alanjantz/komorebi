import React, { useCallback } from 'react';
import { PageProps, graphql } from 'gatsby';
import { Layout, Grid, SEO } from 'components';
import { removeUrlSlashes } from '@/utils/urlUtils';
import storage from '@/utils/localStorageUtils';

const SavedTemplate: React.FC<PageProps> = (props) => {
  const { data } = props;
  const { edges } = data.allMarkdownRemark;

  const getFilteredData = useCallback((): any => {
    const filteredEdges = edges.filter((post) => {
      const { slug } = post.node.fields;
      return !!storage
        .getSavedItems()
        .find((i) => i === removeUrlSlashes(slug));
    });

    return { allMarkdownRemark: { edges: filteredEdges } };
  }, [edges]);

  return (
    <Layout>
      <SEO />
      <Grid data={getFilteredData()} serchable />
    </Layout>
  );
};

export default SavedTemplate;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            poster
          }
        }
      }
    }
  }
`;

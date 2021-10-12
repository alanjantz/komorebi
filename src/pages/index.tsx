import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { Layout, Grid, SEO } from 'components';

const Home: React.FC<PageProps> = (props) => {
  const { data } = props;

  return (
    <Layout>
      <SEO />
      <Grid data={data} serchable />
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___slug], order: ASC }
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

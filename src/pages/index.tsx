import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { Layout, Grid } from 'components';

const Home: React.FC<PageProps> = (props) => {
  const { data } = props;

  return (
    <main>
      <Layout>
        <Grid data={data} />
      </Layout>
    </main>
  );
};

export default Home;

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

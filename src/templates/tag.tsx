import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { Grid, Layout } from '../components';

const TagTemplate: React.FC<PageProps> = (props) => {
  const { data, pageContext } = props;
  const { tag } = pageContext;
  const { pathname } = props.location;

  return (
    <Layout>
      <h2 style={{ fontSize: '22px', padding: '0px 15px' }}>
        Todos os posts com a tag: {tag}
      </h2>
      <Grid data={data} />
    </Layout>
  );
};

export default TagTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
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

import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { Grid, Layout, SEO } from '../../components';
import Tag from '../../components/Tag';
import { Title, Subtitle } from './styles';

const TagTemplate: React.FC<PageProps> = (props) => {
  const { data, pageContext, location } = props;
  const { tag } = pageContext;
  const { pathname } = location;

  return (
    <Layout>
      <SEO
        title={`Tag: ${tag}`}
        description={`Filtrando postagens com a categoria "${tag}"`}
        url={pathname}
      />
      <Title>
        <Subtitle>Filtrando postagens com a categoria</Subtitle>
        <Tag text={tag} size="small" clickable={false} />
      </Title>

      <Grid data={data} />
    </Layout>
  );
};

export default TagTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___title], order: ASC }
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

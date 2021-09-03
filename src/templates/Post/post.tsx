import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { Container, Layout, Post } from '../../components';
import { PostModel, SeasonModel } from '../../models';

const PostTemplate: React.FC<PageProps> = (props) => {
  const { data } = props;
  const { fields } = data.markdownRemark;
  const { slug } = fields;
  const { title, subtitle, tags, seasons, description, poster, cover } =
    data.markdownRemark.frontmatter;

  const post: PostModel = {
    title,
    subtitle,
    synopsis: description,
    seasons: JSON.parse(seasons.toString()) as SeasonModel[],
    tags: tags as Array<string>,
    poster,
    cover,
  };

  return (
    <Layout>
      <Container>
        <Post post={post} />
      </Container>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        subtitle
        tags
        seasons
        description
        poster
        cover
      }
      fields {
        slug
      }
    }
  }
`;
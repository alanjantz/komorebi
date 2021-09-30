import React from 'react';
import { PageProps, graphql } from 'gatsby';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { getBaseUrl } from '../../utils/urlUtils';
import { Container, Layout, Post, SEO } from '../../components';
import { PostModel, SeasonModel } from '../../models';
import { Actions } from './styles';

const PostTemplate: React.FC<PageProps> = (props) => {
  const { data } = props;
  const { slug } = data.markdownRemark.fields;
  const { title, subtitle, tags, seasons, description, poster, cover } =
    data.markdownRemark.frontmatter;
  const baseUrl = getBaseUrl();

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
      <SEO title={title} url={slug} description={description} article />
      <Container>
        <Post post={post} postLink={slug} />
        <Actions>
          <IconButton color="inherit" aria-label="menu" href={`/${baseUrl}`}>
            <HomeIcon />
          </IconButton>
        </Actions>
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

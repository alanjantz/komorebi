import React from 'react';
import { PageProps, graphql } from 'gatsby';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { getBaseUrl } from '../../utils/urlUtils';
import { Container, Layout, Post, SEO } from '../../components';
import { PostModel, SeasonModel } from '../../models';
import { Actions, useStyles } from './styles';

const PostTemplate: React.FC<PageProps> = (props) => {
  const { data, pageContext } = props;
  const { next, previous } = pageContext;
  const { slug } = data.markdownRemark.fields;
  const { title, subtitle, tags, seasons, description, poster, cover } =
    data.markdownRemark.frontmatter;
  const baseUrl = getBaseUrl();
  const classes = useStyles();

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
          {previous && (
            <IconButton
              color="inherit"
              aria-label="menu"
              href={previous.fields.slug}
              className={classes.alignLeft}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <IconButton color="inherit" aria-label="menu" href={`/${baseUrl}`}>
            <HomeIcon />
          </IconButton>
          {next && (
            <IconButton
              color="inherit"
              aria-label="menu"
              href={next.fields.slug}
              className={classes.alignRight}
            >
              <ArrowForwardIcon />
            </IconButton>
          )}
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

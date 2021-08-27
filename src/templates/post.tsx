import React from 'react';
import { PageProps, graphql, Link } from 'gatsby';
import _ from 'lodash';
import { Layout } from '../components';

const PostTemplate: React.FC<PageProps> = (props) => {
  const { data } = props;
  const { fields } = data.markdownRemark;
  const { slug } = fields;
  const { title, tags, date, description } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;

  return (
    <Layout>
      <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>{title}</h2>
      <p>
        {tags.map((tag) => (
          <Link
            style={{ color: '#000', marginRight: '10px' }}
            key={tag}
            to={`/tag/${_.kebabCase(tag)}`}
          >
            {tag}
          </Link>
        ))}
      </p>
      <p>{date}</p>
      <div className="content">
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </div>
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
        date(formatString: "DD/MM/YYYY")
        tags
        description
      }
      fields {
        slug
      }
    }
  }
`;

import React from 'react';
import { Link } from 'gatsby';
import MaterialGrid from '@material-ui/core/Grid';
import { useStyles } from './styles';
import Poster from '../Poster';
import { Tooltip } from '../Post/styles';

interface GridProps {
  data?: any;
}

const Grid: React.FC<GridProps> = ({ data }) => {
  const classes = useStyles();
  const { edges } = data.allMarkdownRemark;

  return (
    <div className={classes.root}>
      <MaterialGrid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {edges.map((edge) => {
          const post = edge.node.frontmatter;
          const postLink = edge.node.fields.slug;

          return (
            <Tooltip title={post.title} placement="bottom" key={postLink} arrow>
              <MaterialGrid item>
                <Link to={postLink}>
                  <Poster title={post.title} source={post.poster} />
                </Link>
              </MaterialGrid>
            </Tooltip>
          );
        })}
      </MaterialGrid>
    </div>
  );
};

export default Grid;

import React from 'react';
import { Link } from 'gatsby';
import MaterialGrid from '@material-ui/core/Grid';
import { useStyles } from './styles';
import Cover from '../Cover';

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

          return (
            <MaterialGrid item>
              <Link to={edge.node.fields.slug}>
                <Cover title={post.title} source={post.cover} />
              </Link>
            </MaterialGrid>
          );
        })}
      </MaterialGrid>
    </div>
  );
};

export default Grid;

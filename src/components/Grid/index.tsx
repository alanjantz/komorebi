import React from 'react';
import { Link } from 'gatsby';
import MaterialGrid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';

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
            <Link to={edge.node.fields.slug}>
              <MaterialGrid item>
                <Paper>{post.title}</Paper>
              </MaterialGrid>
            </Link>
          );
        })}
      </MaterialGrid>
    </div>
  );
};

export default Grid;

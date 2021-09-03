import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import MaterialGrid from '@material-ui/core/Grid';
import Poster from '../Poster';
import { Tooltip } from '../Post/styles';
import { useStyles } from './styles';
import SearchInput from '../SearchInput';

interface GridProps {
  data?: any;
  serchable?: boolean;
}

const Grid: React.FC<GridProps> = ({ data, serchable }) => {
  const { edges } = data.allMarkdownRemark;
  const [postList, setPostList] = useState(edges);
  const [query, setQuery] = useState<string>('');
  const classes = useStyles();

  const onSearchInputChange = (value: string): void => {
    setQuery(value);
  };

  useEffect(() => {
    const filteredData = edges.filter((post) => {
      const { title } = post.node.frontmatter;
      return title.toLowerCase().includes(query.toLowerCase());
    });

    setPostList(filteredData);
  }, [query]);

  return (
    <div className={classes.root}>
      {serchable && <SearchInput onChange={onSearchInputChange} />}
      <MaterialGrid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {postList.map((edge) => {
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

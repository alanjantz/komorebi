import React, { useEffect, useState } from 'react';
import MaterialGrid from '@material-ui/core/Grid';
import { useStyles } from './styles';
import SearchInput from '../SearchInput';
import GridItem from './GridItem';

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
            <GridItem
              key={postLink}
              postTitle={post.title}
              postLink={postLink}
              postPoster={post.poster}
            />
          );
        })}
      </MaterialGrid>
    </div>
  );
};

export default Grid;

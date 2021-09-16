import React, { useCallback, useEffect, useState } from 'react';
import MaterialGrid from '@material-ui/core/Grid';
import SearchInput from '../SearchInput';
import GridItem from './GridItem';
import { useStyles, TextContainer } from './styles';

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

  const renderList = useCallback(() => {
    if (postList.length > 0) {
      return postList.map((edge) => {
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
      });
    }

    return (
      <TextContainer>
        Hum, parece que não tem nada salvo ainda. Experimento clicar nos
        corações!
      </TextContainer>
    );
  }, [postList]);

  return (
    <div className={classes.root}>
      {serchable && postList.length > 0 && (
        <SearchInput onChange={onSearchInputChange} />
      )}
      <MaterialGrid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {renderList()}
      </MaterialGrid>
    </div>
  );
};

export default Grid;

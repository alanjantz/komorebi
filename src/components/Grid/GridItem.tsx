import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import red from '@material-ui/core/colors/red';
import Poster from '../Poster';
import Tooltip from '../Tooltip';
import storage from '../../utils/localStorageUtils';
import { removeUrlSlashes } from '../../utils/urlUtils';
import { ActionGroup, IconBox } from './styles';

interface GridItemProps {
  postTitle: string;
  postLink: string;
  postPoster: string;
}

const GridItem: React.FC<GridItemProps> = ({
  postTitle,
  postLink,
  postPoster,
}) => {
  const [isSaved, setIsSaved] = useState<boolean>();

  const getPostId = useCallback((): string => removeUrlSlashes(postLink), []);

  useEffect(() => {
    const postId = getPostId();
    setIsSaved(!!storage.getSavedItems().find((i) => i === postId));
  }, []);

  const save = useCallback((): void => {
    setIsSaved(true);
    storage.savePost(getPostId());
  }, []);

  const remove = useCallback((): void => {
    setIsSaved(false);
    storage.removeSavedPost(getPostId());
  }, []);

  const getHeartIcon = useCallback((): React.ReactElement => {
    let icon = <FavoriteBorderIcon fontSize="small" htmlColor="white" />;
    let onClick = save;
    let label = `salvar ${postTitle} em seus favoritos`;

    if (isSaved) {
      icon = <FavoriteIcon fontSize="small" htmlColor={red[900]} />;
      onClick = remove;
      label = `remover ${postTitle} dos seus favoritos`;
    }

    return (
      <IconBox>
        <IconButton aria-label={label} onClick={onClick}>
          {icon}
        </IconButton>
      </IconBox>
    );
  }, [isSaved]);

  return (
    <Tooltip title={postTitle} placement="bottom">
      <Grid item>
        <ActionGroup>{getHeartIcon()}</ActionGroup>
        <Link to={postLink}>
          <Poster title={postTitle} source={postPoster} />
        </Link>
      </Grid>
    </Tooltip>
  );
};

export default GridItem;

import React, { useState, useCallback, useEffect } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Slide,
  Snackbar,
  TableContainer,
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import red from '@material-ui/core/colors/red';
import { PostModel } from '../../models';
import Title from './Title';
import Subtitle from './Subtitle';
import TagGroup from './TagGroup';
import Season from './Season';
import storage from '../../utils/localStorageUtils';
import { removeUrlSlashes } from '../../utils/urlUtils';
import Tooltip from '../Tooltip';
import { useStyles } from './styles';

interface PostProps {
  post: PostModel;
  postLink: string;
}

const Post: React.FC<PostProps> = ({ post, postLink }) => {
  const [open, setOpen] = useState(false);
  const [isSaved, setIsSaved] = useState<boolean>();
  const { title, subtitle, tags, synopsis, seasons } = post;
  const classes = useStyles();

  const getPostId = useCallback(
    (): string => removeUrlSlashes(postLink),
    [postLink],
  );

  useEffect(() => {
    const postId = getPostId();
    setIsSaved(!!storage.getSavedItems().find((i) => i === postId));
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const copy = (): void => {
    const el = document.createElement('input');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setOpen(true);
  };

  const save = useCallback((): void => {
    setIsSaved(true);
    storage.savePost(getPostId());
  }, []);

  const remove = useCallback((): void => {
    setIsSaved(false);
    storage.removeSavedPost(getPostId());
  }, []);

  const getHeartIcon = useCallback((): React.ReactElement => {
    let icon = <FavoriteBorderIcon fontSize="small" />;
    let onClick = save;
    let tooltipMessage = 'Salvar';
    let label = `salvar ${title} em seus favoritos`;

    if (isSaved) {
      icon = <FavoriteIcon fontSize="small" htmlColor={red[900]} />;
      onClick = remove;
      tooltipMessage = 'Remover dos salvos';
      label = `remover ${title} dos seus favoritos`;
    }

    return (
      <Tooltip title={tooltipMessage} arrow>
        <IconButton aria-label={label} onClick={onClick} color="default">
          {icon}
        </IconButton>
      </Tooltip>
    );
  }, [isSaved]);

  return (
    <>
      <Card className={classes.root}>
        {post.cover && (
          <CardMedia
            className={classes.media}
            image={post.cover}
            title={post.title}
          />
        )}
        <CardContent>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <TagGroup tags={tags} />
          <p>{synopsis}</p>

          <TableContainer>
            {seasons.map((season) => (
              <Season
                key={season.year}
                season={season}
                watched={tags.includes('Assistido')}
              />
            ))}
          </TableContainer>
        </CardContent>
        <CardActions className={classes.actions}>
          {getHeartIcon()}
          <Tooltip title="Compartilhar">
            <IconButton
              aria-label="compartilhar"
              onClick={copy}
              color="default"
            >
              <ShareIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
      <Snackbar
        open={open}
        TransitionComponent={Slide}
        message="Copiado com sucesso"
        onClose={handleClose}
        autoHideDuration={5000}
      />
    </>
  );
};

export default Post;

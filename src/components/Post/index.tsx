import React, { useState } from 'react';
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
import { PostModel } from '../../models';
import Title from './Title';
import Subtitle from './Subtitle';
import TagGroup from './TagGroup';
import { useStyles, Tooltip } from './styles';
import Season from './Season';

interface PostProps {
  post: PostModel;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [open, setOpen] = useState(false);
  const { title, subtitle, tags, synopsis, seasons } = post;
  const classes = useStyles();

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
          <Tooltip title="Compartilhar" arrow>
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

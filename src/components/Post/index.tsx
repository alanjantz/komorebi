import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Slide,
  Snackbar,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { Link } from 'gatsby';
import _ from 'lodash';
import ShareIcon from '@material-ui/icons/Share';
import { PostModel } from '../../models';
import {
  StyledTableRow,
  StyledTableCell,
  TableCell,
  useStyles,
} from './styles';

interface PostProps {
  post: PostModel;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [open, setOpen] = useState(false);
  const { title, subtitle, tags, synopsis, seasons } = post;
  const classes = useStyles();

  const formatNumber = (value: number, padding: number): string =>
    value.toString().padStart(padding, '0');

  const getEpisodesList = (seasonEpisodes: string[] | number): string[] => {
    let result: string[] = [];

    if (typeof seasonEpisodes === 'number') {
      const numberOfZeros = seasonEpisodes.toString().length;

      result = new Array(seasonEpisodes)
        .fill(undefined)
        .map(
          (ep, index) => `Episódio ${formatNumber(index + 1, numberOfZeros)}`,
        );
    } else {
      result = seasonEpisodes as Array<string>;
    }

    return result;
  };

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
            title="Contemplative Reptile"
          />
        )}
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          {subtitle && (
            <Typography className={classes.pos} color="textSecondary">
              {subtitle}
            </Typography>
          )}
          <p>
            {tags.map((tag) => (
              <Link
                key={tag}
                to={`/tag/${_.kebabCase(tag)}`}
                className={classes.margin}
              >
                <Chip
                  size="small"
                  label={tag}
                  color="primary"
                  onClick={() => {}}
                />
              </Link>
            ))}
          </p>
          <p>{synopsis}</p>

          <TableContainer>
            {seasons.map((season) => {
              const episodes = getEpisodesList(season.episodes);
              const numberOfZeros = episodes.length.toString().length;

              return (
                <Table key={season.year}>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>{episodes.length}</StyledTableCell>
                      <StyledTableCell>{season.title}</StyledTableCell>
                      <StyledTableCell align="right">
                        {season.year}
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {episodes.map((epTitle, index) => {
                      const key = index + 1;
                      return (
                        <StyledTableRow key={key}>
                          <TableCell>
                            {formatNumber(key, numberOfZeros)}
                          </TableCell>
                          <TableCell colSpan={2}>{epTitle}</TableCell>
                        </StyledTableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              );
            })}
          </TableContainer>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button startIcon={<ShareIcon />} onClick={copy}>
            Compartilhar
          </Button>
        </CardActions>
      </Card>
      <Snackbar
        open={open}
        TransitionComponent={Slide}
        message="Copiado com sucesso"
        onClose={handleClose}
      />
    </>
  );
};

export default Post;

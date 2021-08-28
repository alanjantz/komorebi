import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { Link } from 'gatsby';
import _ from 'lodash';
import { PostModel } from '../../models';
import { Paper } from './styles';

interface PostProps {
  post: PostModel;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { title, subtitle, tags, synopsis, seasons } = post;

  const formatNumber = (value: number, padding: number): string =>
    value.toString().padStart(padding, '0');

  const getEpisodesList = (seasonEpisodes: string[] | number): string[] => {
    let result: string[] = [];

    if (typeof seasonEpisodes === 'number') {
      const numberOfZeros = seasonEpisodes.toString().length;

      result = new Array(seasonEpisodes)
        .fill(undefined)
        .map(
          (_, index) => `Episódio ${formatNumber(index + 1, numberOfZeros)}`,
        );
    } else {
      result = seasonEpisodes as Array<string>;
    }

    return result;
  };

  return (
    <Paper>
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
      <p>
        {tags.map((tag) => (
          <Link
            style={{ color: '#000', marginRight: '10px' }}
            key={tag}
            to={`/tag/${_.kebabCase(tag)}`}
          >
            {tag}
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
                  <TableCell>{episodes.length}</TableCell>
                  <TableCell>{season.title}</TableCell>
                  <TableCell align="right">{season.year}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {episodes.map((epTitle, index) => {
                  const key = index + 1;
                  return (
                    <TableRow key={key}>
                      <TableCell>{formatNumber(key, numberOfZeros)}</TableCell>
                      <TableCell colSpan={2}>{epTitle}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          );
        })}
      </TableContainer>
    </Paper>
  );
};

export default Post;

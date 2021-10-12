import React from 'react';
import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { SeasonModel } from '@/models';
import Tag from '../Tag';
import {
  StyledTableCell,
  StyledTableRow,
  TableCell,
  useStyles,
} from './styles';

interface SeasonProps {
  season: SeasonModel;
  watched?: boolean;
}

const Season: React.FC<SeasonProps> = ({ season, watched }) => {
  const { title, year, watchedEpisodes } = season;
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
          (_, index) => `Episódio ${formatNumber(index + 1, numberOfZeros)}`,
        );
    } else {
      result = seasonEpisodes as Array<string>;
    }

    return result;
  };

  const getEpisodeTitle = (episodeTitle: string): React.ReactElement => {
    const keyWords: string[] = ['OVA', 'FILLER'];

    let epTitle = episodeTitle;
    let info = '';

    keyWords.forEach((keyWord) => {
      const word = `(${keyWord})`;
      if (epTitle.includes(word)) {
        epTitle = epTitle.replace(word, '');
        info = keyWord;
      }
    });

    return (
      <>
        {epTitle.trim()}{' '}
        {info && (
          <Tag
            size="small"
            text={info}
            clickable={false}
            noMargin
            color="default"
          />
        )}
      </>
    );
  };

  const checkEpisodeWatched = (index: number): boolean => {
    if (watchedEpisodes) {
      if (typeof watchedEpisodes === 'number') {
        return (watchedEpisodes as number) >= index;
      }
      return (watchedEpisodes as Array<number>).includes(index);
    }

    return false;
  };

  const episodes = getEpisodesList(season.episodes || []);
  const numberOfZeros = episodes.length.toString().length;

  return (
    <Table>
      <TableHead>
        <TableRow>
          {episodes.length > 0 && (
            <StyledTableCell className={classes.firstColumn}>
              {episodes.length}
            </StyledTableCell>
          )}
          <StyledTableCell>{title}</StyledTableCell>
          <StyledTableCell align="right">{year}</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {episodes.map((epTitle, index) => {
          const episodeWatched = watched || checkEpisodeWatched(index + 1);
          const key = index + 1;
          return (
            <StyledTableRow key={key}>
              <TableCell className={classes.firstColumn}>
                {formatNumber(key, numberOfZeros)}
              </TableCell>
              <TableCell colSpan={episodeWatched ? 1 : 2}>
                {getEpisodeTitle(epTitle)}
              </TableCell>
              {episodeWatched && (
                <TableCell>
                  <CheckIcon className={classes.check} />
                </TableCell>
              )}
            </StyledTableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Season;

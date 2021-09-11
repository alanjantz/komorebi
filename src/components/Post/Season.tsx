import React from 'react';
import { Table, TableBody, TableHead, TableRow } from '@material-ui/core';
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
}

const Season: React.FC<SeasonProps> = ({ season }) => {
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

    let title = episodeTitle;
    let info = '';

    keyWords.forEach((keyWord) => {
      const word = `(${keyWord})`;
      if (title.includes(word)) {
        title = title.replace(word, '');
        info = keyWord;
      }
    });

    return (
      <>
        {title.trim()}{' '}
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

  const episodes = getEpisodesList(season.episodes);
  const numberOfZeros = episodes.length.toString().length;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <StyledTableCell className={classes.firstColumn}>
            {episodes.length}
          </StyledTableCell>
          <StyledTableCell>{season.title}</StyledTableCell>
          <StyledTableCell align="right">{season.year}</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {episodes.map((epTitle, index) => {
          const key = index + 1;
          return (
            <StyledTableRow key={key}>
              <TableCell className={classes.firstColumn}>
                {formatNumber(key, numberOfZeros)}
              </TableCell>
              <TableCell colSpan={2}>{getEpisodeTitle(epTitle)}</TableCell>
            </StyledTableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Season;

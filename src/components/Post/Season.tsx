import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { SeasonModel } from '@/models';
import { StyledTableCell, StyledTableRow } from './styles';

interface SeasonProps {
  season: SeasonModel;
}

const Season: React.FC<SeasonProps> = ({ season }) => {
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

  const episodes = getEpisodesList(season.episodes);
  const numberOfZeros = episodes.length.toString().length;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <StyledTableCell>{episodes.length}</StyledTableCell>
          <StyledTableCell>{season.title}</StyledTableCell>
          <StyledTableCell align="right">{season.year}</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {episodes.map((epTitle, index) => {
          const key = index + 1;
          return (
            <StyledTableRow key={key}>
              <TableCell>{formatNumber(key, numberOfZeros)}</TableCell>
              <TableCell colSpan={2}>{epTitle}</TableCell>
            </StyledTableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Season;

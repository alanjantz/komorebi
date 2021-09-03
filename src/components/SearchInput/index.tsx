import React from 'react';
import TextField from '@material-ui/core/TextField';
import { SearchContainer } from './styles';

interface SearchInputProps {
  onChange(value: string): void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
  const onValueChange = (event: any): void => {
    onChange(event.target.value);
  };

  return (
    <SearchContainer>
      <TextField
        label="Filtrar"
        variant="outlined"
        color="primary"
        fullWidth
        onChange={onValueChange}
      />
    </SearchContainer>
  );
};

export default SearchInput;

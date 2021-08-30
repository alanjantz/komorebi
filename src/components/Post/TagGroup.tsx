import React from 'react';
import Tag from '../Tag';
import { Container } from './styles';

interface TagGroupProps {
  tags: string[];
}

const TagGroup: React.FC<TagGroupProps> = ({ tags }) => (
  <Container>
    {tags.map((tag) => (
      <Tag key={tag} text={tag} size="small" />
    ))}
  </Container>
);

export default TagGroup;

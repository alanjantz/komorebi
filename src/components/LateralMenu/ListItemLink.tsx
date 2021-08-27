import React from 'react';
import ListItem from '@material-ui/core/ListItem';

interface ListItemLinkProps {
  href: string;
  className?: string;
}

const ListItemLink: React.FC<ListItemLinkProps> = ({
  href,
  className,
  children,
}) => (
  <ListItem button component="a" href={href} className={className}>
    {children}
  </ListItem>
);

export default ListItemLink;

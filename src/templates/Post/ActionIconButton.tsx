import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '../../components/Tooltip';

interface ActionIconButtonProps {
  title: string;
  href?: string;
  className?: string;
}

const ActionIconButton: React.FC<ActionIconButtonProps> = ({
  title,
  href,
  className,
  children,
}) => (
  <Tooltip title={title}>
    <IconButton color="inherit" href={href} className={className}>
      {children}
    </IconButton>
  </Tooltip>
);

export default ActionIconButton;

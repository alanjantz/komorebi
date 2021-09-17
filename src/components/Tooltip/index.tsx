import React from 'react';
import { TooltipProps } from '@material-ui/core/Tooltip';
import { StyledTooltip } from './styles';

const Tooltip: React.FC<TooltipProps> = (props) => (
  <StyledTooltip {...props} arrow />
);

export default Tooltip;

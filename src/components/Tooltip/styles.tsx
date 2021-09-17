import { Tooltip as MaterialTooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

export const StyledTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#333333',
    fontStyle: 'normal',
    lineHeight: '14px',
    textAlign: 'center',
    fontSize: '12px !important',
    letterSpacing: '0.4px',
    fontColor: '#F2F2F2',
  },
  arrow: {
    '&::before': {
      color: '#333333',
    },
  },
}))(MaterialTooltip);

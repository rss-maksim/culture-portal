import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#424242',
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.7)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#303030',
      paper: '#424242'
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)'
    },
    action: {
      active: '#fff',
      disabled: 'rgba(255, 255, 255, 0.3)',
      hover: 'rgba(255, 255, 255, 0.08)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      selected: 'rgba(255, 255, 255, 0.16)'
    },
    divider: 'rgba(255, 255, 255, 0.12)'
  },
});

export default theme;

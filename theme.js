import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff222d', 
    },
    secondary: {
      main: '#baa60d', 
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', 
    fontSize: 16, 
  },
});

export default theme;
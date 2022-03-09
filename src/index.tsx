import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import { Global } from './GlobalStyle';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
  width: {
    min: '320px',
    max: '1920px',
    maxContainer: '1300px',
    containerPadding: '20px',
  },
  media: {
    tablet: '767.98px',

  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



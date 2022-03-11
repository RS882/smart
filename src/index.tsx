import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './fonts.css';
import store from './components/redux/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



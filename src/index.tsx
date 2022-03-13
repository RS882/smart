import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import './fonts.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Global />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



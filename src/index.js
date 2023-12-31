import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

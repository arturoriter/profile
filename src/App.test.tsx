import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { darkTheme } from './data/darkTheme';
import { getMessages } from './utils/getMessages';
const locale = 'en';
const messages = getMessages(locale);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider theme={darkTheme}>
      <IntlProvider locale={locale} messages={messages}>
        <App />
      </IntlProvider>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

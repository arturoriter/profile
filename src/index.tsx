import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import acceptLanguage from 'accept-language';
import { IntlProvider } from 'react-intl';
import { getMessages } from './utils/getMessages';
import { ThemeManager } from './ThemeManager';

acceptLanguage.languages(['en']);

const locale = 'en';
const messages = getMessages(locale);

ReactDOM.render(
  <ThemeManager>
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
  </ThemeManager>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

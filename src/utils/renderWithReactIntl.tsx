import React from 'react';
import { IntlProvider } from 'react-intl';
import { getMessages } from './getMessages';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../data/darkTheme';

const locale = 'en';
const messages = getMessages(locale);

const renderWithReactIntl = (component: JSX.Element) => {
  return render(
    <ThemeProvider theme={darkTheme}>
      <IntlProvider locale={locale} messages={messages}>
        {component}
      </IntlProvider>
    </ThemeProvider>
  );
};

export default renderWithReactIntl;

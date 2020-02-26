import React from 'react';
import { IntlProvider } from 'react-intl';
import { getMessages } from './getMessages';
import { render } from '@testing-library/react';

const locale = 'en';
const messages = getMessages(locale);

const renderWithReactIntl = (component: JSX.Element) => {
  return render(
    <IntlProvider locale={locale} messages={messages}>
      {component}
    </IntlProvider>
  );
};

export default renderWithReactIntl;

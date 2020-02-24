import React from 'react';
import { render } from '@testing-library/react';
import Summary from './Summary';
import { IntlProvider } from 'react-intl';
import { getMessages } from '../utils/getMessages';

test('renders Summary component', () => {
  const { getByText } = render(
    <IntlProvider locale="en" messages={getMessages('en')}>
      <Summary data={'summary'} />
    </IntlProvider>
  );
  expect(getByText(/summary/i)).toBeInTheDocument();
});

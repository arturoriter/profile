import React from 'react';
import { render } from '@testing-library/react';
import Contacts from './Contacts';
import { IntlProvider } from 'react-intl';
import { getMessages } from '../utils/getMessages';

test('renders Contacts component', () => {
  const { getByText, getByAltText } = render(
    <IntlProvider locale="en" messages={getMessages('en')}>
      <Contacts
        data={[
          {
            icon: 'linkedin',
            link: 'link',
            display: 'display',
          },
        ]}
      />
    </IntlProvider>
  );
  expect(getByText(/display/i)).toBeInTheDocument();
  expect(getByAltText(/face/i)).toBeInTheDocument();
});

import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { IntlProvider } from 'react-intl';
import { getMessages } from '../utils/getMessages';

test('renders Header component', () => {
  const { getByText } = render(
    <IntlProvider locale="en" messages={getMessages('en')}>
      <Header
        data={{
          name: 'name',
          headline: 'headline',
          contacts: {
            data: [
              {
                icon: 'icon',
                link: 'link',
                display: 'display',
              },
            ],
          },
        }}
      />
    </IntlProvider>
  );
  expect(getByText(/name/i)).toBeInTheDocument();
  expect(getByText(/headline/i)).toBeInTheDocument();
});
